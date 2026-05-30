# Preparação da Fase 1 — Base Mínima do Projeto Astro

Checklist para executar a Fase 1 **sem** `npm create astro`, conforme decisão da Fase 0.

## Arquivos a criar

| Arquivo | Função |
|---------|--------|
| `package.json` | Scripts `dev`, `build`, `preview` e dependência `astro@^5` |
| `astro.config.mjs` | Configuração mínima do Astro 5 |
| `tsconfig.json` | Configuração TypeScript compatível com Astro |
| `.gitignore` | Ignorar `node_modules/`, `dist/`, `.astro/` |
| `src/pages/index.astro` | Página mínima temporária (substituída na Fase 4) |

## Estrutura inicial de pastas

```
src/
  pages/
    index.astro
```

Pastas adicionais (`layouts/`, `components/`, `content/`, `styles/`) serão criadas nas fases seguintes.

## O que não fazer nesta fase

- Não usar `npm create astro`.
- Não criar `package-lock.json` manualmente.
- Não adicionar React, backend, CMS ou dependências extras.
- Não rodar `npm install` até npm estar disponível no sistema.

## Critérios de aceite (resumo)

- `package.json` declara Astro 5 e scripts documentados.
- Configuração compatível com projeto estático.
- Nenhuma tecnologia proibida no escopo.

## Validação

- **Agora:** revisão manual dos arquivos criados.
- **Depois (com npm):** `npm install` e `npm run dev` para confirmar que o servidor sobe.
