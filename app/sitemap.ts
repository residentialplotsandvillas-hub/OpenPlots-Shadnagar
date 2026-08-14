import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";

const BASE_URL =
  "https://openplotsinshadnagar.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },

    // =====================================================
    // MAIN COMMERCIAL SEO PAGES
    // =====================================================

    {
      url:
        `${BASE_URL}/open-plots-in-shadnagar`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },

    {
      url:
        `${BASE_URL}/plots-for-sale-in-shadnagar`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },

    {
      url:
        `${BASE_URL}/rera-approved-plots-in-shadnagar`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },

    {
      url:
        `${BASE_URL}/hmda-plots-in-shadnagar`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url:
        `${BASE_URL}/farm-lands-near-shadnagar`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // =====================================================
    // PROJECT DIRECTORY
    // =====================================================

    {
      url:
        `${BASE_URL}/projects`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // =====================================================
    // SALES / LEAD PAGES
    // =====================================================

    {
      url:
        `${BASE_URL}/book-site-visit`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url:
        `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // =====================================================
    // INFORMATIONAL / GUIDE PAGES
    // =====================================================

    {
      url:
        `${BASE_URL}/guides`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },

    {
      url:
        `${BASE_URL}/guides/open-plots-in-shadnagar`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url:
        `${BASE_URL}/guides/how-to-buy-open-plot`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // =====================================================
    // LOCATION PAGE
    // =====================================================

    {
      url:
        `${BASE_URL}/locations/shadnagar`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },

    // =====================================================
    // ABOUT
    // =====================================================

    {
      url:
        `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // =======================================================
  // DYNAMIC PROJECT PAGES
  // =======================================================

  const projectPages: MetadataRoute.Sitemap =
    projects.map((project) => ({
      url:
        `${BASE_URL}/projects/${project.slug}`,

      lastModified: now,

      changeFrequency: "weekly",

      priority: project.featured
        ? 0.9
        : 0.8,
    }));

  return [
    ...staticPages,
    ...projectPages,
  ];
}