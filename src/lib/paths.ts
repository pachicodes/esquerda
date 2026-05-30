/** Prefixa caminhos internos com `base` do Astro (ex.: `/esquerda/` no GitHub Pages). */
export function withBase(path = ''): string {
  const base = import.meta.env.BASE_URL;
  if (!path || path === '/') return base;
  const segment = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${segment}`;
}
