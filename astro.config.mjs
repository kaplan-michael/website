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
        heroicons: ['envelope-solid', 'phone-solid'],
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
