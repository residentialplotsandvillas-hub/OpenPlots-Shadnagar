import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";


import FeaturedProjects from "./components/FeaturedProjects";
import WhyShadnagar from "./components/WhyShadnagar";
import LeadForm from "./components/LeadForm";
import Hero from "./components/Hero";
import FAQSection, {
  faqs,
} from "./components/FAQSection";
import FAQSchema from "./components/FAQSchema";

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title:
    "Open Plots in Shadnagar | Plots for Sale Near RRR & Bangalore Highway",

  description:
    "Explore open plots, residential plots and farm lands in and around Shadnagar, RRR, Balanagar, Kallepally and the Bangalore Highway corridor. Compare projects, plot sizes, prices and approvals.",

  keywords: [
    "open plots in Shadnagar",
    "plots for sale in Shadnagar",
    "residential plots in Shadnagar",
    "farm lands near Shadnagar",
    "plots near Shadnagar RRR",
    "plots near Bangalore Highway",
    "HMDA plots in Shadnagar",
    "RERA approved plots in Shadnagar",
    "plotted developments near Shadnagar",
  ],

  alternates: {
    canonical:
      "https://openplotsinshadnagar.com/",
  },

  openGraph: {
    title:
      "Open Plots in Shadnagar | Plots for Sale Near RRR",

    description:
      "Explore residential plots, commercial plots and farm lands around Shadnagar, RRR, Balanagar, Kallepally and the Bangalore Highway corridor.",

    url:
      "https://openplotsinshadnagar.com/",

    siteName:
      "Open Plots in Shadnagar",

    type: "website",

    locale: "en_IN",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

/* =========================================================
   HOME PAGE
========================================================= */

export default function HomePage() {
  /* =======================================================
     ORGANIZATION / WEBSITE SCHEMA
  ======================================================== */

  const websiteSchema = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "WebSite",

        "@id":
          "https://openplotsinshadnagar.com/#website",

        url:
          "https://openplotsinshadnagar.com/",

        name:
          "Open Plots in Shadnagar",

        description:
          "Open plots, residential plots and farm lands near Shadnagar.",

        inLanguage: "en-IN",
      },

      {
        "@type": "Organization",

        "@id":
          "https://openplotsinshadnagar.com/#organization",

        name:
          "Open Plots in Shadnagar",

        url:
          "https://openplotsinshadnagar.com/",
      },
    ],
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
    <>
      {/* =====================================================
          STRUCTURED DATA
      ====================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

     

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqSchema),
  }}
/>

      <main>

        {/* ===================================================
            HERO
        ==================================================== */}


        <section className="relative isolate min-h-[680px] overflow-hidden bg-[#003B09]">

          {/* Background Image */}

         <Hero/>

                {/* Trust points */}

                
        </section>

        {/* ===================================================
            QUICK SEARCH / SALES BAR
        ==================================================== */}

        <section className="relative z-10 -mt-8">

          <div className="container-main">

            <div className="rounded-2xl border border-[#e1e8e1] bg-white p-5 shadow-[0_15px_45px_rgba(0,84,13,0.10)] md:p-7">

              <div className="grid gap-5 md:grid-cols-3">

                <QuickItem
                  icon={<MapPin size={19} />}
                  title="Prime Locations"
                  description="Shadnagar, RRR, Balanagar & nearby"
                />

                <QuickItem
                  icon={<Ruler size={19} />}
                  title="Multiple Plot Sizes"
                  description="Choose according to your requirement"
                />

                <QuickItem
                  icon={<ShieldCheck size={19} />}
                  title="Project Information"
                  description="Compare available project details"
                />

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            INTRODUCTION
        ==================================================== */}

        <section className="section-padding bg-white">

          <div className="container-main">

            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

              {/* Content */}

              <div>

                <p className="brand-label">
                  Open Plots in Shadnagar
                </p>

                <div className="mt-4 green-line" />

                <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-black md:text-5xl">
                  Find Residential Plots &
                  <span className="block text-[#00540D]">
                    Farm Lands Near Shadnagar
                  </span>
                </h2>

                <div className="mt-6 space-y-5 text-[16px] leading-8 text-[#53605A]">

                  <p>
                    Looking for{" "}
                    <strong className="font-semibold text-black">
                      open plots in Shadnagar
                    </strong>
                    ? Explore plotted developments,
                    residential plots, commercial plots
                    and farm land options in and around
                    one of the growing property corridors
                    of Telangana.
                  </p>

                  <p>
                    Our project listings bring together
                    useful information such as location,
                    plot sizes, listed pricing, project
                    type and available approval information
                    so that buyers can compare properties
                    before planning a site visit.
                  </p>

                  <p>
                    Explore projects around Shadnagar,
                    Balanagar, Kallepally, RRR, Polepally
                    SEZ, Jadcherla and the Bangalore Highway
                    corridor.
                  </p>

                </div>

                <div className="mt-8 flex flex-wrap gap-3">

                  <Link
                    href="/open-plots-in-shadnagar"
                    className="inline-flex items-center gap-2 rounded-full bg-[#00540D] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#003B09]"
                  >
                    Explore Open Plots

                    <ArrowUpRight size={16} />
                  </Link>

                  <Link
                    href="/plots-for-sale-in-shadnagar"
                    className="inline-flex items-center gap-2 rounded-full border border-[#dce5dd] px-6 py-3.5 text-sm font-semibold text-[#00540D] transition hover:border-[#00540D] hover:bg-[#f3f8f3]"
                  >
                    Plots for Sale

                    <ArrowRight size={16} />
                  </Link>

                </div>

              </div>

              {/* Feature Card */}

              <div className="relative overflow-hidden rounded-[28px] bg-[#f7faf7] p-7 md:p-9">

                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#00540D]/5 blur-3xl" />

                <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-[#00540D]">
                  Explore Property Options
                </p>

                <h3 className="relative mt-4 text-2xl font-bold text-black md:text-3xl">
                  Choose the right project for your requirement.
                </h3>

                <div className="relative mt-7 space-y-4">

                  <FeatureRow
                    title="Residential Plots"
                    description="Explore residential plotted developments."
                    href="/plots-for-sale-in-shadnagar"
                  />

                  <FeatureRow
                    title="Farm Lands"
                    description="Discover farmland options near Shadnagar."
                    href="/farm-lands-near-shadnagar"
                  />

                  <FeatureRow
                    title="HMDA Plots"
                    description="Explore projects with applicable HMDA details."
                    href="/hmda-plots-in-shadnagar"
                  />

                  <FeatureRow
                    title="RERA Projects"
                    description="View projects with applicable RERA information."
                    href="/rera-approved-plots-in-shadnagar"
                  />

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            FEATURED PROJECTS
        ==================================================== */}

        <FeaturedProjects />

        {/* ===================================================
            PROJECT CATEGORY SECTION
        ==================================================== */}

        <section className="section-padding bg-[#f7faf7]">

          <div className="container-main">

            <div className="max-w-3xl">

              <p className="brand-label">
                Property Options
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-black md:text-5xl">
                Explore Plots Based on
                <span className="block text-[#00540D]">
                  Your Requirement
                </span>
              </h2>

              <p className="mt-5 text-base leading-8 text-[#68716B] md:text-lg">
                Compare different types of plotted
                developments and property opportunities
                around Shadnagar and nearby growth corridors.
              </p>

            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">

              <CategoryCard
                href="/plots-for-sale-in-shadnagar"
                title="Residential Plots"
                description="Explore residential plots for buyers looking for plotted developments around Shadnagar."
                icon={<BuildingIcon />}
              />

              <CategoryCard
                href="/farm-lands-near-shadnagar"
                title="Farm Lands"
                description="Discover farm land projects around Kallepally, Balanagar and the Shadnagar region."
                icon={<Sparkles size={22} />}
              />

              <CategoryCard
                href="/hmda-plots-in-shadnagar"
                title="Approved Projects"
                description="Explore applicable HMDA, RERA and DTCP project information before your site visit."
                icon={<ShieldCheck size={22} />}
              />

            </div>

          </div>

        </section>

        {/* ===================================================
            WHY SHADNAGAR
        ==================================================== */}

        <WhyShadnagar />

        {/* ===================================================
            LOCATION / CONNECTIVITY
        ==================================================== */}

        <section className="section-padding bg-white">

          <div className="container-main">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div>

                <p className="brand-label">
                  Location Advantage
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-black md:text-5xl">
                  Explore Property Around
                  <span className="block text-[#00540D]">
                    Shadnagar & RRR
                  </span>
                </h2>

                <p className="mt-6 leading-8 text-[#68716B]">
                  Shadnagar and its surrounding areas have
                  become an important property corridor with
                  connectivity towards Hyderabad, the RRR
                  corridor, Bangalore Highway and nearby
                  employment and industrial locations.
                </p>

                <div className="mt-8 space-y-4">

                  <LocationPoint
                    title="Shadnagar"
                    description="Explore residential plots and plotted developments in Shadnagar."
                    href="/locations/shadnagar"
                  />

                  <LocationPoint
                    title="Balanagar & Kallepally"
                    description="Explore residential and farmland projects around Balanagar."
                    href="/locations/balanagar"
                  />

                  <LocationPoint
                    title="RRR & Bangalore Highway"
                    description="Discover projects positioned around important connectivity corridors."
                    href="/locations/shadnagar"
                  />

                  <LocationPoint
                    title="Jadcherla & Polepally SEZ"
                    description="Explore plotted developments around Jadcherla and Polepally SEZ."
                    href="/locations/jadcherla"
                  />

                </div>

              </div>

              {/* Location Visual */}

              <div className="relative overflow-hidden rounded-[30px] bg-[#003B09] p-8 text-white md:p-10">

                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

                <div className="relative">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                    <MapPin size={25} />
                  </div>

                  <h3 className="mt-7 text-2xl font-bold md:text-3xl">
                    Shadnagar Property Corridor
                  </h3>

                  <p className="mt-4 max-w-md leading-7 text-white/70">
                    Compare projects based on location,
                    plot sizes, pricing, project type and
                    available project information.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-3">

                    <StatBox
                      title="Shadnagar"
                      value="Location"
                    />

                    <StatBox
                      title="RRR"
                      value="Connectivity"
                    />

                    <StatBox
                      title="Balanagar"
                      value="Projects"
                    />

                    <StatBox
                      title="Jadcherla"
                      value="Nearby Corridor"
                    />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            SEO CONTENT SECTION
        ==================================================== */}

        <section className="section-padding bg-[#f7faf7]">

          <div className="container-main">

            <div className="mx-auto max-w-4xl">

              <p className="brand-label">
                Shadnagar Property Guide
              </p>

              <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
                Buying Open Plots in Shadnagar
              </h2>

              <div className="mt-7 space-y-5 text-[16px] leading-8 text-[#53605A]">

                <p>
                  If you are searching for{" "}
                  <strong className="font-semibold text-black">
                    plots for sale in Shadnagar
                  </strong>
                  , it is important to compare more than
                  just the advertised price. Location,
                  plot size, road access, project
                  development, documentation and applicable
                  approvals can all influence a property
                  purchase decision.
                </p>

                <p>
                  Buyers interested in{" "}
                  <strong className="font-semibold text-black">
                    residential plots in Shadnagar
                  </strong>{" "}
                  can explore plotted developments in
                  Shadnagar and nearby Balanagar. Buyers
                  looking for farmland can also explore
                  projects around Kallepally and the
                  surrounding region.
                </p>

                <p>
                  For buyers considering properties around
                  the RRR and Bangalore Highway corridor,
                  comparing multiple projects can make it
                  easier to understand differences in
                  location, plot dimensions, pricing and
                  project facilities.
                </p>

                <p>
                  Before purchasing any property, always
                  verify the latest project documents,
                  ownership, approvals, registration details,
                  development status and other applicable
                  records with the relevant authorities and
                  project representatives.
                </p>

              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                <InternalLink
                  href="/open-plots-in-shadnagar"
                  text="Open Plots in Shadnagar"
                />

                <InternalLink
                  href="/plots-for-sale-in-shadnagar"
                  text="Plots for Sale in Shadnagar"
                />

                <InternalLink
                  href="/farm-lands-near-shadnagar"
                  text="Farm Lands Near Shadnagar"
                />

                <InternalLink
                  href="/hmda-plots-in-shadnagar"
                  text="HMDA Plots in Shadnagar"
                />

                <InternalLink
                  href="/rera-approved-plots-in-shadnagar"
                  text="RERA Approved Plots"
                />

                <InternalLink
                  href="/projects"
                  text="View All Plot Projects"
                />

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            WHY CHOOSE US
        ==================================================== */}

        <section className="section-padding bg-white">

          <div className="container-main">

            <div className="mx-auto max-w-3xl text-center">

              <p className="brand-label">
                Buyer Assistance
              </p>

              <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
                Make Your Property Search Easier
              </h2>

              <p className="mt-5 leading-8 text-[#68716B]">
                Get project information and connect with
                the sales team to plan your property visit.
              </p>

            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">

              <ServiceCard
                icon={<TrendingUp size={22} />}
                title="Compare Projects"
                description="Review different projects, locations, plot sizes and listed pricing."
              />

              <ServiceCard
                icon={<ShieldCheck size={22} />}
                title="Review Project Details"
                description="Check the available approval and project information before visiting."
              />

              <ServiceCard
                icon={<MapPin size={22} />}
                title="Plan a Site Visit"
                description="Contact the team and arrange a visit to your preferred project."
              />

            </div>

          </div>

        </section>

        {/* ===================================================
            LEAD FORM
        ==================================================== */}

        <section className="section-padding bg-[#f7faf7]">

          <div className="container-main">

            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

              <div>

                <p className="brand-label">
                  Enquire Now
                </p>

                <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
                  Find Your Preferred Plot
                </h2>

                <p className="mt-5 leading-8 text-[#68716B]">
                  Share your requirement and our team can
                  help you with project details, availability
                  and site visit information.
                </p>

                <div className="mt-8 space-y-4">

                  <ContactPoint
                    icon={<Phone size={18} />}
                    title="Talk to Sales"
                    description="Get project information"
                  />

                  <ContactPoint
                    icon={<MapPin size={18} />}
                    title="Visit the Project"
                    description="Plan a site visit"
                  />

                  <ContactPoint
                    icon={<CheckCircle2 size={18} />}
                    title="Compare Options"
                    description="Choose based on your requirement"
                  />

                </div>

              </div>

              <div className="rounded-[28px] border border-[#e1e8e1] bg-white p-6 shadow-[0_12px_40px_rgba(0,84,13,0.07)] md:p-8">

                <LeadForm />

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            FINAL CTA
        ==================================================== */}

        <section className="bg-white py-20">

          <div className="container-main">

            <div className="relative overflow-hidden rounded-[30px] bg-[#00540D] px-7 py-14 text-center text-white md:px-12">

              <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/5 blur-3xl" />

              <div className="relative mx-auto max-w-3xl">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                  Open Plots in Shadnagar
                </p>

                <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                  Ready to Explore Your Plot Options?
                </h2>

                <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/70">
                  Explore our listed projects or contact
                  the sales team to plan a site visit.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">

                  <Link
                    href="/projects"
                    className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Explore Projects
                  </Link>

                  <Link
                    href="/book-site-visit"
                    className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Book Site Visit
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </section>
    <FAQSchema />
 
<FAQSection/>
      </main>

    
    </>
  );
}

/* ============================================================
   TRUST POINT
============================================================ */

function TrustPoint({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 text-sm text-white/80">

      <CheckCircle2
        size={16}
        className="text-[#d5b45f]"
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
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-4">

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf3ea] text-[#00540D]">
        {icon}
      </div>

      <div>
        <h2 className="text-sm font-bold text-black">
          {title}
        </h2>

        <p className="mt-1 text-xs leading-5 text-[#68716B]">
          {description}
        </p>
      </div>

    </div>
  );
}

/* ============================================================
   FEATURE ROW
============================================================ */

function FeatureRow({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-start gap-4 rounded-2xl border border-[#e1e8e1] bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00540D]/25 hover:shadow-md"
    >

      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eaf3ea] text-[#00540D]">
        <CheckCircle2 size={17} />
      </div>

      <div className="min-w-0 flex-1">

        <h3 className="text-sm font-bold text-black transition-colors group-hover:text-[#00540D]">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-5 text-[#68716B]">
          {description}
        </p>

      </div>

      <ArrowUpRight
        size={16}
        className="mt-1 shrink-0 text-[#00540D] opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
      />

    </Link>
  );
}

/* ============================================================
   CATEGORY CARD
============================================================ */

function CategoryCard({
  href,
  title,
  description,
  icon,
}: {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group rounded-[24px] border border-[#e1e8e1] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#00540D]/20 hover:shadow-[0_18px_40px_rgba(0,84,13,0.09)]"
    >

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf3ea] text-[#00540D] transition-transform duration-300 group-hover:scale-105">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-bold text-black">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-[#68716B]">
        {description}
      </p>

      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#00540D]">
        Explore

        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>

    </Link>
  );
}

/* ============================================================
   LOCATION POINT
============================================================ */

function LocationPoint({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex gap-4 rounded-2xl border border-[#e1e8e1] bg-white p-4 transition-all duration-300 hover:border-[#00540D]/25 hover:shadow-sm"
    >

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaf3ea] text-[#00540D]">
        <MapPin size={18} />
      </div>

      <div className="flex-1">

        <h3 className="text-sm font-bold text-black group-hover:text-[#00540D]">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-5 text-[#68716B]">
          {description}
        </p>

      </div>

      <ArrowUpRight
        size={16}
        className="mt-1 text-[#00540D] opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
      />

    </Link>
  );
}

/* ============================================================
   STAT BOX
============================================================ */

function StatBox({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">

      <p className="text-sm font-bold">
        {title}
      </p>

      <p className="mt-1 text-xs text-white/50">
        {value}
      </p>

    </div>
  );
}

/* ============================================================
   SERVICE CARD
============================================================ */

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[24px] border border-[#e1e8e1] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,84,13,0.08)]">

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf3ea] text-[#00540D]">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-bold text-black">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-[#68716B]">
        {description}
      </p>

    </div>
  );
}

/* ============================================================
   CONTACT POINT
============================================================ */

function ContactPoint({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaf3ea] text-[#00540D]">
        {icon}
      </div>

      <div>
        <p className="text-sm font-bold text-black">
          {title}
        </p>

        <p className="mt-1 text-xs text-[#68716B]">
          {description}
        </p>
      </div>

    </div>
  );
}

/* ============================================================
   INTERNAL SEO LINK
============================================================ */

function InternalLink({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between rounded-xl border border-[#e1e8e1] bg-white px-4 py-3.5 text-sm font-semibold text-[#00540D] transition-all duration-300 hover:border-[#00540D]/25 hover:bg-[#f3f8f3]"
    >
      <span>{text}</span>

      <ArrowUpRight
        size={16}
        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </Link>
  );
}

/* ============================================================
   SIMPLE BUILDING ICON
============================================================ */

function BuildingIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 21v-4h6v4" />
      <path d="M9 9h1" />
      <path d="M14 9h1" />
      <path d="M9 12h1" />
      <path d="M14 12h1" />
    </svg>
  );
}