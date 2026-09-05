"use client";

import { useEffect, useState } from "react";

export default function EnquiryPopup() {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [project, setProject] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "919959354255";

    const message = `Hello, I am interested in your property project.

Name: ${name}
Mobile: ${mobile}
Project: ${project || "Not selected"}

Please share the project details, pricing and availability.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-600 hover:bg-gray-200"
        >
          ×
        </button>

        {/* Heading */}
        <div className="pr-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-green-600">
            Project Enquiry
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Find Your Perfect Plot
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            Fill in your details and connect with us directly on WhatsApp.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-500"
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-500"
          />

          <select
            value={project}
            onChange={(e) => setProject(e.target.value)}
            required
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-500"
          >
            <option value="" disabled>
              Select Project
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
          </select>

          {/* WhatsApp Button */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            {/* WhatsApp Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12.004 2C6.478 2 1.982 6.477 1.982 12c0 1.768.464 3.43 1.277 4.87L2 22l5.273-1.24A10.003 10.003 0 0012.004 22C17.53 22 22 17.523 22 12S17.53 2 12.004 2zm0 18.18a8.14 8.14 0 01-4.15-1.136l-.298-.177-3.13.736.746-3.054-.194-.313A8.15 8.15 0 013.84 12c0-4.505 3.66-8.17 8.164-8.17 4.505 0 8.17 3.665 8.17 8.17 0 4.505-3.665 8.17-8.17 8.17z" />
            </svg>

            Connect on WhatsApp
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-gray-500">
          Our team will contact you shortly.
        </p>
      </div>
    </div>
  );
}
