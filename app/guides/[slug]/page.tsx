import type { Metadata } from "next";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const title =
    slug === "open-plots-in-shadnagar"
      ? "Open Plots in Shadnagar | Property Guide"
      : slug === "how-to-buy-open-plot"
        ? "How to Buy an Open Plot | Shadnagar Property Guide"
        : `${formatSlug(slug)} | Shadnagar Property Guide`;

  const description =
    slug === "open-plots-in-shadnagar"
      ? "Learn about open plots in Shadnagar, project locations, plot sizes, pricing, approvals and important factors to consider before buying."
      : slug === "how-to-buy-open-plot"
        ? "Learn how to evaluate and buy an open plot, including location, approvals, plot size, documentation and site visit considerations."
        : `Read our property guide about ${formatSlug(
            slug
          )} and real estate opportunities around Shadnagar.`;

  return {
    title,

    description,

    alternates: {
      canonical:
        `https://openplotsinshadnagar.com/guides/${slug}`,
    },
  };
}

export default async function GuidePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const title = formatSlug(slug);

  return (
    <main className="bg-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="bg-[#f7faf7] py-20 md:py-28">

        <div className="container-main">

          {/* Breadcrumb */}

          <nav
            aria-label="Breadcrumb"
            className="text-xs text-[#68716B]"
          >
            <a
              href="/"
              className="transition-colors hover:text-[#00540D]"
            >
              Home
            </a>

            <span className="mx-2">
              /
            </span>

            <a
              href="/guides"
              className="transition-colors hover:text-[#00540D]"
            >
              Guides
            </a>

            <span className="mx-2">
              /
            </span>

            <span className="text-black">
              {title}
            </span>
          </nav>

          {/* Heading */}

          <div className="mt-10 max-w-4xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00540D]">
              Shadnagar Property Guide
            </p>

            <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-black md:text-6xl">
              {title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#53605A]">
              Explore useful information about plots,
              property locations, project details and
              real estate opportunities around Shadnagar.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          GUIDE CONTENT
      ====================================================== */}

      <section className="section-padding">

        <div className="container-main">

          <div className="mx-auto max-w-4xl">

            <article className="space-y-8">

              <section>

                <h2 className="text-3xl font-bold text-black">
                  {title}
                </h2>

                <p className="mt-5 text-base leading-8 text-[#53605A]">
                  Shadnagar and its surrounding areas
                  offer different types of residential
                  plots, plotted developments and farm
                  land opportunities. Buyers should
                  compare location, accessibility,
                  project details, plot dimensions and
                  applicable approvals before making a
                  property decision.
                </p>

              </section>

              <section>

                <h2 className="text-2xl font-bold text-black">
                  What Should Buyers Check?
                </h2>

                <div className="mt-6 grid gap-4 md:grid-cols-2">

                  {[
                    "Project location",
                    "Plot size",
                    "Road connectivity",
                    "Applicable approvals",
                    "Project documentation",
                    "Price and payment terms",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[#e1e8e1] bg-white p-5 shadow-[0_8px_25px_rgba(0,84,13,0.04)]"
                    >
                      <h3 className="font-semibold text-black">
                        {item}
                      </h3>
                    </div>
                  ))}

                </div>

              </section>

              <section>

                <h2 className="text-2xl font-bold text-black">
                  Explore Open Plots in Shadnagar
                </h2>

                <p className="mt-5 text-base leading-8 text-[#53605A]">
                  Explore available plotted developments
                  and compare project information before
                  planning a site visit.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">

                  <a
                    href="/open-plots-in-shadnagar"
                    className="rounded-full bg-[#00540D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#003B09]"
                  >
                    Open Plots in Shadnagar
                  </a>

                  <a
                    href="/plots-for-sale-in-shadnagar"
                    className="rounded-full border border-[#dce5dd] bg-white px-6 py-3 text-sm font-semibold text-[#00540D] transition hover:bg-[#f3f8f3]"
                  >
                    Plots for Sale
                  </a>

                </div>

              </section>

            </article>

          </div>

        </div>

      </section>

    </main>
  );
}

/* ============================================================
   FORMAT SLUG
============================================================ */

function formatSlug(slug: string) {
  return slug
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");
}