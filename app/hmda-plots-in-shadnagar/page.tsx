import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileCheck2,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
} from "lucide-react";

import LeadForm from "../components/LeadForm";

export const metadata: Metadata = {
  title:
    "HMDA Plots in Shadnagar | HMDA Approved Plot Projects",
  description:
    "Explore HMDA plot opportunities in Shadnagar and nearby growth corridors. View Golden Terra project details, plot sizes, location, HMDA LP information and enquire for a site visit.",
  alternates: {
    canonical:
      "https://openplotsinshadnagar.com/hmda-plots-in-shadnagar",
  },
  openGraph: {
    title:
      "HMDA Plots in Shadnagar | OpenPlots Shadnagar",
    description:
      "Explore HMDA plot opportunities near Shadnagar, RRR and the Shadnagar Tollgate. View project details and book a site visit.",
    url:
      "https://openplotsinshadnagar.com/hmda-plots-in-shadnagar",
    type: "website",
  },
};

export default function HmdaPlotsInShadnagarPage() {
  return (
    <main className="bg-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#003B09]">

        <div className="absolute inset-0">

          <Image
            src="/images/shadnagar-aerial.webp"
            alt="Plots and property development near Shadnagar"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#003B09]/95 via-[#003B09]/80 to-[#003B09]/35" />

        <div className="container-main relative">

          <div className="grid min-h-[620px] items-center gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr]">

            <div className="max-w-3xl">

              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">

                <ShieldCheck
                  size={15}
                  className="text-[#d5b45f]"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:text-xs">
                  HMDA Project Information
                </span>

              </div>

              <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
                HMDA Plots in
                <span className="block text-[#d5b45f]">
                  Shadnagar
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
                Explore applicable HMDA project opportunities
                around Shadnagar and nearby growth corridors.
                Compare project location, plot sizes, approval
                information and pricing before planning your
                site visit.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">

                <Link
                  href="#hmda-projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#00540D] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#002f07]"
                >
                  View HMDA Project

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <Link
                  href="/book-site-visit"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#00540D]"
                >
                  Book Site Visit

                  <ArrowRight size={16} />
                </Link>

              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">

                <HeroPoint text="HMDA LP Information" />

                <HeroPoint text="Residential Plot Options" />

                <HeroPoint text="Near Shadnagar RRR" />

              </div>

            </div>

            {/* =================================================
                QUICK INFO CARD
            ================================================== */}

            <div className="hidden lg:block">

              <div className="ml-auto max-w-[390px] rounded-[28px] border border-white/20 bg-white/95 p-7 shadow-[0_25px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl">

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00540D]">
                  Featured HMDA Project
                </p>

                <h2 className="mt-3 text-2xl font-bold text-black">
                  Golden Terra
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#68716B]">
                  Residential and commercial plots near
                  Shadnagar Tollgate and RRR.
                </p>

                <div className="mt-6 space-y-3">

                  <InfoRow
                    icon={<FileCheck2 size={16} />}
                    label="HMDA LP No."
                    value="0466/HMDA/SWDL/2025"
                  />

                  <InfoRow
                    icon={<CheckCircle2 size={16} />}
                    label="RERA No."
                    value="P02400010212"
                  />

                  <InfoRow
                    icon={<Ruler size={16} />}
                    label="Plot Sizes"
                    value="147 – 1,200 Sq. Yds"
                  />

                  <InfoRow
                    icon={<MapPin size={16} />}
                    label="Location"
                    value="Near Shadnagar Tollgate & RRR"
                  />

                </div>

                <Link
                  href="/projects/golden-terra"
                  className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#00540D] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#003B09]"
                >
                  View Golden Terra

                  <ArrowUpRight size={16} />
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
              HMDA Plotted Developments
            </p>

            <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-black md:text-5xl">
              Explore HMDA Plot Opportunities
              <span className="block text-[#00540D]">
                Around Shadnagar
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#68716B] md:text-lg">
              Buyers looking for plots around Shadnagar can
              evaluate individual projects based on applicable
              planning approvals, location, accessibility,
              plot dimensions, pricing and intended use.
              Always verify the latest approval and project
              documentation before making a purchase decision.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          HMDA PROJECT
      ====================================================== */}

      <section
        id="hmda-projects"
        className="section-padding bg-[#f7faf7]"
      >

        <div className="container-main">

          <div className="mb-12">

            <p className="brand-label">
              Featured Project
            </p>

            <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-black md:text-5xl">
              HMDA Project Near Shadnagar
            </h2>

          </div>

          <div className="overflow-hidden rounded-[28px] border border-[#dfe8e1] bg-white shadow-[0_15px_45px_rgba(0,84,13,0.06)]">

            <div className="grid lg:grid-cols-2">

              {/* IMAGE */}

              <div className="relative min-h-[350px] overflow-hidden lg:min-h-[520px]">

                <Image
                  src="/images/projects/golden-terra.webp"
                  alt="Golden Terra residential and commercial plots near Shadnagar"
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />

                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#00540D] shadow-md">
                  HMDA Project
                </div>

              </div>

              {/* CONTENT */}

              <div className="p-7 md:p-10 lg:p-12">

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00540D]">
                  Shadnagar • Telangana
                </p>

                <h3 className="mt-3 text-3xl font-bold tracking-tight text-black md:text-4xl">
                  Golden Terra
                </h3>

                <p className="mt-5 leading-7 text-[#68716B]">
                  Golden Terra is listed with an HMDA LP
                  reference and offers residential and
                  commercial plot options near the Shadnagar
                  Tollgate and RRR corridor.
                </p>

                {/* DETAILS */}

                <div className="mt-7 grid gap-3 sm:grid-cols-2">

                  <DetailCard
                    label="HMDA LP No."
                    value="0466/HMDA/SWDL/2025"
                  />

                  <DetailCard
                    label="RERA No."
                    value="P02400010212"
                  />

                  <DetailCard
                    label="Residential Price"
                    value="₹27,999 / Sq. Yd"
                  />

                  <DetailCard
                    label="Commercial Price"
                    value="₹39,999 / Sq. Yd"
                  />

                  <DetailCard
                    label="Plot Sizes"
                    value="147 – 1,200 Sq. Yds"
                  />

                  <DetailCard
                    label="Bank Loan"
                    value="Available"
                  />

                </div>

                <div className="mt-7 flex flex-wrap gap-3">

                  <Link
                    href="/projects/golden-terra"
                    className="group inline-flex items-center gap-2 rounded-full bg-[#00540D] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#003B09]"
                  >
                    View Project Details

                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>

                  <Link
                    href="/book-site-visit"
                    className="inline-flex items-center gap-2 rounded-full border border-[#dce5dd] px-6 py-3.5 text-sm font-semibold text-[#00540D] transition hover:border-[#00540D] hover:bg-[#f3f8f3]"
                  >
                    Book Site Visit

                    <MapPin size={16} />
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          WHAT TO CHECK
      ====================================================== */}

      <section className="section-padding bg-white">

        <div className="container-main">

          <div className="max-w-3xl">

            <p className="brand-label">
              Before Buying
            </p>

            <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-black md:text-5xl">
              What to Check Before
              <span className="block text-[#00540D]">
                Buying a Plot
              </span>
            </h2>

            <p className="mt-5 leading-8 text-[#68716B]">
              An approval reference is only one part of
              evaluating a property. Buyers should review
              the latest project documents and confirm that
              the specific plot and development match the
              information provided.
            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            <CheckCard
              number="01"
              title="Approval Documents"
              text="Review the applicable HMDA documentation and verify the project details."
            />

            <CheckCard
              number="02"
              title="Project Location"
              text="Check road access, surrounding development and the actual site location."
            />

            <CheckCard
              number="03"
              title="Plot Details"
              text="Confirm plot dimensions, boundaries, road width and the specific plot being offered."
            />

            <CheckCard
              number="04"
              title="Legal Verification"
              text="Complete independent legal and document verification before purchase."
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
                Location
              </p>

              <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-black md:text-5xl">
                HMDA Plot Opportunities
                <span className="block text-[#00540D]">
                  Near Shadnagar Corridors
                </span>
              </h2>

              <p className="mt-5 leading-8 text-[#68716B]">
                The projects we feature are located across
                different parts of the Shadnagar and nearby
                growth corridors. Evaluate each project
                individually based on its actual location
                and documentation.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">

                <LocationTag label="Shadnagar" />

                <LocationTag label="RRR Corridor" />

                <LocationTag label="Balanagar" />

                <LocationTag label="Kallepally" />

                <LocationTag label="Jadcherla" />

                <LocationTag label="Bangalore Highway" />

              </div>

            </div>

            <div className="rounded-[28px] border border-[#dfe8e1] bg-white p-7 shadow-[0_12px_35px_rgba(0,84,13,0.05)]">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf3ea] text-[#00540D]">
                  <MapPin size={20} />
                </div>

                <div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#00540D]">
                    Explore More
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-black">
                    Property Options
                  </h3>

                </div>

              </div>

              <div className="mt-6 space-y-3">

                <LocationLink
                  href="/open-plots-in-shadnagar"
                  label="Open Plots in Shadnagar"
                />

                <LocationLink
                  href="/plots-for-sale-in-shadnagar"
                  label="Plots for Sale in Shadnagar"
                />

                <LocationLink
                  href="/farm-lands-near-shadnagar"
                  label="Farm Lands Near Shadnagar"
                />

                <LocationLink
                  href="/projects"
                  label="View All Projects"
                />

              </div>

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

            <h2 className="mt-5 text-center text-3xl font-bold tracking-tight text-black md:text-5xl">
              HMDA Plots in Shadnagar
              FAQs
            </h2>

            <div className="mt-10 space-y-4">

              <Faq
                question="Are there HMDA plots in Shadnagar?"
                answer="Some plotted developments may have applicable HMDA planning approvals. Project approval status should be checked individually using the latest official project documentation. Golden Terra is one project listed with HMDA LP No. 0466/HMDA/SWDL/2025 in the project information provided to us."
              />

              <Faq
                question="What is the HMDA LP number for Golden Terra?"
                answer="The project information provided for Golden Terra lists HMDA LP No. 0466/HMDA/SWDL/2025. Buyers should independently verify the latest approval documentation before making a purchase decision."
              />

              <Faq
                question="What plot sizes are available at Golden Terra?"
                answer="The provided project information lists plot sizes from 147 to 1,200 square yards."
              />

              <Faq
                question="Where is Golden Terra located?"
                answer="The provided project information places Golden Terra beside the Shadnagar Tollgate and near the RRR corridor."
              />

              <Faq
                question="Can I visit the project before buying?"
                answer="Yes. You can contact the sales team or use the site visit enquiry form to request assistance with a project visit."
              />

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

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="brand-label">
                HMDA Plot Enquiry
              </p>

              <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-black md:text-5xl">
                Interested in Plots
                <span className="block text-[#00540D]">
                  Near Shadnagar?
                </span>
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-[#68716B]">
                Share your requirements and our team can
                help you explore the available project
                information and arrange a site visit.
              </p>

              <div className="mt-7 space-y-4">

                <Benefit text="Project location information" />

                <Benefit text="Plot size and pricing details" />

                <Benefit text="Site visit assistance" />

              </div>

            </div>

            <LeadForm />

          </div>

        </div>

      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section className="border-t border-[#dfe8e1] bg-[#003B09]">

        <div className="container-main py-12">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

            <div>

              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Explore Plot Projects Around Shadnagar
              </h2>

              <p className="mt-2 text-sm text-white/70">
                Compare projects, locations and plot options.
              </p>

            </div>

            <Link
              href="/projects"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#00540D] transition hover:bg-[#eaf3ea]"
            >
              View Projects

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
        size={15}
        className="text-[#d5b45f]"
      />

      {text}

    </div>
  );
}

/* ============================================================
   INFO ROW
============================================================ */

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-[#f7faf7] p-3">

      <div className="mt-0.5 text-[#00540D]">
        {icon}
      </div>

      <div>

        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#8a938d]">
          {label}
        </p>

        <p className="mt-1 text-xs font-semibold text-black">
          {value}
        </p>

      </div>

    </div>
  );
}

/* ============================================================
   DETAIL CARD
============================================================ */

function DetailCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-[#e1e8e1] bg-[#f7faf7] p-4">

      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#8a938d]">
        {label}
      </p>

      <p className="mt-1.5 text-sm font-bold leading-6 text-black">
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
    <article className="group rounded-[22px] border border-[#dfe8e1] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00540D]/25 hover:shadow-[0_15px_35px_rgba(0,84,13,0.07)]">

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
   LOCATION TAG
============================================================ */

function LocationTag({
  label,
}: {
  label: string;
}) {
  return (
    <span className="rounded-full border border-[#dce5dd] bg-white px-4 py-2 text-xs font-medium text-[#53605A]">
      {label}
    </span>
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
      className="group flex items-center justify-between rounded-xl border border-[#e1e8e1] bg-white p-4 transition-all hover:border-[#00540D]/25 hover:bg-[#f7faf7]"
    >

      <span className="text-sm font-semibold text-black group-hover:text-[#00540D]">
        {label}
      </span>

      <ArrowUpRight
        size={16}
        className="text-[#00540D] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />

    </Link>
  );
}

/* ============================================================
   FAQ
============================================================ */

function Faq({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group rounded-2xl border border-[#dfe8e1] bg-[#f7faf7] p-5">

      <summary className="cursor-pointer list-none pr-6 text-sm font-bold text-black marker:hidden">
        {question}
      </summary>

      <p className="mt-4 text-sm leading-7 text-[#68716B]">
        {answer}
      </p>

    </details>
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