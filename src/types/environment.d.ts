import "next";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GOOGLE_MAP_API_KEY: string;
      NEXT_PUBLIC_GOOGLE_MAP_ID: string;

      EMAIL_API_URL: string;
      EMAIL_SERVICE_ID: string;
      EMAIL_TEMPLATE_ID: string;
      EMAIL_PUBLIC_KEY: string;
      EMAIL_PRIVATE_KEY: string;

      SENTRY_AUTH_TOKEN: string;
      NEXT_PUBLIC_SENTRY_DSN: string;
      SENTRY_ORG: string;
      SENTRY_PROJECT: string;
    }
  }
}
