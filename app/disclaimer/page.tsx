import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Read the OpenPlots Shadnagar property information disclaimer regarding project details, prices, approvals, availability and real estate information.",
  alternates: {
    canonical:
      "https://openplotsinshadnagar.com/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <main className="bg-white">

      {/* Header */}
      <section className="bg-[#f7faf7] py-20 md:py-28">
        <div className="container-main">

          <nav
            aria-label="Breadcrumb"
            className="text-xs text-[#68716B]"
          >
            <Link
              href="/"
              className="hover:text-[#00540D]"
            >
              Home
            </Link>

            <span className="mx-2">/</span>

            <span className="text-black">
              Disclaimer
            </span>
          </nav>

          <div className="mt-10 max-w-4xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00540D]">
              Important Information
            </p>

            <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-black md:text-6xl">
              Disclaimer
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#53605A]">
              Important information regarding property
              listings, pricing, approvals and project
              information published on this website.
            </p>

          </div>

        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-main">

          <article className="mx-auto max-w-4xl space-y-10 text-[#53605A]">

            <DisclaimerSection title="1. General Information">
              <p>
                The information published on
                OpenPlots Shadnagar is intended for general
                informational purposes. Property information
                should be independently verified before making
                a purchase or investment decision.
              </p>
            </DisclaimerSection>

            <DisclaimerSection title="2. Property Prices">
              <p>
                Property prices displayed on this website may
                change based on availability, negotiation,
                project terms, market conditions and other
                applicable factors.
              </p>

              <p className="mt-4">
                The price shown on a project page should not be
                considered a guaranteed final transaction
                price.
              </p>
            </DisclaimerSection>

            <DisclaimerSection title="3. Project Approvals">
              <p>
                Where project approval numbers, RERA details,
                HMDA information or DTCP information are
                displayed, users should independently verify
                the relevant documentation and current status
                with the appropriate authority or project
                representative.
              </p>
            </DisclaimerSection>

            <DisclaimerSection title="4. Availability">
              <p>
                Plot availability, plot numbers, dimensions,
                pricing and other project details may change
                without prior notice.
              </p>
            </DisclaimerSection>

            <DisclaimerSection title="5. Investment Decisions">
              <p>
                Information on this website should not be
                treated as financial, legal or investment
                advice. Buyers should conduct their own
                research and obtain professional advice where
                appropriate.
              </p>
            </DisclaimerSection>

            <DisclaimerSection title="6. Images and Illustrations">
              <p>
                Project images, illustrations, maps, graphics
                and other visual materials may be used to
                represent project locations or concepts.
                Actual site conditions, specifications and
                amenities may differ.
              </p>
            </DisclaimerSection>

            <DisclaimerSection title="7. Third-Party Information">
              <p>
                Information supplied by project developers,
                owners, sales representatives or other third
                parties may be presented on the website. Users
                should verify such information independently.
              </p>
            </DisclaimerSection>

            <DisclaimerSection title="8. No Guarantee">
              <p>
                While reasonable efforts may be made to keep
                website information useful and current, no
                guarantee is made regarding the completeness,
                accuracy or uninterrupted availability of all
                information.
              </p>
            </DisclaimerSection>

            <DisclaimerSection title="9. Contact">
              <p>
                If you require clarification about a specific
                project or property listing, please contact our
                team before making a decision.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex rounded-full bg-[#00540D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#003B09]"
              >
                Contact Us
              </Link>
            </DisclaimerSection>

          </article>

        </div>
      </section>
    </main>
  );
}

function DisclaimerSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-black md:text-3xl">
        {title}
      </h2>

      <div className="mt-4 text-base leading-8">
        {children}
      </div>
    </section>
  );
}