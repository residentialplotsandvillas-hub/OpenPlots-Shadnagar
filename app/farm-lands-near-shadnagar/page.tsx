import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Leaf,
  MapPin,
  Ruler,
  Sprout,
  Trees,
} from "lucide-react";

import LeadForm from "../components/LeadForm";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title:
    "Farm Lands Near Shadnagar | Farmland for Sale Near RRR",

  description:
    "Explore farm lands near Shadnagar, Balanagar, Kallepally and the RRR corridor. View Sanjeevini Golden Farm project details, plot sizes, location information and book a site visit.",

  keywords: [
    "farm lands near Shadnagar",
    "farm land for sale near Shadnagar",
    "farmland near Shadnagar",
    "farm plots near Shadnagar",
    "farm lands near RRR",
    "farm land near Balanagar",
    "farm land in Kallepally",
    "farmland near Bangalore Highway",
  ],

  alternates: {
    canonical:
      "https://openplotsinshadnagar.com/farm-lands-near-shadnagar",
  },

  openGraph: {
    title:
      "Farm Lands Near Shadnagar | OpenPlots Shadnagar",

    description:
      "Explore farm land projects near Shadnagar, Balanagar, Kallepally and the RRR corridor. Compare project details and request a site visit.",

    url:
      "https://openplotsinshadnagar.com/farm-lands-near-shadnagar",

    siteName: "OpenPlots Shadnagar",

    type: "website",

    images: [
      {
        url:
          "/images/projects/sanjeevini-golden-farm.webp",

        width: 1200,
        height: 630,

        alt:
          "Sanjeevini Golden Farm near Shadnagar",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Farm Lands Near Shadnagar | OpenPlots",

    description:
      "Explore farm land projects near Shadnagar, Balanagar, Kallepally and RRR.",

    images: [
      "/images/projects/sanjeevini-golden-farm.webp",
    ],
  },
};

const farmProject = projects.find(
  (project) =>
    project.slug === "sanjeevini-golden-farm"
);

const faqItems = [
  {
    question:
      "Where can I find farm lands near Shadnagar?",

    answer:
      "Farm land opportunities can be explored around Shadnagar and nearby locations such as Balanagar and Kallepally. Project location, access, land-use conditions and documentation should be checked before making a purchase decision.",
  },

  {
    question:
      "What plot sizes are available at Sanjeevini Golden Farm?",

    answer:
      "Sanjeevini Golden Farm is listed with plot sizes from 242 to 605 square yards, with the project information also describing land parcels of approximately 2 to 5 guntas.",
  },

  {
    question:
      "What is the price of Sanjeevini Golden Farm?",

    answer:
      "The project information provided for Sanjeevini Golden Farm lists a price of ₹7,499 per square yard. Pricing and availability can change, so buyers should confirm the current details before visiting or booking.",
  },

  {
    question:
      "Is farm land near Shadnagar suitable for a farmhouse?",

    answer:
      "Suitability depends on the specific land parcel, applicable land-use rules, approvals and local regulations. Buyers should verify these details for the individual project before planning construction.",
  },

  {
    question:
      "Can I book a site visit for farm lands near Shadnagar?",

    answer:
      "Yes. You can submit the enquiry form on this page to request project information and a site visit. Our team can then help with the available project details.",
  },
];

export default function FarmLandsNearShadnagarPage() {
  return (
    <>
      {/* =====================================================
          STRUCTURED DATA
      ====================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",

            name:
              "Farm Lands Near Shadnagar",

            description:
              "Explore farm land projects near Shadnagar, Balanagar, Kallepally and the RRR corridor.",

            url:
              "https://openplotsinshadnagar.com/farm-lands-near-shadnagar",

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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",

            mainEntity: faqItems.map((item) => ({
              "@type": "Question",

              name: item.question,

              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />

      <main>

        {/* ===================================================
            HERO
        ==================================================== */}

        <section className="relative overflow-hidden bg-[#003B09]">

          <div className="absolute inset-0">

            <Image
              src="/images/projects/sanjeevini-golden-farm.webp"
              alt="Farm land near Shadnagar"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />

          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#003B09]/95 via-[#003B09]/80 to-[#003B09]/30" />

          <div className="relative">

            <div className="container-main">

              <div className="grid min-h-[650px] items-center gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr]">

                {/* LEFT */}

                <div className="max-w-3xl">

                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">

                    <Leaf
                      size={14}
                      className="text-[#d5b45f]"
                    />

                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                      Farm Land Projects
                    </span>

                  </div>

                  <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    Farm Lands Near
                    <span className="block text-[#d5b45f]">
                      Shadnagar
                    </span>
                  </h1>

                  <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
                    Explore farm land opportunities around
                    Shadnagar, Balanagar and Kallepally,
                    including projects located near the RRR
                    and Bangalore Highway corridor.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">

                    <HeroPoint text="Farm Land Projects" />

                    <HeroPoint text="Multiple Plot Sizes" />

                    <HeroPoint text="Location Information" />

                    <HeroPoint text="Site Visit Assistance" />

                  </div>

                  <div className="mt-9 flex flex-wrap gap-3">

                    <Link
                      href="#farm-projects"
                      className="group inline-flex items-center gap-2 rounded-full bg-[#00540D] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#003B09]"
                    >
                      View Farm Projects

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

                {/* RIGHT */}

                <div className="hidden lg:block">

                  <div className="ml-auto max-w-[390px] rounded-[28px] border border-white/20 bg-white/95 p-7 shadow-2xl backdrop-blur-xl">

                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00540D]">
                      Farm Land Enquiry
                    </p>

                    <h2 className="mt-3 text-2xl font-bold text-black">
                      Explore Available
                      <span className="block text-[#00540D]">
                        Farm Land Projects
                      </span>
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-[#68716B]">
                      Share your requirement and our team
                      can help you with project information
                      and site visit assistance.
                    </p>

                    <Link
                      href="#enquiry"
                      className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#00540D] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#003B09]"
                    >
                      Send Enquiry

                      <ArrowUpRight size={16} />
                    </Link>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            INTRO
        ==================================================== */}

        <section className="section-padding bg-white">

          <div className="container-main">

            <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">

              <div className="max-w-3xl">

                <p className="brand-label">
                  Farm Land Near Shadnagar
                </p>

                <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-black md:text-5xl">
                  Explore Farm Land Projects
                  <span className="block text-[#00540D]">
                    Around Shadnagar
                  </span>
                </h2>

                <p className="mt-6 text-base leading-8 text-[#68716B] md:text-lg">
                  Buyers looking for farm land near Shadnagar
                  can compare project location, plot size,
                  accessibility, documentation and available
                  facilities before planning a site visit.
                </p>

                <p className="mt-5 text-base leading-8 text-[#68716B]">
                  The Shadnagar region includes locations such
                  as Balanagar and Kallepally, with connectivity
                  toward the RRR and Bangalore Highway
                  corridors. Individual project details and
                  land-use conditions should always be verified
                  before purchase.
                </p>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <InfoBox
                  icon={<Trees size={21} />}
                  value="2–5"
                  label="Guntas"
                />

                <InfoBox
                  icon={<Ruler size={21} />}
                  value="242–605"
                  label="Sq. Yds"
                />

                <InfoBox
                  icon={<MapPin size={21} />}
                  value="Kallepally"
                  label="Project Location"
                />

                <InfoBox
                  icon={<Sprout size={21} />}
                  value="Farm"
                  label="Project Type"
                />

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            FEATURED FARM PROJECT
        ==================================================== */}

        <section
          id="farm-projects"
          className="section-padding bg-[#f7faf7]"
        >

          <div className="container-main">

            <div className="max-w-3xl">

              <p className="brand-label">
                Featured Farm Land Project
              </p>

              <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

              <h2 className="mt-5 text-3xl font-bold text-black md:text-5xl">
                Farm Land for Sale Near Shadnagar
              </h2>

              <p className="mt-5 text-base leading-8 text-[#68716B] md:text-lg">
                Explore our featured farm land project and
                review the available project information before
                requesting a site visit.
              </p>

            </div>

            {farmProject && (
              <div className="mt-12 overflow-hidden rounded-[28px] border border-[#dfe8e1] bg-white shadow-[0_15px_45px_rgba(0,84,13,0.06)]">

                <div className="grid lg:grid-cols-2">

                  {/* IMAGE */}

                  <div className="relative min-h-[320px] lg:min-h-[520px]">

                    <Image
                      src="/images/projects/sanjeevini-golden-farm.webp"
                      alt="Sanjeevini Golden Farm near Shadnagar"
                      fill
                      sizes="(max-width: 1023px) 100vw, 50vw"
                      className="object-cover"
                    />

                    <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#00540D] shadow-lg">
                      Farm Land Project
                    </div>

                  </div>

                  {/* CONTENT */}

                  <div className="flex flex-col justify-center p-7 md:p-10">

                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00540D]">
                      {farmProject.location}
                    </p>

                    <h3 className="mt-3 text-3xl font-bold tracking-tight text-black">
                      {farmProject.name}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-[#68716B]">
                      {farmProject.description}
                    </p>

                    {/* DETAILS */}

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">

                      <Detail
                        label="Plot Sizes"
                        value={farmProject.plotSizes}
                      />

                      <Detail
                        label="Plot Area"
                        value={
                          farmProject.plotArea ||
                          "Contact for details"
                        }
                      />

                      <Detail
                        label="Location"
                        value={farmProject.location}
                      />

                      <Detail
                        label="Listed Price"
                        value={farmProject.price}
                      />

                    </div>

                    {/* LOCATION */}

                    <div className="mt-7 flex items-start gap-3 rounded-2xl bg-[#f7faf7] p-4">

                      <MapPin
                        size={18}
                        className="mt-0.5 shrink-0 text-[#00540D]"
                      />

                      <div>

                        <p className="text-xs font-bold text-black">
                          Project Location
                        </p>

                        <p className="mt-1 text-sm leading-6 text-[#68716B]">
                          {farmProject.landmark}
                        </p>

                      </div>

                    </div>

                    {/* CTA */}

                    <div className="mt-7 flex flex-wrap gap-3">

                      <Link
                        href={`/projects/${farmProject.slug}`}
                        className="group inline-flex items-center gap-2 rounded-full bg-[#00540D] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#003B09]"
                      >
                        View Project Details

                        <ArrowUpRight
                          size={16}
                          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </Link>

                      <Link
                        href="#enquiry"
                        className="inline-flex items-center rounded-full border border-[#dce5dd] px-6 py-3.5 text-sm font-semibold text-[#00540D] transition hover:bg-[#f3f8f3]"
                      >
                        Request Site Visit
                      </Link>

                    </div>

                  </div>

                </div>

              </div>
            )}

          </div>

        </section>

        {/* ===================================================
            WHY CONSIDER FARM LAND
        ==================================================== */}

        <section className="section-padding bg-white">

          <div className="container-main">

            <div className="mx-auto max-w-3xl text-center">

              <p className="brand-label">
                Before You Buy
              </p>

              <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

              <h2 className="mt-5 text-3xl font-bold text-black md:text-5xl">
                What to Check Before
                <span className="block text-[#00540D]">
                  Choosing Farm Land
                </span>
              </h2>

              <p className="mt-5 text-base leading-8 text-[#68716B]">
                Location is only one part of a property
                decision. Review the project documentation,
                access, land-use conditions and other relevant
                details before making a purchase.
              </p>

            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              <CheckCard
                number="01"
                title="Location"
                text="Check road access, surrounding development and the exact project location."
              />

              <CheckCard
                number="02"
                title="Documentation"
                text="Review applicable title, land and project documents with qualified professionals."
              />

              <CheckCard
                number="03"
                title="Land Use"
                text="Understand applicable land-use rules and whether your intended use is permitted."
              />

              <CheckCard
                number="04"
                title="Project Details"
                text="Compare plot size, pricing, amenities, access and other project-specific information."
              />

            </div>

          </div>

        </section>

        {/* ===================================================
            LOCATIONS
        ==================================================== */}

        <section className="section-padding bg-[#f7faf7]">

          <div className="container-main">

            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

              <div>

                <p className="brand-label">
                  Nearby Locations
                </p>

                <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

                <h2 className="mt-5 text-3xl font-bold text-black md:text-4xl">
                  Explore Farm Land
                  <span className="block text-[#00540D]">
                    Around Shadnagar
                  </span>
                </h2>

                <p className="mt-5 text-base leading-8 text-[#68716B]">
                  Explore projects and property opportunities
                  around key locations connected with the
                  Shadnagar region.
                </p>

              </div>

              <div className="grid gap-3 sm:grid-cols-2">

                <LocationCard
                  href="/locations/shadnagar"
                  title="Shadnagar"
                />

                <LocationCard
                  href="/locations/balanagar"
                  title="Balanagar"
                />

                <LocationCard
                  href="/locations/kallepally"
                  title="Kallepally"
                />

                <LocationCard
                  href="/locations/jadcherla"
                  title="Jadcherla"
                />

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            SEO CONTENT
        ==================================================== */}

        <section className="section-padding bg-white">

          <div className="container-main">

            <div className="mx-auto max-w-4xl">

              <p className="brand-label text-center">
                Farm Land Guide
              </p>

              <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

              <h2 className="mt-5 text-center text-3xl font-bold text-black md:text-5xl">
                Farm Land Near Shadnagar:
                <span className="block text-[#00540D]">
                  Things Buyers Should Know
                </span>
              </h2>

              <div className="mt-10 space-y-6 text-base leading-8 text-[#68716B]">

                <p>
                  Farm land near Shadnagar can appeal to buyers
                  looking for larger land parcels, nature-oriented
                  projects or a property opportunity outside the
                  denser urban environment. The right choice
                  depends on the exact location, documentation,
                  accessibility, land-use conditions and the
                  buyer's intended purpose.
                </p>

                <p>
                  Locations around Shadnagar, Balanagar and
                  Kallepally provide different project options.
                  Buyers should compare the actual distance to
                  major roads, the condition of internal roads,
                  surrounding development, project layout and
                  available facilities rather than relying only
                  on a location name.
                </p>

                <p>
                  If you are considering farmland near the RRR or
                  Bangalore Highway corridor, it is particularly
                  important to verify the exact project location
                  and applicable approvals or documentation.
                  Pricing and availability can also change, so
                  current project details should be confirmed
                  directly before making a decision.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            FAQ
        ==================================================== */}

        <section className="section-padding bg-[#f7faf7]">

          <div className="container-main">

            <div className="mx-auto max-w-3xl">

              <div className="text-center">

                <p className="brand-label">
                  Frequently Asked Questions
                </p>

                <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

                <h2 className="mt-5 text-3xl font-bold text-black md:text-5xl">
                  Farm Land Near Shadnagar
                  <span className="block text-[#00540D]">
                    FAQs
                  </span>
                </h2>

              </div>

              <div className="mt-10 space-y-4">

                {faqItems.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-2xl border border-[#dfe8e1] bg-white p-5"
                  >
                    <summary className="cursor-pointer list-none pr-8 text-base font-bold text-black marker:hidden">
                      {item.question}
                    </summary>

                    <p className="mt-4 text-sm leading-7 text-[#68716B]">
                      {item.answer}
                    </p>
                  </details>
                ))}

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            LEAD FORM
        ==================================================== */}

        <section
          id="enquiry"
          className="section-padding bg-white"
        >

          <div className="container-main">

            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

              <div className="max-w-xl">

                <p className="brand-label">
                  Book a Site Visit
                </p>

                <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

                <h2 className="mt-5 text-3xl font-bold leading-tight text-black md:text-5xl">
                  Interested in Farm Land
                  <span className="block text-[#00540D]">
                    Near Shadnagar?
                  </span>
                </h2>

                <p className="mt-6 text-base leading-8 text-[#68716B]">
                  Share your requirements and our team can
                  provide available project information and
                  help arrange a site visit.
                </p>

                <div className="mt-7 space-y-3">

                  <HeroPointDark
                    text="Project information"
                  />

                  <HeroPointDark
                    text="Plot size options"
                  />

                  <HeroPointDark
                    text="Location assistance"
                  />

                  <HeroPointDark
                    text="Site visit coordination"
                  />

                </div>

              </div>

              <LeadForm />

            </div>

          </div>

        </section>

        {/* ===================================================
            FINAL CTA
        ==================================================== */}

        <section className="bg-[#003B09]">

          <div className="container-main py-14">

            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d5b45f]">
                  OpenPlots Shadnagar
                </p>

                <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                  Explore Farm Lands Near Shadnagar
                </h2>

                <p className="mt-2 text-sm text-white/70">
                  Compare project information and plan your
                  site visit.
                </p>

              </div>

              <Link
                href="#enquiry"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#00540D] transition hover:bg-[#f3f8f3]"
              >
                Request Site Visit

                <ArrowUpRight size={16} />
              </Link>

            </div>

          </div>

        </section>

      </main>
    </>
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
   DARK HERO POINT
============================================================ */

function HeroPointDark({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 text-sm text-[#53605A]">

      <CheckCircle2
        size={17}
        className="shrink-0 text-[#00540D]"
      />

      <span>{text}</span>

    </div>
  );
}

/* ============================================================
   INFO BOX
============================================================ */

function InfoBox({
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
   DETAIL
============================================================ */

function Detail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-[#e1e8e1] p-4">

      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#8a938d]">
        {label}
      </p>

      <p className="mt-1 text-sm font-bold leading-6 text-black">
        {value}
      </p>

    </div>
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
    <article className="group rounded-[24px] border border-[#dfe8e1] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00540D]/20 hover:shadow-[0_15px_35px_rgba(0,84,13,0.07)]">

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