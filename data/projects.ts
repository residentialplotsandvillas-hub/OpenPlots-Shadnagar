export type Project = {
  slug: string;
  name: string;
  type: string;
  location: string;
  landmark: string;
  plotSizes: string;
  plotArea?: string;
  price: string;
  priceNote?: string;
  featured: boolean;

  // Project image
  image: string;

  approvals?: {
    rera?: string;
    hmda?: string;
    dtcp?: string;
  };

  bankLoan?: boolean;

  description: string;

  // SEO
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];

  // Project highlights
  highlights?: string[];
};

export const projects: Project[] = [
  {
    slug: "sanjeevini-golden-farm",

    name: "Sanjeevini Golden Farm",

    type: "Farm Lands",

    location: "Kallepally, Balanagar",

    landmark:
      "Near Shadnagar RRR and Bangalore Highway",

    plotSizes: "242 – 605 Sq. Yds",

    plotArea: "2 – 5 Guntas",

    price: "₹7,499 / Sq. Yd",

    priceNote:
      "Special price • Limited availability",

    featured: true,

    image:
      "/images/projects/sanjeevini-golden-farm.webp",

    bankLoan: false,

    description:
      "Sanjeevini Golden Farm is a nature-integrated farmland project near Kallepally, Balanagar, close to the Shadnagar RRR and Bangalore Highway corridor. The project offers farmland plots with seasonal fruit plants, organic farming and planned lifestyle amenities.",

    seoTitle:
      "Sanjeevini Golden Farm Near Shadnagar | Farm Lands for Sale",

    seoDescription:
      "Explore Sanjeevini Golden Farm near Shadnagar RRR and Bangalore Highway. Farm land plots from 242 to 605 square yards at ₹7,499 per sq. yd.",

  // Sanjeevini Golden Farm
keywords: [
  "Sanjeevini Golden Farm",
  "Sanjeevini Golden Farm Kallepally",
  "Sanjeevini Golden Farm Balanagar",
  "farm lands in Kallepally",
  "farm lands in Balanagar",
  "farm plots in Balanagar",
  "farm land for sale in Bangalore Highway",
  "farm plots near Balanagar",
  "farm lands near Shadnagar",
  "farm plots near Shadnagar",
  "farm land near Shadnagar RRR",
  "farm plots near RRR",
  "farm land near Regional Ring Road",
  "farm plots near Bangalore Highway",
  "farm lands near NH-44",
  "farm plots near NH-44",
  "farm plots near RRR",
    "farm plots near Regional Ring Road",
  "plots near Bangalore Highway",
  "plots near Shadnagar",
  "plots near Kallepally",
  "plots near Rajapur",
  "Open plots near RRR",
  "plots near RRR Hyderabad",
  "farmland near Hyderabad",
  "farmland plots near Hyderabad",
  "agricultural land near Shadnagar",
  "farmhouse plots near Shadnagar",
  "farmhouse plots near Balanagar",
  "nature farm plots near Shadnagar",
  "organic farm plots near Shadnagar",
  "farmland investment near Shadnagar",
  "farm land investment near RRR",
  "farm plots for sale near NH-44",
],

 
     highlights: [
  "242–605 Sq. Yds Plot Sizes",
  "2–5 Guntas Plot Area",
  "HMDA Zone Limits Project",
  "Just 4 KM from Bangalore Highway (NH-44)",
  "Just 3 KM from Regional Ring Road (RRR)",
  "60 Feet Road-Facing Project",
  "All 30 Feet Internal Roads",
  "Ready-to-Construct Farmhouse Project",
  "Spot Registration Project",
  "Clubhouse & Resort Access",
  "Swimming Pool & Cottages",
  "Parks & Kids Play Area",
  "Agarwood & Mahogany Plantations",
  "Multi-Fruit & Organic Cultivation",
  "50% Revenue Sharing Model",
         "24/7 Security & CCTV Surveillance",
  "Entrance Arch & Compound Wall",
  "Avenue Plantation & Water Connection",
  "Electricity & Street Lights",
  "Underground Drainage System",

    ],
  },

  {
    slug: "green-meadows",

    name: "Green Meadows",

    type: "Residential Plots",

    location: "Balanagar",

    landmark:
      "Balanagar Town and beside RRR, Shadnagar",

    plotSizes: "200 – 500 Sq. Yds",

    price: "₹20,999 / Sq. Yd",

    priceNote: "Negotiable",

    featured: true,

    image:
      "/images/projects/green-meadows.png",

    approvals: {
      rera: "P01400008728",
      dtcp:
        "398091/LP/GP/204883/0017/2024",
    },

    bankLoan: true,

    description:
      "Green Meadows is a residential plotted development located in Balanagar near the RRR and Shadnagar corridor. The project offers plot sizes from 200 to 500 square yards with applicable project approval details and bank loan availability.",

    seoTitle:
      "Green Meadows Balanagar | Residential Plots Near Shadnagar",

    seoDescription:
      "Explore Green Meadows residential plots in Balanagar near Shadnagar RRR. Plot sizes from 200 to 500 square yards with RERA and DTCP approval details.",

   // Green Meadows
keywords: [
  "Green Meadows Balanagar",
  "Green Meadows Shadnagar",
  "Green Meadows plots",
  "plots in Balanagar",
  "plots for sale in Balanagar",
  "residential plots in Balanagar",
  "commercial plots in Balanagar",
  "residential plots near Balanagar",
  "commercial plots near Balanagar",
  "plots near Shadnagar",
  "plots for sale near Shadnagar",
  "residential plots near Shadnagar",
  "DTCP plots in Balanagar",
  "DTCP approved plots Balanagar",
  "DTCP plots near Shadnagar",
  "RERA plots in Balanagar",
  "RERA approved plots Balanagar",
  "RERA plots near Shadnagar",
  "plots near RRR",
  "plots near Regional Ring Road",
  "plots near Bangalore Highway",
  "plots near NH-44",
  "plots beside NH-44",
  "plots near Balanagar RRR",
  "plots near Balanagar Police Station",
  "plots near Divitipally",
  "plots near Divitipally IT Park",
  "plots near NRSC",
  "plots near data centers Balanagar",
  "plots near pharma companies Balanagar",
  "ready to construct plots Balanagar",
  "residential land for sale Balanagar",
  "commercial land for sale Balanagar",
  "open plots for sale Balanagar",
  "plot investment near Shadnagar",
  "plot investment near RRR",
  "plots with bank loan Balanagar",
],

    highlights: [

        "RERA No. P01400008728",
  "DTCP LP No. 398091/LP/GP/204883/0017/2024",
            "150 – 1000 Sq. Yds Plots",
  "Prime Location Balanagar Town,Shadanagar",
  "DTCP (MUDA) & RERA Project",
  "Beside NH-44 Bangalore Highway Project",
  "Commercial & Residential Plots",
  "Just 2 KM from Regional Ring Road (RRR)",
  "150 Meters from National Highway (NH-44)",
  "Beside Balanagar Police Station, Hospital, Schools & College",
  "All 80, 60 & 40 Feet BT Roads",
  "Ready-to-Construct Project",
  "Spot Registration Facility",
  "24/7 Security & CCTV Surveillance",
  "Entrance Arch & Compound Wall",
  "Avenue Plantation & Water Connection",
  "Electricity & Street Lights",
  "Underground Drainage System",
  "Parks & Kids Play Area",
  "Name Sign Board on Every Plot",
  "Bank Loan Facility Available",
  "Already 2 Houses Constructed",
  "Surrounded by Hotels & Residential Houses",
  "Near NRSC, Data Centers, Pharma & Industrial Hubs",
    ],
  },

  {
    slug: "golden-terra",

    name: "Golden Terra",

    type: "Residential & Commercial Plots",

    location: "Shadnagar",

    landmark:
      "Beside Shadnagar Tollgate and near RRR",

    plotSizes: "147 – 1,200 Sq. Yds",

    price: "₹27,999 / Sq. Yd",

    priceNote:
      "Residential plots • Negotiable",

    featured: true,

    image:
      "/images/projects/golden-terra.webp",

    approvals: {
      hmda: "0466/HMDA/SWDL/2025",
      rera: "P02400010212",
    },

    bankLoan: true,

    description:
      "Golden Terra offers residential and commercial plots near the Shadnagar Tollgate and RRR corridor. Plot sizes range from 147 to 1,200 square yards, providing options for residential and commercial requirements.",

    seoTitle:
      "Golden Terra Shadnagar | HMDA & RERA Plots for Sale",

    seoDescription:
      "Explore Golden Terra residential and commercial plots beside Shadnagar Tollgate near RRR. Plot sizes from 147 to 1,200 square yards with HMDA and RERA approval details.",

   // Golden Terra
keywords: [
  "Golden Terra Shadnagar",
  "Golden Terra plots",
  "Golden Terra Shadnagar plots",
  "plots in Shadnagar",
  "plots for sale in Shadnagar",
  "residential plots in Shadnagar",
  "commercial plots in Shadnagar",
  "residential and commercial plots Shadnagar",
  "HMDA plots in Shadnagar",
  "HMDA approved plots Shadnagar",
  "RERA plots in Shadnagar",
  "RERA approved plots Shadnagar",
  "plots near Shadnagar Tollgate",
  "plots beside Shadnagar Tollgate",
  "plots near RRR Shadnagar",
  "plots near Regional Ring Road Shadnagar",
  "plots near NH-44 Shadnagar",
  "plots on Bangalore Highway Shadnagar",
  "plots near Bangalore Highway",
  "plots near NH-44",
  "200 feet highway facing plots",
  "highway facing plots Shadnagar",
  "plots near NRSC",
  "plots near data centers Shadnagar",
  "plots near pharma companies Shadnagar",
  "plots near industrial hubs Shadnagar",
  "commercial plots near NH-44",
  "ready to construct plots Shadnagar",
  "open plots for sale Shadnagar",
  "land for sale in Shadnagar",
  "property near Shadnagar Tollgate",
  "plot investment Shadnagar",
  "plots with bank loan Shadnagar",
],
    highlights: [
     "147 – 1,200 Sq. Yds Plots",
  "Residential & Commercial Plots",
  "Beside Shadnagar Tollgate",
  "Just 5 KM from Regional Ring Road (RRR)",
  "HMDA LP No. 0466/HMDA/SWDL/2025",
  "RERA No. P02400010212",
  "200 Feet NH-44 Highway Facing",
  "All 33 Feet Internal CC Roads",
  "Ready-to-Construct Project",
  "Spot Registration Facility",
  "Name Sign Board for Every Plot",
  "Avenue Plantation & Water Connection",
  "24/7 Security & CCTV Surveillance",
  "Entrance Arch & Compound Wall",
  "Parks & Kids Play Area",
  "Bank Loan Facility Available",
  "Surrounded by Hotels & Residential Communities",
  "Near NRSC, Data Centers,Pharma R&D & Industrial Hubs",
  "Electricity & Street Lights",
  "Underground Drainage System",
    ],
  },

  {
    slug: "winridge-spar-venture",

    name: "Winridge Spar Venture",

    type: "Residential Plots",

    location: "Jadcherla",

    landmark:
      "Beside Polepally SEZ near Jadcherla and Bangalore Highway",

    plotSizes: "147 – 300 Sq. Yds",

    price: "₹14,999 / Sq. Yd",

    priceNote: "Negotiable",

    featured: true,

    image:
      "/images/projects/winridge-spar-venture.webp",

    approvals: {
      dtcp: "167/2020/H",
    },

    bankLoan: false,

    description:
      "Winridge Spar Venture is a DTCP-approved plotted development spread across 17.45 acres near Polepally SEZ and Jadcherla on the Bangalore Highway corridor. The project offers plot sizes from 147 to 300 square yards.",

    seoTitle:
      "Winridge Spar Venture Jadcherla | DTCP Plots for Sale",

    seoDescription:
      "Explore Winridge Spar Venture residential plots near Jadcherla and Polepally SEZ on the Bangalore Highway. DTCP-approved project with 147 to 300 square yard plots.",

   // Winridge Spar Venture
keywords: [
  "Winridge Spar Venture",
  "Winridge Spar Venture Jadcherla",
  "Winridge Spar Venture plots",
  "Winridge Spar Venture Polepally",
  "plots in Jadcherla",
  "plots for sale in Jadcherla",
  "residential plots in Jadcherla",
  "commercial plots in Jadcherla",
  "DTCP plots Jadcherla",
  "DTCP approved plots Jadcherla",
  "DTCP layout plots Jadcherla",
  "DTCP plots near Polepally",
  "plots near Polepally SEZ",
  "plots near Polepally SEZ Jadcherla",
  "plots near Polepally",
  "plots near Bangalore Highway Jadcherla",
  "plots near NH-44 Jadcherla",
  "plots on Bangalore Highway",
  "plots near Regional Ring Road",
  "plots near RRR Jadcherla",
  "plots near RRR Mahbubnagar",
  "plots near Divitipally",
  "plots near Divitipally IT Park",
  "plots near NMIMS University",
  "plots near NMIMS Jadcherla",
  "plots near data centers Jadcherla",
  "plots near Olectra",
  "plots near industrial hubs Jadcherla",
  "plots near pharma companies Jadcherla",
  "plots near Aurobindo Pharma",
  "plots near Hetero Pharma",
  "plots near Mylan",
  "plots near MSN Pharma",
  "plots near TSIIC Green Industrial Park",
  "plots near Green Industrial Park",
  "residential land for sale Jadcherla",
  "open plots for sale Jadcherla",
  "ready to construct plots Jadcherla",
  "plot investment Jadcherla",
  "plots with EMI facility Jadcherla",
  "plots near Shadnagar",
],

    highlights: [
      "17.45 Acres project",
       "DTCP Approved Layout",
      "147 – 300 Sq. Yds plots",
      "DTCP LP No. 167/2020/H",
  "Just 1 KM from NH-44 Bangalore Highway",
  "Commercial & Residential Plots",
  "Just 5 KM from Regional Ring Road (RRR)",
  "150 Meters from Polepally SEZ",
  "Beside TSIIC Green Industrial Park SEZ",
  "Near Divitipally IT Park",
  "24 Months EMI Facility",
  "Ready-to-Construct Project",
  "Spot Registration Facility",
  "All 60, 40 & 33 Feet CC Roads",
  "24/7 Security & CCTV Surveillance",
  "Entrance Arch & Compound Wall",
  "Avenue Plantation & Water Connection",
  "Electricity & Street Lights",
  "Underground Drainage System",
  "Parks & Kids Play Area",
  "Surrounded by Hotels, Villas, Apartments & Houses",
  "Near NMIMS University, Data Centers, Olectra & Industrial Hubs",
  "Near Aurobindo, Hetero, Mylan, MSN & Many Pharma Companies",

    ],
  },
];

/* ============================================================
   GET PROJECT BY SLUG
============================================================ */

export function getProjectBySlug(
  slug: string
): Project | undefined {
  return projects.find(
    (project) => project.slug === slug
  );
}
