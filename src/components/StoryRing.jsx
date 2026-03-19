import { Plus } from 'lucide-react';
import clsx from 'clsx';

export default function StoryRing({ story, isCreate = false }) {
  return (
    <button
      type="button"
      className="flex min-w-[72px] flex-col items-center gap-2 text-center"
      aria-label={isCreate ? 'Create a story' : `Open ${story.name}'s story`}
    >
      <div className={clsx('rounded-[28px] bg-gradient-to-br p-[2px] shadow-lg shadow-brand-200/60', isCreate && 'bg-none')}>
        <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-[26px] bg-white">
          <img src={story.avatar} alt={story.name} className="h-[58px] w-[58px] rounded-[22px] object-cover" />
          {isCreate ? (
            <span className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-white shadow-md">
              <Plus className="h-4 w-4" />
            </span>
          ) : null}
        </div>
      </div>
      <span className="max-w-[72px] truncate text-sm font-medium text-ink-700">{story.name}</span>
    </button>
  );
}
