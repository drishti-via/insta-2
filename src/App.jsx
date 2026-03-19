import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Bell, Camera, RefreshCcw, Sparkles, TrendingUp, Waves, Radio, MoonStar } from 'lucide-react';
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
    <main className="min-h-screen px-4 py-5 text-base text-white sm:px-5 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_top,rgba(77,163,255,0.22),transparent_45%)]" />
      <div className="mx-auto flex max-w-7xl gap-6">
        <Sidebar />

        <div className="flex-1 space-y-6">
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,rgba(8,19,31,0.92),rgba(16,38,58,0.88)),radial-gradient(circle_at_top_right,rgba(126,242,198,0.18),transparent_28%)] p-6 text-white shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-2 text-sm font-semibold text-accent-500 backdrop-blur">
                  <Radio className="h-4 w-4" />
                  Night mode editorial drop
                </div>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">From candy-pop social to cinematic neon lounge.</h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-white/72 sm:text-lg">
                  The feed now feels cooler, darker, and more atmospheric—like a premium nightlife magazine instead of a pastel creator dashboard.
                </p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-white/70">
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Glassmorphism panels</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Ocean neon palette</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Sharper editorial contrast</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 self-stretch md:w-[280px]">
                {[
                  { label: 'Stories', value: feed?.stats.stories ?? '--', icon: Camera },
                  { label: 'Engagement', value: feed?.stats.engagement ?? '--', icon: TrendingUp },
                  { label: 'Pulse', value: '12', icon: Bell },
                  { label: 'Live', value: 'On', icon: Waves },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="rounded-3xl border border-white/10 bg-white/6 p-4 backdrop-blur-xl">
                    <Icon className="h-5 w-5 text-accent-500" />
                    <p className="mt-6 text-2xl font-bold">{value}</p>
                    <p className="text-sm text-white/62">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <section className="rounded-[32px] border border-white/10 bg-white/6 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white">Stories</h3>
                <p className="text-sm text-white/55">Catch up with the people you follow.</p>
              </div>
              <button type="button" onClick={loadFeed} className="flex min-h-[44px] items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 font-medium text-white transition hover:bg-white/14">
                <RefreshCcw className="h-4 w-4" />
                Refresh
              </button>
            </div>

            {loading ? (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="w-[72px] animate-pulse space-y-2">
                    <div className="h-16 w-16 rounded-[26px] bg-white/10" />
                    <div className="h-3 rounded-full bg-white/10" />
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="rounded-3xl border border-rose-400/20 bg-rose-500/10 p-5 text-rose-100">
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
                  <div key={index} className="overflow-hidden rounded-[32px] border border-white/10 bg-white/6 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="h-11 w-11 animate-pulse rounded-2xl bg-white/10" />
                      <div className="space-y-2">
                        <div className="h-4 w-28 animate-pulse rounded-full bg-white/10" />
                        <div className="h-3 w-20 animate-pulse rounded-full bg-white/10" />
                      </div>
                    </div>
                    <div className="h-[360px] animate-pulse rounded-[24px] bg-white/10" />
                  </div>
                ))
              ) : error ? (
                <div className="rounded-[32px] border border-white/10 bg-white/6 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                  <p className="text-lg font-semibold text-white">Something went wrong</p>
                  <p className="mt-2 text-white/55">{error}</p>
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
              <div className="rounded-[32px] border border-white/10 bg-white/6 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                <h3 className="text-lg font-bold text-white">Suggested for you</h3>
                <div className="mt-4 space-y-4">
                  {(feed?.suggestions ?? []).map((profile) => (
                    <div key={profile.id} className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <img src={profile.avatar} alt={profile.name} className="h-12 w-12 rounded-2xl object-cover" />
                        <div>
                          <p className="font-semibold text-white">{profile.name}</p>
                          <p className="text-sm text-white/55">{profile.reason}</p>
                        </div>
                      </div>
                      <button type="button" className="min-h-[44px] rounded-full border border-accent-500/30 bg-accent-500/10 px-4 font-medium text-accent-500 transition hover:bg-accent-500/18">
                        Follow
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-brand-500/20 bg-gradient-to-br from-brand-500/18 to-accent-500/10 p-5 text-white shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                <p className="text-sm uppercase tracking-[0.28em] text-accent-500"><MoonStar className="mr-2 inline h-4 w-4" />Today’s vibe</p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight">Blue-hour portraits are taking over.</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">Creators are shifting into cooler shadows, reflective surfaces, and flash-lit candids. Think rooftop energy, not golden-hour softness.</p>
              </div>
            </aside>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
