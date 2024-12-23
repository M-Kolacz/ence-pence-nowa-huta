import animatePlugin from "tailwindcss-animate";
import radixPlugin from "tailwindcss-radix";
import { extendedTheme } from "./src/utils/extended-theme.ts";
import { borderRadius } from "./src/tokens/border-radius.ts";
import { colors } from "./src/tokens/colors.ts";
import { typography } from "./src/tokens/typography.ts";
import { Config } from "tailwindcss";

const tailwindConfig = {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontSize: typography.fontSize,
    lineHeight: typography.lineHeight,
    fontFamily: typography.fontFamily,
    fontWeight: typography.fontWeight,
    colors,
    borderRadius,
    extend: {
      ...extendedTheme,
    },
  },
  plugins: [animatePlugin, radixPlugin],
} satisfies Config;

export default tailwindConfig;
