---
name: analise
description: >-
  Analisa a próxima fase de trabalho do ROADMAP antes da implementação.
  Use quando o usuário pedir /analise, analisar a próxima fase, briefing de fase
  ou entender escopo, estado atual e decisões antes de codificar.
disable-model-invocation: true
---

# /analise — Analisar a próxima fase de trabalho

Antes de implementar, o agente precisa entender o escopo, o estado atual do projeto e o que já foi decidido.

Esta skill **não implementa** código. Para executar a fase, use `/revise` depois da análise.

## Como identificar a próxima fase

1. Ler [ROADMAP.md](ROADMAP.md).
2. Encontrar a **primeira fase sem** bloco `### Status: concluída`.
3. Se todas estiverem concluídas, informar que o roadmap da primeira versão terminou e sugerir revisão geral ou novas fases.

## O que ler antes de responder

| Fonte | Para quê |
|-------|----------|
| [ROADMAP.md](ROADMAP.md) | Objetivo, escopo, critérios de aceite e validação da fase |
| [AMBIENTE.md](AMBIENTE.md) | npm disponível ou validação manual |
| Estrutura do repositório | O que já existe vs. o que falta |
| Fase anterior no ROADMAP | Status e pendências herdadas |
| Plano em `.cursor/plans/` (se houver) | Detalhes da fase — **não editar** |

Usar ferramentas de leitura (`Read`, `Glob`, `Grep`). Não alterar arquivos nesta skill.

## Formato da resposta (obrigatório)

Entregar briefing em português, nesta estrutura:

```markdown
## Briefing — Fase N: [nome]

### Fase atual e contexto
[Uma frase: qual fase, o que já foi concluído antes]

### Estado atual do projeto
[Tabela ou lista: o que existe / o que ainda não existe]

### Objetivo desta fase
[Do ROADMAP, em linguagem clara]

### Escopo (o que criar ou alterar)
[Lista de arquivos e pastas prováveis]

### O que NÃO fazer nesta fase
[Itens que pertencem a fases futuras — evitar antecipação]

### Decisões já fixadas (relevantes)
[Do ROADMAP: Astro 5, posts em src/content/posts/, etc.]

### Critérios de aceite (checklist)
[Itens verificáveis da fase]

### Validação esperada
[Manual vs npm install/build; comandos se aplicável]

### Riscos e cuidados
[2–5 pontos concretos para esta fase]

### Sequência sugerida para implementação
[Ordem lógica dos passos — sem executar]

### Próximo passo recomendado
[Ex.: "Use /revise para implementar a Fase N"]
```

## Regras

- Ser específico com **caminhos de arquivo** reais do projeto.
- Não inventar decisões que não estão no ROADMAP.
- Se npm estiver indisponível, citar [AMBIENTE.md](AMBIENTE.md) e validação manual.
- Não marcar a fase como concluída (isso é `/revise`).
- Manter o briefing proporcional: fases simples, resposta mais curta.

## Relação com outras skills

| Skill | Quando usar |
|-------|-------------|
| `/analise` | Antes de implementar — entender escopo e estado |
| `/revise` | Implementar, testar e encerrar a fase |

Fluxo recomendado: **`/analise` → confirmação do usuário → `/revise`**.

## Referências fixas do projeto

- Blog: **O Direito de Entender**
- Stack: Astro 5, Markdown, Content Collections, CSS simples, sem React/CMS/backend
- Posts: exclusivamente em `src/content/posts/`
- Documentação de execução: [ROADMAP.md](ROADMAP.md)
