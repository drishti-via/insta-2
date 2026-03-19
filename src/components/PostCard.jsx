import { Heart, MessageCircle, Bookmark, Send, MoreHorizontal, MapPin } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

export default function PostCard({ post }) {
  return (
    <article className="overflow-hidden rounded-[28px] bg-white shadow-xl shadow-brand-100/70 ring-1 ring-white/70">
      <div className="flex items-center justify-between px-4 py-4 sm:px-5">
        <div className="flex items-center gap-3">
          <img src={post.userAvatar} alt={post.userName} className="h-11 w-11 rounded-2xl object-cover" />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-ink-900">{post.userName}</h3>
              {post.location ? <MapPin className="h-4 w-4 text-brand-500" /> : null}
            </div>
            <p className="text-sm text-ink-500">{post.location || 'For you'}</p>
          </div>
        </div>
        <button type="button" className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-ink-500 transition hover:bg-brand-50" aria-label="More options">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>

      <img src={post.image} alt={post.caption} className="h-[360px] w-full object-cover sm:h-[460px]" />

      <div className="space-y-4 px-4 py-4 sm:px-5 sm:py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {[Heart, MessageCircle, Send].map((Icon, index) => (
              <button
                key={index}
                type="button"
                className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-blush-50 text-ink-700 transition hover:-translate-y-0.5 hover:bg-blush-100"
                aria-label="Post action"
              >
                <Icon className="h-5 w-5" />
              </button>
            ))}
          </div>
          <button type="button" className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-brand-50 text-brand-700 transition hover:-translate-y-0.5 hover:bg-brand-100" aria-label="Save post">
            <Bookmark className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold text-ink-900">{post.likes.toLocaleString()} likes</p>
          <p className="text-base leading-relaxed text-ink-700">
            <span className="mr-2 font-semibold text-ink-900">{post.userName}</span>
            {post.caption}
          </p>
          <p className="text-sm text-ink-500">View all {post.comments} comments</p>
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-ink-400">
            {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
          </p>
        </div>
      </div>
    </article>
  );
}
