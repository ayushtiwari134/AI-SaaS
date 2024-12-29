import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "configs/schema.js",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://neondb_owner:gJiX4RMr2xAa@ep-fragrant-butterfly-a5r4w5fu.us-east-2.aws.neon.tech/video-generator?sslmode=require",
  },
});
