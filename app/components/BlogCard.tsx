import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";

type Blog = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  category: string | null;
  featured_image: string | null;
  created_at: string;
};

export default function BlogCard({
  blog,
}: {
  blog: Blog;
}) {
  return (
    <article className="group overflow-hidden rounded-[26px] border border-[#dfe8e1] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#00540D]/25 hover:shadow-[0_18px_40px_rgba(0,84,13,0.08)]">

      {/* Image */}
      {blog.featured_image ? (
        <Link href={`/blog/${blog.slug}`}>
          <div className="aspect-[16/9] overflow-hidden bg-[#f1f5f1]">
            <img
              src={blog.featured_image}
              alt={blog.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        </Link>
      ) : (
        <div className="flex aspect-[16/9] items-center justify-center bg-[#eaf3ea]">
          <span className="text-sm font-bold text-[#00540D]">
            OpenPlots Shadnagar
          </span>
        </div>
      )}

      <div className="p-6">

        <div className="flex items-center justify-between">

          <span className="rounded-full bg-[#eaf3ea] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#00540D]">
            {blog.category || "Property Guide"}
          </span>

          <ArrowUpRight
            size={18}
            className="text-[#00540D] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />

        </div>

        <h2 className="mt-6 text-xl font-bold leading-7 text-black">
          {blog.title}
        </h2>

        {blog.excerpt && (
          <p className="mt-4 text-sm leading-7 text-[#68716B]">
            {blog.excerpt}
          </p>
        )}

        <div className="mt-5 flex items-center gap-2 text-xs text-[#8a938d]">
          <CalendarDays size={14} />

          {new Date(blog.created_at).toLocaleDateString(
            "en-IN",
            {
              day: "numeric",
              month: "short",
              year: "numeric",
            }
          )}
        </div>

        <Link
          href={`/blog/${blog.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#00540D]"
        >
          Read Article

          <ArrowRight
            size={15}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>

      </div>
    </article>
  );
}