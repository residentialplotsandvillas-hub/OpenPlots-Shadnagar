import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the Terms & Conditions for using the OpenPlots Shadnagar website and accessing property project information and enquiry services.",
  alternates: {
    canonical:
      "https://openplotsinshadnagar.com/terms",
  },
};

export default function TermsPage() {
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
              Terms & Conditions
            </span>
          </nav>

          <div className="mt-10 max-w-4xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00540D]">
              Legal Information
            </p>

            <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-black md:text-6xl">
              Terms & Conditions
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#53605A]">
              Terms governing your use of the OpenPlots
              Shadnagar website.
            </p>

          </div>

        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-main">

          <article className="mx-auto max-w-4xl space-y-10 text-[#53605A]">

            <TermsSection title="1. Website Use">
              <p>
                By accessing this website, you agree to use
                the website only for lawful purposes and in a
                manner that does not interfere with its
                operation or availability.
              </p>
            </TermsSection>

            <TermsSection title="2. Property Information">
              <p>
                Property information displayed on this website
                may include project names, locations, plot
                sizes, prices, approval details and other
                project information.
              </p>

              <p className="mt-4">
                Availability, pricing, specifications,
                approvals and other project details may change.
                Visitors should verify current information
                directly with the relevant project or sales
                team before making a property decision.
              </p>
            </TermsSection>

            <TermsSection title="3. Enquiries and Site Visits">
              <p>
                Submitting an enquiry or requesting a site
                visit does not constitute a purchase,
                reservation, allotment or contractual
                commitment unless separately confirmed through
                the appropriate process.
              </p>
            </TermsSection>

            <TermsSection title="4. Pricing">
              <p>
                Prices displayed on the website are provided
                for informational purposes and may be subject
                to change, negotiation, availability,
                applicable charges and project-specific terms.
              </p>
            </TermsSection>

            <TermsSection title="5. Approvals and Documentation">
              <p>
                Approval information displayed for individual
                projects should be independently verified using
                relevant official documentation before making
                any investment or purchase decision.
              </p>
            </TermsSection>

            <TermsSection title="6. Third-Party Information">
              <p>
                The website may contain references or links to
                third-party websites or services. We are not
                responsible for the content, availability or
                policies of external websites.
              </p>
            </TermsSection>

            <TermsSection title="7. Intellectual Property">
              <p>
                Website content, design, branding, text,
                graphics and other materials may be protected
                by applicable intellectual property laws.
                Content should not be copied, reproduced or
                commercially reused without appropriate
                permission.
              </p>
            </TermsSection>

            <TermsSection title="8. Changes to These Terms">
              <p>
                These Terms & Conditions may be updated when
                required. The latest version published on this
                page will apply to your continued use of the
                website.
              </p>
            </TermsSection>

            <TermsSection title="9. Contact">
              <p>
                If you have questions regarding these Terms &
                Conditions, please contact our team.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex rounded-full bg-[#00540D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#003B09]"
              >
                Contact Us
              </Link>
            </TermsSection>

          </article>

        </div>
      </section>
    </main>
  );
}

function TermsSection({
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