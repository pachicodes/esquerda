---
name: revise
description: >-
  Revisa, executa e valida o plano da fase atual do ROADMAP do projeto.
  Use quando o usuário pedir /revise, revisar/executar/validar uma fase,
  ou concluir uma fase do roadmap com implementação, testes e resumo do que mudou.
disable-model-invocation: true
---

# /revise — Revisar, executar e validar a fase atual

## Regra de conclusão

A fase só termina quando o agente:

1. **Implementa** o escopo da fase (arquivos e critérios do ROADMAP).
2. **Testa** o que for possível no ambiente (build, dev, preview; ou revisão manual se npm indisponível).
3. **Explica claramente** o que mudou, o que foi validado e o que ficou pendente.

Não marcar a fase como concluída sem implementação real nem sem relatório final ao usuário.

## Antes de implementar

1. Ler [ROADMAP.md](ROADMAP.md) e identificar a **primeira fase sem** bloco `### Status: concluída`.
2. Ler [AMBIENTE.md](AMBIENTE.md) para saber se npm está disponível e qual modo de validação usar.
3. Se existir plano em `.cursor/plans/` para esta fase, ler o plano — **não editar** o arquivo de plano salvo pelo Cursor.
4. Confirmar escopo, critérios de aceite, fora de escopo e arquivos prováveis da fase.
5. Criar ou atualizar todos da fase; marcar o primeiro como `in_progress` antes de codificar.

## Sequência de trabalho

### 1. Revisar

- Listar arquivos que serão criados ou alterados.
- Verificar decisões de base no ROADMAP (Astro 5, sem React/CMS/backend, posts em `src/content/posts/`, etc.).
- Confirmar o que **não** entra nesta fase (não antecipar fases futuras).

### 2. Executar

- Implementar na ordem lógica (config → conteúdo → páginas → docs, conforme a fase).
- Manter diff mínimo e alinhado ao escopo.
- Não criar `package-lock.json` manualmente; não usar `npm create astro` se o ROADMAP disser criação manual.

### 3. Validar

**Com npm disponível** (`npm --version` funciona):

```bash
npm install
npm run build
```

Opcional: `npm run dev`, `npm run preview`, conforme a fase.

**Sem npm** (ver [AMBIENTE.md](AMBIENTE.md)):

- Revisão manual dos arquivos contra critérios de aceite da fase.
- Registrar validação pendente: instalar Node.js 18+ e rodar os comandos acima.

### 4. Encerrar a fase

- Atualizar [ROADMAP.md](ROADMAP.md): adicionar `### Status: concluída (AAAA-MM-DD)` na fase, com arquivos criados, validação feita e pendências.
- Marcar todos da fase como `completed`.
- Entregar resumo ao usuário (ver formato abaixo).

## Formato do resumo final (obrigatório)

```markdown
## Fase N — [nome] concluída

### O que mudou
- [lista de arquivos criados/alterados e propósito breve]

### O que não foi feito (de propósito)
- [itens fora do escopo desta fase]

### Validação
- [o que foi testado e resultado]
- [pendências, ex.: build após instalar Node.js]

### Próxima fase
- [nome e objetivo em uma linha]
```

## Referências do projeto

| Documento | Uso |
|-----------|-----|
| [ROADMAP.md](ROADMAP.md) | Fases, critérios, ordem, fora de escopo |
| [AMBIENTE.md](AMBIENTE.md) | Node/npm, validação manual vs completa |
| [README.md](README.md) | Comandos e requisitos |
| [COMO_ADICIONAR_POSTS.md](COMO_ADICIONAR_POSTS.md) | Manutenção de posts (Fase 8) |

## Erros comuns a evitar

- Tratar `node --version` do helper do Cursor como ambiente completo (sempre checar `npm`).
- Antecipar layout, home com posts, filtro ou páginas de post em fases que só pedem conteúdo/config.
- Declarar fase concluída sem atualizar o ROADMAP ou sem resumo ao usuário.
- Editar arquivos em `.cursor/plans/` gerados pelo Cursor (planos de referência apenas).
