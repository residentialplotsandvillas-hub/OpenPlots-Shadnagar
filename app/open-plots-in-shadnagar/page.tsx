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
  Ruler,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import LeadForm from "../components/LeadForm";

import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title:
    "Open Plots in Shadnagar | Plots for Sale Near RRR",

  description:
    "Explore open plots in Shadnagar, residential plots near RRR, Balanagar, Kallepally and the Bangalore Highway. Compare plot sizes, project locations, approvals, prices and book a site visit.",

  keywords: [
    "open plots in Shadnagar",
    "open plots for sale in Shadnagar",
    "plots in Shadnagar",
    "plots for sale in Shadnagar",
    "residential plots in Shadnagar",
    "Shadnagar open plots",
    "plots near Shadnagar RRR",
    "plots near RRR",
    "plots near Bangalore Highway",
    "open plots near Bangalore Highway",
    "residential plots near Shadnagar",
    "plot projects in Shadnagar",
  ],

  alternates: {
    canonical:
      "https://openplotsinshadnagar.com/open-plots-in-shadnagar",
  },

  openGraph: {
    title:
      "Open Plots in Shadnagar | OpenPlots Shadnagar",

    description:
      "Explore residential open plots and plotted developments around Shadnagar, RRR, Balanagar and the Bangalore Highway corridor.",

    url:
      "https://openplotsinshadnagar.com/open-plots-in-shadnagar",

    siteName: "OpenPlots Shadnagar",

    type: "website",

    images: [
      {
        url: "/images/shadnagar-aerial.webp",
        width: 1200,
        height: 630,
        alt:
          "Open plots and residential plotted developments in Shadnagar",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Open Plots in Shadnagar | OpenPlots",

    description:
      "Explore open plots and residential plot projects in Shadnagar and nearby RRR corridors.",

    images: [
      "/images/shadnagar-aerial.webp",
    ],
  },
};

const featuredProjects = projects.filter(
  (project) => project.featured
);

const faqItems = [
  {
    question:
      "Where can I find open plots in Shadnagar?",

    answer:
      "Open plot projects can be found across different parts of the Shadnagar region and nearby locations such as Balanagar, Kallepally and Jadcherla. The exact location, project documentation, plot availability and applicable approvals should be checked for each project.",
  },

  {
    question:
      "What plot sizes are available in Shadnagar?",

    answer:
      "Plot sizes vary by project. The projects featured on OpenPlots Shadnagar include options ranging from approximately 147 square yards to larger plots of up to 1,200 square yards.",
  },

  {
    question:
      "Are there plots near the RRR in Shadnagar?",

    answer:
      "Yes, several plotted developments in the broader Shadnagar and Balanagar corridor are marketed around the RRR area. Buyers should verify the exact distance from the project site rather than relying only on the project description.",
  },

  {
    question:
      "Are HMDA or DTCP plots available in Shadnagar?",

    answer:
      "There are plotted developments marketed with HMDA or DTCP approval references in the Shadnagar region. Approval status is project-specific, so buyers should verify the applicable approval documentation for the particular project before purchasing.",
  },

  {
    question:
      "Can I visit the open plot projects before buying?",

    answer:
      "Yes. You can submit the enquiry form on this page to request project information and coordinate a site visit.",
  },
];

export default function OpenPlotsInShadnagarPage() {
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

            name:
              "Open Plots in Shadnagar",

            description:
              "Explore open plots and residential plotted developments in Shadnagar and nearby locations.",

            url:
              "https://openplotsinshadnagar.com/open-plots-in-shadnagar",

            isPartOf: {
              "@type": "WebSite",
              name:
                "OpenPlots Shadnagar",
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

            mainEntity: faqItems.map(
              (item) => ({
                "@type": "Question",

                name: item.question,

                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })
            ),
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
            alt="Open plots in Shadnagar"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#003B09]/95 via-[#003B09]/80 to-[#003B09]/30" />

        <div className="container-main relative">

          <div className="grid min-h-[680px] items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">

            {/* LEFT */}

            <div className="max-w-3xl">

              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">

                <Home
                  size={15}
                  className="text-[#d5b45f]"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:text-xs">
                  Residential Plot Projects
                </span>

              </div>

              <h1 className="mt-6 text-4xl font-bold leading-[1.04] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">

                Open Plots in

                <span className="block text-[#d5b45f]">
                  Shadnagar
                </span>

              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 md:text-lg">

                Explore residential open plots and plotted
                developments across Shadnagar and nearby
                locations including Balanagar, Kallepally,
                RRR and the Bangalore Highway corridor.

              </p>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">

                <HeroPoint text="Multiple Plot Sizes" />

                <HeroPoint text="Project Information" />

                <HeroPoint text="Location Guidance" />

                <HeroPoint text="Site Visit Support" />

              </div>

              <div className="mt-9 flex flex-wrap gap-3">

                <Link
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#00540D] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#003B09]"
                >
                  Explore Plot Projects

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <Link
                  href="#enquiry"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#00540D]"
                >
                  Book Site Visit

                  <ArrowRight size={17} />
                </Link>

              </div>

            </div>

            {/* QUICK SEARCH CARD */}

            <div className="hidden lg:block">

              <div className="ml-auto max-w-[410px] rounded-[30px] border border-white/20 bg-white/95 p-7 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf3ea] text-[#00540D]">

                    <Sparkles size={21} />

                  </div>

                  <div>

                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00540D]">
                      Find Your Plot
                    </p>

                    <h2 className="mt-1 text-xl font-bold text-black">
                      Explore Shadnagar
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
                    text="Different plot size options"
                  />

                  <QuickItem
                    icon={<FileCheck2 size={16} />}
                    text="Project approval information"
                  />

                  <QuickItem
                    icon={<ShieldCheck size={16} />}
                    text="Project information before site visit"
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

          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">

            <div className="max-w-3xl">

              <p className="brand-label">
                Open Plots in Shadnagar
              </p>

              <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-black md:text-5xl">

                Find Residential Plots
                <span className="block text-[#00540D]">
                  Around Shadnagar
                </span>

              </h2>

              <p className="mt-6 text-base leading-8 text-[#68716B] md:text-lg">
  Shadnagar has a growing market for residential
  land and plotted developments, with listings
  available across different locations and plot
  sizes.
</p>
              <p className="mt-5 text-base leading-8 text-[#68716B]">

                OpenPlots Shadnagar brings project information
                together so buyers can compare location,
                plot dimensions, pricing, project features and
                applicable approval information before arranging
                a site visit.

              </p>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <StatCard
                icon={<MapPin size={21} />}
                value="Shadnagar"
                label="Primary Location"
              />

              <StatCard
                icon={<Ruler size={21} />}
                value="147+"
                label="Sq. Yd Options"
              />

              <StatCard
                icon={<Home size={21} />}
                value="Residential"
                label="Plot Projects"
              />

              <StatCard
                icon={<ShieldCheck size={21} />}
                value="Project"
                label="Information"
              />

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PROJECTS
      ====================================================== */}

      <section
        id="projects"
        className="section-padding bg-[#f7faf7]"
      >

        <div className="container-main">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div className="max-w-3xl">

              <p className="brand-label">
                Featured Plot Projects
              </p>

              <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-black md:text-5xl">

                Open Plots for Sale
                <span className="block text-[#00540D]">
                  Near Shadnagar
                </span>

              </h2>

              <p className="mt-5 text-base leading-8 text-[#68716B] md:text-lg">

                Explore featured residential, commercial and
                farm land projects around Shadnagar and
                connected growth corridors.

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

            {featuredProjects.map(
              (project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                />
              )
            )}

          </div>

        </div>

      </section>

      {/* =====================================================
          WHY SHADNAGAR
      ====================================================== */}

      <section className="section-padding bg-white">

        <div className="container-main">

          <div className="mx-auto max-w-3xl text-center">

            <p className="brand-label">
              Why Explore Shadnagar?
            </p>

            <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

            <h2 className="mt-5 text-3xl font-bold text-black md:text-5xl">

              A Growing Location for
              <span className="block text-[#00540D]">
                Plot Opportunities
              </span>

            </h2>

            <p className="mt-5 text-base leading-8 text-[#68716B]">

              When evaluating an open plot, location,
              connectivity, surrounding development,
              documentation and project fundamentals should
              all be considered together.

            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            <WhyCard
              number="01"
              title="Connectivity"
              text="Compare access to Shadnagar, major roads and nearby growth corridors."
            />

            <WhyCard
              number="02"
              title="Plot Choices"
              text="Different projects can offer different plot dimensions and property types."
            />

            <WhyCard
              number="03"
              title="Project Details"
              text="Review project-specific documentation, location and available facilities."
            />

            <WhyCard
              number="04"
              title="Site Visit"
              text="Visit the actual location before making your final property decision."
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          LOCATION KEYWORDS
      ====================================================== */}

      <section className="section-padding bg-[#f7faf7]">

        <div className="container-main">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>

              <p className="brand-label">
                Nearby Plot Locations
              </p>

              <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

              <h2 className="mt-5 text-3xl font-bold text-black md:text-5xl">

                Explore Plots Around
                <span className="block text-[#00540D]">
                  Shadnagar

                </span>

              </h2>

              <p className="mt-5 leading-8 text-[#68716B]">

                Explore project opportunities in and around
                the Shadnagar region.

              </p>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              <LocationCard
                href="/locations/shadnagar"
                title="Plots in Shadnagar"
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

              <Link
                href="/farm-lands-near-shadnagar"
                className="group flex items-center justify-between rounded-2xl border border-[#dfe8e1] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#00540D]/25 hover:shadow-[0_12px_30px_rgba(0,84,13,0.07)] sm:col-span-2"
              >

                <div>

                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#00540D]">
                    Farm Land
                  </p>

                  <p className="mt-1 text-base font-bold text-black">
                    Farm Lands Near Shadnagar
                  </p>

                </div>

                <ArrowUpRight
                  size={18}
                  className="text-[#00540D] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />

              </Link>

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

                What Should You Check
                <span className="block text-[#00540D]">
                  Before Buying a Plot?
                </span>

              </h2>

            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">

              <GuideItem
                title="1. Exact Location"
                text="Visit the actual project location and compare road access, surrounding development and nearby landmarks."
              />

              <GuideItem
                title="2. Plot Dimensions"
                text="Confirm the exact square-yard measurement, plot boundaries, facing, road width and layout position."
              />

              <GuideItem
                title="3. Approval Information"
                text="Review applicable HMDA, DTCP, RERA or other project documentation where relevant."
              />

              <GuideItem
                title="4. Legal Verification"
                text="Have the relevant title and property documents independently reviewed before purchasing."
              />

              <GuideItem
                title="5. Total Cost"
                text="Ask about the complete purchase cost and any applicable registration or development charges."
              />

              <GuideItem
                title="6. Site Visit"
                text="A physical site visit helps you evaluate the location and project conditions for yourself."
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

          <div className="mx-auto max-w-4xl">

            <p className="brand-label text-center">
              Shadnagar Plot Guide
            </p>

            <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

            <h2 className="mt-5 text-center text-3xl font-bold text-black md:text-5xl">

              Open Plots in Shadnagar:
              <span className="block text-[#00540D]">
                A Practical Buying Guide
              </span>

            </h2>

            <div className="mt-10 space-y-6 text-base leading-8 text-[#68716B]">

              <p>
                Open plots in Shadnagar are available across
                different project types and locations. Buyers
                looking for residential plots can compare
                project location, plot size, access roads,
                surrounding development, documentation and
                pricing before selecting a property.

              </p>

              <p>
  The broader Shadnagar region includes locations
  such as Balanagar and Kallepally, while several
  projects are positioned around major road and
  growth corridors. Current property marketplaces
  also show a wide range of residential plot
  listings in Shadnagar, which means buyers should
  compare individual projects rather than relying
  only on headline pricing.
</p>

              <p>
                If you are searching for plots near the RRR or
                Bangalore Highway, confirm the exact project
                location and distance from the road. Approval
                information should also be checked against the
                latest project documentation.

              </p>

              <p>
                OpenPlots Shadnagar is designed to make this
                process easier by bringing project information,
                locations, plot sizes and enquiry options into
                one place. After comparing the available
                projects, buyers can request additional
                information or arrange a site visit.

              </p>

            </div>

          </div>

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

              Open Plots in Shadnagar
              <span className="block text-[#00540D]">
                FAQs
              </span>

            </h2>

            <div className="mt-10 space-y-4">

              {faqItems.map(
                (item) => (
                  <details
                    key={item.question}
                    className="group rounded-2xl border border-[#dfe8e1] bg-[#f7faf7] p-5"
                  >

                    <summary className="cursor-pointer list-none pr-6 text-sm font-bold text-black marker:hidden">

                      {item.question}

                    </summary>

                    <p className="mt-4 text-sm leading-7 text-[#68716B]">

                      {item.answer}

                    </p>

                  </details>
                )
              )}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          LEAD FORM
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

                Looking for Open Plots
                <span className="block text-[#00540D]">
                  in Shadnagar?
                </span>

              </h2>

              <p className="mt-6 leading-8 text-[#68716B]">

                Tell us your preferred plot size and budget.
                Our team can help you explore suitable project
                information and arrange a site visit.

              </p>

              <div className="mt-7 space-y-4">

                <Benefit text="Plot size options" />

                <Benefit text="Project location details" />

                <Benefit text="Project approval information" />

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

            <span className="rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold text-[#00540D] shadow-sm backdrop-blur">
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
          className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#00540D] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#003B09]"
        >
          View Project Details

          <ArrowUpRight size={16} />

        </Link>

      </div>

    </article>
  );
}

/* ============================================================
   WHY CARD
============================================================ */

function WhyCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-[24px] border border-[#dfe8e1] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00540D]/20 hover:shadow-[0_15px_35px_rgba(0,84,13,0.07)]">

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
   GUIDE ITEM
============================================================ */

function GuideItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[22px] border border-[#dfe8e1] bg-white p-6">

      <div className="flex items-start gap-3">

        <CheckCircle2
          size={19}
          className="mt-1 shrink-0 text-[#00540D]"
        />

        <div>

          <h3 className="font-bold text-black">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-7 text-[#68716B]">
            {text}
          </p>

        </div>

      </div>

    </div>
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