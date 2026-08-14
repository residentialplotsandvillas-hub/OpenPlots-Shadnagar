import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  MapPin,
  Route,
  TrendingUp,
} from "lucide-react";

export default function WhyShadnagar() {
  const points = [
    {
      number: "01",
      icon: <Route size={21} />,
      title: "Strategic Connectivity",
      text: "Shadnagar is connected to important road corridors including the RRR and Bangalore Highway, making location and accessibility important factors for property buyers.",
    },
    {
      number: "02",
      icon: <TrendingUp size={21} />,
      title: "Growing Development",
      text: "Residential and infrastructure development around Shadnagar and nearby corridors continues to create new property opportunities for buyers to evaluate.",
    },
    {
      number: "03",
      icon: <Building2 size={21} />,
      title: "Residential Opportunities",
      text: "Buyers can explore different plot sizes and plotted developments based on their requirements, budget and intended use.",
    },
    {
      number: "04",
      icon: <MapPin size={21} />,
      title: "Multiple Growth Corridors",
      text: "Projects around Balanagar, Kallepally, RRR, Polepally and Jadcherla provide different location options for property buyers.",
    },
  ];

  return (
    <section
      aria-labelledby="why-shadnagar-heading"
      className="section-padding overflow-hidden bg-[#f7faf7]"
    >
      <div className="container-main">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">

          <div>

            <p className="brand-label">
              Why Shadnagar
            </p>

            <div
              aria-hidden="true"
              className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]"
            />

            <h2
              id="why-shadnagar-heading"
              className="mt-5 max-w-xl text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl md:text-5xl"
            >
              Why Explore Plots
              <span className="block text-[#00540D]">
                in Shadnagar?
              </span>
            </h2>

          </div>

          <div className="max-w-2xl lg:ml-auto">

            <p className="text-base leading-8 text-[#68716B] md:text-lg">
              Shadnagar has become a location of interest
              for buyers exploring residential plots, farm
              lands and plotted developments. Location,
              connectivity, project details and future
              development are important factors to consider
              before choosing a property.
            </p>

          </div>

        </div>

        {/* =====================================================
            BENEFIT CARDS
        ====================================================== */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {points.map((point) => (
            <article
              key={point.number}
              className="group relative overflow-hidden rounded-[24px] border border-[#dfe8e1] bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#00540D]/25 hover:shadow-[0_18px_40px_rgba(0,84,13,0.09)] md:p-7"
            >

              {/* Background number */}

              <span
                aria-hidden="true"
                className="absolute -right-3 -top-7 text-[100px] font-bold leading-none text-[#00540D]/[0.035] transition-all duration-500 group-hover:text-[#00540D]/[0.07]"
              >
                {point.number}
              </span>

              {/* Number */}

              <div className="relative flex items-center justify-between">

                <span className="text-xs font-bold tracking-[0.15em] text-[#00540D]">
                  {point.number}
                </span>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf3ea] text-[#00540D] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#00540D] group-hover:text-white">
                  {point.icon}
                </div>

              </div>

              {/* Content */}

              <h3 className="relative mt-7 text-lg font-bold leading-snug text-black">
                {point.title}
              </h3>

              <p className="relative mt-3 text-sm leading-7 text-[#68716B]">
                {point.text}
              </p>

              {/* Bottom accent */}

              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-1 w-0 bg-[#00540D] transition-all duration-500 group-hover:w-full"
              />

            </article>
          ))}

        </div>

        {/* =====================================================
            LOCATION HIGHLIGHTS
        ====================================================== */}

        <div className="mt-12 rounded-[28px] border border-[#dfe8e1] bg-white p-6 shadow-[0_10px_35px_rgba(0,84,13,0.04)] md:p-8">

          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf3ea] text-[#00540D]">
                  <MapPin size={20} />
                </div>

                <div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#00540D]">
                    Explore Nearby Locations
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-black md:text-2xl">
                    Property Opportunities Around Shadnagar
                  </h3>

                </div>

              </div>

              <div className="mt-6 flex flex-wrap gap-2">

                <LocationTag label="Shadnagar" />

                <LocationTag label="Balanagar" />

                <LocationTag label="Kallepally" />

                <LocationTag label="RRR Corridor" />

                <LocationTag label="Polepally SEZ" />

                <LocationTag label="Jadcherla" />

                <LocationTag label="Bangalore Highway" />

              </div>

            </div>

            <Link
              href="/locations/shadnagar"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#00540D] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#003B09] hover:shadow-[0_10px_25px_rgba(0,84,13,0.15)]"
            >
              Explore Locations

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

          </div>

        </div>

        {/* =====================================================
            SEO INTERNAL LINKS
        ====================================================== */}

        <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3">

          <InternalLink
            href="/open-plots-in-shadnagar"
            label="Open Plots in Shadnagar"
          />

          <InternalLink
            href="/plots-for-sale-in-shadnagar"
            label="Plots for Sale in Shadnagar"
          />

          <InternalLink
            href="/farm-lands-near-shadnagar"
            label="Farm Lands Near Shadnagar"
          />

          <InternalLink
            href="/hmda-plots-in-shadnagar"
            label="HMDA Plots in Shadnagar"
          />

        </div>

      </div>
    </section>
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
    <span className="rounded-full border border-[#dce5dd] bg-[#f7faf7] px-4 py-2 text-xs font-medium text-[#53605A] transition-colors duration-200 hover:border-[#00540D]/30 hover:text-[#00540D]">
      {label}
    </span>
  );
}

/* ============================================================
   INTERNAL LINK
============================================================ */

function InternalLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#68716B] transition-colors duration-200 hover:text-[#00540D]"
    >
      {label}

      <ArrowUpRight
        size={13}
        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </Link>
  );
}