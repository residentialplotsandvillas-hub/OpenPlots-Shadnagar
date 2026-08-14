import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileCheck2,
  Home,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import LeadForm from "../components/LeadForm";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title:
    "Plots for Sale in Shadnagar | Residential Plots Near RRR",

  description:
    "Find plots for sale in Shadnagar, including residential, commercial and plotted developments near RRR, Balanagar, Kallepally and Bangalore Highway. Compare plot sizes, prices, locations and project details.",

  keywords: [
    "plots for sale in Shadnagar",
    "residential plots for sale in Shadnagar",
    "open plots for sale in Shadnagar",
    "plots in Shadnagar",
    "residential plots in Shadnagar",
    "Shadnagar plots for sale",
    "plots near Shadnagar",
    "plots near RRR Shadnagar",
    "plots near Bangalore Highway",
    "plots in Balanagar",
    "plots in Kallepally",
    "plot projects in Shadnagar",
    "HMDA plots in Shadnagar",
    "DTCP plots in Shadnagar",
  ],

  alternates: {
    canonical:
      "https://openplotsinshadnagar.com/plots-for-sale-in-shadnagar",
  },

  openGraph: {
    title:
      "Plots for Sale in Shadnagar | OpenPlots Shadnagar",

    description:
      "Explore residential and plotted developments for sale in Shadnagar and nearby RRR, Balanagar, Kallepally and Bangalore Highway corridors.",

    url:
      "https://openplotsinshadnagar.com/plots-for-sale-in-shadnagar",

    siteName: "OpenPlots Shadnagar",

    type: "website",

    images: [
      {
        url: "/images/shadnagar-aerial.webp",
        width: 1200,
        height: 630,
        alt:
          "Plots for sale in Shadnagar",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Plots for Sale in Shadnagar",

    description:
      "Explore residential plots and plotted developments in Shadnagar and nearby growth corridors.",

    images: [
      "/images/shadnagar-aerial.webp",
    ],
  },
};

const featuredProjects = projects.filter(
  (project) => project.featured
);

const faqs = [
  {
    question:
      "Where can I find plots for sale in Shadnagar?",

    answer:
      "Plots are available across different parts of Shadnagar and nearby locations. The projects featured on this website include locations around Shadnagar, Balanagar, Kallepally, RRR and the Bangalore Highway corridor. Always verify the exact project location before purchase.",
  },

  {
    question:
      "What types of plots are available in Shadnagar?",

    answer:
      "Depending on the project, buyers may find residential plots, commercial plots, plotted developments and farm land. Each project has its own plot sizes, pricing, documentation and intended use.",
  },

  {
    question:
      "What plot sizes are available?",

    answer:
      "The projects currently presented on OpenPlots Shadnagar include plot sizes ranging from approximately 147 square yards to 1,200 square yards. Availability can change, so contact the project team for current inventory.",
  },

  {
    question:
      "Are there plots near RRR in Shadnagar?",

    answer:
      "Some projects are marketed around the RRR and Shadnagar growth corridor. Buyers should confirm the actual project location and distance from the RRR rather than relying only on marketing descriptions.",
  },

  {
    question:
      "Can I book a site visit before buying a plot?",

    answer:
      "Yes. You can submit your requirements through the enquiry form and request a site visit to the relevant project.",
  },

  {
    question:
      "Should I verify approvals before purchasing a plot?",

    answer:
      "Yes. Approval and legal documentation should be checked for the specific project and plot. Depending on the project, this may include applicable HMDA, DTCP, RERA or other documentation.",
  },
];

export default function PlotsForSaleInShadnagarPage() {
  return (
    <main className="bg-white">

      {/* =====================================================
          WEBPAGE SCHEMA
      ====================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Plots for Sale in Shadnagar",
            description:
              "Residential and plotted developments for sale in Shadnagar and nearby locations.",
            url:
              "https://openplotsinshadnagar.com/plots-for-sale-in-shadnagar",
            isPartOf: {
              "@type": "WebSite",
              name: "OpenPlots Shadnagar",
              url:
                "https://openplotsinshadnagar.com/",
            },
          }),
        }}
      />

      {/* =====================================================
          FAQ SCHEMA
      ====================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#003B09]">

        <div className="absolute inset-0">

          <Image
            src="/images/shadnagar-aerial.webp"
            alt="Residential plots for sale in Shadnagar"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#003B09]/95 via-[#003B09]/82 to-[#003B09]/35" />

        <div className="container-main relative">

          <div className="grid min-h-[680px] items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">

            {/* HERO CONTENT */}

            <div className="max-w-3xl">

              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">

                <Home
                  size={15}
                  className="text-[#d5b45f]"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:text-xs">
                  Residential & Commercial Plots
                </span>

              </div>

              <h1 className="mt-6 text-4xl font-bold leading-[1.04] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">

                Plots for Sale in

                <span className="block text-[#d5b45f]">
                  Shadnagar
                </span>

              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 md:text-lg">

                Explore residential plots, commercial plots
                and plotted developments in and around
                Shadnagar. Compare project locations, plot
                sizes, prices and applicable documentation
                before planning your site visit.

              </p>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">

                <HeroPoint text="Multiple Plot Sizes" />

                <HeroPoint text="Featured Projects" />

                <HeroPoint text="Project Information" />

                <HeroPoint text="Site Visit Support" />

              </div>

              <div className="mt-9 flex flex-wrap gap-3">

                <Link
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#00540D] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#003B09]"
                >
                  View Plots for Sale

                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <Link
                  href="#enquiry"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-[#00540D]"
                >
                  Book Site Visit

                  <ArrowRight size={17} />
                </Link>

              </div>

            </div>

            {/* HERO QUICK CARD */}

            <div className="hidden lg:block">

              <div className="ml-auto max-w-[410px] rounded-[30px] border border-white/20 bg-white/95 p-7 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf3ea] text-[#00540D]">
                    <Sparkles size={21} />
                  </div>

                  <div>

                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00540D]">
                      Plot Search
                    </p>

                    <h2 className="mt-1 text-xl font-bold text-black">
                      Find Your Plot
                    </h2>

                  </div>

                </div>

                <div className="mt-7 space-y-3">

                  <QuickItem
                    icon={<MapPin size={16} />}
                    text="Shadnagar & nearby locations"
                  />

                  <QuickItem
                    icon={<Ruler size={16} />}
                    text="Residential & commercial sizes"
                  />

                  <QuickItem
                    icon={<FileCheck2 size={16} />}
                    text="Project documentation"
                  />

                  <QuickItem
                    icon={<ShieldCheck size={16} />}
                    text="Site visit assistance"
                  />

                </div>

                <Link
                  href="#enquiry"
                  className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-[#00540D] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#003B09]"
                >
                  Request Plot Details

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

          <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">

            <div className="max-w-3xl">

              <p className="brand-label">
                Plots for Sale in Shadnagar
              </p>

              <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-black md:text-5xl">

                Find the Right Plot
                <span className="block text-[#00540D]">
                  for Your Requirement
                </span>

              </h2>

              <p className="mt-6 text-base leading-8 text-[#68716B] md:text-lg">

                Shadnagar has a broad market for residential
                land and plotted developments, with property
                portals currently showing hundreds of residential
                plot listings in the area.

              </p>

              <p className="mt-5 text-base leading-8 text-[#68716B]">

                Instead of choosing a plot based only on price,
                compare the actual location, plot dimensions,
                road access, project documentation, surrounding
                development and the intended use of the property.

              </p>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <StatCard
                icon={<MapPin size={21} />}
                value="Shadnagar"
                label="Primary Location"
              />

              <StatCard
                icon={<Home size={21} />}
                value="Residential"
                label="Plot Options"
              />

              <StatCard
                icon={<Ruler size={21} />}
                value="147+"
                label="Sq. Yd Options"
              />

              <StatCard
                icon={<ShieldCheck size={21} />}
                value="Project"
                label="Verification"
              />

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FEATURED PROJECTS
      ====================================================== */}

      <section
        id="projects"
        className="section-padding bg-[#f7faf7]"
      >

        <div className="container-main">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div className="max-w-3xl">

              <p className="brand-label">
                Featured Properties
              </p>

              <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-black md:text-5xl">

                Residential Plots for Sale
                <span className="block text-[#00540D]">
                  Near Shadnagar
                </span>

              </h2>

              <p className="mt-5 text-base leading-8 text-[#68716B] md:text-lg">

                Explore the projects currently featured on
                OpenPlots Shadnagar.

              </p>

            </div>

            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-bold text-[#00540D]"
            >
              View All Projects

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />

            </Link>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          PROPERTY TYPES
      ====================================================== */}

      <section className="section-padding bg-white">

        <div className="container-main">

          <div className="mx-auto max-w-3xl text-center">

            <p className="brand-label">
              Property Options
            </p>

            <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

            <h2 className="mt-5 text-3xl font-bold text-black md:text-5xl">

              Choose a Plot Based on
              <span className="block text-[#00540D]">
                Your Requirement
              </span>

            </h2>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            <TypeCard
              icon={<Home size={22} />}
              title="Residential Plots"
              text="Explore plotted developments suitable for buyers planning residential use, subject to project-specific rules and documentation."
              href="/open-plots-in-shadnagar"
            />

            <TypeCard
              icon={<Ruler size={22} />}
              title="Commercial Plots"
              text="Explore commercial plot opportunities in selected projects and locations around the Shadnagar corridor."
              href="/projects"
            />

            <TypeCard
              icon={<MapPin size={22} />}
              title="Farm Land"
              text="For larger land requirements, explore farm land projects around Shadnagar and nearby locations."
              href="/farm-lands-near-shadnagar"
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          LOCATION
      ====================================================== */}

      <section className="section-padding bg-[#f7faf7]">

        <div className="container-main">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>

              <p className="brand-label">
                Plot Locations
              </p>

              <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

              <h2 className="mt-5 text-3xl font-bold text-black md:text-5xl">

                Explore Plots Around
                <span className="block text-[#00540D]">
                  Shadnagar
                </span>

              </h2>

              <p className="mt-5 leading-8 text-[#68716B]">

                Compare project locations across the broader
                Shadnagar region and nearby growth corridors.

              </p>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              <LocationCard
                href="/open-plots-in-shadnagar"
                title="Open Plots in Shadnagar"
              />

              <LocationCard
                href="/hmda-plots-in-shadnagar"
                title="HMDA Plot Projects"
              />

              <LocationCard
                href="/farm-lands-near-shadnagar"
                title="Farm Lands Near Shadnagar"
              />

              <LocationCard
                href="/locations/balanagar"
                title="Plots in Balanagar"
              />

              <LocationCard
                href="/locations/kallepally"
                title="Plots in Kallepally"
              />

              <LocationCard
                href="/locations/jadcherla"
                title="Plots in Jadcherla"
              />

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BUYING GUIDE
      ====================================================== */}

      <section className="section-padding bg-white">

        <div className="container-main">

          <div className="mx-auto max-w-4xl">

            <div className="text-center">

              <p className="brand-label">
                Plot Buying Guide
              </p>

              <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

              <h2 className="mt-5 text-3xl font-bold text-black md:text-5xl">

                Things to Check Before
                <span className="block text-[#00540D]">
                  Buying a Plot
                </span>

              </h2>

            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">

              <GuideCard
                number="01"
                title="Verify the Exact Location"
                text="Visit the site and confirm the actual location, road access, surrounding development and nearby landmarks."
              />

              <GuideCard
                number="02"
                title="Check Plot Dimensions"
                text="Confirm the exact square-yard area, dimensions, facing, boundaries and road width."
              />

              <GuideCard
                number="03"
                title="Review Approvals"
                text="Check applicable project approvals and verify the relevant documents for the specific development."
              />

              <GuideCard
                number="04"
                title="Verify Legal Documents"
                text="Have the relevant title, ownership and property documents independently reviewed before purchase."
              />

              <GuideCard
                number="05"
                title="Understand the Total Cost"
                text="Ask for the complete cost structure, including applicable registration and other project charges."
              />

              <GuideCard
                number="06"
                title="Visit Before Booking"
                text="A physical site visit helps you evaluate the property and project for yourself."
              />

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SEO CONTENT
      ====================================================== */}

      <section className="section-padding bg-[#f7faf7]">

        <div className="container-main">

          <article className="mx-auto max-w-4xl">

            <p className="brand-label text-center">
              Shadnagar Property Guide
            </p>

            <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

            <h2 className="mt-5 text-center text-3xl font-bold text-black md:text-5xl">

              Plots for Sale in Shadnagar:
              <span className="block text-[#00540D]">
                What Buyers Should Know
              </span>

            </h2>

            <div className="mt-10 space-y-6 text-base leading-8 text-[#68716B]">

              <p>
                Buyers searching for plots for sale in
                Shadnagar can find a variety of residential land
                and plotted developments across the region.
                Property portals currently show hundreds of
                residential plot listings, with significant
                variation in plot size, location and asking
                price.
              </p>

              <p>
                This variation makes comparison important.
                Instead of selecting a plot solely because it
                has a lower advertised price, buyers should
                consider the location, road connectivity, plot
                dimensions, surrounding development, applicable
                approvals and legal documentation.
              </p>

              <p>
                Shadnagar also connects buyers to several
                surrounding corridors. Depending on the project,
                listings may reference Balanagar, Kallepally,
                RRR and the Bangalore Highway. The actual
                location should always be confirmed through a
                site visit.
              </p>

              <p>
                For buyers interested in HMDA or DTCP plotted
                developments, approval information should be
                checked on a project-by-project basis. An
                approval reference for one project should not be
                treated as approval for every plot or development
                in the region.
              </p>

              <p>
                OpenPlots Shadnagar provides a project-focused
                way to explore available property opportunities.
                You can review project information, compare plot
                sizes and locations, and request assistance with
                arranging a site visit before making a purchase
                decision.
              </p>

            </div>

          </article>

        </div>

      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}

      <section className="section-padding bg-white">

        <div className="container-main">

          <div className="mx-auto max-w-3xl">

            <p className="brand-label text-center">
              Frequently Asked Questions
            </p>

            <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

            <h2 className="mt-5 text-center text-3xl font-bold text-black md:text-5xl">

              Plots for Sale in Shadnagar
              <span className="block text-[#00540D]">
                FAQs
              </span>

            </h2>

            <div className="mt-10 space-y-4">

              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-[#dfe8e1] bg-[#f7faf7] p-5"
                >

                  <summary className="cursor-pointer list-none pr-6 text-sm font-bold text-black marker:hidden">
                    {faq.question}
                  </summary>

                  <p className="mt-4 text-sm leading-7 text-[#68716B]">
                    {faq.answer}
                  </p>

                </details>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          LEAD SECTION
      ====================================================== */}

      <section
        id="enquiry"
        className="section-padding bg-[#f7faf7]"
      >

        <div className="container-main">

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

            <div className="max-w-xl">

              <p className="brand-label">
                Plot Enquiry
              </p>

              <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

              <h2 className="mt-5 text-3xl font-bold leading-tight text-black md:text-5xl">

                Looking for Plots
                <span className="block text-[#00540D]">
                  for Sale in Shadnagar?
                </span>

              </h2>

              <p className="mt-6 leading-8 text-[#68716B]">

                Share your preferred plot size and budget.
                Our team can help you explore suitable project
                information and arrange a site visit.

              </p>

              <div className="mt-7 space-y-4">

                <Benefit text="Residential plot options" />

                <Benefit text="Plot size information" />

                <Benefit text="Project location details" />

                <Benefit text="Site visit coordination" />

              </div>

            </div>

            <LeadForm />

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-[#003B09]">

        <div className="container-main py-14">

          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d5b45f]">
                OpenPlots Shadnagar
              </p>

              <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                Find Your Plot in Shadnagar
              </h2>

              <p className="mt-2 text-sm text-white/70">
                Explore projects and arrange a site visit.
              </p>

            </div>

            <Link
              href="#enquiry"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#00540D] transition hover:bg-[#eaf3ea]"
            >
              Request Site Visit
              <ArrowUpRight size={16} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

/* ============================================================
   HERO POINT
============================================================ */

function HeroPoint({
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

      <span>{text}</span>

    </div>
  );
}

/* ============================================================
   QUICK ITEM
============================================================ */

function QuickItem({
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
   STAT CARD
============================================================ */

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-[22px] border border-[#dfe8e1] bg-[#f7faf7] p-5">

      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf3ea] text-[#00540D]">
        {icon}
      </div>

      <p className="mt-5 text-xl font-bold text-black">
        {value}
      </p>

      <p className="mt-1 text-xs text-[#68716B]">
        {label}
      </p>

    </div>
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
    <article className="group overflow-hidden rounded-[25px] border border-[#dfe8e1] bg-white shadow-[0_8px_30px_rgba(0,84,13,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-[#00540D]/20 hover:shadow-[0_20px_45px_rgba(0,84,13,0.12)]">

      <Link
        href={`/projects/${project.slug}`}
        className="block"
        aria-label={`View ${project.name}`}
      >

        <div className="relative aspect-[16/10] overflow-hidden bg-[#edf5ef]">

          <Image
            src={`/images/projects/${project.slug}.webp`}
            alt={`${project.name} ${project.type} in ${project.location}`}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />

          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />

          <div className="absolute left-4 top-4">
            <span className="rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold text-[#00540D] shadow-sm">
              {project.type}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4">

            <p className="text-xs font-semibold text-white/80">
              {project.location}
            </p>

            <p className="mt-1 text-lg font-bold text-white">
              {project.name}
            </p>

          </div>

          <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-[#00540D] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight size={17} />
          </div>

        </div>

      </Link>

      <div className="p-6">

        <div className="flex items-start gap-2 text-sm text-[#68716B]">

          <MapPin
            size={16}
            className="mt-0.5 shrink-0 text-[#00540D]"
          />

          <span>{project.landmark}</span>

        </div>

        <div className="mt-3 flex items-center gap-2 text-sm text-[#68716B]">

          <Ruler
            size={16}
            className="shrink-0 text-[#00540D]"
          />

          <span>{project.plotSizes}</span>

        </div>

        <div className="mt-6 border-t border-[#edf2ed] pt-5">

          <p className="text-[10px] uppercase tracking-[0.14em] text-[#8a938d]">
            Listed Price
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
          className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#00540D] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#003B09]"
        >
          View Project Details
          <ArrowUpRight size={16} />
        </Link>

      </div>

    </article>
  );
}

/* ============================================================
   TYPE CARD
============================================================ */

function TypeCard({
  icon,
  title,
  text,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-[25px] border border-[#dfe8e1] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#00540D]/25 hover:shadow-[0_18px_40px_rgba(0,84,13,0.08)]"
    >

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf3ea] text-[#00540D] transition group-hover:bg-[#00540D] group-hover:text-white">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-bold text-black">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-[#68716B]">
        {text}
      </p>

      <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#00540D]">
        Explore
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </div>

    </Link>
  );
}

/* ============================================================
   LOCATION CARD
============================================================ */

function LocationCard({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between rounded-2xl border border-[#dfe8e1] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#00540D]/25 hover:shadow-[0_12px_30px_rgba(0,84,13,0.07)]"
    >

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf3ea] text-[#00540D]">
          <MapPin size={18} />
        </div>

        <span className="text-sm font-bold text-black group-hover:text-[#00540D]">
          {title}
        </span>

      </div>

      <ArrowUpRight
        size={16}
        className="text-[#00540D] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />

    </Link>
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
    <article className="rounded-[22px] border border-[#dfe8e1] bg-white p-6">

      <span className="text-xs font-bold tracking-[0.15em] text-[#00540D]">
        {number}
      </span>

      <h3 className="mt-5 text-lg font-bold text-black">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-[#68716B]">
        {text}
      </p>

    </article>
  );
}

/* ============================================================
   BENEFIT
============================================================ */

function Benefit({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">

      <CheckCircle2
        size={18}
        className="shrink-0 text-[#00540D]"
      />

      <span className="text-sm font-medium text-[#53605A]">
        {text}
      </span>

    </div>
  );
}