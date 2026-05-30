/** Formata datas do frontmatter (YYYY-MM-DD) sem deslocar um dia por fuso horário. */
export function formatPostDate(date: Date): string {
  return date.toLocaleDateString('pt-BR', { dateStyle: 'long', timeZone: 'UTC' });
}

export function postDateIso(date: Date): string {
  return date.toISOString().slice(0, 10);
}
