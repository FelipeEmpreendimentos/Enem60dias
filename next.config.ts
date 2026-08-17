import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const isNetlify = process.env.NETLIFY === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const basePath = isGitHubPages && repositoryName ? `/${repositoryName}` : "";

const nextConfig: NextConfig = isGitHubPages
  ? {
      output: "export",
      basePath,
      trailingSlash: true,
      typescript: {
        ignoreBuildErrors: true,
      },
    }
  : isNetlify
    ? {
        typescript: {
          ignoreBuildErrors: true,
        },
      }
    : {};

export default nextConfig;
