/** Prefixa caminhos internos com `base` do Astro (ex.: `/Leitura-do-Mundo/` no GitHub Pages). */
export function withBase(path = ''): string {
  const base = import.meta.env.BASE_URL;
  if (!path || path === '/') return base;
  const segment = path.startsWith('/') ? path.slice(1) : path;
  const url = `${base}${segment}`;
  return url.endsWith('/') ? url : `${url}/`;
}
