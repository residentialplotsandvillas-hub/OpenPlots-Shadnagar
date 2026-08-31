import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
} from "lucide-react";
import { supabase } from "../../lib/supabase";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

async function getBlog(slug: string) {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error || !data) {
    return null;
  }

  return data;
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {

  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title:
      blog.seo_title ||
      blog.title,

    description:
      blog.seo_description ||
      blog.excerpt ||
      "",

    alternates: {
      canonical:
        `https://openplotsinshadnagar.com/blog/${blog.slug}`,
    },

    openGraph: {
      title:
        blog.seo_title ||
        blog.title,

      description:
        blog.seo_description ||
        blog.excerpt ||
        "",

      images: blog.featured_image
        ? [blog.featured_image]
        : [],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: Props) {

  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-[#f7faf7]">

        <div className="container-main py-16 md:py-24">

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00540D]"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <div className="mt-8 max-w-4xl">

            {blog.category && (
              <span className="rounded-full bg-[#eaf3ea] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#00540D]">
                {blog.category}
              </span>
            )}

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-black md:text-6xl">
              {blog.title}
            </h1>

            {blog.excerpt && (
              <p className="mt-6 max-w-3xl text-base leading-8 text-[#68716B] md:text-lg">
                {blog.excerpt}
              </p>
            )}

            <div className="mt-6 flex items-center gap-2 text-sm text-[#8a938d]">
              <CalendarDays size={16} />

              {new Date(
                blog.created_at
              ).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>

          </div>

        </div>

      </section>

      {/* IMAGE */}
      {blog.featured_image && (
        <section className="container-main pt-10">

          <div className="overflow-hidden rounded-[28px]">

            <img
              src={blog.featured_image}
              alt={blog.title}
              className="h-auto w-full object-cover"
            />

          </div>

        </section>
      )}

      {/* CONTENT */}
      <section className="section-padding">

        <article className="prose prose-lg mx-auto max-w-4xl prose-headings:text-black prose-p:text-[#68716B] prose-a:text-[#00540D]">

          <div
            dangerouslySetInnerHTML={{
              __html: blog.content,
            }}
          />

        </article>

      </section>

    </main>
  );
}