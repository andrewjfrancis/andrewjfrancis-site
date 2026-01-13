// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV === "production";

  // Block indexing anywhere except production (staging / preview).
  if (!isProduction) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
      sitemap: "https://andrewjfrancis.com/sitemap.xml",
    };
  }

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://andrewjfrancis.com/sitemap.xml",
  };
}
