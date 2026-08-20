import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Property Guides | Open Plots in Shadnagar",
  description:
    "Read useful property guides about open plots in Shadnagar, residential plots, plot investment, property documents, approvals and site visits.",
  alternates: {
    canonical: "https://openplotsinshadnagar.com/guides",
  },
};

const guides = [
  {
    title: "Open Plots in Shadnagar",
    description:
      "Explore open plots in Shadnagar and learn about locations, plot sizes, connectivity, project details and important buying considerations.",
    slug: "open-plots-in-shadnagar",
  },
  {
    title: "How to Buy an Open Plot",
    description:
      "Learn the important steps involved in buying an open plot, including location, documents, approvals, pricing and site visits.",
    slug: "how-to-buy-open-plot",
  },
  {
    title: "Residential Plots in Shadnagar",
    description:
      "Learn about residential plots in Shadnagar, plot sizes, locations, connectivity and important factors to consider before buying.",
    slug: "residential-plots-in-shadnagar",
  },
  {
    title: "Plot Investment Guide",
    description:
      "Understand the important factors to evaluate when considering an open plot as a long-term real estate investment.",
    slug: "plot-investment-guide",
  },
  {
    title: "HMDA, DTCP & RERA Plot Guide",
    description:
      "Understand HMDA, DTCP and RERA considerations when evaluating plotted developments and open plots.",
    slug: "hmda-dtcp-rera-plot-guide",
  },
  {
    title: "Open Plot Site Visit Guide",
    description:
      "Learn what to check during a property site visit, including roads, surroundings, connectivity, plot dimensions and development.",
    slug: "site-visit-guide",
  },
];

export default function GuidesPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-[#f7faf7] py-20 md:py-28">
        <div className="container-main">

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="text-xs text-[#68716B]"
          >
            <Link
              href="/"
              className="transition-colors hover:text-[#00540D]"
            >
              Home
            </Link>

            <span className="mx-2">/</span>

            <span className="text-black">
              Guides
            </span>
          </nav>

          <div className="mt-10 max-w-4xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00540D]">
              Property Guides
            </p>

            <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-black md:text-6xl">
              Real Estate Guides for Open Plots in Shadnagar
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#53605A]">
              Explore useful guides about open plots, residential plots,
              property investment, documents, approvals and site visits
              around Shadnagar.
            </p>

          </div>
        </div>
      </section>

      {/* GUIDES */}
      <section className="section-padding">
        <div className="container-main">

          <div className="mx-auto max-w-7xl">

            <div className="mb-12">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00540D]">
                Explore Guides
              </p>

              <h2 className="mt-3 text-3xl font-bold text-black md:text-4xl">
                Helpful Property Buying Guides
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-8 text-[#53605A]">
                Learn more about buying and evaluating open plots in
                Shadnagar with our property guides.
              </p>

            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {guides.map((guide, index) => (
                <article
                  key={guide.slug}
                  className="group rounded-2xl border border-[#e1e8e1] bg-white p-7 shadow-[0_8px_30px_rgba(0,84,13,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#b9d5bd] hover:shadow-xl"
                >

                  {/* Number */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f0f7f1] text-sm font-bold text-[#00540D]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h2 className="mt-6 text-xl font-bold leading-7 text-black transition-colors group-hover:text-[#00540D]">
                    {guide.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-[#53605A]">
                    {guide.description}
                  </p>

                  <Link
                    href={`/guides/${guide.slug}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#00540D] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#003B09] group-hover:gap-3"
                  >
                    Read Guide
                    <span>→</span>
                  </Link>

                </article>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container-main">

          <div className="rounded-3xl bg-[#00540D] px-6 py-12 text-center md:px-10">

            <h2 className="text-3xl font-bold text-white">
              Looking for Open Plots in Shadnagar?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-green-50">
              Explore our projects and discover residential plots,
              investment opportunities and plotted developments.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                href="/open-plots-in-shadnagar"
                className="rounded-full bg-white px-7 py-3 font-semibold text-[#00540D] transition hover:bg-green-50"
              >
                Explore Projects
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/40 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}