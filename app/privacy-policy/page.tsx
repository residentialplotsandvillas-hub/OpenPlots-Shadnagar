import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy for OpenPlots Shadnagar and understand how information submitted through our website may be collected and used.",
  alternates: {
    canonical:
      "https://openplotsinshadnagar.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </span>
          </nav>

          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00540D]">
              Legal Information
            </p>

            <div className="mt-4 h-[3px] w-12 rounded-full bg-[#00540D]" />

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-black md:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#53605A]">
              Information about how OpenPlots Shadnagar
              handles information submitted through this
              website.
            </p>
          </div>

        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-main">

          <article className="mx-auto max-w-4xl space-y-10 text-[#53605A]">

            <PolicySection title="1. Introduction">
              <p>
                OpenPlots Shadnagar respects your privacy.
                This Privacy Policy explains how information
                provided through this website may be collected,
                used and handled when you contact us, request
                project information or submit an enquiry.
              </p>
            </PolicySection>

            <PolicySection title="2. Information We May Collect">
              <p>
                Depending on how you use the website, you may
                provide information such as your name, mobile
                number, email address, preferred plot size,
                budget range and other information included in
                an enquiry or site visit request.
              </p>
            </PolicySection>

            <PolicySection title="3. How Information May Be Used">
              <p>
                Information submitted through enquiry forms may
                be used to respond to your request, provide
                project information, arrange a site visit and
                communicate with you regarding your enquiry.
              </p>
            </PolicySection>

            <PolicySection title="4. Communication">
              <p>
                If you submit your contact information, our team
                may contact you by phone, email or messaging
                services regarding your enquiry and requested
                property information.
              </p>
            </PolicySection>

            <PolicySection title="5. Website Analytics">
              <p>
                The website may use analytics or similar
                technologies to understand website traffic,
                visitor behaviour and website performance.
              </p>
            </PolicySection>

            <PolicySection title="6. Third-Party Services">
              <p>
                Some website functionality may rely on
                third-party services. Information processed by
                those services may be subject to their own
                privacy policies and terms.
              </p>
            </PolicySection>

            <PolicySection title="7. Data Security">
              <p>
                Reasonable measures may be used to protect
                information submitted through the website.
                However, no internet transmission or storage
                system can be guaranteed to be completely
                secure.
              </p>
            </PolicySection>

            <PolicySection title="8. Changes to This Policy">
              <p>
                This Privacy Policy may be updated from time to
                time to reflect changes to the website,
                services or applicable requirements. Updated
                versions will be published on this page.
              </p>
            </PolicySection>

            <PolicySection title="9. Contact">
              <p>
                If you have questions regarding this Privacy
                Policy or information submitted through the
                website, please contact us through the Contact
                page.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex rounded-full bg-[#00540D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#003B09]"
              >
                Contact Us
              </Link>
            </PolicySection>

          </article>

        </div>
      </section>
    </main>
  );
}

function PolicySection({
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