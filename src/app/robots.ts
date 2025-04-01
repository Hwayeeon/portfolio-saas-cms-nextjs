import { baseURL } from "@/app/resources";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        dissallow: ["/admin", "/dashboard", "settings", "/api"],
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`,
  };
}