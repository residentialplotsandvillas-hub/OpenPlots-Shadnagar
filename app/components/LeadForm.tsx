"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  CheckCircle2,
  Loader2,
  MapPin,
  Phone,
} from "lucide-react";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  setLoading(true);
  setSubmitted(false);

  const form = e.currentTarget;
  const formData = new FormData(form);

  const templateParams = {
  name: String(formData.get("name") || "").trim(),
  phone: String(formData.get("phone") || "").trim(),
  email: String(formData.get("email") || "").trim(),
  project: String(formData.get("project") || ""),
  size: String(formData.get("size") || ""),
  budget: String(formData.get("budget") || ""),

  // NEW FIELDS
  visit_date: String(formData.get("visit_date") || ""),
  visit_time: String(formData.get("visit_time") || ""),
  pickup_location: String(formData.get("pickup_location") || ""),

  message: String(formData.get("message") || "").trim(),
  source: "Website",
  page_url:
    typeof window !== "undefined"
      ? window.location.href
      : "",
};

  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      templateParams,
      {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      }
    );

    form.reset();
    setSubmitted(true);
  } catch (error) {
    console.error("EmailJS error:", error);

    alert(
      "Something went wrong. Please try again or contact our sales team."
    );
  } finally {
    setLoading(false);
  }
}

  return (
    <div
      id="enquiry"
      className="overflow-hidden rounded-[28px] border border-[#e1e8e1] bg-white shadow-[0_15px_45px_rgba(0,84,13,0.07)]"
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="border-b border-[#edf2ed] bg-[#f7faf7] p-6 md:p-8">

        <div className="flex items-start gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eaf3ea] text-[#00540D]">
            <MapPin size={22} />
          </div>

          <div>

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00540D]">
              Enquire Now
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-black md:text-3xl">
              Find Your Plot
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#68716B]">
              Tell us what you are looking for and our
              team will help you explore suitable projects.
            </p>

          </div>

        </div>

      </div>

      {/* =====================================================
          FORM
      ====================================================== */}

      <div className="p-6 md:p-8">

        {submitted ? (
          <SuccessMessage />
        ) : (
          <form
            onSubmit={submitForm}
            className="space-y-5"
          >

            {/* =================================================
                NAME
            ================================================== */}

            <div>

              <label
                htmlFor="lead-name"
                className="mb-2 block text-sm font-semibold text-black"
              >
                Full Name
              </label>

              <input
                id="lead-name"
                name="name"
                required
                autoComplete="name"
                placeholder="Enter your full name"
                className="input-premium"
              />

            </div>

            {/* =================================================
                PHONE
            ================================================== */}

            <div>

              <label
                htmlFor="lead-phone"
                className="mb-2 block text-sm font-semibold text-black"
              >
                Mobile Number
              </label>

              <input
                id="lead-phone"
                name="phone"
                required
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                pattern="[6-9][0-9]{9}"
                maxLength={10}
                placeholder="10-digit mobile number"
                className="input-premium"
              />

              <p className="mt-1.5 text-[11px] text-[#8a938d]">
                Enter a valid 10-digit Indian mobile number.
              </p>

            </div>

            {/* =================================================
                EMAIL
            ================================================== */}

            <div>

              <label
                htmlFor="lead-email"
                className="mb-2 block text-sm font-semibold text-black"
              >
                Email Address
                <span className="ml-1 font-normal text-[#98a2b3]">
                  (Optional)
                </span>
              </label>

              <input
                id="lead-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="input-premium"
              />

            </div>

            {/* =================================================
                PROJECT
            ================================================== */}

            <div>

              <label
                htmlFor="lead-project"
                className="mb-2 block text-sm font-semibold text-black"
              >
                Interested Project
              </label>

              <select
                id="lead-project"
                name="project"
                defaultValue=""
                className="input-premium cursor-pointer"
              >
                <option value="">
                  Select a project
                </option>

                <option value="Sanjeevini Golden Farm">
                  Sanjeevini Golden Farm
                </option>

                <option value="Green Meadows">
                  Green Meadows
                </option>

                <option value="Golden Terra">
                  Golden Terra
                </option>

                <option value="Winridge Spar Venture">
                  Winridge Spar Venture
                </option>

                <option value="Any Project">
                  Any Project
                </option>

              </select>

            </div>

            {/* =================================================
                PLOT SIZE
            ================================================== */}

            <div>

              <label
                htmlFor="lead-size"
                className="mb-2 block text-sm font-semibold text-black"
              >
                Preferred Plot Size
              </label>

              <select
                id="lead-size"
                name="size"
                defaultValue=""
                className="input-premium cursor-pointer"
              >
                <option value="">
                  Select plot size
                </option>

                <option value="Below 150 Sq. Yds">
                  Below 150 Sq. Yds
                </option>

                <option value="150 Sq. Yds">
                  150 Sq. Yds
                </option>

                <option value="200 Sq. Yds">
                  200 Sq. Yds
                </option>

                <option value="300 Sq. Yds">
                  300 Sq. Yds
                </option>

                <option value="500 Sq. Yds">
                  500 Sq. Yds
                </option>

                <option value="500+ Sq. Yds">
                  500+ Sq. Yds
                </option>

                <option value="Farm Land">
                  Farm Land
                </option>

              </select>

            </div>

            {/* =================================================
                BUDGET
            ================================================== */}

            <div>

              <label
                htmlFor="lead-budget"
                className="mb-2 block text-sm font-semibold text-black"
              >
                Budget Range
              </label>

              <select
                id="lead-budget"
                name="budget"
                defaultValue=""
                className="input-premium cursor-pointer"
              >
                <option value="">
                  Select your budget
                </option>

                <option value="Below ₹20 Lakhs">
                  Below ₹20 Lakhs
                </option>

                <option value="₹20–30 Lakhs">
                  ₹20–30 Lakhs
                </option>

                <option value="₹30–50 Lakhs">
                  ₹30–50 Lakhs
                </option>

                <option value="₹50–75 Lakhs">
                  ₹50–75 Lakhs
                </option>

                <option value="₹75 Lakhs+">
                  ₹75 Lakhs+
                </option>

              </select>

            </div>
{/* =================================================
    SITE VISIT DATE
================================================== */}

<div>
  <label
    htmlFor="visit-date"
    className="mb-2 block text-sm font-semibold text-black"
  >
    Site Visit Date
  </label>

  <input
    id="visit-date"
    name="visit_date"
    type="date"
    required
    min={new Date().toISOString().split("T")[0]}
    className="input-premium cursor-pointer"
  />
</div>

{/* =================================================
    SITE VISIT TIME
================================================== */}

<div>
  <label
    htmlFor="visit-time"
    className="mb-2 block text-sm font-semibold text-black"
  >
    Preferred Visit Time
  </label>

  <select
    id="visit-time"
    name="visit_time"
    required
    defaultValue=""
    className="input-premium cursor-pointer"
  >
    <option value="">Select preferred time</option>
        <option value="06:00 AM">06:00 AM</option>
            <option value="07:00 AM">07:00 AM</option>
                <option value="08:00 AM">08:00 AM</option>
    <option value="09:00 AM">09:00 AM</option>
    <option value="10:00 AM">10:00 AM</option>
    <option value="11:00 AM">11:00 AM</option>
    <option value="12:00 PM">12:00 PM</option>
    <option value="01:00 PM">01:00 PM</option>
    <option value="02:00 PM">02:00 PM</option>
    <option value="03:00 PM">03:00 PM</option>
    <option value="04:00 PM">04:00 PM</option>
    <option value="05:00 PM">05:00 PM</option>
    <option value="06:00 PM">06:00 PM</option>
  </select>
</div>


{/* =================================================
    PICKUP LOCATION
================================================== */}

<div>
  <label
    htmlFor="pickup-location"
    className="mb-2 block text-sm font-semibold text-black"
  >
    Pick-up Location
  </label>

  <input
    id="pickup-location"
    name="pickup_location"
    type="text"
    required
    placeholder="Enter your pickup location in Hyderabad"
    autoComplete="street-address"
    className="input-premium"
  />

  <p className="mt-1.5 text-[11px] text-[#8a938d]">
    Example: Kukatpally, Miyapur, Gachibowli, Uppal
  </p>
</div>
            {/* =================================================
                MESSAGE
            ================================================== */}

            <div>

              <label
                htmlFor="lead-message"
                className="mb-2 block text-sm font-semibold text-black"
              >
                Requirement
                <span className="ml-1 font-normal text-[#98a2b3]">
                  (Optional)
                </span>
              </label>

              <textarea
                id="lead-message"
                name="message"
                rows={3}
                placeholder="Tell us what you are looking for..."
                className="input-premium min-h-[100px] resize-none"
              />

            </div>

            {/* =================================================
                SUBMIT
            ================================================== */}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#00540D] px-6 py-4 text-sm font-bold text-white shadow-[0_8px_22px_rgba(0,84,13,0.14)] transition-all duration-300 hover:bg-[#003B09] hover:shadow-[0_12px_28px_rgba(0,84,13,0.2)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2
                    size={17}
                    className="animate-spin"
                  />

                  Submitting...
                </>
              ) : (
                <>
                  Schedule A Site Visit

                  <MapPin size={17} />
                </>
              )}
            </button>

            {/* =================================================
                PRIVACY NOTE
            ================================================== */}

            <p className="text-center text-[11px] leading-5 text-[#98a2b3]">
              By submitting this form, you agree to be
              contacted regarding project information and
              site visit assistance.
            </p>

          </form>
        )}

      </div>

      {/* =====================================================
          PHONE CTA
      ====================================================== */}

      {/* =====================================================
    PHONE CTA
====================================================== */}

<div className="border-t border-[#edf2ed] bg-[#f7faf7] px-6 py-5 md:px-8">

  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

    <div className="flex items-start gap-3">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eaf3ea] text-[#00540D]">
        <Phone size={16} />
      </div>

      <div>

        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#8a938d]">
          Prefer to call?
        </p>

        <div className="mt-1 flex flex-col gap-1">

          <a
            href="tel:+919959354255"
            className="text-sm font-bold text-black transition-colors hover:text-[#00540D]"
          >
            +91 99593 54255
          </a>

          <a
            href="tel:+917337317289"
            className="text-sm font-bold text-black transition-colors hover:text-[#00540D]"
          >
            +91 73373 17289
          </a>

        </div>

      </div>

    </div>

    <span className="text-xs text-[#68716B]">
      Sales Assistance
    </span>

  </div>

</div>

    </div>
  );
}

/* ============================================================
   SUCCESS MESSAGE
============================================================ */

function SuccessMessage() {
  return (
    <div className="flex min-h-[430px] flex-col items-center justify-center text-center">

      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf3ea] text-[#00540D]">
        <CheckCircle2 size={32} />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-black">
        Thank You!
      </h3>

      <p className="mt-3 max-w-sm text-sm leading-6 text-[#68716B]">
        Your enquiry has been received. Our team will
        contact you shortly with suitable project details.
      </p>

      <div className="mt-7 flex items-center gap-2 text-xs font-semibold text-[#00540D]">
        <CheckCircle2 size={15} />
        Site visit assistance available
      </div>

    </div>
  );
}