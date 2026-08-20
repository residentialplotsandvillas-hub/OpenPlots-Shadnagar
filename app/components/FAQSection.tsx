"use client";

import { useState } from "react";

export const faqs = [
  {
    question: "What are the best open plots in Shadnagar?",
    answer:
      "Open Plots in Shadnagar features projects such as Sanjeevini Golden Farm, Green Meadows, Golden Terra and Winridge Spar Venture. Buyers can compare location, plot size, project details and applicable approvals before selecting a property.",
  },
  {
    question: "Why should I invest in plots in Shadnagar?",
    answer:
      "Shadnagar is a developing real estate destination with connectivity to major roads, highways and surrounding growth corridors. It can be considered by buyers looking for residential land or long-term property investment.",
  },
  {
    question: "Are there residential plots for sale in Shadnagar?",
    answer:
      "Yes. Residential plot options are available across different projects and locations around Shadnagar. Plot sizes, availability and prices may vary depending on the project.",
  },
  {
    question: "What plot sizes are available in Shadnagar?",
    answer:
      "Plot sizes vary from project to project. Buyers can explore different residential, commercial and farm-land plot options based on their requirements and budget.",
  },
  {
    question: "Are the plots HMDA or RERA approved?",
    answer:
      "Approval status varies by project. Buyers should verify the applicable HMDA, DTCP or RERA documentation for the specific project before making a purchase decision.",
  },
  {
    question: "Which areas near Shadnagar are suitable for investment?",
    answer:
      "Shadnagar, Balanagar, Kallepally, Jadcherla and surrounding highway and growth corridors are locations that buyers may consider depending on their budget, purpose and investment goals.",
  },
  {
    question: "Can I build a house on an open plot?",
    answer:
      "Construction depends on the project's layout permissions, land-use regulations, local approvals and applicable building rules. Buyers should verify these details before purchasing.",
  },
  {
    question: "How can I schedule a site visit?",
    answer:
      "You can contact our team to check the latest project availability and schedule a convenient site visit to explore the location and surroundings.",
  },
  {
    question: "What should I check before buying a plot?",
    answer:
      "Before purchasing, buyers should verify ownership, title documents, layout permissions, applicable RERA, HMDA or DTCP details, road access, plot dimensions, development status and other relevant legal documents.",
  },
  {
    question: "How can I get the latest plot price?",
    answer:
      "Plot prices and availability can change over time. Contact our team for the latest pricing, available plot numbers, payment details and site-visit information.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#f7faf7] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
            FAQ
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Frequently Asked Questions About{" "}
            <span className="text-green-700">
              Open Plots in Shadnagar
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg">
            Find answers to common questions about residential plots,
            investment opportunities, locations, approvals and site visits
            in and around Shadnagar.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-green-200 shadow-lg shadow-green-100/50"
                    : "border-gray-200 shadow-sm hover:border-green-200 hover:shadow-md"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7 sm:py-6"
                >
                  <span className="text-base font-semibold leading-6 text-gray-900 sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xl transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 border-green-700 bg-green-700 text-white"
                        : "border-gray-300 bg-gray-50 text-gray-700"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-gray-100 px-5 pb-6 pt-5 sm:px-7">
                      <p className="text-sm leading-7 text-gray-600 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
     <div className="mt-12 rounded-2xl bg-green-800 px-6 py-8 text-center sm:px-10">
  <h3 className="text-2xl font-bold text-white">
    Still Have Questions?
  </h3>

  <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-green-50 sm:text-base">
    Get the latest information about plot availability,
    pricing and site visits in Shadnagar.
  </p>

  <a
    href="/contact"
    className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-green-800 transition hover:bg-green-50"
  >
    Contact Us
  </a>
</div>
      </div>
    </section>
  );
}