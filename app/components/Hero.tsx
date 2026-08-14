import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Phone,
  Ruler,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-[#003B09]"
    >
      {/* =====================================================
          HERO IMAGE
      ====================================================== */}

      <div className="absolute inset-0 -z-20">

        <Image
          src="/images/shadnagar-aerial.webp"
          alt="Open plots and plotted developments near Shadnagar"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

      </div>

      {/* =====================================================
          HERO OVERLAY
      ====================================================== */}

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#003B09]/95 via-[#003B09]/80 to-[#003B09]/30" />

      <div className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-[#003B09]/80 to-transparent" />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="container-main">

        <div className="flex min-h-[700px] items-center py-20 md:min-h-[740px] md:py-24">

          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">

            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div className="max-w-4xl">

              {/* Eyebrow */}

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">

                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-[#d5b45f]"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:text-xs">
                  Plot Projects Near Shadnagar
                </span>

              </div>

              {/* =================================================
                  H1
              ================================================== */}

              <h1
                id="hero-heading"
                className="max-w-4xl text-4xl font-bold leading-[1.04] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Open Plots in
                <span className="block text-[#d5b45f]">
                  Shadnagar
                </span>
              </h1>

              {/* Description */}

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
                Explore residential plots, commercial plots
                and farm lands around Shadnagar, Balanagar,
                Kallepally, RRR and the Bangalore Highway
                corridor.
              </p>

              {/* =================================================
                  KEYWORDS / LOCATION
              ================================================== */}

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">

                <HeroPoint text="Residential Plots" />

                <HeroPoint text="Farm Lands" />

                <HeroPoint text="Plots Near RRR" />

                <HeroPoint text="Site Visit Support" />

              </div>

              {/* =================================================
                  BUTTONS
              ================================================== */}

              <div className="mt-9 flex flex-wrap gap-3">

                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#00540D] px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#003B09]"
                >
                  Explore Projects

                  <ArrowUpRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <Link
                  href="/book-site-visit"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#00540D]"
                >
                  Book a Site Visit

                  <ArrowRight
                    size={17}
                    aria-hidden="true"
                  />
                </Link>

              </div>

              {/* =================================================
                  TRUST FEATURES
              ================================================== */}

              <div className="mt-10 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">

                <TrustCard
                  icon={<CheckCircle2 size={17} />}
                  title="Project Details"
                />

                <TrustCard
                  icon={<Ruler size={17} />}
                  title="Multiple Plot Sizes"
                />

                <TrustCard
                  icon={<MapPin size={17} />}
                  title="Prime Locations"
                />

                <TrustCard
                  icon={<Phone size={17} />}
                  title="Sales Assistance"
                />

              </div>

            </div>

            {/* =================================================
                RIGHT ENQUIRY CARD
            ================================================== */}

            <div className="hidden lg:block">

              <div className="ml-auto max-w-[390px] rounded-[28px] border border-white/20 bg-white/95 p-7 shadow-[0_25px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl">

                {/* Card header */}

                <div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00540D]">
                    Explore Property
                  </p>

                  <h2 className="mt-3 text-2xl font-bold leading-tight text-black">
                    Find a Plot That
                    <span className="block text-[#00540D]">
                      Fits Your Requirement
                    </span>
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-[#68716B]">
                    Explore available projects and compare
                    locations, plot sizes and listed pricing.
                  </p>

                </div>

                {/* Quick options */}

                <div className="mt-6 space-y-3">

                  <HeroLink
                    href="/plots-for-sale-in-shadnagar"
                    title="Plots for Sale in Shadnagar"
                    description="Residential plotted developments"
                  />

                  <HeroLink
                    href="/farm-lands-near-shadnagar"
                    title="Farm Lands Near Shadnagar"
                    description="Explore farmland projects"
                  />

                  <HeroLink
                    href="/hmda-plots-in-shadnagar"
                    title="HMDA Plots in Shadnagar"
                    description="Explore applicable project details"
                  />

                  <HeroLink
                    href="/rera-approved-plots-in-shadnagar"
                    title="RERA Approved Plots"
                    description="Explore applicable RERA projects"
                  />

                </div>

                {/* CTA */}

                <Link
                  href="/book-site-visit"
                  className="group mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#00540D] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#003B09] hover:shadow-lg"
                >
                  Book Your Site Visit

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          MOBILE BOTTOM LOCATION BAR
      ====================================================== */}

      <div className="border-t border-white/10 bg-[#003B09]/80 backdrop-blur-md lg:hidden">

        <div className="container-main py-4">

          <div className="flex items-center gap-2 text-xs text-white/70">

            <MapPin
              size={15}
              className="shrink-0 text-[#d5b45f]"
            />

            <span>
              Shadnagar • Balanagar • RRR • Bangalore Highway
            </span>

          </div>

        </div>

      </div>

    </section>
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
        className="shrink-0 text-[#d5b45f]"
        aria-hidden="true"
      />

      <span>{text}</span>

    </div>
  );
}

/* ============================================================
   TRUST CARD
============================================================ */

function TrustCard({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">

      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-[#d5b45f]">
        {icon}
      </div>

      <p className="mt-3 text-xs font-medium leading-5 text-white/80">
        {title}
      </p>

    </div>
  );
}

/* ============================================================
   HERO LINK
============================================================ */

function HeroLink({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 rounded-xl border border-[#e1e8e1] bg-[#f7faf7] p-3.5 transition-all duration-300 hover:border-[#00540D]/25 hover:bg-[#eaf3ea]"
    >

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eaf3ea] text-[#00540D] transition-transform duration-300 group-hover:scale-105">
        <ArrowUpRight size={16} />
      </div>

      <div className="min-w-0 flex-1">

        <p className="text-sm font-semibold text-black transition-colors group-hover:text-[#00540D]">
          {title}
        </p>

        <p className="mt-0.5 text-xs text-[#68716B]">
          {description}
        </p>

      </div>

      <ArrowRight
        size={15}
        className="shrink-0 text-[#00540D] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
      />

    </Link>
  );
}