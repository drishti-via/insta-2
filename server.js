import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/feed', async (req, res) => {
  try {
    const [stories, posts, suggestions] = await Promise.all([
      prisma.story.findMany({ orderBy: { position: 'asc' } }),
      prisma.post.findMany({ orderBy: { createdAt: 'desc' } }),
      prisma.suggestion.findMany({ orderBy: { id: 'asc' } }),
    ]);

    res.json({
      stories,
      posts,
      suggestions,
      stats: {
        stories: stories.length,
        engagement: '94%',
      },
    });
  } catch (error) {
    console.error('Feed error:', error.message);
    res.status(500).json({ error: 'Unable to load feed' });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(process.env.PORT || 3001, () => {
  console.log('Server listening on port 3001');
});
