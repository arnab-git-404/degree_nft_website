import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { guideSteps } from "@/lib/guide";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/learn`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/faq`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...guideSteps.map((step) => ({
      url: `${siteUrl}/learn/${step.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
