import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/interfaces/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'youtube-red': '#FF0000',
				'youtube-black': '#282828',
			},
			screens: {
				'3xl': '1920px',
				'4xl': '2560px',
				'5xl': '2880px',
				'6xl': '3840px',
			},
		},
	},
	plugins: [],
}
export default config
