import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Bell, Camera, RefreshCcw, Sparkles, TrendingUp } from 'lucide-react';
import StoryRing from './components/StoryRing';
import PostCard from './components/PostCard';
import Sidebar from './components/Sidebar';

function App() {
  const [feed, setFeed] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadFeed = async () => {
    try {
      setLoading(true);
      setError('');
      const { data } = await axios.get('/api/feed');
      setFeed(data);
    } catch (err) {
      setError('We could not refresh your feed right now. Try again in a moment.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFeed();
  }, []);

  return (
    <main className="min-h-screen px-4 py-5 text-base text-ink-900 sm:px-5 lg:px-8">
      <div className="mx-auto flex max-w-7xl gap-6">
        <Sidebar />

        <div className="flex-1 space-y-6">
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden rounded-[32px] bg-gradient-to-br from-brand-500 via-accent-500 to-sunset-500 p-6 text-white shadow-2xl shadow-brand-200/70"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                  <Sparkles className="h-4 w-4" />
                  New creator tools live now
                </div>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">A social feed designed for bold visuals and real connection.</h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                  Discover stories, trending creators, and immersive posts in a polished Instagram-inspired experience.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 self-stretch md:w-[280px]">
                {[
                  { label: 'Stories', value: feed?.stats.stories ?? '--', icon: Camera },
                  { label: 'Engagement', value: feed?.stats.engagement ?? '--', icon: TrendingUp },
                  { label: 'Alerts', value: '12', icon: Bell },
                  { label: 'Refresh', value: 'Live', icon: RefreshCcw },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="rounded-3xl bg-white/15 p-4 backdrop-blur">
                    <Icon className="h-5 w-5 text-white" />
                    <p className="mt-6 text-2xl font-bold">{value}</p>
                    <p className="text-sm text-white/80">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <section className="rounded-[28px] bg-white/85 p-4 shadow-xl shadow-brand-100/60 backdrop-blur sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-ink-900">Stories</h3>
                <p className="text-sm text-ink-500">Catch up with the people you follow.</p>
              </div>
              <button type="button" onClick={loadFeed} className="flex min-h-[44px] items-center gap-2 rounded-full bg-blush-50 px-4 font-medium text-ink-700 transition hover:bg-blush-100">
                <RefreshCcw className="h-4 w-4" />
                Refresh
              </button>
            </div>

            {loading ? (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="w-[72px] animate-pulse space-y-2">
                    <div className="h-16 w-16 rounded-[26px] bg-blush-100" />
                    <div className="h-3 rounded-full bg-blush-100" />
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="rounded-3xl bg-rose-50 p-5 text-rose-700">
                <p className="font-semibold">Feed unavailable</p>
                <p className="mt-1 text-sm">{error}</p>
              </div>
            ) : (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {feed.stories.map((story, index) => (
                  <motion.div key={story.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06 }}>
                    <StoryRing story={story} isCreate={index === 0} />
                  </motion.div>
                ))}
              </div>
            )}
          </section>

          <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-6">
              {loading ? (
                Array.from({ length: 2 }).map((_, index) => (
                  <div key={index} className="overflow-hidden rounded-[28px] bg-white p-4 shadow-xl shadow-brand-100/60">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="h-11 w-11 animate-pulse rounded-2xl bg-blush-100" />
                      <div className="space-y-2">
                        <div className="h-4 w-28 animate-pulse rounded-full bg-blush-100" />
                        <div className="h-3 w-20 animate-pulse rounded-full bg-blush-100" />
                      </div>
                    </div>
                    <div className="h-[360px] animate-pulse rounded-[24px] bg-blush-100" />
                  </div>
                ))
              ) : error ? (
                <div className="rounded-[28px] bg-white p-6 shadow-xl shadow-brand-100/60">
                  <p className="text-lg font-semibold text-ink-900">Something went wrong</p>
                  <p className="mt-2 text-ink-500">{error}</p>
                  <button type="button" onClick={loadFeed} className="mt-4 flex min-h-[44px] items-center gap-2 rounded-full bg-brand-600 px-5 text-white transition hover:brightness-110">
                    <RefreshCcw className="h-4 w-4" />
                    Try again
                  </button>
                </div>
              ) : (
                feed.posts.map((post, index) => (
                  <motion.div key={post.id} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }}>
                    <PostCard post={post} />
                  </motion.div>
                ))
              )}
            </div>

            <aside className="space-y-5">
              <div className="rounded-[28px] bg-white p-5 shadow-xl shadow-brand-100/60">
                <h3 className="text-lg font-bold text-ink-900">Suggested for you</h3>
                <div className="mt-4 space-y-4">
                  {(feed?.suggestions ?? []).map((profile) => (
                    <div key={profile.id} className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <img src={profile.avatar} alt={profile.name} className="h-12 w-12 rounded-2xl object-cover" />
                        <div>
                          <p className="font-semibold text-ink-900">{profile.name}</p>
                          <p className="text-sm text-ink-500">{profile.reason}</p>
                        </div>
                      </div>
                      <button type="button" className="min-h-[44px] rounded-full bg-brand-50 px-4 font-medium text-brand-700 transition hover:bg-brand-100">
                        Follow
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] bg-ink-900 p-5 text-white shadow-xl shadow-ink-900/20">
                <p className="text-sm uppercase tracking-[0.28em] text-white/60">Today’s vibe</p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight">Golden hour portraits are trending.</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">Creators are leaning into warm tones, candid motion, and layered storytelling. Post your best frame before sunset.</p>
              </div>
            </aside>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
