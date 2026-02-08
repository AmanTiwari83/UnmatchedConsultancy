import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: "https://unmatchedconsultancy.com", lastModified: new Date() },
    { url: "https://unmatchedconsultancy.com/about" },
    { url: "https://unmatchedconsultancy.com/contact" },
    { url: "https://unmatchedconsultancy.com/team" },
    { url: "https://unmatchedconsultancy.com/faq" },
  ];

  const blogPages: MetadataRoute.Sitemap = [
    { url: "https://unmatchedconsultancy.com/blogs/business-needs-consultant", lastModified: new Date("2026-02-08") },
  ];

  const servicePages: MetadataRoute.Sitemap = [
    { url: "https://unmatchedconsultancy.com/services/business-consultancy-services", lastModified: new Date("2026-02-08") },
    { url: "https://unmatchedconsultancy.com/services/company-incorporation-registration", lastModified: new Date("2026-02-04") },
    { url: "https://unmatchedconsultancy.com/services/bookkeeping-accounting", lastModified: new Date("2026-01-28") },
  ];

  return [...staticPages, ...blogPages, ...servicePages];
}