import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Home,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

import LeadForm from "../components/LeadForm";

export const metadata: Metadata = {
  title:
    "Contact Us | Open Plots & Property Projects in Shadnagar",

  description:
    "Contact OpenPlots Shadnagar for residential plots, open plots, farm lands and plotted projects near Shadnagar, Balanagar, RRR and Bangalore Highway. Enquire about prices, plot sizes and site visits.",

  keywords: [
    "contact OpenPlots Shadnagar",
    "Shadnagar plots contact",
    "plot enquiry Shadnagar",
    "open plots Shadnagar contact",
    "plots for sale Shadnagar contact",
    "residential plots Shadnagar enquiry",
    "farm land Shadnagar enquiry",
    "Shadnagar property enquiry",
    "book site visit Shadnagar",
    "plot site visit Shadnagar",
    "RERA plots Shadnagar",
    "HMDA plots Shadnagar",
  ],

  alternates: {
    canonical:
      "https://openplotsinshadnagar.com/contact",
  },

  openGraph: {
    title:
      "Contact OpenPlots Shadnagar | Plot Enquiry & Site Visit",

    description:
      "Get in touch for open plots, residential plots and farm land projects around Shadnagar.",

    url:
      "https://openplotsinshadnagar.com/contact",

    siteName: "OpenPlots Shadnagar",

    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  {
    question:
      "How can I enquire about plots in Shadnagar?",

    answer:
      "You can submit your requirements through the contact form. Share your preferred plot size, budget and contact details so the team can provide suitable project information.",
  },

  {
    question:
      "Can I book a site visit for Shadnagar plots?",

    answer:
      "Yes. You can request a site visit through the website. The team can coordinate available projects and suitable visit options based on your requirements.",
  },

  {
    question:
      "Which property types can I enquire about?",

    answer:
      "You can enquire about residential open plots, commercial plots, farm lands and selected plotted developments around Shadnagar, Balanagar, RRR and the Bangalore Highway corridor.",
  },

  {
    question:
      "Can I get current plot prices and availability?",

    answer:
      "Project prices and availability can change. Contact the team for the latest information about a particular project, plot size and location.",
  },
];

export default function ContactPage() {
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",

    name:
      "Contact OpenPlots Shadnagar",

    description:
      "Contact OpenPlots Shadnagar for plot enquiries, project information and site visits.",

    url:
      "https://openplotsinshadnagar.com/contact",

    isPartOf: {
      "@type": "WebSite",
      name: "OpenPlots Shadnagar",
      url:
        "https://openplotsinshadnagar.com/",
    },
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

      <section className="relative overflow-hidden bg-[#f7faf7]">

        <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#00540D]/5 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-[#00540D]/5 blur-3xl" />

        <div className="container-main relative">

          <div className="grid min-h-[560px] items-center gap-12 py-20 lg:grid-cols-[1fr_0.8fr]">

            {/* LEFT */}

            <div className="max-w-3xl">

              <nav
                aria-label="Breadcrumb"
                className="mb-7 text-xs text-[#68716B]"
              >

                <Link
                  href="/"
                  className="transition hover:text-[#00540D]"
                >
                  Home
                </Link>

                <span className="mx-2">
                  /
                </span>

                <span className="text-black">
                  Contact
                </span>

              </nav>

              <p className="brand-label">
                Contact OpenPlots
              </p>

              <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

              <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-black sm:text-5xl md:text-6xl">

                Contact Us for
                <span className="block text-[#00540D]">
                  Plots in Shadnagar
                </span>

              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[#68716B] md:text-lg">

                Looking for open plots, residential plots,
                farm lands or plotted developments near
                Shadnagar? Contact us for project information,
                plot sizes, pricing and site visit assistance.

              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <a
                  href="tel:+919999999999"
                  className="inline-flex items-center gap-2 rounded-full bg-[#00540D] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#003B09] hover:shadow-md"
                >

                  <Phone size={17} />

                  Call Now

                </a>

                <Link
                  href="/book-site-visit"
                  className="inline-flex items-center gap-2 rounded-full border border-[#dce5dd] bg-white px-6 py-3.5 text-sm font-semibold text-[#00540D] transition hover:-translate-y-0.5 hover:border-[#00540D] hover:shadow-sm"
                >

                  Book Site Visit

                  <ArrowRight size={17} />

                </Link>

              </div>

            </div>

            {/* CONTACT SUMMARY */}

            <div className="rounded-[30px] border border-[#dfe8e1] bg-white p-7 shadow-[0_20px_60px_rgba(0,84,13,0.08)] md:p-8">

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#00540D]">
                Get in Touch
              </p>

              <h2 className="mt-3 text-2xl font-bold text-black">
                Let&apos;s Discuss Your Plot Requirement
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#68716B]">
                Tell us what you are looking for and we can
                help you explore suitable project options.
              </p>

              <div className="mt-7 space-y-4">

                <ContactItem
                  icon={<Phone size={18} />}
                  title="Phone"
                  value="+91 99999 99999"
                  href="tel:+919999999999"
                />

                <ContactItem
                  icon={<Mail size={18} />}
                  title="Email"
                  value="info@openplotsinshadnagar.com"
                  href="mailto:info@openplotsinshadnagar.com"
                />

                <ContactItem
                  icon={<MapPin size={18} />}
                  title="Location"
                  value="Shadnagar, Telangana, India"
                />

                <ContactItem
                  icon={<Clock3 size={18} />}
                  title="Enquiries"
                  value="Project & Site Visit Assistance"
                />

              </div>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-[#eaf3ea] px-5 py-4 text-sm font-semibold text-[#00540D] transition hover:bg-[#dceedd]"
              >

                <MessageCircle size={18} />

                WhatsApp Enquiry

              </a>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CONTACT FORM
      ====================================================== */}

      <section
        id="contact-form"
        className="section-padding bg-white"
      >

        <div className="container-main">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

            {/* LEFT */}

            <div className="max-w-xl">

              <p className="brand-label">
                Property Enquiry
              </p>

              <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-black md:text-5xl">

                Tell Us What
                <span className="block text-[#00540D]">
                  You&apos;re Looking For
                </span>

              </h2>

              <p className="mt-5 leading-8 text-[#68716B]">

                Whether you are searching for a residential
                plot, commercial plot or farm land, share your
                requirements and start your property enquiry.

              </p>

              <div className="mt-8 space-y-5">

                <Requirement
                  title="Preferred Location"
                  text="Shadnagar, Balanagar, RRR, Jadcherla or nearby areas."
                />

                <Requirement
                  title="Preferred Plot Size"
                  text="Tell us the approximate square-yard requirement."
                />

                <Requirement
                  title="Budget"
                  text="Share your approximate investment range."
                />

                <Requirement
                  title="Site Visit"
                  text="Request a visit to explore a suitable project."
                />

              </div>

            </div>

            {/* FORM */}

            <div>

              <LeadForm />

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PROPERTY OPTIONS
      ====================================================== */}

      <section className="section-padding bg-[#f7faf7]">

        <div className="container-main">

          <div className="mx-auto max-w-3xl text-center">

            <p className="brand-label">
              Explore Property Options
            </p>

            <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

            <h2 className="mt-5 text-3xl font-bold text-black md:text-5xl">

              What Are You
              <span className="block text-[#00540D]">
                Looking For?
              </span>

            </h2>

            <p className="mt-5 leading-8 text-[#68716B]">
              Explore our main property categories before
              contacting us.
            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            <PropertyCard
              href="/open-plots-in-shadnagar"
              icon={<MapPin size={21} />}
              title="Open Plots"
              text="Explore open plots in Shadnagar."
            />

            <PropertyCard
              href="/plots-for-sale-in-shadnagar"
              icon={<Home size={21} />}
              title="Plots for Sale"
              text="Compare residential plot projects."
            />

            <PropertyCard
              href="/rera-approved-plots-in-shadnagar"
              icon={<ShieldCheck size={21} />}
              title="RERA Plots"
              text="Explore RERA registered projects."
            />

            <PropertyCard
              href="/farm-lands-near-shadnagar"
              icon={<MapPin size={21} />}
              title="Farm Lands"
              text="Discover farm land projects."
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          LOCATION
      ====================================================== */}

      <section className="section-padding bg-white">

        <div className="container-main">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

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

              <p className="mt-5 max-w-xl leading-8 text-[#68716B]">

                Find property opportunities across the
                Shadnagar growth corridor and nearby locations.

              </p>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              <LocationLink
                href="/open-plots-in-shadnagar"
                label="Open Plots in Shadnagar"
              />

              <LocationLink
                href="/plots-for-sale-in-shadnagar"
                label="Plots for Sale"
              />

              <LocationLink
                href="/hmda-plots-in-shadnagar"
                label="HMDA Plots"
              />

              <LocationLink
                href="/rera-approved-plots-in-shadnagar"
                label="RERA Plots"
              />

              <LocationLink
                href="/farm-lands-near-shadnagar"
                label="Farm Lands"
              />

              <LocationLink
                href="/projects"
                label="All Projects"
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
              Contact & Property Enquiry
            </p>

            <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

            <h2 className="mt-5 text-center text-3xl font-bold text-black md:text-5xl">

              Contact Us for Open Plots
              <span className="block text-[#00540D]">
                in Shadnagar
              </span>

            </h2>

            <div className="mt-10 space-y-6 text-base leading-8 text-[#68716B]">

              <p>
                If you are looking for open plots in Shadnagar,
                residential plots for sale or farm land near
                Shadnagar, contacting the project team can help
                you understand the latest available options.
              </p>

              <p>
                Buyers can enquire about plot sizes, project
                locations, pricing, applicable approvals and
                site visit options. Requirements can vary
                depending on whether you are looking for a plot
                for a future home, investment or another purpose.
              </p>

              <p>
                Shadnagar has several developing locations around
                the RRR and Bangalore Highway corridors. When
                comparing plots, consider the exact location,
                access roads, surrounding development, project
                documentation and other relevant property details.
              </p>

              <p>
                A site visit is recommended before making a
                property purchase. Visiting the actual location
                allows you to inspect the surroundings and
                understand the project beyond photographs and
                marketing material.
              </p>

              <p>
                OpenPlots Shadnagar provides a simple way to
                discover selected property projects and submit
                enquiries for further information and site visits.
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

              Contact & Plot
              <span className="block text-[#00540D]">
                Enquiry FAQs
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
                Have a Plot Requirement?
              </h2>

              <p className="mt-3 text-sm text-white/70">
                Contact us or request a site visit.
              </p>

            </div>

            <div className="flex flex-wrap gap-3">

              <a
                href="tel:+919999999999"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-bold text-[#00540D] transition hover:bg-[#eaf3ea]"
              >

                <Phone size={17} />

                Call Now

              </a>

              <Link
                href="/book-site-visit"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#00540D]"
              >

                Book Site Visit

                <ArrowUpRight size={17} />

              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

/* ============================================================
   CONTACT ITEM
============================================================ */

function ContactItem({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4">

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf3ea] text-[#00540D]">
        {icon}
      </div>

      <div>

        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8a938d]">
          {title}
        </p>

        <p className="mt-1 text-sm font-semibold text-black">
          {value}
        </p>

      </div>

    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block rounded-xl transition hover:bg-[#f7faf7]"
      >
        {content}
      </a>
    );
  }

  return (
    <div>
      {content}
    </div>
  );
}

/* ============================================================
   REQUIREMENT
============================================================ */

function Requirement({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-3">

      <CheckCircle2
        size={19}
        className="mt-1 shrink-0 text-[#00540D]"
      />

      <div>

        <h3 className="text-sm font-bold text-black">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-[#68716B]">
          {text}
        </p>

      </div>

    </div>
  );
}

/* ============================================================
   PROPERTY CARD
============================================================ */

function PropertyCard({
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
      className="group rounded-[24px] border border-[#dfe8e1] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00540D]/25 hover:shadow-[0_15px_35px_rgba(0,84,13,0.08)]"
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