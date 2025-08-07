/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'isolnord-orange': '#F58220',
        'isolnord-blue': '#2A528A',
        'isolnord-cyan': '#06b6d4',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      inset: {
        '-2.8': '-0.7rem', // Votre valeur personnalisée
      },
    },
  },
  plugins: [],
}

