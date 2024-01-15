import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				noto: ["Noto Sans", ..._fontFamily.sans],
			},
			colors: {
				background: {
					DEFAULT: "hsl(var(--background))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				ring: {
					DEFAULT: "hsl(var(--ring))",
					foreground: "hsl(var(--ring))",
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				flash: "flash 1.4s infinite linear",
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
				flash: {
					"0%": { opacity: "0.2" },
					"20%": { opacity: "1" },
					"100%": { opacity: "0.2" },
				},
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("tailwindcss-animate"),
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		require("tailwind-scrollbar")({ nocompatible: true }),
	],
};
