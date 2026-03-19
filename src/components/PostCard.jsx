import { Heart, MessageCircle, Bookmark, Send, MoreHorizontal, MapPin } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

export default function PostCard({ post }) {
  return (
    <article className="overflow-hidden rounded-[32px] border border-white/10 bg-white/6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div className="flex items-center justify-between px-4 py-4 sm:px-5">
        <div className="flex items-center gap-3">
          <img src={post.userAvatar} alt={post.userName} className="h-11 w-11 rounded-2xl object-cover" />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-white">{post.userName}</h3>
              {post.location ? <MapPin className="h-4 w-4 text-accent-500" /> : null}
            </div>
            <p className="text-sm text-white/55">{post.location || 'For you'}</p>
          </div>
        </div>
        <button type="button" className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-white/60 transition hover:bg-white/10" aria-label="More options">
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
                className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/8 text-white transition hover:-translate-y-0.5 hover:bg-white/14"
                aria-label="Post action"
              >
                <Icon className="h-5 w-5" />
              </button>
            ))}
          </div>
          <button type="button" className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-brand-500/18 text-accent-500 transition hover:-translate-y-0.5 hover:bg-brand-500/28" aria-label="Save post">
            <Bookmark className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold text-white">{post.likes.toLocaleString()} likes</p>
          <p className="text-base leading-relaxed text-white/78">
            <span className="mr-2 font-semibold text-white">{post.userName}</span>
            {post.caption}
          </p>
          <p className="text-sm text-white/55">View all {post.comments} comments</p>
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-brand-100/70">
            {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
          </p>
        </div>
      </div>
    </article>
  );
}
