import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Home,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
} from "lucide-react";

import LeadForm from "../components/LeadForm";

export const metadata: Metadata = {
  title:
    "Book a Site Visit in Shadnagar | Plot Site Visit",

  description:
    "Book a site visit for open plots, residential plots and farm land projects in Shadnagar, Balanagar, RRR and nearby Bangalore Highway locations. Explore projects and plan your property visit.",

  keywords: [
    "book site visit Shadnagar",
    "plot site visit Shadnagar",
    "site visit for plots in Shadnagar",
    "book plot site visit",
    "Shadnagar plots site visit",
    "residential plot site visit Shadnagar",
    "open plots site visit Shadnagar",
    "farm land site visit Shadnagar",
    "property site visit Shadnagar",
    "plots for sale Shadnagar",
    "open plots in Shadnagar",
    "residential plots Shadnagar",
    "RERA plots Shadnagar",
  ],

  alternates: {
    canonical:
      "https://openplotsinshadnagar.com/book-site-visit",
  },

  openGraph: {
    title:
      "Book a Site Visit in Shadnagar | OpenPlots Shadnagar",

    description:
      "Schedule a site visit to explore open plots, residential plots and farm land projects around Shadnagar.",

    url:
      "https://openplotsinshadnagar.com/book-site-visit",

    siteName: "OpenPlots Shadnagar",

    type: "website",

    images: [
      {
        url: "/images/shadnagar-aerial.webp",
        width: 1200,
        height: 630,
        alt:
          "Book a site visit for plots in Shadnagar",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  {
    question:
      "How can I book a plot site visit in Shadnagar?",

    answer:
      "Submit your name, mobile number and property requirements through the enquiry form. The team can then coordinate suitable project information and a site visit.",
  },

  {
    question:
      "Which projects can I visit?",

    answer:
      "Site visit options depend on current project availability and location. You can explore residential plots, farm lands and other plotted developments listed on OpenPlots Shadnagar.",
  },

  {
    question:
      "Can I visit plots near RRR and Bangalore Highway?",

    answer:
      "Yes, projects listed around the Shadnagar, Balanagar, RRR and Bangalore Highway corridors can be considered for a site visit depending on availability.",
  },

  {
    question:
      "Should I visit the property before buying a plot?",

    answer:
      "A physical site visit is strongly recommended. It allows you to inspect the actual location, access roads, surroundings, plot dimensions and development before making a purchase decision.",
  },
];

export default function BookSiteVisitPage() {
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

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",

    name:
      "Book a Site Visit in Shadnagar",

    description:
      "Book a site visit for residential plots, open plots and farm land projects in Shadnagar.",

    url:
      "https://openplotsinshadnagar.com/book-site-visit",

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
          STRUCTURED DATA
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
            alt="Book a site visit for plots in Shadnagar"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#003B09]/95 via-[#003B09]/88 to-[#003B09]/45" />

        <div className="container-main relative">

          <div className="grid min-h-[650px] items-center gap-12 py-20 lg:grid-cols-[1fr_0.85fr]">

            {/* LEFT */}

            <div className="max-w-3xl">

              <nav
                aria-label="Breadcrumb"
                className="mb-7 text-xs text-white/60"
              >

                <Link
                  href="/"
                  className="hover:text-white"
                >
                  Home
                </Link>

                <span className="mx-2">
                  /
                </span>

                <span className="text-white">
                  Book Site Visit
                </span>

              </nav>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">

                <CalendarCheck
                  size={15}
                  className="text-[#d5b45f]"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:text-xs">
                  Property Site Visit
                </span>

              </div>

              <h1 className="mt-6 text-4xl font-bold leading-[1.04] tracking-tight text-white sm:text-5xl md:text-6xl">

                Book a Site Visit
                <span className="block text-[#d5b45f]">
                  in Shadnagar
                </span>

              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 md:text-lg">

                Explore open plots, residential plots and
                farm land projects around Shadnagar, Balanagar,
                RRR and the Bangalore Highway corridor before
                making your property decision.

              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                <HeroFeature
                  icon={<MapPin size={17} />}
                  title="Visit the Location"
                  text="See the actual project"
                />

                <HeroFeature
                  icon={<Ruler size={17} />}
                  title="Check Plot Options"
                  text="Compare sizes and layouts"
                />

                <HeroFeature
                  icon={<FileCheck2 size={17} />}
                  title="Project Information"
                  text="Understand available details"
                />

                <HeroFeature
                  icon={<ShieldCheck size={17} />}
                  title="Make an Informed Choice"
                  text="Review before purchasing"
                />

              </div>

            </div>

            {/* FORM */}

            <div
              id="enquiry"
              className="rounded-[30px] border border-white/20 bg-white p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)] md:p-8"
            >

              <div className="mb-6">

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#00540D]">
                  Site Visit Request
                </p>

                <h2 className="mt-2 text-2xl font-bold text-black md:text-3xl">
                  Tell Us What You Need
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#68716B]">
                  Share your requirements and our team
                  will contact you about suitable projects.
                </p>

              </div>

              <LeadForm />

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          WHY VISIT
      ====================================================== */}

      <section className="section-padding bg-white">

        <div className="container-main">

          <div className="mx-auto max-w-3xl text-center">

            <p className="brand-label">
              Before You Buy
            </p>

            <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

            <h2 className="mt-5 text-3xl font-bold text-black md:text-5xl">

              Why a Site Visit
              <span className="block text-[#00540D]">
                Matters
              </span>

            </h2>

            <p className="mt-5 leading-8 text-[#68716B]">

              Photos and brochures cannot replace seeing the
              actual property. A site visit helps you understand
              the location before making a decision.

            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            <VisitCard
              number="01"
              icon={<MapPin size={21} />}
              title="Check Location"
              text="Visit the actual project and understand its surroundings and accessibility."
            />

            <VisitCard
              number="02"
              icon={<Ruler size={21} />}
              title="Check Plot"
              text="Understand plot size, dimensions, orientation and the actual layout."
            />

            <VisitCard
              number="03"
              icon={<FileCheck2 size={21} />}
              title="Review Details"
              text="Discuss project documents, approvals and available project information."
            />

            <VisitCard
              number="04"
              icon={<Home size={21} />}
              title="Compare Options"
              text="Compare suitable projects based on your requirements and budget."
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          PROPERTY CATEGORIES
      ====================================================== */}

      <section className="section-padding bg-[#f7faf7]">

        <div className="container-main">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>

              <p className="brand-label">
                Choose Your Requirement
              </p>

              <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

              <h2 className="mt-5 text-3xl font-bold text-black md:text-5xl">

                Find the Right
                <span className="block text-[#00540D]">
                  Property Category
                </span>

              </h2>

              <p className="mt-5 leading-8 text-[#68716B]">

                Explore the category that matches what you
                are looking for and then arrange your site visit.

              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              <CategoryCard
                href="/open-plots-in-shadnagar"
                icon={<Home size={20} />}
                title="Open Plots"
                text="Explore open plots in Shadnagar"
              />

              <CategoryCard
                href="/plots-for-sale-in-shadnagar"
                icon={<Ruler size={20} />}
                title="Plots for Sale"
                text="Compare available plot projects"
              />

              <CategoryCard
                href="/rera-approved-plots-in-shadnagar"
                icon={<ShieldCheck size={20} />}
                title="RERA Plots"
                text="Explore RERA registered projects"
              />

              <CategoryCard
                href="/farm-lands-near-shadnagar"
                icon={<MapPin size={20} />}
                title="Farm Lands"
                text="Explore farm land projects"
              />

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SIMPLE PROCESS
      ====================================================== */}

      <section className="section-padding bg-white">

        <div className="container-main">

          <div className="mx-auto max-w-3xl text-center">

            <p className="brand-label">
              Simple Process
            </p>

            <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

            <h2 className="mt-5 text-3xl font-bold text-black md:text-5xl">

              Book Your Site Visit
              <span className="block text-[#00540D]">
                in 3 Simple Steps
              </span>

            </h2>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            <ProcessCard
              number="01"
              title="Submit Enquiry"
              text="Share your name, phone number, preferred plot size and budget."
            />

            <ProcessCard
              number="02"
              title="Discuss Projects"
              text="Get information about suitable projects and locations."
            />

            <ProcessCard
              number="03"
              title="Visit the Site"
              text="Plan your visit and inspect the actual property before deciding."
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          LOCATION
      ====================================================== */}

      <section className="section-padding bg-[#f7faf7]">

        <div className="container-main">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="brand-label">
                Shadnagar Property Locations
              </p>

              <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

              <h2 className="mt-5 text-3xl font-bold text-black md:text-5xl">

                Explore Projects Around
                <span className="block text-[#00540D]">
                  Shadnagar
                </span>

              </h2>

              <p className="mt-5 leading-8 text-[#68716B]">

                Our projects cover different locations around
                the Shadnagar growth corridor.

              </p>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              <LocationItem
                href="/open-plots-in-shadnagar"
                label="Shadnagar"
              />

              <LocationItem
                href="/plots-for-sale-in-shadnagar"
                label="Shadnagar Plots"
              />

              <LocationItem
                href="/hmda-plots-in-shadnagar"
                label="HMDA Plots"
              />

              <LocationItem
                href="/farm-lands-near-shadnagar"
                label="Farm Lands"
              />

              <LocationItem
                href="/projects"
                label="All Projects"
              />

              <LocationItem
                href="/contact"
                label="Contact Us"
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
              Site Visit Guide
            </p>

            <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

            <h2 className="mt-5 text-center text-3xl font-bold text-black md:text-5xl">

              Book a Site Visit for
              <span className="block text-[#00540D]">
                Plots in Shadnagar
              </span>

            </h2>

            <div className="mt-10 space-y-6 text-base leading-8 text-[#68716B]">

              <p>
                If you are searching for plots for sale in
                Shadnagar, visiting the actual property is an
                important part of the buying process. A site
                visit allows you to understand the project's
                location, surrounding development, road access
                and available plot options.
              </p>

              <p>
                Buyers looking for open plots in Shadnagar,
                residential plots near RRR or farm lands around
                the Bangalore Highway can use a site visit to
                compare different property options.
              </p>

              <p>
                Before visiting, it is useful to define your
                preferred plot size and budget. You can then
                discuss suitable projects with the sales team
                and focus your visit on properties matching
                your requirements.
              </p>

              <p>
                During the visit, inspect the actual project
                location, approach roads, surrounding properties,
                plot dimensions and available development.
                Project approvals and property documentation
                should also be reviewed and independently
                verified before making a purchase.
              </p>

              <p>
                OpenPlots Shadnagar helps prospective buyers
                discover selected plot and land projects and
                request a site visit. Submit your enquiry to
                start the process.
              </p>

            </div>

          </article>

        </div>

      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}

      <section className="section-padding bg-[#f7faf7]">

        <div className="container-main">

          <div className="mx-auto max-w-3xl">

            <p className="brand-label text-center">
              Frequently Asked Questions
            </p>

            <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

            <h2 className="mt-5 text-center text-3xl font-bold text-black md:text-5xl">

              Site Visit FAQs
              <span className="block text-[#00540D]">
                Shadnagar Plots
              </span>

            </h2>

            <div className="mt-10 space-y-4">

              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-2xl border border-[#dfe8e1] bg-white p-5"
                >

                  <summary className="cursor-pointer list-none text-sm font-bold text-black">
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
                Ready to Visit a Plot Project?
              </h2>

              <p className="mt-3 text-sm text-white/70">
                Submit your enquiry and plan your site visit.
              </p>

            </div>

            <a
              href="#enquiry"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#00540D] transition hover:bg-[#eaf3ea]"
            >
              Book Site Visit

              <ArrowUpRight size={17} />

            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

/* ============================================================
   HERO FEATURE
============================================================ */

function HeroFeature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3">

      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#d5b45f]">
        {icon}
      </div>

      <div>

        <p className="text-sm font-bold text-white">
          {title}
        </p>

        <p className="mt-0.5 text-xs text-white/60">
          {text}
        </p>

      </div>

    </div>
  );
}

/* ============================================================
   VISIT CARD
============================================================ */

function VisitCard({
  number,
  icon,
  title,
  text,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-[24px] border border-[#dfe8e1] bg-white p-7 shadow-[0_8px_25px_rgba(0,84,13,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,84,13,0.08)]">

      <div className="flex items-center justify-between">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf3ea] text-[#00540D]">
          {icon}
        </div>

        <span className="text-xs font-bold tracking-[0.15em] text-[#00540D]">
          {number}
        </span>

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
   CATEGORY CARD
============================================================ */

function CategoryCard({
  href,
  icon,
  title,
  text,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-[22px] border border-[#dfe8e1] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00540D]/25 hover:shadow-[0_15px_35px_rgba(0,84,13,0.08)]"
    >

      <div className="flex items-center justify-between">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf3ea] text-[#00540D]">
          {icon}
        </div>

        <ArrowUpRight
          size={17}
          className="text-[#00540D] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />

      </div>

      <h3 className="mt-6 text-lg font-bold text-black">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#68716B]">
        {text}
      </p>

    </Link>
  );
}

/* ============================================================
   PROCESS CARD
============================================================ */

function ProcessCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <article className="relative rounded-[24px] border border-[#dfe8e1] bg-[#f7faf7] p-7">

      <span className="text-xs font-bold tracking-[0.15em] text-[#00540D]">
        STEP {number}
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
   LOCATION ITEM
============================================================ */

function LocationItem({
  href,
  label,
}: {
  href: string;
  label: string;
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
          {label}
        </span>

      </div>

      <ArrowUpRight
        size={16}
        className="text-[#00540D]"
      />

    </Link>
  );
}