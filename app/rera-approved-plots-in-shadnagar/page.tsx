import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  FileCheck2,
  Home,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
} from "lucide-react";

import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title:
    "RERA Approved Plots in Shadnagar | RERA Registered Plots",

  description:
    "Explore RERA registered residential plots in Shadnagar and nearby areas. Compare RERA project registration details, plot sizes, prices, locations and project information before booking a site visit.",

  keywords: [
    "RERA approved plots in Shadnagar",
    "RERA plots in Shadnagar",
    "RERA registered plots in Shadnagar",
    "RERA approved plots Shadnagar",
    "RERA projects in Shadnagar",
    "RERA registered projects Shadnagar",
    "RERA residential plots Shadnagar",
    "RERA plots for sale in Shadnagar",
    "RERA plots near Shadnagar",
    "RERA plots near RRR",
    "RERA plots near Bangalore Highway",
    "RERA approved open plots Shadnagar",
    "RERA land projects Shadnagar",
  ],

  alternates: {
    canonical:
      "https://openplotsinshadnagar.com/rera-approved-plots-in-shadnagar",
  },

  openGraph: {
    title:
      "RERA Approved Plots in Shadnagar | OpenPlots Shadnagar",

    description:
      "Explore RERA registered plot projects in Shadnagar and nearby locations. Compare registration details, plot sizes, prices and locations.",

    url:
      "https://openplotsinshadnagar.com/rera-approved-plots-in-shadnagar",

    siteName: "OpenPlots Shadnagar",

    type: "website",

    images: [
      {
        url: "/images/shadnagar-aerial.webp",
        width: 1200,
        height: 630,
        alt:
          "RERA approved plots in Shadnagar",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

/*
 * IMPORTANT:
 *
 * Only add a project here after verifying its RERA
 * registration information.
 *
 * Based on the project information you supplied:
 *
 * Green Medows
 * RERA: P01400008728
 *
 * Golden Terra
 * RERA: P02400010212
 */

const reraProjects = projects.filter((project) =>
  [
    "green-medows",
    "golden-terra",
  ].includes(project.slug)
);

const faqs = [
  {
    question:
      "What are RERA approved plots in Shadnagar?",

    answer:
      "RERA registered plotted developments are projects registered with the Telangana Real Estate Regulatory Authority where the project is covered by the applicable real estate regulatory requirements. Buyers should verify the project's registration details directly with TG RERA before purchasing.",
  },

  {
    question:
      "How can I verify a RERA project in Shadnagar?",

    answer:
      "Check the project's RERA registration number and verify the project on the official Telangana RERA portal. Buyers should also review the project documents, promoter details and registration status before making a purchase.",
  },

  {
    question:
      "Are there RERA registered plots for sale in Shadnagar?",

    answer:
      "Yes, RERA registered plotted developments are available in and around Shadnagar. Availability, pricing and registration status can change, so buyers should verify the current project information before booking.",
  },

  {
    question:
      "What is the difference between RERA and HMDA approval?",

    answer:
      "RERA registration and layout or planning approvals are different regulatory matters. A project may have multiple applicable approvals or registrations. Buyers should verify the specific documents and authorities applicable to the project.",
  },

  {
    question:
      "Can I visit a RERA registered plot project before buying?",

    answer:
      "Yes. A site visit is recommended so you can inspect the actual location, roads, surroundings, plot dimensions and project development before making a purchase decision.",
  },
];

export default function ReraApprovedPlotsPage() {
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",

    name:
      "RERA Approved Plots in Shadnagar",

    description:
      "Explore RERA registered residential plot projects in Shadnagar and nearby locations.",

    url:
      "https://openplotsinshadnagar.com/rera-approved-plots-in-shadnagar",

    isPartOf: {
      "@type": "WebSite",
      name: "OpenPlots Shadnagar",
      url:
        "https://openplotsinshadnagar.com/",
    },
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",

    name:
      "RERA Registered Plot Projects in Shadnagar",

    numberOfItems:
      reraProjects.length,

    itemListElement:
      reraProjects.map((project, index) => ({
        "@type": "ListItem",

        position: index + 1,

        name: project.name,

        url:
          `https://openplotsinshadnagar.com/projects/${project.slug}`,
      })),
  };

  const faqSchema = {
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
  };

  return (
    <main className="bg-white">

      {/* =====================================================
          SCHEMA
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(faqSchema),
        }}
      />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#003B09]">

        <div className="absolute inset-0">

          <Image
            src="/images/shadnagar-aerial.webp"
            alt="RERA registered plots in Shadnagar"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#003B09]/95 via-[#003B09]/85 to-[#003B09]/30" />

        <div className="container-main relative">

          <div className="grid min-h-[680px] items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">

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
                  RERA Plots
                </span>

              </nav>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">

                <BadgeCheck
                  size={16}
                  className="text-[#d5b45f]"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:text-xs">
                  RERA Registered Projects
                </span>

              </div>

              <h1 className="mt-6 text-4xl font-bold leading-[1.04] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">

                RERA Approved Plots in

                <span className="block text-[#d5b45f]">
                  Shadnagar
                </span>

              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 md:text-lg">

                Explore RERA registered plotted developments
                in and around Shadnagar. Compare project
                registration details, plot sizes, locations
                and prices before planning your site visit.

              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                <HeroPoint
                  text="RERA Registration Details"
                />

                <HeroPoint
                  text="Residential Plot Options"
                />

                <HeroPoint
                  text="Project Location Details"
                />

                <HeroPoint
                  text="Site Visit Assistance"
                />

              </div>

              <div className="mt-9 flex flex-wrap gap-3">

                <Link
                  href="#rera-projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#00540D] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#002f07]"
                >
                  View RERA Projects

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

            {/* HERO CARD */}

            <div className="hidden lg:block">

              <div className="ml-auto max-w-[410px] rounded-[30px] border border-white/20 bg-white/95 p-7 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf3ea] text-[#00540D]">

                    <BadgeCheck size={24} />

                  </div>

                  <div>

                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#00540D]">
                      Project Verification
                    </p>

                    <h2 className="mt-1 text-xl font-bold text-black">
                      Check RERA Details
                    </h2>

                  </div>

                </div>

                <p className="mt-5 text-sm leading-6 text-[#68716B]">

                  Always verify the project's current RERA
                  registration information and documents
                  before purchasing.

                </p>

                <div className="mt-6 space-y-3">

                  <SummaryItem
                    icon={<FileCheck2 size={17} />}
                    text="RERA registration number"
                  />

                  <SummaryItem
                    icon={<ShieldCheck size={17} />}
                    text="Project registration status"
                  />

                  <SummaryItem
                    icon={<MapPin size={17} />}
                    text="Actual project location"
                  />

                  <SummaryItem
                    icon={<Ruler size={17} />}
                    text="Plot size and availability"
                  />

                </div>

                <Link
                  href="#rera-projects"
                  className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-[#00540D] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#003B09]"
                >
                  Explore Projects

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
                RERA Registered Plots
              </p>

              <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-black md:text-5xl">

                Find RERA Registered
                <span className="block text-[#00540D]">
                  Plot Projects in Shadnagar
                </span>

              </h2>

              <p className="mt-6 text-base leading-8 text-[#68716B] md:text-lg">

                RERA registration is an important part of
                property research for applicable real estate
                projects. Buyers should check the project's
                registration number and verify the current
                information through the Telangana RERA
                authority before making a purchase.

              </p>

              <p className="mt-5 leading-8 text-[#68716B]">

                Our RERA plots page brings together selected
                projects with the registration information
                supplied for those projects, making it easier
                to start your property research.

              </p>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <StatCard
                icon={<BadgeCheck size={21} />}
                value="RERA"
                label="Registration"
              />

              <StatCard
                icon={<FileCheck2 size={21} />}
                value="Project"
                label="Documents"
              />

              <StatCard
                icon={<MapPin size={21} />}
                value="Shadnagar"
                label="Location"
              />

              <StatCard
                icon={<ShieldCheck size={21} />}
                value="Verify"
                label="Before Buying"
              />

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          RERA PROJECTS
      ====================================================== */}

      <section
        id="rera-projects"
        className="section-padding bg-[#f7faf7]"
      >

        <div className="container-main">

          <div className="max-w-3xl">

            <p className="brand-label">
              RERA Project Listings
            </p>

            <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-black md:text-5xl">

              RERA Registered Plots
              <span className="block text-[#00540D]">
                Near Shadnagar
              </span>

            </h2>

            <p className="mt-5 text-base leading-8 text-[#68716B] md:text-lg">

              Explore projects with RERA registration
              information supplied for this website.

            </p>

          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2">

            {reraProjects.map((project) => (
              <ReraProjectCard
                key={project.slug}
                project={project}
              />
            ))}

          </div>

          {reraProjects.length === 0 && (
            <div className="mt-10 rounded-2xl border border-[#dfe8e1] bg-white p-8 text-center">

              <p className="text-sm text-[#68716B]">
                RERA project information will be added
                after verification.
              </p>

            </div>
          )}

        </div>

      </section>

      {/* =====================================================
          WHY VERIFY
      ====================================================== */}

      <section className="section-padding bg-white">

        <div className="container-main">

          <div className="mx-auto max-w-3xl text-center">

            <p className="brand-label">
              Buyer Protection
            </p>

            <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

            <h2 className="mt-5 text-3xl font-bold text-black md:text-5xl">

              Why You Should Verify
              <span className="block text-[#00540D]">
                RERA Information
              </span>

            </h2>

            <p className="mt-5 leading-8 text-[#68716B]">

              Don't rely only on a brochure or sales message.
              Verify the project's official registration details
              and documents.

            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            <CheckCard
              number="01"
              title="Registration Number"
              text="Check the RERA registration number associated with the project."
            />

            <CheckCard
              number="02"
              title="Project Details"
              text="Compare the registered project information with the property being marketed."
            />

            <CheckCard
              number="03"
              title="Documents"
              text="Review applicable approvals, plans and project documentation."
            />

            <CheckCard
              number="04"
              title="Current Status"
              text="Check the current registration and project status before purchasing."
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          OFFICIAL VERIFICATION
      ====================================================== */}

      <section className="section-padding bg-[#f7faf7]">

        <div className="container-main">

          <div className="rounded-[30px] border border-[#dfe8e1] bg-white p-7 shadow-[0_12px_40px_rgba(0,84,13,0.05)] md:p-10">

            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf3ea] text-[#00540D]">

                    <ShieldCheck size={22} />

                  </div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#00540D]">
                    Official Verification
                  </p>

                </div>

                <h2 className="mt-5 text-2xl font-bold text-black md:text-3xl">

                  Verify RERA Registration Before Booking

                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-[#68716B]">

                  Telangana RERA provides online access to
                  registered project information. Always verify
                  the latest project details and registration
                  status through the official authority before
                  making a purchase decision.

                </p>

              </div>

              <a
                href="https://rera.telangana.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00540D] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#003B09]"
              >
                TG RERA Website

                <ArrowUpRight size={16} />

              </a>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          LOCATION LINKS
      ====================================================== */}

      <section className="section-padding bg-white">

        <div className="container-main">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>

              <p className="brand-label">
                More Property Searches
              </p>

              <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

              <h2 className="mt-5 text-3xl font-bold text-black md:text-5xl">

                Explore More Plots
                <span className="block text-[#00540D]">
                  Near Shadnagar
                </span>

              </h2>

              <p className="mt-5 leading-8 text-[#68716B]">

                Explore other property categories and
                location-focused pages.

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
                href="/projects"
                label="All Plot Projects"
              />

              <LocationLink
                href="/contact"
                label="Contact & Site Visit"
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
              RERA Plot Guide
            </p>

            <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

            <h2 className="mt-5 text-center text-3xl font-bold text-black md:text-5xl">

              RERA Approved Plots in Shadnagar:
              <span className="block text-[#00540D]">
                A Buyer&apos;s Guide
              </span>

            </h2>

            <div className="mt-10 space-y-6 text-base leading-8 text-[#68716B]">

              <p>
                Buyers searching for RERA approved plots in
                Shadnagar should first understand that RERA
                registration is project-specific. The presence
                of a RERA registration number should be checked
                against the exact project and promoter rather
                than assumed from a general advertisement.
              </p>

              <p>
                When searching for RERA registered plots in
                Shadnagar, compare the registration number,
                project name, promoter details and location.
                The information shown on a sales brochure should
                correspond with the registered project details.
              </p>

              <p>
                Location is also important. Buyers looking for
                RERA plots near Shadnagar RRR or the Bangalore
                Highway should confirm the exact site location
                and actual distance from major roads and
                landmarks.
              </p>

              <p>
                Plot size and price are additional factors to
                compare. Two RERA registered projects can have
                very different plot sizes, infrastructure,
                locations and pricing. A site visit can help
                buyers understand the actual property and
                surrounding development.
              </p>

              <p>
                RERA registration should not replace normal
                property due diligence. Buyers should review
                applicable title, layout, planning, registration
                and other documents and obtain appropriate
                professional advice before completing a property
                transaction.
              </p>

              <p>
                OpenPlots Shadnagar helps prospective buyers
                discover selected RERA registered plot projects,
                compare project information and request site
                visits.
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

              RERA Plots in Shadnagar
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

                  <summary className="cursor-pointer list-none pr-6 text-sm font-bold text-black">
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
          ENQUIRY
      ====================================================== */}

      <section
        id="enquiry"
        className="section-padding bg-[#f7faf7]"
      >

        <div className="container-main">

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

            <div className="max-w-xl">

              <p className="brand-label">
                RERA Plot Enquiry
              </p>

              <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

              <h2 className="mt-5 text-3xl font-bold text-black md:text-5xl">

                Looking for RERA
                <span className="block text-[#00540D]">
                  Plots in Shadnagar?
                </span>

              </h2>

              <p className="mt-6 leading-8 text-[#68716B]">

                Share your preferred plot size and budget.
                Get project information and arrange a site
                visit.

              </p>

              <div className="mt-7 space-y-4">

                <Benefit text="RERA project information" />

                <Benefit text="Plot size details" />

                <Benefit text="Project location" />

                <Benefit text="Site visit coordination" />

              </div>
<a
  href="tel:+919959354255"
  className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#00540D]"
>
  <Phone size={17} />
  Call for Plot Details
</a>

            </div>

            <div>
              {/* Reuse your existing LeadForm */}
              {/* Make sure its styling follows your white/green theme */}
              {/* and change its heading to RERA Plot Enquiry if required. */}

              <div
                id="lead-form"
                className="rounded-[28px] border border-[#dfe8e1] bg-white p-6 shadow-[0_15px_45px_rgba(0,84,13,0.07)] md:p-8"
              >

                <h3 className="text-2xl font-bold text-black">
                  Request RERA Plot Details
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#68716B]">
                  Tell us your requirements and our team
                  will contact you.
                </p>

                <Link
                  href="/book-site-visit"
                  className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-[#00540D] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#003B09]"
                >
                  Request Site Visit

                  <ArrowRight size={17} />

                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-[#003B09]">

        <div className="container-main py-16">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d5b45f]">
                OpenPlots Shadnagar
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Explore RERA Registered Plot Projects
              </h2>

              <p className="mt-3 text-sm text-white/70">
                Verify project information and plan your site visit.
              </p>

            </div>

            <Link
              href="#enquiry"
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
   RERA PROJECT CARD
============================================================ */

function ReraProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const reraNumber =
    project.slug === "green-medows"
      ? "P01400008728"
      : project.slug === "golden-terra"
        ? "P02400010212"
        : null;

  return (
    <article className="group overflow-hidden rounded-[28px] border border-[#dfe8e1] bg-white shadow-[0_8px_30px_rgba(0,84,13,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-[#00540D]/20 hover:shadow-[0_22px_50px_rgba(0,84,13,0.12)]">

      {/* IMAGE */}

      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.name}`}
        className="block"
      >

        <div className="relative aspect-[16/9] overflow-hidden bg-[#eaf3ea]">

          <Image
            src={`/images/projects/${project.slug}.webp`}
            alt={`${project.name} RERA registered plots in Shadnagar`}
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />

          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/75 to-transparent" />

          <div className="absolute left-4 top-4">

            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold text-[#00540D] shadow-sm">

              <BadgeCheck size={13} />

              RERA Registered

            </span>

          </div>

          <div className="absolute bottom-5 left-5 right-5">

            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/75">
              {project.location}
            </p>

            <h3 className="mt-1 text-2xl font-bold text-white">
              {project.name}
            </h3>

          </div>

        </div>

      </Link>

      {/* CONTENT */}

      <div className="p-6">

        {/* RERA */}

        {reraNumber && (
          <div className="rounded-xl bg-[#eaf3ea] p-4">

            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#00540D]">
              RERA Registration Number
            </p>

            <p className="mt-1 text-lg font-bold text-black">
              {reraNumber}
            </p>

          </div>
        )}

        <div className="mt-5 flex items-start gap-2 text-sm leading-6 text-[#68716B]">

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

        <div className="mt-5 border-t border-[#edf2ed] pt-5">

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
   CHECK CARD
============================================================ */

function CheckCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-[24px] border border-[#dfe8e1] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,84,13,0.07)]">

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