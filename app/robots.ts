import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: "https://bways.daizlab.store/sitemap.xml",
    host: "https://bways.daizlab.store"
  };
}
