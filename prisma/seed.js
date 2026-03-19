import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const stories = [
  { name: 'Your story', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80', position: 1 },
  { name: 'Mila', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80', position: 2 },
  { name: 'Noah', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80', position: 3 },
  { name: 'Avery', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80', position: 4 },
  { name: 'Kai', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80', position: 5 },
  { name: 'Sage', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=300&q=80', position: 6 },
];

const posts = [
  {
    userName: 'luna.frames',
    userAvatar: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=300&q=80',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
    caption: 'Soft light, city reflections, and a little bit of sparkle. ✨',
    location: 'SoHo, New York',
    likes: 18432,
    comments: 312,
    createdAt: new Date('2026-03-18T18:30:00Z'),
  },
  {
    userName: 'atlas.moves',
    userAvatar: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    caption: 'Chasing the last warm light over the coast. Save this spot for your next weekend escape.',
    location: 'Big Sur, California',
    likes: 9630,
    comments: 148,
    createdAt: new Date('2026-03-17T22:10:00Z'),
  },
];

const suggestions = [
  { name: 'coco.edit', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80', reason: 'Popular in photography' },
  { name: 'north.studio', avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=300&q=80', reason: 'Followed by atlas.moves' },
  { name: 'solstice.jpg', avatar: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=300&q=80', reason: 'New to InstaGlow' },
];

async function main() {
  await prisma.story.deleteMany();
  await prisma.post.deleteMany();
  await prisma.suggestion.deleteMany();

  await prisma.story.createMany({ data: stories });
  await prisma.post.createMany({ data: posts });
  await prisma.suggestion.createMany({ data: suggestions });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
