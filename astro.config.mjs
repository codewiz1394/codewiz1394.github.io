import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://codewiz1394.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
