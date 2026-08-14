import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Ruler,
} from "lucide-react";

import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section
      id="projects"
      aria-labelledby="featured-projects-heading"
      className="section-padding bg-white"
    >
      <div className="container-main">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

          <div className="max-w-4xl">

            <p className="brand-label">
              Featured Property Projects
            </p>

            <div
              aria-hidden="true"
              className="mt-4 h-[3px] w-12 rounded-full bg-[#00694E]"
            />

            <h2
              id="featured-projects-heading"
              className="mt-5 text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl md:text-5xl"
            >
              Open Plots, Residential Plots

              <span className="block text-[#00694E]">
                & Farm Lands Near Shadnagar
              </span>
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[#68716B] md:text-lg">
              Explore selected plot and farmland projects
              around Shadnagar, Balanagar, Kallepally,
              RRR, Jadcherla and the Bangalore Highway
              corridor. Compare project locations, plot
              sizes, pricing and available approval details.
            </p>

          </div>

          {/* View All */}

          <Link
            href="/projects"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-[#dce5dd] bg-white px-5 py-3 text-sm font-semibold text-[#00694E] transition-all duration-300 hover:border-[#00694E] hover:bg-[#f3f9f7]"
          >
            View All Projects

            <ArrowUpRight
              size={16}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

        </div>

        {/* =====================================================
            PROJECT GRID
        ====================================================== */}

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              priority={index < 2}
            />
          ))}

        </div>

        {/* =====================================================
            BOTTOM SEO LINK
        ====================================================== */}

        <div className="mt-10 flex justify-center">

          <Link
            href="/plots-for-sale-in-shadnagar"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#00694E]"
          >
            Explore Plots for Sale in Shadnagar

            <ArrowUpRight
              size={16}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

        </div>

      </div>
    </section>
  );
}


/* ============================================================
   PROJECT CARD
============================================================ */

function ProjectCard({
  project,
  priority = false,
}: {
  project: (typeof projects)[number];
  priority?: boolean;
}) {

  /*
   * IMPORTANT:
   * Image path comes directly from projects.ts
   *
   * Example:
   * /images/projects/golden-terra.webp
   */

  const imagePath = project.image;
  <img
  src={imagePath}
  alt={`${project.name} ${project.type} in ${project.location}`}
  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
/>

  const approval =
    project.approvals?.rera ||
    project.approvals?.hmda ||
    project.approvals?.dtcp;

  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[24px]
        border
        border-[#e1e8e1]
        bg-white
        shadow-[0_8px_30px_rgba(0,84,13,0.045)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#00694E]/20
        hover:shadow-[0_20px_45px_rgba(0,105,78,0.12)]
      "
    >

      {/* =====================================================
          IMAGE
      ====================================================== */}

      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.name} project details`}
        className="block"
      >

        <div className="relative aspect-[4/3] overflow-hidden bg-[#e8f5f1]">

          {/* PROJECT IMAGE */}

          <img
  src={imagePath}
  alt={`${project.name} ${project.type} in ${project.location}`}
  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
/>

          {/* IMAGE OVERLAY */}

          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/45
              via-black/5
              to-transparent
              opacity-70
            "
          />

          {/* =================================================
              PROJECT TYPE
          ================================================== */}

          <div className="absolute left-4 top-4">

            <span
              className="
                inline-flex
                rounded-full
                border
                border-white/30
                bg-white/95
                px-3
                py-1.5
                text-[10px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-[#00694E]
                shadow-sm
                backdrop-blur
              "
            >
              {project.type}
            </span>

          </div>

          {/* =================================================
              OPEN DETAILS ICON
          ================================================== */}

          <div
            aria-hidden="true"
            className="
              absolute
              right-4
              top-4
              flex
              h-10
              w-10
              translate-y-2
              items-center
              justify-center
              rounded-full
              bg-white
              text-[#00694E]
              opacity-0
              shadow-lg
              transition-all
              duration-300
              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            <ArrowUpRight size={17} />
          </div>

          {/* =================================================
              LOCATION ON IMAGE
          ================================================== */}

          <div className="absolute bottom-4 left-4 right-4">

            <div className="flex items-center gap-1.5 text-xs font-medium text-white">

              <MapPin
                size={14}
                aria-hidden="true"
              />

              <span>
                {project.location}
              </span>

            </div>

          </div>

        </div>

      </Link>


      {/* =====================================================
          CARD CONTENT
      ====================================================== */}

      <div className="flex flex-1 flex-col p-5 sm:p-6">

        {/* LOCATION */}

        <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#00694E]">
          {project.location}
        </p>


        {/* PROJECT NAME */}

        <h3 className="mt-2 text-xl font-bold leading-snug tracking-tight text-black">

          <Link
            href={`/projects/${project.slug}`}
            className="transition-colors duration-200 hover:text-[#00694E]"
          >
            {project.name}
          </Link>

        </h3>


        {/* LANDMARK */}

        <div className="mt-4 flex items-start gap-2 text-sm leading-6 text-[#68716B]">

          <MapPin
            size={15}
            aria-hidden="true"
            className="mt-1 shrink-0 text-[#00694E]"
          />

          <span>
            {project.landmark}
          </span>

        </div>


        {/* PLOT SIZE */}

        <div className="mt-3 flex items-center gap-2 text-sm text-[#68716B]">

          <Ruler
            size={15}
            aria-hidden="true"
            className="shrink-0 text-[#00694E]"
          />

          <span>
            {project.plotSizes}
          </span>

        </div>


        {/* =================================================
            APPROVAL
        ================================================== */}

        {approval && (

          <div className="mt-4 flex items-start gap-2">

            <CheckCircle2
              size={15}
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-[#00694E]"
            />

            <span className="line-clamp-2 text-xs font-medium leading-5 text-[#53605A]">

              {project.approvals?.rera
                ? `RERA: ${project.approvals.rera}`
                : project.approvals?.hmda
                ? `HMDA: ${project.approvals.hmda}`
                : `DTCP: ${project.approvals?.dtcp}`}

            </span>

          </div>

        )}


        {/* =================================================
            PRICE
        ================================================== */}

        <div className="mt-5 border-t border-[#edf2ed] pt-5">

          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#8a938d]">
            Listed Price
          </p>

          <p className="mt-1 text-xl font-bold tracking-tight text-[#00694E]">
            {project.price}
          </p>

          {project.priceNote && (

            <p className="mt-1 text-[11px] text-[#8a938d]">
              {project.priceNote}
            </p>

          )}

        </div>


        {/* =================================================
            CTA
        ================================================== */}

        <Link
          href={`/projects/${project.slug}`}
          className="
            mt-6
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-[#00694E]
            px-5
            py-3.5
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-[#00543E]
            hover:shadow-[0_8px_20px_rgba(0,105,78,0.18)]
          "
        >
          View Project Details

          <ArrowUpRight
            size={16}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />

        </Link>

      </div>

    </article>
  );
}