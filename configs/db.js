import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path: ".env.local" }); // or .env.local

const sql = neon("postgresql://neondb_owner:gJiX4RMr2xAa@ep-fragrant-butterfly-a5r4w5fu.us-east-2.aws.neon.tech/video-generator?sslmode=require");
export const db = drizzle({ client: sql });
