"use client";

import Link from "next/link";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  function closeMenu() {
    setMobileOpen(false);
    setProjectsOpen(false);
    setMoreOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#e1e8e1] bg-white/95 backdrop-blur-xl">

      <div className="container-main">

        <nav
          className="flex h-[76px] items-center justify-between"
          aria-label="Main navigation"
        >

          {/* =====================================================
              LOGO
          ====================================================== */}

          <Link
            href="/"
            onClick={closeMenu}
            aria-label="Open Plots in Shadnagar Home"
            className="group shrink-0"
          >
            <div className="leading-none">

              <div className="text-[21px] font-bold tracking-[-0.04em] text-[#00540D] transition-colors duration-200 group-hover:text-[#003B09]">
                OpenPlots
              </div>

              <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.23em] text-[#111111]">
                Shadnagar
              </div>

            </div>
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}

          <div className="hidden items-center gap-7 md:flex">

            {/* HOME */}

            <NavLink
              href="/"
              label="Home"
            />

            {/* OPEN PLOTS */}

            <NavLink
              href="/open-plots-in-shadnagar"
              label="Open Plots in Shadnagar"
            />

            {/* PLOTS FOR SALE */}

            <NavLink
              href="/plots-for-sale-in-shadnagar"
              label="Plots for Sale"
            />

            {/* =================================================
                PROJECTS DROPDOWN
            ================================================== */}

            <div className="relative">

              <button
                type="button"
                onClick={() =>
                  setProjectsOpen((prev) => !prev)
                }
                aria-expanded={projectsOpen}
                aria-haspopup="menu"
                className="flex items-center gap-1.5 py-2 text-[14px] font-medium text-[#222222] transition-colors hover:text-[#00540D]"
              >
                Projects

                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    projectsOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {projectsOpen && (
                <div
                  className="absolute left-1/2 top-full mt-4 w-[300px] -translate-x-1/2 rounded-2xl border border-[#e1e8e1] bg-white p-2 shadow-[0_18px_45px_rgba(0,84,13,0.10)]"
                  role="menu"
                >

                  <DropdownLink
                    href="/projects"
                    title="All Projects"
                    description="Explore all open plot and land projects"
                    onClick={closeMenu}
                  />

                  <DropdownLink
                    href="/projects/sanjeevini-golden-farm"
                    title="Sanjeevini Golden Farm"
                    description="Farm land project near Shadnagar"
                    onClick={closeMenu}
                  />

                  <DropdownLink
                    href="/projects/green-meadows"
                    title="Green Meadows"
                    description="Residential plots near RRR"
                    onClick={closeMenu}
                  />

                  <DropdownLink
                    href="/projects/golden-terra"
                    title="Golden Terra"
                    description="Residential and commercial plots"
                    onClick={closeMenu}
                  />

                  <DropdownLink
                    href="/projects/winridge-spar-venture"
                    title="Winridge Spar Venture"
                    description="Plots near Polepally SEZ"
                    onClick={closeMenu}
                  />

                </div>
              )}

            </div>

            {/* FARM LANDS */}

            <NavLink
              href="/farm-lands-near-shadnagar"
              label="Farm Lands"
            />

            {/* =================================================
                MORE DROPDOWN
            ================================================== */}

            <div className="relative">

              <button
                type="button"
                onClick={() =>
                  setMoreOpen((prev) => !prev)
                }
                aria-expanded={moreOpen}
                aria-haspopup="menu"
                className="flex items-center gap-1.5 py-2 text-[14px] font-medium text-[#222222] transition-colors hover:text-[#00540D]"
              >
                More

                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    moreOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {moreOpen && (
                <div
                  className="absolute right-0 top-full mt-4 w-[270px] rounded-2xl border border-[#e1e8e1] bg-white p-2 shadow-[0_18px_45px_rgba(0,84,13,0.10)]"
                  role="menu"
                >

                  <DropdownLink
                    href="/hmda-plots-in-shadnagar"
                    title="HMDA Plots"
                    description="Explore HMDA plot projects"
                    onClick={closeMenu}
                  />

                  <DropdownLink
                    href="/rera-approved-plots-in-shadnagar"
                    title="RERA Plots"
                    description="Explore RERA approved projects"
                    onClick={closeMenu}
                  />

                  <DropdownLink
                    href="/guides"
                    title="Property Guides"
                    description="Helpful real estate information"
                    onClick={closeMenu}
                  />

                  <DropdownLink
                    href="/contact"
                    title="Contact Us"
                    description="Get in touch with our team"
                    onClick={closeMenu}
                  />

                </div>
              )}

            </div>

            {/* =================================================
                CTA
            ================================================== */}

            <Link
              href="/book-site-visit"
              className="group ml-1 inline-flex items-center gap-2 rounded-full bg-[#00540D] px-5 py-3 text-[13px] font-semibold text-white shadow-[0_6px_18px_rgba(0,84,13,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#003B09] hover:shadow-[0_10px_25px_rgba(0,84,13,0.18)]"
            >
              Book Site Visit

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ====================================================== */}

          <button
            type="button"
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            onClick={() =>
              setMobileOpen((prev) => !prev)
            }
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#dce5dd] bg-white text-[#111111] transition-all duration-200 hover:border-[#00540D] hover:bg-[#f3f8f3] hover:text-[#00540D] md:hidden"
          >
            {mobileOpen ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>

        </nav>

        {/* =====================================================
            MOBILE MENU
        ====================================================== */}

        {mobileOpen && (
          <div className="border-t border-[#e1e8e1] py-5 md:hidden">

            <div className="space-y-1">

              {/* HOME */}

              <MobileLink
                href="/"
                label="Home"
                close={closeMenu}
              />

              {/* OPEN PLOTS */}

              <MobileLink
                href="/open-plots-in-shadnagar"
                label="Open Plots in Shadnagar"
                close={closeMenu}
              />

              {/* PLOTS */}

              <MobileLink
                href="/plots-for-sale-in-shadnagar"
                label="Plots for Sale in Shadnagar"
                close={closeMenu}
              />

              {/* FARM LAND */}

              <MobileLink
                href="/farm-lands-near-shadnagar"
                label="Farm Lands Near Shadnagar"
                close={closeMenu}
              />

              {/* =================================================
                  MOBILE PROJECTS
              ================================================== */}

              <div>

                <button
                  type="button"
                  onClick={() =>
                    setProjectsOpen((prev) => !prev)
                  }
                  aria-expanded={projectsOpen}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-[#222222] transition hover:bg-[#f3f8f3] hover:text-[#00540D]"
                >

                  <span>
                    Projects
                  </span>

                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      projectsOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />

                </button>

                {projectsOpen && (
                  <div className="ml-3 border-l border-[#dce5dd] pl-3">

                    <MobileLink
                      href="/projects"
                      label="All Projects"
                      close={closeMenu}
                    />

                    <MobileLink
                      href="/projects/sanjeevini-golden-farm"
                      label="Sanjeevini Golden Farm"
                      close={closeMenu}
                    />

                    <MobileLink
                      href="/projects/green-meadows"
                      label="Green Meadows"
                      close={closeMenu}
                    />

                    <MobileLink
                      href="/projects/golden-terra"
                      label="Golden Terra"
                      close={closeMenu}
                    />

                    <MobileLink
                      href="/projects/winridge-spar-venture"
                      label="Winridge Spar Venture"
                      close={closeMenu}
                    />

                  </div>
                )}

              </div>

              {/* HMDA */}

              <MobileLink
                href="/hmda-plots-in-shadnagar"
                label="HMDA Plots in Shadnagar"
                close={closeMenu}
              />

              {/* RERA */}

              <MobileLink
                href="/rera-approved-plots-in-shadnagar"
                label="RERA Approved Plots"
                close={closeMenu}
              />

              {/* GUIDES */}

              <MobileLink
                href="/guides"
                label="Property Guides"
                close={closeMenu}
              />

              {/* CONTACT */}

              <MobileLink
                href="/contact"
                label="Contact Us"
                close={closeMenu}
              />

            </div>

            {/* =================================================
                MOBILE CTA
            ================================================== */}

            <div className="mt-5 grid grid-cols-2 gap-3">

              <a
                href="tel:+919999999999"
                className="flex items-center justify-center gap-2 rounded-xl border border-[#dce5dd] bg-white px-4 py-3.5 text-sm font-semibold text-[#00540D] transition-all hover:border-[#00540D] hover:bg-[#f3f8f3]"
              >

                <Phone size={16} />

                Call Now

              </a>

              <Link
                href="/book-site-visit"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#00540D] px-4 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#003B09]"
              >

                Site Visit

                <ArrowUpRight size={15} />

              </Link>

            </div>

          </div>
        )}

      </div>

    </header>
  );
}

/* ============================================================
   DESKTOP NAV LINK
============================================================ */

function NavLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="group relative py-2 text-[14px] font-medium text-[#222222] transition-colors duration-200 hover:text-[#00540D]"
    >

      {label}

      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#00540D] transition-all duration-300 group-hover:w-full"
      />

    </Link>
  );
}

/* ============================================================
   DROPDOWN LINK
============================================================ */

function DropdownLink({
  href,
  title,
  description,
  onClick,
}: {
  href: string;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      role="menuitem"
      className="group block rounded-xl px-3 py-3 transition-colors duration-200 hover:bg-[#f3f8f3]"
    >

      <div className="flex items-start justify-between gap-3">

        <div>

          <p className="text-sm font-semibold text-black transition-colors group-hover:text-[#00540D]">
            {title}
          </p>

          <p className="mt-1 text-[11px] leading-5 text-[#7a847d]">
            {description}
          </p>

        </div>

        <ArrowUpRight
          size={14}
          className="mt-0.5 shrink-0 text-[#00540D] opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
        />

      </div>

    </Link>
  );
}

/* ============================================================
   MOBILE LINK
============================================================ */

function MobileLink({
  href,
  label,
  close,
}: {
  href: string;
  label: string;
  close: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={close}
      className="block rounded-xl px-4 py-3 text-sm font-medium text-[#222222] transition-all duration-200 hover:bg-[#f3f8f3] hover:text-[#00540D]"
    >
      {label}
    </Link>
  );
}