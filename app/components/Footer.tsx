import Link from "next/link";
import {
  Phone,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e1e8e1] bg-white">

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="container-main py-16 md:py-20">

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">

          {/* =================================================
              BRAND
          ================================================== */}

          <div>

            <Link
              href="/"
              aria-label="Open Plots in Shadnagar - Home"
              className="group inline-block"
            >
              <div className="text-2xl font-bold tracking-[-0.04em] text-[#00540D] transition-colors duration-200 group-hover:text-[#003B09]">
                OpenPlots
              </div>

              <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.25em] text-black">
                Shadnagar
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#68716B]">
              Explore residential plots, commercial plots
              and farm land projects around Shadnagar,
              Balanagar, Kallepally, RRR, Jadcherla and
              the Bangalore Highway corridor.
            </p>

            {/* Social */}

            <div className="mt-7 flex items-center gap-3">

            

          
      


            </div>

          </div>

          {/* =================================================
              EXPLORE
          ================================================== */}

          <FooterColumn title="Explore">

            <FooterLink
              href="/"
              label="Home"
            />

            <FooterLink
              href="/open-plots-in-shadnagar"
              label="Open Plots in Shadnagar"
            />

            <FooterLink
              href="/plots-for-sale-in-shadnagar"
              label="Plots for Sale in Shadnagar"
            />

            <FooterLink
              href="/farm-lands-near-shadnagar"
              label="Farm Lands Near Shadnagar"
            />

            <FooterLink
              href="/projects"
              label="Our Projects"
            />

          </FooterColumn>

          {/* =================================================
              LOCATIONS
          ================================================== */}

          <FooterColumn title="Locations">

            <FooterLink
              href="/locations/shadnagar"
              label="Shadnagar"
            />

            <FooterLink
              href="/locations/balanagar"
              label="Balanagar"
            />

            <FooterLink
              href="/locations/kallepally"
              label="Kallepally"
            />

            <FooterLink
              href="/locations/jadcherla"
              label="Jadcherla"
            />

            <FooterLink
              href="/locations/shamshabad"
              label="Shamshabad"
            />

          </FooterColumn>

          {/* =================================================
              CONTACT
          ================================================== */}

          <div>

            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-black">
              Contact
            </h2>

            <div className="mt-6 space-y-5">

              {/* Address */}

              <div className="flex gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eaf3ea] text-[#00540D]">
                 
                </div>

                <address className="not-italic text-sm leading-6 text-[#68716B]">
                  Shadnagar,
                  <br />
                  Rangareddy District,
                  <br />
                  Telangana, India
                </address>

              </div>

              {/* Phone */}
{/* Phone Numbers */}

<div className="space-y-3">

  <a
    href="tel:+919959354255"
    className="group flex items-center gap-3 text-sm text-[#53605A] transition-colors duration-200 hover:text-[#00540D]"
  >
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eaf3ea] text-[#00540D]">
      <Phone size={17} />
    </span>

    <span>
      +91 99593 54255
    </span>
  </a>

  <a
    href="tel:+917337317289"
    className="group flex items-center gap-3 text-sm text-[#53605A] transition-colors duration-200 hover:text-[#00540D]"
  >
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eaf3ea] text-[#00540D]">
      <Phone size={17} />
    </span>

    <span>
      +91 73373 17289
    </span>
  </a>

</div>
              {/* Email */}

              <a
                href="mailto:aarnainfradevelopers@gmail.com"
                className="group flex items-center gap-3 break-all text-sm text-[#53605A] transition-colors duration-200 hover:text-[#00540D]"
              >

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eaf3ea] text-[#00540D]">
                 
                </span>

                <span>
                 aarnainfradevelopers@gmail.com
                </span>

              </a>

              {/* CTA */}

              <Link
                href="/book-site-visit"
                className="group inline-flex items-center gap-2 rounded-full bg-[#00540D] px-5 py-3 text-sm font-semibold text-white shadow-[0_7px_20px_rgba(0,84,13,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#003B09] hover:shadow-[0_10px_25px_rgba(0,84,13,0.18)]"
              >
                Book a Site Visit

              
              </Link>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          PROJECT LINKS / SEO NAVIGATION
      ====================================================== */}

      <div className="border-y border-[#e1e8e1] bg-[#f7faf7]">

        <div className="container-main py-8">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {/* Plot Searches */}

            <div>

              <h2 className="text-sm font-bold text-black">
                Plot Searches
              </h2>

              <div className="mt-4 space-y-3">

                <FooterSmallLink
                  href="/open-plots-in-shadnagar"
                  label="Open Plots in Shadnagar"
                />

                <FooterSmallLink
                  href="/plots-for-sale-in-shadnagar"
                  label="Residential Plots"
                />

                <FooterSmallLink
                  href="/farm-lands-near-shadnagar"
                  label="Farm Lands Near Shadnagar"
                />

              </div>

            </div>

            {/* Approvals */}

            <div>

              <h2 className="text-sm font-bold text-black">
                Project Information
              </h2>

              <div className="mt-4 space-y-3">

                <FooterSmallLink
                  href="/hmda-plots-in-shadnagar"
                  label="HMDA Plots in Shadnagar"
                />

                <FooterSmallLink
                  href="/rera-approved-plots-in-shadnagar"
                  label="RERA Approved Plots"
                />

                <FooterSmallLink
                  href="/projects"
                  label="All Property Projects"
                />

              </div>

            </div>

            {/* Featured Projects */}

            <div>

              <h2 className="text-sm font-bold text-black">
                Featured Projects
              </h2>

              <div className="mt-4 space-y-3">

                <FooterSmallLink
                  href="/projects/sanjeevini-golden-farm"
                  label="Sanjeevini Golden Farm"
                />

                <FooterSmallLink
                  href="/projects/green-meadows"
                  label="Green Meadows"
                />

                <FooterSmallLink
                  href="/projects/golden-terra"
                  label="Golden Terra"
                />

                <FooterSmallLink
                  href="/projects/winridge-spar-venture"
                  label="Winridge Spar Venture"
                />

              </div>

            </div>

            {/* Guides */}

            <div>

              <h2 className="text-sm font-bold text-black">
                Helpful Guides
              </h2>

              <div className="mt-4 space-y-3">

                <FooterSmallLink
                  href="/guides"
                  label="Real Estate Guides"
                />

                <FooterSmallLink
                  href="/guides/open-plots-in-shadnagar"
                  label="Shadnagar Plot Guide"
                />

                <FooterSmallLink
                  href="/guides/how-to-buy-open-plot"
                  label="Plot Buying Guide"
                />

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          NATURAL SEO DESCRIPTION
      ====================================================== */}

      <div className="border-b border-[#e1e8e1] bg-white">

        <div className="container-main py-6">

          <p className="mx-auto max-w-5xl text-center text-xs leading-6 text-[#7a847d]">
            Explore plotted developments, residential plots
            and farm land projects around Shadnagar,
            Balanagar, Kallepally, RRR, Jadcherla and the
            Bangalore Highway corridor. Project information,
            pricing and availability may change and should
            be independently verified before purchase.
          </p>

        </div>

      </div>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}

      <div className="bg-white">

        <div className="container-main flex flex-col gap-5 py-6 md:flex-row md:items-center md:justify-between">

          {/* Copyright */}

       <p className="text-xs text-[#8a938d]">
  © {currentYear} OpenPlots Shadnagar. All rights reserved.{" "}
  <span className="mx-1">|</span>
  Developed by{" "}
  <a
    href="https://aarnainfradevelopers.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-green-700 underline decoration-green-700 underline-offset-2 transition hover:text-green-800"
  >
    Aarna Infra Developers
  </a>
</p>
          {/* Legal */}

          <div className="flex flex-wrap gap-x-5 gap-y-2">

            <Link
              href="/privacy-policy"
              className="text-xs text-[#7a847d] transition-colors hover:text-[#00540D]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-xs text-[#7a847d] transition-colors hover:text-[#00540D]"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/disclaimer"
              className="text-xs text-[#7a847d] transition-colors hover:text-[#00540D]"
            >
              Disclaimer
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

/* ============================================================
   FOOTER COLUMN
============================================================ */

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>

      <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-black">
        {title}
      </h2>

      <ul className="mt-6 space-y-4">
        {children}
      </ul>

    </div>
  );
}

/* ============================================================
   FOOTER LINK
============================================================ */

function FooterLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center gap-1 text-sm text-[#68716B] transition-colors duration-200 hover:text-[#00540D]"
      >
        {label}

      
      </Link>
    </li>
  );
}

/* ============================================================
   SMALL FOOTER LINK
============================================================ */

function FooterSmallLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 text-xs text-[#68716B] transition-colors duration-200 hover:text-[#00540D]"
    >
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full bg-[#00540D]/40 transition-all duration-200 group-hover:bg-[#00540D]"
      />

      <span>{label}</span>
    </Link>
  );
}

/* ============================================================
   SOCIAL LINK
============================================================ */

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dce5dd] bg-white text-[#68716B] transition-all duration-300 hover:-translate-y-1 hover:border-[#00540D] hover:bg-[#eaf3ea] hover:text-[#00540D]"
    >
      {icon}
    </a>
  );
}