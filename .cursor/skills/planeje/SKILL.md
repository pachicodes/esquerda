---
name: planeje
description: >-
  Analisa a fase do ROADMAP e gera plano de desenvolvimento com arquivos,
  sequência, riscos e validação. Use com /planeje, planejar fase ou plano da fase N.
disable-model-invocation: true
---

# /planeje — Analisar fase e gerar plano de desenvolvimento

Analisa a fase do ROADMAP e gera plano de desenvolvimento.

Esta skill **não implementa** código. Após o usuário aprovar o plano, use `/revise` para executar.

## Como identificar a fase

1. Ler [ROADMAP.md](ROADMAP.md).
2. Usar a **primeira fase sem** bloco `### Status: concluída`, salvo indicação explícita do usuário (ex.: `/planeje fase 4`, `plano da fase 4`).
3. Se todas as fases estiverem concluídas, informar e sugerir revisão geral ou novas fases — não chamar CreatePlan sem fase definida.

## O que ler antes de planejar

| Fonte | Para quê |
|-------|----------|
| [ROADMAP.md](ROADMAP.md) | Objetivo, escopo, critérios de aceite, validação |
| [AMBIENTE.md](AMBIENTE.md) | npm disponível ou validação manual |
| Estrutura do repositório (`Glob`, `Read`) | Estado real vs. escopo da fase |
| Fase anterior no ROADMAP | Pendências herdadas |
| Plano em `.cursor/plans/` (se houver) | Referência — **não editar** |

## Entrega obrigatória: CreatePlan

Chamar a ferramenta **CreatePlan** com plano em português, proporcional à fase, contendo:

1. **Contexto** — fase N, o que já foi concluído, pendências de ambiente.
2. **Arquivos prováveis** — tabela com caminhos reais do projeto.
3. **Sequência de trabalho** — passos numerados na ordem lógica.
4. **Fora do escopo** — o que pertence a fases futuras (evitar antecipação).
5. **Riscos** — tabela com mitigação.
6. **Validação** — checklist manual; comandos `npm install`, `npm run dev`, `npm run build` se npm existir.
7. **Todos** — itens acionáveis para implementação.
8. **Próximo passo** — `/revise` após aprovação do plano.

### Template do CreatePlan

```markdown
# Plano da Fase N — [nome]

## Contexto
[Estado atual e fase alvo]

## Arquivos prováveis
| Arquivo | Função |
|---------|--------|

## Sequência de trabalho
1. ...

## Fora do escopo desta fase
- ...

## Riscos
| Risco | Mitigação |
|-------|-----------|

## Validação
- [ ] Critérios do ROADMAP
- Com npm: `npm install`, `npm run build`, ...

## Próximo passo
/revise após aprovação
```

Incluir diagrama mermaid apenas se a fase tiver fluxo não trivial (ex.: filtro + listagem).

## Regras

- Responder e planejar em **português**.
- Usar **caminhos reais** do repositório; não inventar decisões fora do ROADMAP.
- Se npm indisponível, citar [AMBIENTE.md](AMBIENTE.md) e validação manual.
- **Não** implementar arquivos de código nesta skill.
- **Não** marcar fase como concluída no ROADMAP (isso é `/revise`).
- **Não** editar arquivos em `.cursor/plans/` gerados pelo Cursor.
- Manter o plano conciso; evitar over-engineering.

## Diferença entre skills

| Skill | Saída | Quando usar |
|-------|--------|-------------|
| `/analise` | Briefing no chat (sem CreatePlan) | Entender escopo rapidamente |
| `/planeje` | Plano formal via CreatePlan | Aprovar abordagem antes de codar |
| `/revise` | Implementação + testes + resumo | Executar fase aprovada |

Fluxo recomendado: **`/analise` (opcional) → `/planeje` → aprovação → `/revise`**.

## Referências fixas do projeto

- Blog: **Leitura do Mundo**
- Stack: Astro 5, Markdown, Content Collections, CSS simples
- Posts: exclusivamente em `src/content/posts/`
- Sem React, CMS, backend ou dependências desnecessárias
- Execução por fases: [ROADMAP.md](ROADMAP.md)

## Erros comuns a evitar

- Chamar CreatePlan sem ler o estado real do repo.
- Plano genérico sem arquivos nem critérios do ROADMAP.
- Incluir escopo de fases futuras no plano atual.
- Confundir `/planeje` com `/revise` e começar a codificar.
- Assumir que `node --version` basta sem checar `npm`.
