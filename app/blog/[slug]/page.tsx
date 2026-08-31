// import type { Metadata } from "next";
// import { notFound } from "next/navigation";
// import Link from "next/link";
// import {
//   ArrowLeft,
//   CalendarDays,
// } from "lucide-react";

// import { supabase } from "../../lib/supabase";

// export const dynamic = "force-dynamic";

// type Props = {
//   params: Promise<{
//     slug: string;
//   }>;
// };

// async function getBlog(slug: string) {
//   const cleanSlug = decodeURIComponent(slug).trim();

//   const { data, error } = await supabase
//     .from("blogs")
//     .select("*")
//     .eq("slug", cleanSlug)
//     .eq("published", true)
//     .maybeSingle();

//   console.log("BLOG SLUG:", cleanSlug);
//   console.log("BLOG DATA:", data);
//   console.log("BLOG ERROR:", error);

//   if (error) {
//     console.error("Supabase blog error:", error);
//     return null;
//   }

//   return data;
// }

// export async function generateMetadata(
//   { params }: Props
// ): Promise<Metadata> {

//   const { slug } = await params;

//   const blog = await getBlog(slug);

//   if (!blog) {
//     return {
//       title: "Blog Not Found",
//     };
//   }

//   return {
//     title:
//       blog.seo_title ||
//       blog.title,

//     description:
//       blog.seo_description ||
//       blog.excerpt ||
//       "",

//     alternates: {
//       canonical:
//         `https://openplotsinshadnagar.com/blog/${blog.slug}`,
//     },

//     openGraph: {
//       title:
//         blog.seo_title ||
//         blog.title,

//       description:
//         blog.seo_description ||
//         blog.excerpt ||
//         "",

//       images: blog.featured_image
//         ? [blog.featured_image]
//         : [],
//     },
//   };
// }

// export default async function BlogArticlePage({
//   params,
// }: Props) {

//   const { slug } = await params;

//   const blog = await getBlog(slug);

//   if (!blog) {
//     notFound();
//   }

//   return (
//     <main className="bg-white">

//       {/* HERO */}
//       <section className="bg-[#f7faf7]">

//         <div className="container-main py-16 md:py-24">

//           <Link
//             href="/blog"
//             className="inline-flex items-center gap-2 text-sm font-semibold text-[#00540D]"
//           >
//             <ArrowLeft size={16} />
//             Back to Blog
//           </Link>

//           <div className="mt-8 max-w-4xl">

//             {blog.category && (
//               <span className="rounded-full bg-[#eaf3ea] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#00540D]">
//                 {blog.category}
//               </span>
//             )}

//             <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-black md:text-6xl">
//               {blog.title}
//             </h1>

//             {blog.excerpt && (
//               <p className="mt-6 max-w-3xl text-base leading-8 text-[#68716B] md:text-lg">
//                 {blog.excerpt}
//               </p>
//             )}

//             <div className="mt-6 flex items-center gap-2 text-sm text-[#8a938d]">
//               <CalendarDays size={16} />

//               {new Date(
//                 blog.created_at
//               ).toLocaleDateString("en-IN", {
//                 day: "numeric",
//                 month: "long",
//                 year: "numeric",
//               })}
//             </div>

//           </div>

//         </div>

//       </section>

//       {/* IMAGE */}
//       {blog.featured_image && (
//         <section className="container-main pt-10">

//           <div className="overflow-hidden rounded-[28px]">

//             <img
//               src={blog.featured_image}
//               alt={blog.title}
//               className="h-auto w-full object-cover"
//             />

//           </div>

//         </section>
//       )}

//       {/* CONTENT */}
//       <section className="section-padding">

//         <article className="prose prose-lg mx-auto max-w-4xl prose-headings:text-black prose-p:text-[#68716B] prose-a:text-[#00540D]">

//           <div
//             dangerouslySetInnerHTML={{
//               __html: blog.content,
//             }}
//           />

//         </article>

//       </section>

//     </main>
//   );
// }



import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Clock,
} from "lucide-react";

import { supabase } from "../../lib/supabase";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

/* =====================================================
   GET BLOG
===================================================== */

async function getBlog(slug: string) {
  const cleanSlug = decodeURIComponent(slug)
    .trim()
    .replace(/^\/+/, "");

  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", cleanSlug)
    .eq("published", true)
    .maybeSingle();

  if (error) {
    console.error("Blog fetch error:", error);
    return null;
  }

  return data;
}

/* =====================================================
   METADATA
===================================================== */

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog article could not be found.",
    };
  }

  return {
    title: blog.seo_title || blog.title,

    description:
      blog.seo_description ||
      blog.excerpt ||
      "",

    alternates: {
      canonical: `https://openplotsinshadnagar.com/blog/${blog.slug}`,
    },

    openGraph: {
      title: blog.seo_title || blog.title,

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

/* =====================================================
   PAGE
===================================================== */

export default async function BlogArticlePage({
  params,
}: Props) {
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  /* =====================================================
     CONVERT NORMAL TEXT INTO ARTICLE PARAGRAPHS
  ===================================================== */

  const contentBlocks = blog.content
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n/)
    .map((block: string) => block.trim())
    .filter(Boolean);

  return (
    <main className="bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f7faf7]">

        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#00540D]/5 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#00540D]/5 blur-3xl" />

        <div className="container-main relative">

          <div className="mx-auto max-w-5xl py-12 md:py-20">

            {/* BACK TO BLOG */}

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00540D] transition hover:gap-3"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>

            {/* CATEGORY */}

            {blog.category && (
              <div className="mt-8">

                <span className="inline-flex rounded-full bg-[#eaf3ea] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#00540D]">
                  {blog.category}
                </span>

              </div>
            )}

            {/* TITLE */}

            <h1 className="mt-6 max-w-5xl text-4xl font-bold leading-[1.08] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
              {blog.title}
            </h1>

            {/* EXCERPT */}

            {blog.excerpt && (
              <p className="mt-6 max-w-4xl text-base leading-7 text-[#68716B] md:text-lg md:leading-8">
                {blog.excerpt}
              </p>
            )}

            {/* META */}

            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-[#7b847e]">

              <div className="flex items-center gap-2">
                <CalendarDays size={16} />

                {new Date(
                  blog.created_at
                ).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>

              <div className="hidden h-4 w-px bg-[#d5ddd6] sm:block" />

              <div className="flex items-center gap-2">
                <Clock size={16} />
                5 min read
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FEATURED IMAGE
      ===================================================== */}

      {blog.featured_image && (
        <section className="container-main pt-8 md:pt-10">

          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl">

            <img
              src={blog.featured_image}
              alt={blog.title}
              className="h-auto w-full object-cover"
            />

          </div>

        </section>
      )}

      {/* =====================================================
          ARTICLE CONTENT
      ===================================================== */}

      <section className="bg-white py-10 md:py-14">

        <div className="container-main">

          <article className="mx-auto max-w-4xl">

            <div className="text-[17px] leading-8 text-[#454d47] md:text-[18px] md:leading-8">

              {contentBlocks.map(
                (block: string, index: number) => {

                  /*
                   * Short standalone text is treated
                   * as a section heading.
                   */

                  const isHeading =
                    block.length <= 80 &&
                    !block.endsWith(".") &&
                    !block.endsWith(",") &&
                    !block.endsWith("!") &&
                    !block.endsWith(":") &&
                    block.split("\n").length === 1;

                  if (isHeading) {
                    return (
                      <h2
                        key={index}
                        className="
                          mt-10
                          mb-4
                          text-2xl
                          font-bold
                          leading-tight
                          text-[#003B09]
                          first:mt-0
                          md:text-3xl
                        "
                      >
                        {block}
                      </h2>
                    );
                  }

                  return (
                    <p
                      key={index}
                      className="mb-5 last:mb-0"
                    >
                      {block}
                    </p>
                  );
                }
              )}

            </div>

          </article>

        </div>

      </section>

      {/* =====================================================
          BACK TO BLOG
      ===================================================== */}

      <section className="border-t border-[#dfe8e1] bg-[#f7faf7]">

        <div className="container-main py-10">

          <div className="mx-auto max-w-4xl">

            <Link
              href="/blog"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#00540D]
                px-6
                py-3.5
                text-sm
                font-bold
                text-white
                transition
                hover:bg-[#003B09]
              "
            >
              <ArrowLeft size={16} />
              Back to All Blogs
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}