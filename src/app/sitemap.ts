import { getPosts } from "@/app/utils/utils";
import { baseURL, routes as routesConfig } from "@/app/resources";

export default function sitemap() {
  const blogs = getPosts([
    "src",
    "app",
    "blog",
    "posts"
  ]).map((post) => ({
    url: `https://${baseURL}/blog/${post.slug}`,
    lastmod: post.metadata.publishedAt,
  }));

  const works = getPosts(["src", "app", "work", "posts"]).map((post) => ({
    url: `https://${baseURL}/work/${post.slug}`,
    lastmod: post.metadata.publishedAt,
  }));

  const activeRoutes = (Object.keys(routesConfig) as (keyof typeof routesConfig)[]).filter((route) => routesConfig[route].active);
  
  const routes = activeRoutes.map((route) => ({
    url: `https://${baseURL}${route !== "/" ? route : ""}`,
    lastmod: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...works]
}