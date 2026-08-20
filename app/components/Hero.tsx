// import Image from "next/image";
// import Link from "next/link";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   CheckCircle2,
//   MapPin,
//   Phone,
//   Ruler,
// } from "lucide-react";

// export default function Hero() {
//   return (
//     <section
//       aria-labelledby="hero-heading"
//       className="relative isolate overflow-hidden bg-[#003B09]"
//     >
//       {/* =====================================================
//           HERO IMAGE
//       ====================================================== */}

//       <div className="absolute inset-0 -z-20">

//         <Image
//           src="/images/shadnagar-aerial.webp"
//           alt="Open plots and plotted developments near Shadnagar"
//           fill
//           priority
//           sizes="100vw"
//           className="object-cover object-center"
//         />

//       </div>

//       {/* =====================================================
//           HERO OVERLAY
//       ====================================================== */}

//       <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#003B09]/95 via-[#003B09]/80 to-[#003B09]/30" />

//       <div className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-[#003B09]/80 to-transparent" />

//       {/* =====================================================
//           CONTENT
//       ====================================================== */}

//       <div className="container-main">

//         <div className="flex min-h-[700px] items-center py-20 md:min-h-[740px] md:py-24">

//           <div className="grid w-full items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">

//             {/* =================================================
//                 LEFT CONTENT
//             ================================================== */}

//             <div className="max-w-4xl">

//               {/* Eyebrow */}

//               <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">

//                 <span
//                   aria-hidden="true"
//                   className="h-2 w-2 rounded-full bg-[#d5b45f]"
//                 />

//                 <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:text-xs">
//                   Plot Projects Near Shadnagar
//                 </span>

//               </div>

//               {/* =================================================
//                   H1
//               ================================================== */}

//               <h1
//                 id="hero-heading"
//                 className="max-w-4xl text-4xl font-bold leading-[1.04] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
//               >
//                 Open Plots in
//                 <span className="block text-[#d5b45f]">
//                   Shadnagar
//                 </span>
//               </h1>

//               {/* Description */}

//               <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
//                 Explore residential plots, commercial plots
//                 and farm lands around Shadnagar, Balanagar,
//                 Kallepally, RRR and the Bangalore Highway
//                 corridor.
//               </p>

//               {/* =================================================
//                   KEYWORDS / LOCATION
//               ================================================== */}

//               <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">

//                 <HeroPoint text="Residential Plots" />

//                 <HeroPoint text="Farm Lands" />

//                 <HeroPoint text="Plots Near RRR" />

//                 <HeroPoint text="Site Visit Support" />

//               </div>

//               {/* =================================================
//                   BUTTONS
//               ================================================== */}

//               <div className="mt-9 flex flex-wrap gap-3">

//                 <Link
//                   href="/projects"
//                   className="group inline-flex items-center gap-2 rounded-full bg-[#00540D] px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#003B09]"
//                 >
//                   Explore Projects

//                   <ArrowUpRight
//                     size={17}
//                     aria-hidden="true"
//                     className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                   />
//                 </Link>

//                 <Link
//                   href="/book-site-visit"
//                   className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#00540D]"
//                 >
//                   Book a Site Visit

//                   <ArrowRight
//                     size={17}
//                     aria-hidden="true"
//                   />
//                 </Link>

//               </div>

//               {/* =================================================
//                   TRUST FEATURES
//               ================================================== */}

//               <div className="mt-10 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">

//                 <TrustCard
//                   icon={<CheckCircle2 size={17} />}
//                   title="Project Details"
//                 />

//                 <TrustCard
//                   icon={<Ruler size={17} />}
//                   title="Multiple Plot Sizes"
//                 />

//                 <TrustCard
//                   icon={<MapPin size={17} />}
//                   title="Prime Locations"
//                 />

//                 <TrustCard
//                   icon={<Phone size={17} />}
//                   title="Sales Assistance"
//                 />

//               </div>

//             </div>

//             {/* =================================================
//                 RIGHT ENQUIRY CARD
//             ================================================== */}

//             <div className="hidden lg:block">

//               <div className="ml-auto max-w-[390px] rounded-[28px] border border-white/20 bg-white/95 p-7 shadow-[0_25px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl">

//                 {/* Card header */}

//                 <div>

//                   <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00540D]">
//                     Explore Property
//                   </p>

//                   <h2 className="mt-3 text-2xl font-bold leading-tight text-black">
//                     Find a Plot That
//                     <span className="block text-[#00540D]">
//                       Fits Your Requirement
//                     </span>
//                   </h2>

//                   <p className="mt-3 text-sm leading-6 text-[#68716B]">
//                     Explore available projects and compare
//                     locations, plot sizes and listed pricing.
//                   </p>

//                 </div>

//                 {/* Quick options */}

//                 <div className="mt-6 space-y-3">

//                   <HeroLink
//                     href="/plots-for-sale-in-shadnagar"
//                     title="Plots for Sale in Shadnagar"
//                     description="Residential plotted developments"
//                   />

//                   <HeroLink
//                     href="/farm-lands-near-shadnagar"
//                     title="Farm Lands Near Shadnagar"
//                     description="Explore farmland projects"
//                   />

//                   <HeroLink
//                     href="/hmda-plots-in-shadnagar"
//                     title="HMDA Plots in Shadnagar"
//                     description="Explore applicable project details"
//                   />

//                   <HeroLink
//                     href="/rera-approved-plots-in-shadnagar"
//                     title="RERA Approved Plots"
//                     description="Explore applicable RERA projects"
//                   />

//                 </div>

//                 {/* CTA */}

//                 <Link
//                   href="/book-site-visit"
//                   className="group mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#00540D] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#003B09] hover:shadow-lg"
//                 >
//                   Book Your Site Visit

//                   <ArrowUpRight
//                     size={16}
//                     className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                   />
//                 </Link>

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//       {/* =====================================================
//           MOBILE BOTTOM LOCATION BAR
//       ====================================================== */}

//       <div className="border-t border-white/10 bg-[#003B09]/80 backdrop-blur-md lg:hidden">

//         <div className="container-main py-4">

//           <div className="flex items-center gap-2 text-xs text-white/70">

//             <MapPin
//               size={15}
//               className="shrink-0 text-[#d5b45f]"
//             />

//             <span>
//               Shadnagar • Balanagar • RRR • Bangalore Highway
//             </span>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// /* ============================================================
//    HERO POINT
// ============================================================ */

// function HeroPoint({
//   text,
// }: {
//   text: string;
// }) {
//   return (
//     <div className="flex items-center gap-2 text-sm text-white/80">

//       <CheckCircle2
//         size={15}
//         className="shrink-0 text-[#d5b45f]"
//         aria-hidden="true"
//       />

//       <span>{text}</span>

//     </div>
//   );
// }

// /* ============================================================
//    TRUST CARD
// ============================================================ */

// function TrustCard({
//   icon,
//   title,
// }: {
//   icon: React.ReactNode;
//   title: string;
// }) {
//   return (
//     <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">

//       <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-[#d5b45f]">
//         {icon}
//       </div>

//       <p className="mt-3 text-xs font-medium leading-5 text-white/80">
//         {title}
//       </p>

//     </div>
//   );
// }

// /* ============================================================
//    HERO LINK
// ============================================================ */

// function HeroLink({
//   href,
//   title,
//   description,
// }: {
//   href: string;
//   title: string;
//   description: string;
// }) {
//   return (
//     <Link
//       href={href}
//       className="group flex items-center gap-3 rounded-xl border border-[#e1e8e1] bg-[#f7faf7] p-3.5 transition-all duration-300 hover:border-[#00540D]/25 hover:bg-[#eaf3ea]"
//     >

//       <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eaf3ea] text-[#00540D] transition-transform duration-300 group-hover:scale-105">
//         <ArrowUpRight size={16} />
//       </div>

//       <div className="min-w-0 flex-1">

//         <p className="text-sm font-semibold text-black transition-colors group-hover:text-[#00540D]">
//           {title}
//         </p>

//         <p className="mt-0.5 text-xs text-[#68716B]">
//           {description}
//         </p>

//       </div>

//       <ArrowRight
//         size={15}
//         className="shrink-0 text-[#00540D] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
//       />

//     </Link>
//   );
// }




"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Phone,
  Ruler,
} from "lucide-react";

import { projects } from "@/data/projects";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const activeProject =
    featuredProjects[activeIndex] || featuredProjects[0];

  /*
   * Auto-scroll every 5 seconds
   */
  useEffect(() => {
    if (featuredProjects.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === featuredProjects.length - 1
          ? 0
          : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredProjects.length]);

  if (!activeProject) return null;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-[#003B09]"
    >
      {/* =====================================================
          BACKGROUND PROJECT IMAGE
      ====================================================== */}

      <div className="absolute inset-0 -z-30">
        <Image
          key={activeProject.image}
          src={activeProject.image}
          alt={`${activeProject.name} ${activeProject.type} in ${activeProject.location}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transition-opacity duration-700"
        />
      </div>

      {/* =====================================================
          DARK OVERLAY
      ====================================================== */}

      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#002F08]/95 via-[#003B09]/80 to-[#003B09]/35" />

      <div className="absolute inset-0 -z-10 " />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="container-main">
        <div className="flex min-h-[720px] items-center py-20 md:min-h-[780px] md:py-24">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">

            {/* =================================================
                LEFT SEO CONTENT
            ================================================= */}

            <div className="max-w-4xl">

              {/* SEO LOCATION BADGE */}

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-[#d5b45f]"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:text-xs">
                  Plots & Farm Lands Near Shadnagar
                </span>
              </div>

              {/* =================================================
                  MAIN H1
                  KEEP ONLY ONE H1
              ================================================== */}

              <h1
                id="hero-heading"
                className="max-w-4xl text-4xl font-bold leading-[1.04] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Open Plots in{" "}
                <span className="block text-[#d5b45f]">
                  Shadnagar
                </span>
              </h1>

              {/* SEO DESCRIPTION */}

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
                Explore residential plots, commercial plots and
                farm lands for sale in Shadnagar, Balanagar,
                Kallepally, Jadcherla, RRR and the Bangalore
                Highway corridor.
              </p>

              {/* =================================================
                  CURRENT PROJECT
              ================================================== */}

              <div
                key={activeProject.slug}
                className="mt-7 max-w-2xl rounded-2xl border border-white/20 bg-black/20 p-5 backdrop-blur-md"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#d5b45f] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black">
                    Featured Project
                  </span>

                  {activeProject.approvals?.rera && (
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold text-white">
                      RERA Approved
                    </span>
                  )}

                  {activeProject.approvals?.hmda && (
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold text-white">
                      HMDA
                    </span>
                  )}

                  {activeProject.approvals?.dtcp && (
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold text-white">
                      DTCP
                    </span>
                  )}
                </div>

                <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
                  {activeProject.name}
                </h2>

                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin
                      size={15}
                      className="text-[#d5b45f]"
                    />
                    {activeProject.location}
                  </span>

                  <span className="inline-flex items-center gap-1.5">
                    <Ruler
                      size={15}
                      className="text-[#d5b45f]"
                    />
                    {activeProject.plotSizes}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="text-xs text-white/60">
                      Starting Price
                    </p>

                    <p className="mt-1 text-2xl font-bold text-[#d5b45f]">
                      {activeProject.price}
                    </p>
                  </div>

                  <Link
                    href={`/projects/${activeProject.slug}`}
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#00540D] transition-all hover:bg-[#d5b45f] hover:text-black"
                  >
                    View Project
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </div>

              {/* =================================================
                  SEO / TRUST POINTS
              ================================================== */}

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
                <HeroPoint text="Residential Plots" />
                <HeroPoint text="Farm Lands" />
                <HeroPoint text="Plots Near RRR" />
                <HeroPoint text="Site Visit Support" />
              </div>

              {/* =================================================
                  CTA
              ================================================== */}

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#00540D] px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition-all hover:-translate-y-1 hover:bg-[#00450B]"
                >
                  Explore All Projects

                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <Link
                  href="/book-site-visit"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white hover:text-[#00540D]"
                >
                  Book a Site Visit

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>

            {/* =================================================
                RIGHT PROJECT CARD
            ================================================== */}

            <div className="hidden lg:block">
              <div className="ml-auto max-w-[420px] rounded-[28px] border border-white/20 bg-white/95 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl">

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00540D]">
                    Featured Property Projects
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-black">
                    Explore Our Projects
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#68716B]">
                    Compare locations, plot sizes, pricing and
                    project details.
                  </p>
                </div>

                {/* =================================================
                    FOUR PROJECTS
                ================================================== */}

                <div className="mt-5 space-y-2.5">
                  {featuredProjects.map((project, index) => {
                    const active =
                      index === activeIndex;

                    return (
                      <button
                        key={project.slug}
                        type="button"
                        onClick={() =>
                          setActiveIndex(index)
                        }
                        className={`group flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-all ${
                          active
                            ? "border-[#00540D]/30 bg-[#eaf3ea]"
                            : "border-[#e1e8e1] bg-[#f7faf7] hover:border-[#00540D]/20 hover:bg-[#eaf3ea]"
                        }`}
                        aria-label={`Show ${project.name}`}
                        aria-pressed={active}
                      >
                        {/* Thumbnail */}

                        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg">
                          <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            sizes="56px"
                            className="object-cover"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-bold text-black">
                            {project.name}
                          </p>

                          <p className="mt-0.5 text-xs text-[#68716B]">
                            {project.location}
                          </p>

                          <p className="mt-1 text-xs font-semibold text-[#00540D]">
                            {project.price}
                          </p>
                        </div>

                        <ArrowRight
                          size={16}
                          className={`shrink-0 transition-all ${
                            active
                              ? "translate-x-0 text-[#00540D]"
                              : "text-[#98a2b3] group-hover:translate-x-1"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>

                {/* =================================================
                    AUTO SLIDER INDICATORS
                ================================================== */}

                <div className="mt-5 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {featuredProjects.map((project, index) => (
                      <button
                        key={project.slug}
                        type="button"
                        onClick={() =>
                          setActiveIndex(index)
                        }
                        aria-label={`Select ${project.name}`}
                        className={`h-1.5 rounded-full transition-all ${
                          index === activeIndex
                            ? "w-8 bg-[#00540D]"
                            : "w-2 bg-[#d5ddd6]"
                        }`}
                      />
                    ))}
                  </div>

                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8a938d]">
                    Auto Explore
                  </span>
                </div>

                {/* CTA */}

                <Link
                  href={`/projects/${activeProject.slug}`}
                  className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#00540D] px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#003B09] hover:shadow-lg"
                >
                  Explore {activeProject.name}

                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE PROJECT BAR
      ====================================================== */}

      <div className="border-t border-white/10 bg-[#003B09]/90 backdrop-blur-md lg:hidden">
        <div className="container-main py-4">

          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d5b45f]">
              Featured Projects
            </span>

            <span className="text-[10px] text-white/50">
              {activeIndex + 1} / {featuredProjects.length}
            </span>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1">
            {featuredProjects.map((project, index) => (
              <button
                key={project.slug}
                type="button"
                onClick={() =>
                  setActiveIndex(index)
                }
                className={`min-w-[190px] rounded-xl border p-3 text-left ${
                  index === activeIndex
                    ? "border-[#d5b45f] bg-white/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <p className="truncate text-xs font-bold text-white">
                  {project.name}
                </p>

                <p className="mt-1 text-[10px] text-white/60">
                  {project.location}
                </p>

                <p className="mt-1 text-xs font-semibold text-[#d5b45f]">
                  {project.price}
                </p>
              </button>
            ))}
          </div>

          <div className="mt-3 flex items-center gap-2 text-xs text-white/60">
            <MapPin
              size={14}
              className="text-[#d5b45f]"
            />

            <span>
              Shadnagar • Balanagar • RRR • Jadcherla
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