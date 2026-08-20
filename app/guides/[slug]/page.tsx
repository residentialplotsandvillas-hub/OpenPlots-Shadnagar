import type { Metadata } from "next";
import Link from "next/link";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type Guide = {
  title: string;
  description: string;
  intro: string;

  sections: {
    heading: string;
    content: string;
  }[];

  checklist: string[];

  faqs: {
    question: string;
    answer: string;
  }[];
};

const guides: Record<string, Guide> = {

  /* =====================================================
     1. OPEN PLOTS IN SHADNAGAR
  ====================================================== */

  "open-plots-in-shadnagar": {
    title: "Open Plots in Shadnagar",

    description:
      "Explore open plots in Shadnagar, residential plots, project locations, plot sizes, connectivity and important factors to consider before buying.",

    intro:
      "Shadnagar is becoming an important real estate destination for buyers looking for residential plots, investment land and plotted developments. Explore important information about locations, connectivity, plot sizes and buying considerations.",

    sections: [
      {
        heading: "Why Consider Open Plots in Shadnagar?",

        content:
          "Shadnagar and surrounding areas offer different property opportunities including residential plots, commercial plots and farm land. Buyers can evaluate locations based on accessibility, surrounding development, infrastructure and long-term requirements.",
      },

      {
        heading: "Residential Plots in Shadnagar",

        content:
          "Residential plots can be suitable for buyers planning to construct a future home or hold land for future requirements. Compare plot dimensions, road access, location, project development and applicable permissions before purchasing.",
      },

      {
        heading: "Things to Check Before Buying",

        content:
          "Before purchasing a plot, buyers should verify ownership and title documents, applicable layout permissions, project approvals, plot dimensions, road access, development status and payment terms.",
      },
    ],

    checklist: [
      "Project location",
      "Plot dimensions",
      "Road connectivity",
      "Applicable approvals",
      "Ownership documents",
      "Project development",
      "Price and payment terms",
      "Site accessibility",
    ],

    faqs: [
      {
        question:
          "Are there open plots for sale in Shadnagar?",

        answer:
          "Yes, different plotted developments and land opportunities are available around Shadnagar. Availability, plot sizes and prices vary by project.",
      },

      {
        question:
          "Why should I consider plots in Shadnagar?",

        answer:
          "Shadnagar has developing infrastructure and connectivity to important roads and surrounding growth corridors. Buyers should independently evaluate each project's location and documentation.",
      },

      {
        question:
          "What should I check before buying a plot?",

        answer:
          "Buyers should verify ownership, title documents, applicable approvals, layout permissions, plot dimensions, road access and development status.",
      },
    ],
  },


  /* =====================================================
     2. HOW TO BUY OPEN PLOT
  ====================================================== */

  "how-to-buy-open-plot": {
    title: "How to Buy an Open Plot",

    description:
      "Learn how to buy an open plot in Shadnagar, including location, plot size, documentation, approvals, pricing and site visits.",

    intro:
      "Buying an open plot requires careful evaluation of location, documents, project approvals, plot dimensions and development. Follow these important steps before making your property decision.",

    sections: [
      {
        heading: "Choose the Right Location",

        content:
          "Start by identifying a suitable location based on connectivity, surrounding development, accessibility and your intended use of the property. Visit the location personally before making a decision.",
      },

      {
        heading: "Check Project Documents",

        content:
          "Review ownership, title documents, layout permissions and other applicable project documentation. Where relevant, verify the project's RERA, HMDA or DTCP details through appropriate official records.",
      },

      {
        heading: "Compare Plot Size and Price",

        content:
          "Compare plot dimensions, location within the layout, road-facing options and pricing. Understand the total cost and applicable payment terms before booking.",
      },

      {
        heading: "Visit the Property",

        content:
          "A site visit helps you understand the actual surroundings, roads, accessibility, nearby developments and physical location of the plot.",
      },
    ],

    checklist: [
      "Select the location",
      "Visit the project",
      "Check ownership documents",
      "Verify applicable approvals",
      "Compare plot dimensions",
      "Understand pricing",
      "Review payment terms",
      "Take professional advice when required",
    ],

    faqs: [
      {
        question:
          "What is the first step when buying an open plot?",

        answer:
          "Start by identifying a suitable location and understanding the property's intended use, connectivity and surrounding development.",
      },

      {
        question:
          "Should I visit the plot before buying?",

        answer:
          "Yes. A physical site visit can help you evaluate the location, road access, surroundings and development status.",
      },

      {
        question:
          "What documents should I check?",

        answer:
          "Review ownership, title, applicable layout permissions, approval details and other relevant legal documents before purchasing.",
      },
    ],
  },


  /* =====================================================
     3. RESIDENTIAL PLOTS
  ====================================================== */

  "residential-plots-in-shadnagar": {
    title: "Residential Plots in Shadnagar",

    description:
      "Explore residential plots in Shadnagar and learn about plot sizes, locations, connectivity, project development and important buying considerations.",

    intro:
      "Residential plots in Shadnagar can be considered by buyers looking to build a future home or hold land for long-term requirements. Location and documentation verification are important parts of the buying process.",

    sections: [
      {
        heading: "Choosing Residential Plots",

        content:
          "When selecting a residential plot, consider the location, plot dimensions, road width, accessibility, surrounding development and applicable permissions.",
      },

      {
        heading: "Location and Connectivity",

        content:
          "Connectivity is an important consideration when selecting land. Evaluate access to major roads, nearby residential areas, essential services and future development around the project.",
      },

      {
        heading: "Plan Your Future Home",

        content:
          "If your goal is to construct a home, consider plot dimensions, road access, orientation and applicable construction regulations before purchasing.",
      },
    ],

    checklist: [
      "Residential location",
      "Plot dimensions",
      "Road access",
      "Nearby infrastructure",
      "Applicable permissions",
      "Development status",
      "Documentation",
      "Budget",
    ],

    faqs: [
      {
        question:
          "Can I build a house on a residential plot?",

        answer:
          "Construction depends on applicable land-use rules, project permissions and local building regulations. Verify these requirements before purchasing.",
      },

      {
        question:
          "What plot size should I choose?",

        answer:
          "The ideal plot size depends on your budget, intended house design, family requirements and applicable building regulations.",
      },
    ],
  },


  /* =====================================================
     4. PLOT INVESTMENT
  ====================================================== */

  "plot-investment-guide": {
    title: "Plot Investment Guide",

    description:
      "Learn how to evaluate plot investments in Shadnagar, including location, connectivity, documentation, development and long-term considerations.",

    intro:
      "Land investment requires careful research. Location, accessibility, project documentation, development and purchase costs should all be considered before making an investment decision.",

    sections: [
      {
        heading: "Evaluate the Location",

        content:
          "Consider accessibility, surrounding development, infrastructure and the overall development of the area when evaluating a plot investment.",
      },

      {
        heading: "Understand the Project",

        content:
          "Review project documentation, applicable permissions, layout details, infrastructure and development status before purchasing a plot.",
      },

      {
        heading: "Think Long Term",

        content:
          "Plot investment decisions should align with your financial objectives and investment horizon. Avoid making a decision based only on expected appreciation.",
      },
    ],

    checklist: [
      "Location",
      "Connectivity",
      "Project documentation",
      "Applicable approvals",
      "Plot size",
      "Infrastructure",
      "Total purchase cost",
      "Investment horizon",
    ],

    faqs: [
      {
        question:
          "Is buying a plot a good investment?",

        answer:
          "A plot may suit certain long-term investment strategies, but returns are not guaranteed. Buyers should evaluate location, documentation, costs and their own financial objectives.",
      },

      {
        question:
          "What is important when investing in land?",

        answer:
          "Location, clear documentation, applicable permissions, accessibility, development and purchase cost are important factors to evaluate.",
      },
    ],
  },


  /* =====================================================
     5. HMDA DTCP RERA
  ====================================================== */

  "hmda-dtcp-rera-plot-guide": {
    title: "HMDA, DTCP & RERA Plot Guide",

    description:
      "Understand HMDA, DTCP and RERA considerations when evaluating open plots and plotted developments in Shadnagar.",

    intro:
      "Approval and registration details are important when evaluating a plotted development. Buyers should understand which authority or registration applies to a particular project and independently verify the available records.",

    sections: [
      {
        heading: "Understanding HMDA",

        content:
          "HMDA refers to the Hyderabad Metropolitan Development Authority. Where applicable, buyers should verify the relevant planning and layout information through official sources.",
      },

      {
        heading: "Understanding DTCP",

        content:
          "DTCP refers to the Directorate of Town and Country Planning. Applicable planning and layout permissions should be verified for the specific property or project.",
      },

      {
        heading: "Understanding RERA",

        content:
          "RERA provides a regulatory framework for applicable real estate projects. Buyers should verify whether a project requires registration and check the relevant registration information.",
      },
    ],

    checklist: [
      "Verify project identity",
      "Check applicable approval",
      "Verify registration details",
      "Review layout documents",
      "Check ownership documents",
      "Verify plot details",
      "Review agreement terms",
      "Seek professional advice where required",
    ],

    faqs: [
      {
        question:
          "What is RERA?",

        answer:
          "RERA is a regulatory framework for applicable real estate projects. Buyers should verify the registration status of the specific project.",
      },

      {
        question:
          "What is HMDA?",

        answer:
          "HMDA is the Hyderabad Metropolitan Development Authority, responsible for planning and development functions within its applicable metropolitan region.",
      },

      {
        question:
          "What is DTCP?",

        answer:
          "DTCP refers to the Directorate of Town and Country Planning and is associated with planning and layout permissions in applicable areas.",
      },
    ],
  },


  /* =====================================================
     6. SITE VISIT
  ====================================================== */

  "site-visit-guide": {
    title: "Open Plot Site Visit Guide",

    description:
      "Learn what to check during an open plot site visit, including roads, surroundings, connectivity, plot dimensions and project development.",

    intro:
      "A site visit is an important step before purchasing an open plot. Visiting the property allows you to understand the actual location and compare project information with its physical surroundings.",

    sections: [
      {
        heading: "Check the Approach Road",

        content:
          "Check how easily the project can be accessed and understand the road connectivity from major nearby routes.",
      },

      {
        heading: "Inspect the Surroundings",

        content:
          "Look at nearby residential developments, infrastructure, amenities and surrounding land uses to understand the character of the area.",
      },

      {
        heading: "Verify the Plot",

        content:
          "Confirm the plot number, dimensions, location within the layout and road-facing details against the relevant project information.",
      },
    ],

    checklist: [
      "Approach road",
      "Internal roads",
      "Plot number",
      "Plot dimensions",
      "Surrounding development",
      "Nearby infrastructure",
      "Project development",
      "Location accessibility",
    ],

    faqs: [
      {
        question:
          "Why is a site visit important?",

        answer:
          "A site visit helps buyers understand the actual location, accessibility, surroundings, roads and development status.",
      },

      {
        question:
          "What should I check during a site visit?",

        answer:
          "Check approach roads, internal roads, plot dimensions, plot number, surroundings, infrastructure and project development.",
      },
    ],
  },
};


/* ============================================================
   STATIC PARAMS
============================================================ */

export async function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({
    slug,
  }));
}


/* ============================================================
   METADATA
============================================================ */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {

  const { slug } = await params;

  const guide = guides[slug];

  if (!guide) {
    return {
      title: "Property Guide | Open Plots in Shadnagar",
      description:
        "Explore property guides about open plots and real estate opportunities in Shadnagar.",
    };
  }

  return {
    title: `${guide.title} | Open Plots in Shadnagar`,

    description: guide.description,

    alternates: {
      canonical:
        `https://openplotsinshadnagar.com/guides/${slug}`,
    },

    openGraph: {
      title: `${guide.title} | Open Plots in Shadnagar`,
      description: guide.description,
      url:
        `https://openplotsinshadnagar.com/guides/${slug}`,
      type: "article",
    },
  };
}


/* ============================================================
   PAGE
============================================================ */

export default async function GuidePage({
  params,
}: PageProps) {

  const { slug } = await params;

  const guide = guides[slug];

  /* NOT FOUND */

  if (!guide) {
    return (
      <main className="min-h-[60vh] bg-white">

        <div className="container-main py-24 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00540D]">
            Property Guide
          </p>

          <h1 className="mt-4 text-4xl font-bold text-black">
            Guide Not Found
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-[#53605A]">
            The property guide you are looking for does not exist.
          </p>

          <Link
            href="/guides"
            className="mt-8 inline-flex rounded-full bg-[#00540D] px-7 py-3 font-semibold text-white transition hover:bg-[#003B09]"
          >
            View All Guides
          </Link>

        </div>

      </main>
    );
  }


  /* ==========================================================
     FAQ SCHEMA
  ========================================================== */

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: guide.faqs.map((faq) => ({
      "@type": "Question",

      name: faq.question,

      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };


  /* ==========================================================
     BREADCRUMB SCHEMA
  ========================================================== */

  const breadcrumbSchema = {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item:
          "https://openplotsinshadnagar.com/",
      },

      {
        "@type": "ListItem",
        position: 2,
        name: "Guides",
        item:
          "https://openplotsinshadnagar.com/guides",
      },

      {
        "@type": "ListItem",
        position: 3,
        name: guide.title,
        item:
          `https://openplotsinshadnagar.com/guides/${slug}`,
      },
    ],
  };


  return (
    <main className="bg-white">

      {/* =====================================================
          SCHEMA
      ====================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />


      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="bg-[#f7faf7] py-20 md:py-28">

        <div className="container-main">

          {/* Breadcrumb */}

          <nav
            aria-label="Breadcrumb"
            className="text-xs text-[#68716B]"
          >

            <Link
              href="/"
              className="transition-colors hover:text-[#00540D]"
            >
              Home
            </Link>

            <span className="mx-2">
              /
            </span>

            <Link
              href="/guides"
              className="transition-colors hover:text-[#00540D]"
            >
              Guides
            </Link>

            <span className="mx-2">
              /
            </span>

            <span className="text-black">
              {guide.title}
            </span>

          </nav>


          {/* Heading */}

          <div className="mt-10 max-w-4xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00540D]">
              Shadnagar Property Guide
            </p>

            <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-black md:text-6xl">
              {guide.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#53605A]">
              {guide.intro}
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <section className="section-padding">

        <div className="container-main">

          <article className="mx-auto max-w-4xl">

            {/* GUIDE SECTIONS */}

            <div className="space-y-12">

              {guide.sections.map((section) => (

                <section key={section.heading}>

                  <h2 className="text-2xl font-bold text-black md:text-3xl">
                    {section.heading}
                  </h2>

                  <p className="mt-5 text-base leading-8 text-[#53605A]">
                    {section.content}
                  </p>

                </section>

              ))}

            </div>


            {/* =================================================
                CHECKLIST
            ================================================== */}

            <section className="mt-14">

              <h2 className="text-2xl font-bold text-black md:text-3xl">
                What Should Buyers Check?
              </h2>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">

                {guide.checklist.map((item, index) => (

                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border border-[#e1e8e1] bg-white p-5 shadow-[0_8px_25px_rgba(0,84,13,0.04)]"
                  >

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f0f7f1] text-sm font-bold text-[#00540D]">
                      {index + 1}
                    </span>

                    <span className="font-medium text-black">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </section>


            {/* =================================================
                INTERNAL LINKS
            ================================================== */}

            <section className="mt-14 rounded-3xl bg-[#f7faf7] p-7 md:p-10">

              <h2 className="text-2xl font-bold text-black">
                Explore Open Plots in Shadnagar
              </h2>

              <p className="mt-4 leading-7 text-[#53605A]">
                Explore our property projects and learn more about
                open plots, residential plots and investment
                opportunities around Shadnagar.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                <Link
                  href="/open-plots-in-shadnagar"
                  className="rounded-full bg-[#00540D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#003B09]"
                >
                  Open Plots in Shadnagar
                </Link>

                <Link
                  href="/projects"
                  className="rounded-full border border-[#dce5dd] bg-white px-6 py-3 text-sm font-semibold text-[#00540D] transition hover:bg-[#f3f8f3]"
                >
                  View Projects
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border border-[#dce5dd] bg-white px-6 py-3 text-sm font-semibold text-[#00540D] transition hover:bg-[#f3f8f3]"
                >
                  Contact Us
                </Link>

              </div>

            </section>


            {/* =================================================
                FAQ
            ================================================== */}

            <section className="mt-16">

              <div className="mb-8">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00540D]">
                  FAQ
                </p>

                <h2 className="mt-2 text-3xl font-bold text-black">
                  Frequently Asked Questions
                </h2>

              </div>


              <div className="space-y-4">

                {guide.faqs.map((faq) => (

                  <details
                    key={faq.question}
                    className="group rounded-2xl border border-[#e1e8e1] bg-white"
                  >

                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6 font-semibold text-black">

                      {faq.question}

                      <span className="text-xl text-[#00540D] transition-transform group-open:rotate-45">
                        +
                      </span>

                    </summary>

                    <div className="border-t border-[#edf1ed] px-6 pb-6 pt-5">

                      <p className="leading-7 text-[#53605A]">
                        {faq.answer}
                      </p>

                    </div>

                  </details>

                ))}

              </div>

            </section>

          </article>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

     <section className="pb-20">
  <div className="container-main">
    <div className="rounded-3xl border border-[#e1e8e1] bg-white px-6 py-12 text-center shadow-[0_10px_40px_rgba(0,84,13,0.06)] md:px-10">

      <h2 className="text-3xl font-bold text-black">
        Looking for Open Plots in Shadnagar?
      </h2>

      <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#53605A]">
        Explore our projects or contact us to learn more
        about available plots, project details and site visits.
      </p>

      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

        <Link
          href="/open-plots-in-shadnagar"
          className="rounded-full bg-[#00540D] px-7 py-3 font-semibold text-white transition hover:bg-[#003B09]"
        >
          Explore Projects
        </Link>

        <Link
          href="/contact"
          className="rounded-full border border-[#00540D] bg-white px-7 py-3 font-semibold text-[#00540D] transition hover:bg-[#f3f8f3]"
        >
          Contact Us
        </Link>

      </div>

    </div>
  </div>
</section>

    </main>
  );
}