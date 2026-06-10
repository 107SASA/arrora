import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1829",
        navy2: "#132338",
        gold: "#C49A2A",
        gold2: "#E2B84A",
        "gold-pale": "#F5EDD4",
        cream: "#FAF7F2",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
