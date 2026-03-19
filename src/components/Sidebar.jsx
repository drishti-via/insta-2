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
    <aside className="hidden lg:flex lg:w-[260px] lg:flex-col lg:gap-6 lg:rounded-[32px] lg:bg-white/80 lg:p-6 lg:shadow-xl lg:shadow-brand-100/60 lg:backdrop-blur">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">InstaGlow</p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900">Share your brightest moments.</h1>
      </div>
      <nav className="space-y-2">
        {items.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            type="button"
            className={`flex min-h-[52px] w-full items-center gap-3 rounded-2xl px-4 text-left text-base font-medium transition ${
              active ? 'bg-gradient-to-r from-brand-500 to-accent-500 text-white shadow-lg shadow-brand-200/70' : 'text-ink-700 hover:bg-blush-50'
            }`}
          >
            <Icon className="h-5 w-5" />
            {label}
          </button>
        ))}
      </nav>
      <div className="mt-auto rounded-[28px] bg-ink-900 p-5 text-white shadow-lg">
        <p className="text-sm text-white/70">Creator spotlight</p>
        <p className="mt-2 text-xl font-semibold">@luna.frames</p>
        <p className="mt-2 text-sm leading-relaxed text-white/75">Daily reels, dreamy edits, and a community that loves color-soaked storytelling.</p>
      </div>
    </aside>
  );
}
