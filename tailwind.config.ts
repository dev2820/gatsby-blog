import type { Config } from "tailwindcss";
/**
TODO: paragraph등 semantic token 해체
*/
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
        monospace: ["var(--font-monospace-neon)"],
      },
      screens: {
        tablet: "640px",
        desktop: "1280px",
      },
      fontSize: {
        paragraph: [
          "16px",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        heading1: [
          "40px",
          {
            lineHeight: "1.3",
            fontWeight: "700",
          },
        ],
        heading2: [
          "28px",
          {
            lineHeight: "1.3",
            fontWeight: "700",
          },
        ],
        heading3: [
          "24px",
          {
            lineHeight: "1.5",
            fontWeight: "500",
          },
        ],
        heading4: [
          "18px",
          {
            lineHeight: "1.5",
            fontWeight: "500",
          },
        ],
        heading5: [
          "16px",
          {
            lineHeight: "1.5",
            fontWeight: "500",
          },
        ],
        heading6: [
          "14px",
          {
            lineHeight: "1.5",
            fontWeight: "500",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;