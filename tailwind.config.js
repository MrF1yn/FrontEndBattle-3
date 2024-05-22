/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary-accent': '#9146ff',
        'primary-accent-1': '#a970ff',
        'primary-background': '#0e0e10',
        'primary-background-1': '#1f1f23',
        'primary-background-2': '#18181b',
        'primary-background-3': '#35353b',
        'primary-foreground': 'white'

      }
    },
  },
  plugins: [],
}

