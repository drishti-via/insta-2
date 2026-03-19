import { Compass, Heart, House, MessageCircleMore, PlusSquare, Search, UserRound } from 'lucide-react';

const items = [
  { label: 'Home', icon: House, active: true },
  { label: 'Search', icon: Search },
  { label: 'Explore', icon: Compass },
  { label: 'Messages', icon: MessageCircleMore },
  { label: 'Notifications', icon: Heart },
  { label: 'Create', icon: PlusSquare },
  { label: 'Profile', icon: UserRound },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:w-[280px] lg:flex-col lg:gap-6 lg:rounded-[36px] lg:border lg:border-white/10 lg:bg-white/5 lg:p-6 lg:shadow-[0_24px_80px_rgba(0,0,0,0.35)] lg:backdrop-blur-xl">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent-500">InstaGlow</p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white">Broadcast your world like a midnight editorial.</h1>
      </div>
      <nav className="space-y-2">
        {items.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            type="button"
            className={`flex min-h-[52px] w-full items-center gap-3 rounded-2xl px-4 text-left text-base font-medium transition ${
              active
                ? 'bg-gradient-to-r from-brand-500 via-cyan-400 to-accent-500 text-ink-900 shadow-[0_18px_40px_rgba(77,163,255,0.35)]'
                : 'text-white/78 hover:bg-white/8'
            }`}
          >
            <Icon className="h-5 w-5" />
            {label}
          </button>
        ))}
      </nav>
      <div className="mt-auto rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 text-white shadow-lg shadow-black/20">
        <p className="text-sm uppercase tracking-[0.24em] text-accent-500/90">Creator spotlight</p>
        <p className="mt-2 text-xl font-semibold">@luna.frames</p>
        <p className="mt-2 text-sm leading-relaxed text-white/72">Cinematic reels, cool-toned edits, and a feed that feels like a fashion week afterparty.</p>
      </div>
    </aside>
  );
}
