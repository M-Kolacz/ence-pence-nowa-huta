import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    EMAIL_API_URL: z.string().url(),
    EMAIL_SERVICE_ID: z.string(),
    EMAIL_TEMPLATE_ID: z.string(),
    EMAIL_PUBLIC_KEY: z.string(),
    EMAIL_PRIVATE_KEY: z.string(),
    SENTRY_AUTH_TOKEN: z.string(),
    SENTRY_ORG: z.string(),
    SENTRY_PROJECT: z.string(),
  },
  client: {
    NEXT_PUBLIC_GOOGLE_MAP_API_KEY: z.string(),
    NEXT_PUBLIC_GOOGLE_MAP_ID: z.string(),
    NEXT_PUBLIC_SENTRY_DSN: z.string().url(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_GOOGLE_MAP_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
    NEXT_PUBLIC_GOOGLE_MAP_ID: process.env.NEXT_PUBLIC_GOOGLE_MAP_ID,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
  },
});
