import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileCheck2,
  MapPin,
  Ruler,
  ShieldCheck,
  Home,
} from "lucide-react";

import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title:
    "Open Plot Projects in Shadnagar | Residential & Farm Land Projects",

  description:
    "Explore open plot projects, residential plots, commercial plots and farm lands near Shadnagar, Balanagar, RRR, Kallepally, Polepally SEZ and Jadcherla. Compare locations, plot sizes, prices and project approvals.",

  keywords: [
    "projects near Shadnagar",
    "open plot projects in Shadnagar",
    "open plot projects Shadnagar",
    "residential plot projects Shadnagar",
    "plots projects in Shadnagar",
    "farm land projects near Shadnagar",
    "commercial plots Shadnagar",
    "plots for sale Shadnagar",
    "residential plots near Shadnagar",
    "plot projects near RRR",
    "plots near Bangalore Highway",
    "property projects near RRR",
    "Shadnagar real estate projects",
    "Shadnagar plotted developments",
    "land projects near Jadcherla",
  ],

  alternates: {
    canonical:
      "https://openplotsinshadnagar.com/projects",
  },

  openGraph: {
    title:
      "Open Plot Projects in Shadnagar | OpenPlots Shadnagar",

    description:
      "Explore residential plots, commercial plots and farm land projects around Shadnagar, RRR, Balanagar, Kallepally and Jadcherla.",

    url:
      "https://openplotsinshadnagar.com/projects",

    siteName: "OpenPlots Shadnagar",

    type: "website",

    images: [
      {
        url: "/images/shadnagar-aerial.webp",
        width: 1200,
        height: 630,
        alt:
          "Open plot projects near Shadnagar",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ProjectsPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",

    name:
      "Open Plot Projects Near Shadnagar",

    description:
      "Residential plots, commercial plots and farm land projects near Shadnagar.",

    url:
      "https://openplotsinshadnagar.com/projects",

    numberOfItems: projects.length,

    itemListElement: projects.map(
      (project, index) => ({
        "@type": "ListItem",
        position: index + 1,

        name: project.name,

        url:
          `https://openplotsinshadnagar.com/projects/${project.slug}`,
      })
    ),
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",

    name:
      "Open Plot Projects in Shadnagar",

    description:
      "Explore residential, commercial and farm land projects near Shadnagar.",

    url:
      "https://openplotsinshadnagar.com/projects",

    isPartOf: {
      "@type": "WebSite",
      name: "OpenPlots Shadnagar",
      url:
        "https://openplotsinshadnagar.com/",
    },
  };

  return (
    <main className="bg-white">

      {/* =====================================================
          SEO SCHEMA
      ====================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(webpageSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(itemListSchema),
        }}
      />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#003B09]">

        <div className="absolute inset-0">

          <Image
            src="/images/shadnagar-aerial.webp"
            alt="Open plot projects near Shadnagar"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#003B09]/95 via-[#003B09]/82 to-[#003B09]/30" />

        <div className="container-main relative">

          <div className="grid min-h-[620px] items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">

            <div className="max-w-3xl">

              {/* Breadcrumb */}

              <nav
                aria-label="Breadcrumb"
                className="mb-7 text-xs text-white/60"
              >

                <Link
                  href="/"
                  className="transition hover:text-white"
                >
                  Home
                </Link>

                <span className="mx-2">
                  /
                </span>

                <span className="text-white">
                  Projects
                </span>

              </nav>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">

                <MapPin
                  size={15}
                  className="text-[#d5b45f]"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:text-xs">
                  Shadnagar Property Projects
                </span>

              </div>

              <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">

                Open Plot & Farm Land
                <span className="block text-[#d5b45f]">
                  Projects Near Shadnagar
                </span>

              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 md:text-lg">

                Explore residential plots, commercial plots
                and farm land projects across Shadnagar,
                Balanagar, Kallepally, RRR, Polepally SEZ
                and Jadcherla.

              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                <HeroFeature text="Residential Plot Projects" />

                <HeroFeature text="Farm Land Projects" />

                <HeroFeature text="Multiple Plot Sizes" />

                <HeroFeature text="Project Information" />

              </div>

              <div className="mt-9 flex flex-wrap gap-3">

                <Link
                  href="#all-projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#00540D] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#002f07]"
                >
                  Explore Projects

                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />

                </Link>

                <Link
                  href="/plots-for-sale-in-shadnagar"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-[#00540D]"
                >
                  Plots for Sale

                  <ArrowRight size={17} />

                </Link>

              </div>

            </div>

            {/* HERO SUMMARY */}

            <div className="hidden lg:block">

              <div className="ml-auto max-w-[410px] rounded-[30px] border border-white/20 bg-white/95 p-7 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00540D]">
                  Explore Property
                </p>

                <h2 className="mt-2 text-2xl font-bold text-black">
                  Shadnagar Projects
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#68716B]">
                  Compare project location, plot sizes,
                  prices and available project information.
                </p>

                <div className="mt-6 space-y-3">

                  <SummaryItem
                    icon={<MapPin size={16} />}
                    text="Shadnagar & nearby locations"
                  />

                  <SummaryItem
                    icon={<Ruler size={16} />}
                    text="Different plot size options"
                  />

                  <SummaryItem
                    icon={<FileCheck2 size={16} />}
                    text="Approval information"
                  />

                  <SummaryItem
                    icon={<ShieldCheck size={16} />}
                    text="Site visit assistance"
                  />

                </div>

                <Link
                  href="/book-site-visit"
                  className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-[#00540D] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#003B09]"
                >
                  Book a Site Visit

                  <ArrowRight size={16} />

                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="section-padding bg-white">

        <div className="container-main">

          <div className="mx-auto max-w-4xl text-center">

            <p className="brand-label">
              Shadnagar Real Estate
            </p>

            <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-black md:text-5xl">

              Explore Property Projects
              <span className="block text-[#00540D]">
                Around Shadnagar
              </span>

            </h2>

            <p className="mt-6 text-base leading-8 text-[#68716B] md:text-lg">

              OpenPlots Shadnagar brings together selected
              property projects so buyers can compare
              locations, plot sizes, prices and project
              information before planning a site visit.

            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            <InfoCard
              icon={<Home size={22} />}
              title="Residential Plots"
              text="Explore residential plotted developments suitable for buyers looking for future home construction or land ownership."
            />

            <InfoCard
              icon={<Ruler size={22} />}
              title="Multiple Plot Sizes"
              text="Compare different plot dimensions and sizes based on your requirements and budget."
            />

            <InfoCard
              icon={<MapPin size={22} />}
              title="Strategic Locations"
              text="Discover projects around Shadnagar, Balanagar, RRR, Kallepally, Polepally and Jadcherla."
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          PROJECT GRID
      ====================================================== */}

      <section
        id="all-projects"
        className="section-padding bg-[#f7faf7]"
      >

        <div className="container-main">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div className="max-w-3xl">

              <p className="brand-label">
                Our Projects
              </p>

              <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-black md:text-5xl">

                Featured Plot Projects
                <span className="block text-[#00540D]">
                  Near Shadnagar
                </span>

              </h2>

              <p className="mt-5 text-base leading-8 text-[#68716B] md:text-lg">

                Browse the projects below to view detailed
                location, plot size, pricing and project
                information.

              </p>

            </div>

            <Link
              href="/plots-for-sale-in-shadnagar"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#00540D]"
            >
              View Plots for Sale

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />

            </Link>

          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          LOCATION LINKS
      ====================================================== */}

      <section className="section-padding bg-white">

        <div className="container-main">

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

            <div>

              <p className="brand-label">
                Explore Locations
              </p>

              <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

              <h2 className="mt-5 text-3xl font-bold text-black md:text-5xl">

                Property Around
                <span className="block text-[#00540D]">
                  Shadnagar
                </span>

              </h2>

              <p className="mt-6 leading-8 text-[#68716B]">

                Explore dedicated property pages based on
                different search requirements and locations.

              </p>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              <LocationLink
                href="/open-plots-in-shadnagar"
                label="Open Plots in Shadnagar"
              />

              <LocationLink
                href="/plots-for-sale-in-shadnagar"
                label="Plots for Sale in Shadnagar"
              />

              <LocationLink
                href="/hmda-plots-in-shadnagar"
                label="HMDA Plots in Shadnagar"
              />

              <LocationLink
                href="/farm-lands-near-shadnagar"
                label="Farm Lands Near Shadnagar"
              />

              <LocationLink
                href="/locations/shadnagar"
                label="Shadnagar Properties"
              />

              <LocationLink
                href="/locations/balanagar"
                label="Balanagar Plots"
              />

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BUYER GUIDE
      ====================================================== */}

      <section className="section-padding bg-[#f7faf7]">

        <div className="container-main">

          <div className="mx-auto max-w-4xl">

            <p className="brand-label text-center">
              Buyer Information
            </p>

            <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

            <h2 className="mt-5 text-center text-3xl font-bold text-black md:text-5xl">

              What to Check Before
              <span className="block text-[#00540D]">
                Buying a Plot
              </span>

            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2">

              <GuideCard
                number="01"
                title="Project Location"
                text="Confirm the actual project location, road access and nearby landmarks before making a decision."
              />

              <GuideCard
                number="02"
                title="Plot Dimensions"
                text="Check the exact plot size, dimensions, boundaries and orientation."
              />

              <GuideCard
                number="03"
                title="Project Documents"
                text="Review applicable approval and registration documents and verify their current status."
              />

              <GuideCard
                number="04"
                title="Site Visit"
                text="Visit the actual property and independently evaluate the surroundings before purchasing."
              />

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SEO CONTENT
      ====================================================== */}

      <section className="section-padding bg-white">

        <div className="container-main">

          <article className="mx-auto max-w-4xl">

            <p className="brand-label text-center">
              Shadnagar Property Guide
            </p>

            <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

            <h2 className="mt-5 text-center text-3xl font-bold text-black md:text-5xl">

              Open Plot Projects Near
              <span className="block text-[#00540D]">
                Shadnagar
              </span>

            </h2>

            <div className="mt-10 space-y-6 text-base leading-8 text-[#68716B]">

              <p>
                Shadnagar has become an important property
                search location for buyers looking for open
                plots, residential land and plotted
                developments. Different projects are located
                across the wider Shadnagar, Balanagar,
                Kallepally and Jadcherla corridors.
              </p>

              <p>
                When comparing open plot projects in Shadnagar,
                buyers should consider the exact location,
                plot dimensions, road connectivity, surrounding
                development and applicable project documents.
                The advertised price should not be the only
                factor used to compare properties.
              </p>

              <p>
                Buyers searching for residential plot projects
                near RRR or the Bangalore Highway should verify
                the actual distance from the project site.
                A physical site visit is useful for understanding
                access roads, neighbouring developments and the
                surrounding area.
              </p>

              <p>
                Farm land projects can have different features
                and intended uses from residential plotted
                developments. Buyers should understand the
                nature of the land, project documentation and
                applicable permissions before making a purchase.
              </p>

              <p>
                OpenPlots Shadnagar provides project information
                to help prospective buyers discover available
                property options and contact the sales team for
                further details or a site visit.
              </p>

            </div>

          </article>

        </div>

      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-[#003B09]">

        <div className="container-main py-16">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

            <div className="max-w-2xl">

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d5b45f]">
                OpenPlots Shadnagar
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">

                Find Your Ideal Plot Project

              </h2>

              <p className="mt-3 text-sm leading-7 text-white/70">

                Explore projects, compare locations and
                arrange a site visit.

              </p>

            </div>

            <Link
              href="/book-site-visit"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#00540D] transition hover:bg-[#eaf3ea]"
            >
              Book Site Visit

              <ArrowUpRight size={17} />

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

/* ============================================================
   PROJECT CARD
============================================================ */

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <article className="group overflow-hidden rounded-[26px] border border-[#dfe8e1] bg-white shadow-[0_8px_30px_rgba(0,84,13,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-[#00540D]/20 hover:shadow-[0_22px_50px_rgba(0,84,13,0.12)]">

      <Link
        href={`/projects/${project.slug}`}
        className="block"
        aria-label={`View ${project.name} project`}
      >

        <div className="relative aspect-[16/10] overflow-hidden bg-[#eaf3ea]">

          <Image
            src={`/images/projects/${project.slug}.webp`}
            alt={`${project.name} ${project.type} near ${project.location}`}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />

          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/70 to-transparent" />

          <div className="absolute left-4 top-4">

            <span className="rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold text-[#00540D] shadow-sm">
              {project.type}
            </span>

          </div>

          <div className="absolute bottom-5 left-5 right-5">

            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/75">
              {project.location}
            </p>

            <h2 className="mt-1 text-xl font-bold text-white">
              {project.name}
            </h2>

          </div>

          <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-[#00540D] opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">

            <ArrowUpRight size={17} />

          </div>

        </div>

      </Link>

      <div className="p-6">

        <div className="flex items-start gap-2 text-sm leading-6 text-[#68716B]">

          <MapPin
            size={16}
            className="mt-1 shrink-0 text-[#00540D]"
          />

          <span>
            {project.landmark}
          </span>

        </div>

        <div className="mt-3 flex items-center gap-2 text-sm text-[#68716B]">

          <Ruler
            size={16}
            className="shrink-0 text-[#00540D]"
          />

          <span>
            {project.plotSizes}
          </span>

        </div>

        <div className="mt-6 border-t border-[#edf2ed] pt-5">

          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8a938d]">
            Project Price
          </p>

          <p className="mt-1 text-xl font-bold text-[#00540D]">
            {project.price}
          </p>

          {project.priceNote && (
            <p className="mt-1 text-xs text-[#8a938d]">
              {project.priceNote}
            </p>
          )}

        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#00540D] px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#003B09]"
        >
          Explore Project

          <ArrowUpRight size={16} />

        </Link>

      </div>

    </article>
  );
}

/* ============================================================
   HERO FEATURE
============================================================ */

function HeroFeature({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 text-sm text-white/80">

      <CheckCircle2
        size={16}
        className="shrink-0 text-[#d5b45f]"
      />

      <span>
        {text}
      </span>

    </div>
  );
}

/* ============================================================
   SUMMARY ITEM
============================================================ */

function SummaryItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-[#f7faf7] p-3">

      <div className="text-[#00540D]">
        {icon}
      </div>

      <span className="text-xs font-medium text-[#53605A]">
        {text}
      </span>

    </div>
  );
}

/* ============================================================
   INFO CARD
============================================================ */

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-[24px] border border-[#dfe8e1] bg-white p-7 shadow-[0_8px_25px_rgba(0,84,13,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,84,13,0.08)]">

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf3ea] text-[#00540D]">
        {icon}
      </div>

      <h3 className="mt-6 text-lg font-bold text-black">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-[#68716B]">
        {text}
      </p>

    </article>
  );
}

/* ============================================================
   GUIDE CARD
============================================================ */

function GuideCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-[24px] border border-[#dfe8e1] bg-white p-7">

      <span className="text-xs font-bold tracking-[0.16em] text-[#00540D]">
        {number}
      </span>

      <h3 className="mt-5 text-xl font-bold text-black">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-[#68716B]">
        {text}
      </p>

    </article>
  );
}

/* ============================================================
   LOCATION LINK
============================================================ */

function LocationLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between rounded-2xl border border-[#dfe8e1] bg-[#f7faf7] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#00540D]/25 hover:bg-white hover:shadow-[0_12px_30px_rgba(0,84,13,0.07)]"
    >

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf3ea] text-[#00540D]">
          <MapPin size={18} />
        </div>

        <span className="text-sm font-bold text-black transition-colors group-hover:text-[#00540D]">
          {label}
        </span>

      </div>

      <ArrowUpRight
        size={16}
        className="text-[#00540D] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />

    </Link>
  );
}