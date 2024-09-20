/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors:{
			'creative_primary':'#101942',
			'creative_secondary':'#161723',
			'creative_orange':'#FA4B00',
			'creative_green':'#32D651',
			'creative_gray':'#D7E2D8',
			'creative_weird':'#D5D87D',
			'white': '#ffffff',
			transparent: 'transparent',
			current: 'currentColor',
		},
		extend: {},
	},
	plugins: [],
	corePlugins: {
		// Asegúrate de que scrollBehavior esté habilitado
		scrollBehavior: true,
	  },
}
