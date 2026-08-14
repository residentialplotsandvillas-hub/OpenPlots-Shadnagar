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

  approvals?: {
    rera?: string;
    hmda?: string;
    dtcp?: string;
  };

  bankLoan?: boolean;

  description: string;
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

    bankLoan: false,

    description:
      "Sanjeevini Golden Farm is a nature-integrated farmland project near Kallepally, Balanagar, close to the Shadnagar RRR and Bangalore Highway corridor. The project offers farmland plots with seasonal fruit plants, organic farming and planned lifestyle amenities.",
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

    approvals: {
      rera: "P01400008728",
      dtcp:
        "398091/LP/GP/204883/0017/2024",
    },

    bankLoan: true,

    description:
      "Green Meadows is a residential plotted development located in Balanagar near the RRR and Shadnagar corridor. The project offers plot sizes from 200 to 500 square yards with applicable project approval details and bank loan availability.",
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

    approvals: {
      hmda: "0466/HMDA/SWDL/2025",
      rera: "P02400010212",
    },

    bankLoan: true,

    description:
      "Golden Terra offers residential and commercial plots near the Shadnagar Tollgate and RRR corridor. Plot sizes range from 147 to 1,200 square yards, providing options for residential and commercial requirements.",
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

    approvals: {
      dtcp: "167/2020/H",
    },

    bankLoan: false,

    description:
      "Winridge Spar Venture is a DTCP-approved plotted development spread across 17.45 acres near Polepally SEZ and Jadcherla on the Bangalore Highway corridor. The project offers plot sizes from 147 to 300 square yards.",
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