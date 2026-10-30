import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://DOMINIO_PENDIENTE.cl',
  integrations: [sitemap()],
});
