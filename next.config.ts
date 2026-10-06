import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const customDomain = process.env.CUSTOM_DOMAIN?.trim();
const repositoryPath = "/fiskerikandidat-gunnar-davidsson";
const basePath = isGitHubPages && !customDomain ? repositoryPath : "";
const siteUrl = customDomain
  ? `https://${customDomain}`
  : isGitHubPages
    ? `https://ltj54.github.io${repositoryPath}`
    : "http://localhost:3000";

const nextConfig: NextConfig = {
  agentRules: false,
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
};

export default nextConfig;
