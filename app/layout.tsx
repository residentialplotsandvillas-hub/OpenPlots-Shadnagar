import type {
  Metadata,
  Viewport,
} from "next";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./globals.css";

const BASE_URL =
  "https://openplotsinshadnagar.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  applicationName:
    "OpenPlots Shadnagar",

  title: {
    default:
      "Open Plots in Shadnagar | Residential Plots for Sale",

    template:
      "%s | Open Plots in Shadnagar",
  },

  description:
    "Explore open plots, residential plots, farm lands and plotted developments in Shadnagar, Balanagar, RRR and nearby Bangalore Highway locations. Compare projects, plot sizes, prices and site visit options.",

  keywords: [
    "open plots in Shadnagar",
    "plots for sale in Shadnagar",
    "residential plots in Shadnagar",
    "plot projects in Shadnagar",
    "farm lands near Shadnagar",
    "HMDA plots in Shadnagar",
    "RERA plots in Shadnagar",
    "villa plots in Shadnagar",
    "plots near Shadnagar",
    "plots near RRR Shadnagar",
    "plots near Bangalore Highway Shadnagar",
    "residential plots near RRR",
  ],

  alternates: {
    canonical: BASE_URL,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",

    url: BASE_URL,

    siteName:
      "OpenPlots Shadnagar",

    locale: "en_IN",

    title:
      "Open Plots in Shadnagar | Residential Plots for Sale",

    description:
      "Explore residential plots, open plots and farm land projects around Shadnagar, Balanagar, RRR and Bangalore Highway.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt:
          "Open Plots and Residential Plots in Shadnagar",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Open Plots in Shadnagar | Residential Plots for Sale",

    description:
      "Explore open plots, residential plots and farm land projects near Shadnagar.",

    images: [
      "/og-image.jpg",
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },

  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,

  themeColor: "#00540D",

  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: "OpenPlots Shadnagar",

    url: BASE_URL,
  };

  return (
    <html lang="en">
      <body>

        {/* =================================================
            HEADER
        ================================================== */}

        <Navbar />

        {/* =================================================
            PAGE CONTENT
        ================================================== */}

        {children}

        {/* =================================================
            FOOTER
        ================================================== */}

        <Footer />

        {/* =================================================
            WEBSITE SCHEMA
        ================================================== */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(websiteSchema),
          }}
        />

      </body>
    </html>
  );
}