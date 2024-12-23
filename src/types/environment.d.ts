import "next";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SPRITE_SVG_URL: string;
    }
  }
}
