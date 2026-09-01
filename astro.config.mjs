import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  integrations: [
    icon({
      include: {
        'simple-icons': [
          'github',
          'gnuprivacyguard',
          'linkedin',
          'signal',
          'telegram',
          'x',
        ],
        lucide: ['mail', 'phone'],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    css: {
      postcss: {},
    },
  },
});
