import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Ruler,
  Building2,
  Landmark,
} from "lucide-react";

import {
  getProjectBySlug,
  projects,
} from "@/data/projects";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* =========================================================
   STATIC PROJECT PATHS
========================================================= */

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

/* =========================================================
   DYNAMIC SEO METADATA
========================================================= */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.seoTitle,

    description: project.seoDescription,

    keywords: project.keywords,

    alternates: {
      canonical:
        `https://openplotsinshadnagar.com/projects/${project.slug}`,
    },

    openGraph: {
      title: project.seoTitle,

      description: project.seoDescription,

      url:
        `https://openplotsinshadnagar.com/projects/${project.slug}`,

      type: "website",

      siteName:
        "Open Plots in Shadnagar",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

/* =========================================================
   PAGE
========================================================= */

export default async function ProjectPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectUrl =
    `https://openplotsinshadnagar.com/projects/${project.slug}`;

  /* =======================================================
     JSON-LD
  ======================================================== */

  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "RealEstateListing",

    name: project.name,

    description: project.description,

    url: projectUrl,

    image: [
      `https://openplotsinshadnagar.com/images/projects/${project.slug}.webp`,
    ],

    address: {
      "@type": "PostalAddress",

      addressLocality: project.location,

      addressRegion: "Telangana",

      addressCountry: "IN",
    },

    offers: {
      "@type": "Offer",

      priceCurrency: "INR",

      description:
        `${project.name} ${project.type}`,
    },

    areaServed: {
      "@type": "Place",

      name: project.location,
    },
  };

  return (
    <main className="bg-white">

      {/* =====================================================
          SCHEMA
      ====================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* =====================================================
          BREADCRUMB
      ====================================================== */}

      <div className="border-b border-[#e1e8e1]">
        <div className="container-main py-4">

          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs text-[#68716B]"
          >
            <Link
              href="/"
              className="hover:text-[#00540D]"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              href="/projects"
              className="hover:text-[#00540D]"
            >
              Projects
            </Link>

            <span>/</span>

            <span className="font-medium text-black">
              {project.name}
            </span>
          </nav>

        </div>
      </div>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#f7faf7]">

        <div className="container-main">

          <div className="grid min-h-[580px] items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">

            {/* LEFT */}

            <div>

              <div className="inline-flex rounded-full bg-[#eaf3ea] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#00540D]">
                {project.type}
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-black md:text-6xl">
                {project.name}
              </h1>

              <p className="mt-6 text-lg leading-8 text-[#53605A]">
                {project.description}
              </p>

              {/* Location */}

              <div className="mt-7 flex items-start gap-3">

                <MapPin
                  size={20}
                  className="mt-1 shrink-0 text-[#00540D]"
                />

                <div>
                  <p className="text-sm font-semibold text-black">
                    {project.location}
                  </p>

                  <p className="mt-1 text-sm text-[#68716B]">
                    {project.landmark}
                  </p>
                </div>

              </div>

              {/* CTA */}

              <div className="mt-8 flex flex-wrap gap-3">

                <Link
                  href={`/book-site-visit?project=${project.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#00540D] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#003B09]"
                >
                  Book Site Visit

                  <ArrowUpRight size={16} />
                </Link>

                <a
                  href="tel:+919999999999"
                  className="inline-flex items-center rounded-full border border-[#dce5dd] bg-white px-6 py-3.5 text-sm font-semibold text-[#00540D] transition hover:border-[#00540D]"
                >
                  Enquire Now
                </a>

              </div>

            </div>

            {/* RIGHT IMAGE */}

            <div className="relative overflow-hidden rounded-[28px] border border-[#dce5dd] bg-[#eaf3ea] shadow-[0_20px_50px_rgba(0,84,13,0.10)]">

              <div className="aspect-[4/3] bg-gradient-to-br from-[#eaf3ea] to-[#f7faf7]">

                {/* Add actual project image here */}

                <div className="flex h-full items-center justify-center">

                  <div className="text-center">

                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00540D]">
                      {project.name}
                    </p>

                    <p className="mt-2 text-sm text-[#68716B]">
                      Project Image
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          QUICK DETAILS
      ====================================================== */}

      <section className="border-b border-[#e1e8e1] bg-white">

        <div className="container-main">

          <div className="grid divide-y divide-[#e1e8e1] md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">

            <Detail
              icon={<Ruler size={19} />}
              label="Plot Sizes"
              value={project.plotSizes}
            />

            <Detail
              icon={<MapPin size={19} />}
              label="Location"
              value={project.location}
            />

            <Detail
              icon={<Building2 size={19} />}
              label="Project Type"
              value={project.type}
            />

            <Detail
              icon={<Landmark size={19} />}
              label="Price"
              value={project.price}
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          PROJECT INFORMATION
      ====================================================== */}

      <section className="section-padding bg-white">

        <div className="container-main">

          <div className="grid gap-14 lg:grid-cols-[1.4fr_0.8fr]">

            <div>

              <p className="brand-label">
                Project Information
              </p>

              <h2 className="mt-4 text-3xl font-bold text-black md:text-4xl">
                About {project.name}
              </h2>

              <div className="mt-6 space-y-5 text-[16px] leading-8 text-[#4F5A53]">

                <p>
                  {project.description}
                </p>

                <p>
                  Buyers looking for{" "}
                  <strong className="font-semibold text-black">
                    {project.type.toLowerCase()}
                  </strong>{" "}
                  in the Shadnagar region can evaluate
                  this project based on location,
                  plot size, pricing, connectivity and
                  applicable approvals.
                </p>

                <p>
                  Before purchasing any property,
                  buyers should independently verify
                  project documents, approvals, title,
                  registration information, development
                  status and other applicable legal
                  records.
                </p>

              </div>

            </div>

            {/* HIGHLIGHTS */}

            <div className="rounded-3xl border border-[#e1e8e1] bg-[#f7faf7] p-7">

              <h2 className="text-xl font-bold text-black">
                Project Highlights
              </h2>

              <div className="mt-6 space-y-4">

                {project.highlights.map(
                  (highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-3"
                    >

                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-[#00540D]"
                      />

                      <span className="text-sm leading-6 text-[#53605A]">
                        {highlight}
                      </span>

                    </div>
                  )
                )}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          APPROVALS
      ====================================================== */}

      {project.approvals && (
        <section className="section-padding bg-[#f7faf7]">

          <div className="container-main">

            <div className="max-w-3xl">

              <p className="brand-label">
                Project Documents
              </p>

              <h2 className="mt-4 text-3xl font-bold text-black md:text-4xl">
                Approval Information
              </h2>

              <p className="mt-5 leading-7 text-[#68716B]">
                The following approval information was
                provided for this project. Buyers should
                independently verify current records and
                documents before making a purchase decision.
              </p>

            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">

              {project.approvals.rera && (
                <ApprovalCard
                  title="RERA"
                  value={project.approvals.rera}
                />
              )}

              {project.approvals.hmda && (
                <ApprovalCard
                  title="HMDA LP"
                  value={project.approvals.hmda}
                />
              )}

              {project.approvals.dtcp && (
                <ApprovalCard
                  title="DTCP / MUDA"
                  value={project.approvals.dtcp}
                />
              )}

            </div>

          </div>

        </section>
      )}

      {/* =====================================================
          PRICE + PLOT SIZE
      ====================================================== */}

      <section className="section-padding bg-white">

        <div className="container-main">

          <div className="rounded-[30px] bg-[#00540D] p-8 text-white md:p-12">

            <div className="grid gap-10 md:grid-cols-3">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                  Plot Size
                </p>

                <p className="mt-3 text-2xl font-bold">
                  {project.plotSizes}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                  Price
                </p>

                <p className="mt-3 text-2xl font-bold">
                  {project.price}
                </p>

                {project.priceNote && (
                  <p className="mt-1 text-sm text-white/60">
                    {project.priceNote}
                  </p>
                )}
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                  Site Visit
                </p>

                <Link
                  href={`/book-site-visit?project=${project.slug}`}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#00540D] transition hover:bg-[#f1f6f2]"
                >
                  Schedule Visit

                  <ArrowUpRight size={16} />
                </Link>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          RELATED PROJECTS
      ====================================================== */}

      <section className="section-padding bg-[#f7faf7]">

        <div className="container-main">

          <div className="flex items-end justify-between gap-5">

            <div>

              <p className="brand-label">
                Explore More
              </p>

              <h2 className="mt-4 text-3xl font-bold text-black md:text-4xl">
                Other Projects Near Shadnagar
              </h2>

            </div>

            <Link
              href="/projects"
              className="hidden text-sm font-semibold text-[#00540D] md:block"
            >
              View All Projects →
            </Link>

          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">

            {projects
              .filter(
                (item) =>
                  item.slug !== project.slug
              )
              .slice(0, 3)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/projects/${item.slug}`}
                  className="group rounded-2xl border border-[#e1e8e1] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00540D]/20 hover:shadow-lg"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#00540D]">
                    {item.type}
                  </p>

                  <h3 className="mt-3 text-lg font-bold text-black">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-sm text-[#68716B]">
                    {item.location}
                  </p>

                  <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-[#00540D]">
                    View Details

                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </Link>
              ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-white pb-20">

        <div className="container-main">

          <div className="rounded-[30px] bg-[#f7faf7] px-7 py-12 text-center md:px-12">

            <p className="brand-label">
              Plan Your Site Visit
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold text-black md:text-5xl">
              Interested in {project.name}?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#68716B]">
              Contact our team to enquire about plot
              availability, pricing, project details and
              site visit options.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">

              <Link
                href={`/book-site-visit?project=${project.slug}`}
                className="rounded-full bg-[#00540D] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#003B09]"
              >
                Book Site Visit
              </Link>

              <a
                href="tel:+919999999999"
                className="rounded-full border border-[#dce5dd] bg-white px-7 py-3.5 text-sm font-semibold text-[#00540D] transition hover:border-[#00540D]"
              >
                Call Now
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

/* ============================================================
   DETAIL
============================================================ */

function Detail({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 px-5 py-6 md:px-7">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaf3ea] text-[#00540D]">
        {icon}
      </div>

      <div>
        <p className="text-xs text-[#8a938d]">
          {label}
        </p>

        <p className="mt-1 text-sm font-semibold text-black">
          {value}
        </p>
      </div>

    </div>
  );
}

/* ============================================================
   APPROVAL CARD
============================================================ */

function ApprovalCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-[#e1e8e1] bg-white p-6">

      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#00540D]">
        {title}
      </p>

      <p className="mt-3 break-words text-sm font-semibold leading-6 text-black">
        {value}
      </p>

    </div>
  );
}