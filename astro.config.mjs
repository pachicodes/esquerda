import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pachicodes.github.io',
  base: '/Leitura-do-Mundo/',
  trailingSlash: 'always',
  // GitHub Pages ignora pastas com "_" (ex.: _astro). Usar nome sem underscore.
  build: {
    assets: 'assets',
  },
});
