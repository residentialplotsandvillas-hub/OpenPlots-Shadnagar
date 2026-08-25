import type { Metadata } from "next";
import {
  ArrowRight,
  BookOpen,
} from "lucide-react";

import { supabase } from "../lib/supabase";
import BlogCard from "../components/BlogCard";

export const metadata: Metadata = {
  title:
    "Shadnagar Real Estate Blog | Property Guides & Insights",

  description:
    "Read property guides, real estate insights and useful information about open plots, residential plots, HMDA plots, RERA plots and farm lands in Shadnagar.",

  alternates: {
    canonical:
      "https://openplotsinshadnagar.com/blog",
  },
};

export default async function BlogPage() {

  const { data: blogs, error } = await supabase
    .from("blogs")
    .select(
      "id, title, slug, excerpt, category, featured_image, created_at"
    )
    .eq("published", true)
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error("Blog fetch error:", error);
  }

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f7faf7]">

        <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#00540D]/5 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-[#00540D]/5 blur-3xl" />

        <div className="container-main relative">

          <div className="mx-auto max-w-4xl py-20 text-center md:py-28">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf3ea] text-[#00540D]">
              <BookOpen size={27} />
            </div>

            <p className="mt-7 brand-label">
              Property Insights
            </p>

            <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
              Shadnagar Real Estate
              <span className="block text-[#00540D]">
                Blog
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#68716B] md:text-lg">
              Explore property guides, investment insights and
              useful information about open plots, residential
              plots and real estate around Shadnagar.
            </p>

          </div>

        </div>
      </section>

      {/* BLOGS */}
      <section className="section-padding">

        <div className="container-main">

          {blogs && blogs.length > 0 ? (

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {blogs.map((blog) => (
                <BlogCard
                  key={blog.id}
                  blog={blog}
                />
              ))}

            </div>

          ) : (

            <div className="rounded-3xl border border-[#dfe8e1] bg-[#f7faf7] px-6 py-20 text-center">

              <h2 className="text-2xl font-bold text-black">
                No Blogs Published Yet
              </h2>

              <p className="mt-3 text-sm text-[#68716B]">
                New property insights will appear here soon.
              </p>

            </div>

          )}

        </div>

      </section>

      {/* SEO CONTENT */}
      <section className="section-padding bg-[#f7faf7]">

        <div className="container-main">

          <article className="mx-auto max-w-4xl">

            <p className="brand-label text-center">
              Shadnagar Property Information
            </p>

            <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

            <h2 className="mt-5 text-center text-3xl font-bold text-black md:text-5xl">
              Real Estate Insights for
              <span className="block text-[#00540D]">
                Shadnagar
              </span>
            </h2>

            <div className="mt-10 space-y-6 text-base leading-8 text-[#68716B]">

              <p>
                Explore our latest property articles covering
                open plots, residential plots, plotted
                developments and other real estate opportunities
                around Shadnagar.
              </p>

              <p>
                Our guides are designed to help property buyers
                understand locations, plot sizes, connectivity,
                project information and other factors to consider
                before making a property decision.
              </p>

              <p>
                Read our articles about HMDA plots, RERA projects,
                plots near RRR, Bangalore Highway locations and
                farm lands near Shadnagar.
              </p>

            </div>

          </article>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#003B09]">

        <div className="container-main py-14">

          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d5b45f]">
                OpenPlots Shadnagar
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white">
                Looking for Plots in Shadnagar?
              </h2>

            </div>

            <a
              href="/projects"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#00540D]"
            >
              View Projects
              <ArrowRight size={16} />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}