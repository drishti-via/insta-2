import { Plus } from 'lucide-react';
import clsx from 'clsx';

export default function StoryRing({ story, isCreate = false }) {
  return (
    <button
      type="button"
      className="flex min-w-[72px] flex-col items-center gap-2 text-center"
      aria-label={isCreate ? 'Create a story' : `Open ${story.name}'s story`}
    >
      <div className={clsx('rounded-[28px] bg-gradient-to-br from-brand-500 via-ember-500 to-accent-500 p-[2px] shadow-[0_16px_30px_rgba(77,163,255,0.28)]', isCreate && 'from-white/30 via-white/10 to-white/30')}>
        <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-[26px] bg-ink-900/90 backdrop-blur">
          <img src={story.avatar} alt={story.name} className="h-[58px] w-[58px] rounded-[22px] object-cover" />
          {isCreate ? (
            <span className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-accent-500 text-ink-900 shadow-md shadow-accent-500/40">
              <Plus className="h-4 w-4" />
            </span>
          ) : null}
        </div>
      </div>
      <span className="max-w-[72px] truncate text-sm font-medium text-white/82">{story.name}</span>
    </button>
  );
}
