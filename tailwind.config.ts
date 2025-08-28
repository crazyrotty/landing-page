import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: { lg: '1024px', xl: '1280px', '2xl': '1400px' },
    },
    extend: {
      colors: {
        background: 'hsl(--background)',
        foreground: 'hsl(--foreground)',
        card: 'hsl(--card)',
        'card-foreground': 'hsl(--card-foreground)',
        muted: 'hsl(--muted)',
        'muted-foreground': 'hsl(--muted-foreground)',
        border: 'hsl(--border)',
        ring: 'hsl(--ring)',
        primary: {
          DEFAULT: 'hsl(--primary)',
          foreground: 'hsl(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'hsl(--secondary)',
          foreground: 'hsl(--secondary-foreground)',
        },
        accent: {
          DEFAULT: 'hsl(--accent)',
          foreground: 'hsl(--accent-foreground)',
        },
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem'
      },
      boxShadow: {
        soft: '0 10px 25px hsl(var(--shadow) / 0.15)',
      }
    },
  },
  plugins: [],
} satisfies Config;