import withMT from "@material-tailwind/react/utils/withMT";

const config = withMT({
  // darkMode: "prefers-color-scheme",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        neutral: {
          10: "#F6F8FC",
          60: "#64748B",
        },
        primary: {
          300: "#2F4F7F",
          200: "#7796C5",
          100: "#B3D1FD",
        },
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
});
export default config;
