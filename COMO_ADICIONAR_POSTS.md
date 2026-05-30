# Como adicionar posts

Este guia explica como publicar e editar textos no blog **Leitura do Mundo** usando arquivos Markdown. Não é preciso saber programar — basta saber criar e salvar arquivos de texto na pasta certa.

## O que você precisa instalar

Para ver o blog no seu computador antes de publicar na internet, instale:

- **Node.js 18 ou superior** (recomendado: versão LTS em [nodejs.org](https://nodejs.org))
- **npm** — em geral já vem junto com o Node.js

Sem Node.js e npm, você ainda pode editar os arquivos dos posts, mas não conseguirá abrir o site localmente nem gerar a versão para publicar. Mais detalhes em [AMBIENTE.md](AMBIENTE.md).

## Onde ficam os posts

Todos os textos do blog ficam nesta pasta:

```
src/content/posts/
```

Cada post é **um arquivo** com extensão `.md` (Markdown). Por exemplo:

- `tecnologia-nao-e-neutra.md`
- `a-esquerda-precisa-abrir-portas.md`

## Como criar um post novo

1. Abra a pasta `src/content/posts/` no seu editor de texto ou no Cursor.
2. **Copie** um arquivo de post que já existe (por exemplo `tecnologia-nao-e-neutra.md`).
3. **Renomeie** a cópia seguindo o padrão de nome descrito abaixo (slug).
4. Edite o **cabeçalho** no topo do arquivo (frontmatter) e o **texto** abaixo dele.
5. Salve o arquivo.
6. Se o Node.js estiver instalado, rode `npm run dev` e confira se o post aparece no site.

## Bloco de frontmatter para copiar

No topo de cada arquivo `.md`, há um bloco entre `---` com informações sobre o post. Copie o modelo abaixo e preencha com os dados do seu texto:

```yaml
---
title: "Título do post"
date: "2026-05-30"
category: "Direito de Entender"
description: "Uma frase que resume o texto para a listagem e para buscadores."
readingTime: "5 min"
published: true
---
```

Depois do segundo `---`, escreva o conteúdo do post em Markdown (títulos com `#`, parágrafos normais, listas, links, etc.).

## O que significa cada campo

| Campo | Obrigatório | O que é |
|-------|-------------|---------|
| `title` | Sim | Título que aparece na página do post e na listagem da home. |
| `date` | Sim | Data de publicação no formato `AAAA-MM-DD` (ex.: `2026-05-30`). |
| `category` | Sim | Uma das cinco seções do blog (veja lista abaixo). Tem que ser **exatamente** igual, inclusive acentos e maiúsculas. |
| `description` | Sim | Resumo curto do texto (uma ou duas frases). |
| `readingTime` | Sim | Tempo estimado de leitura (ex.: `5 min`, `8 min`). |
| `published` | Sim | `true` para publicar; `false` para guardar como rascunho. |

## Categorias permitidas

Use **somente** uma destas opções em `category`:

- `Direito de Entender`
- `Linguagem do Poder`
- `Tecnologia não é Neutra`
- `Esquerda para Gente Cansada`
- `Vida Cotidiana e Política`

Se escrever qualquer outra coisa, o site pode não compilar ao publicar.

## Nome do arquivo e endereço na internet

O **nome do arquivo** (sem `.md`) vira o endereço do post na internet:

| Nome do arquivo | Endereço do post |
|-----------------|------------------|
| `tecnologia-nao-e-neutra.md` | `/posts/tecnologia-nao-e-neutra` |
| `meu-novo-texto.md` | `/posts/meu-novo-texto` |

**Padrão recomendado para o nome do arquivo (slug):**

- letras minúsculas
- palavras separadas por hífen `-`
- sem acentos, espaços ou caracteres especiais
- curto e descritivo (como um resumo do título)

Exemplo: um post chamado *“Quem ganha quando o povo não entende?”* pode usar o arquivo `quem-ganha-quando-o-povo-nao-entende.md`.

## Rascunhos (`published: false`)

Se ainda não quiser que o texto apareça no site, use:

```yaml
published: false
```

Com isso, o post:

- **não** aparece na página inicial
- **não** aparece no filtro por categoria
- **não** ganha uma página pública na internet

O arquivo continua na pasta `src/content/posts/` para você editar quando quiser. Quando estiver pronto, mude para `published: true` e salve.

## Ver o blog no computador

Na pasta do projeto (onde está este arquivo), abra o terminal e rode:

```bash
npm install
npm run dev
```

Na primeira vez, o `npm install` baixa as dependências (pode demorar um pouco).

O terminal mostrará um endereço local (em geral algo como `http://localhost:4321`). Abra esse endereço no navegador para ver o blog.

Para parar o servidor, use `Ctrl+C` no terminal.

Outros comandos úteis:

```bash
npm run build    # gera a versão estática para publicar (pasta dist)
npm run preview  # visualiza a versão gerada pelo build
```

## Publicar na internet (Vercel ou Netlify)

O blog é um site estático. Você publica conectando o repositório do projeto a um serviço de hospedagem.

### Valores de configuração (importante)

Ao configurar o deploy, use:

| Campo | Valor |
|-------|--------|
| Comando de build | `npm run build` |
| Pasta de saída | `dist` |
| Framework / preset | **Astro** (muitas vezes detectado automaticamente) |

### Passos gerais

**Vercel**

1. Crie uma conta em [vercel.com](https://vercel.com).
2. Importe o repositório Git do projeto.
3. Confirme build `npm run build` e pasta `dist`.
4. Faça o deploy. Cada novo commit na branch principal pode atualizar o site automaticamente.

**Netlify**

1. Crie uma conta em [netlify.com](https://netlify.com).
2. Conecte o repositório Git do projeto.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy. Novos commits podem disparar nova publicação.

Depois de publicado, para colocar um post novo no ar: adicione ou edite o arquivo `.md`, faça commit e envie para o repositório. O serviço de hospedagem reconstrói o site.

## Erros comuns e o que fazer

| Problema | Causa provável | O que fazer |
|----------|----------------|-------------|
| O site não inicia com `npm run dev` | Node.js ou npm não instalados | Instale Node.js 18+ em [nodejs.org](https://nodejs.org) e confira com `npm --version` |
| Mensagem de erro sobre `category` | Categoria escrita errada no frontmatter | Copie uma categoria da lista permitida, com acentos e maiúsculas iguais |
| Erro na data | Formato incorreto | Use `AAAA-MM-DD` entre aspas, ex.: `"2026-05-30"` |
| Post não aparece na home | `published: false` ou erro no frontmatter | Confira `published: true` e se todos os campos estão preenchidos |
| Página do post dá erro 404 | Nome do arquivo mudou depois de publicar | O endereço segue o nome do arquivo; atualize links ou evite renomear após publicar |
| Acentos no nome do arquivo | Slug inconsistente | Prefira só letras sem acento no nome do arquivo |
| Título quebrado no frontmatter | Aspas faltando | Coloque o título entre aspas: `title: "Meu título"` |
| Alteração não aparece no navegador | Cache ou servidor antigo | Salve o arquivo, reinicie `npm run dev` se necessário, atualize a página com Ctrl+F5 |

## Editar ou remover um post

- **Editar:** abra o `.md` em `src/content/posts/`, altere o texto ou o frontmatter e salve.
- **Remover da internet sem apagar:** use `published: false`.
- **Remover de vez:** apague o arquivo `.md` (faça backup antes, se quiser guardar o texto).

## Outros documentos

- [README.md](README.md) — visão geral do projeto e comandos
- [AMBIENTE.md](AMBIENTE.md) — requisitos de Node.js e validação
- [ROADMAP.md](ROADMAP.md) — histórico de desenvolvimento por fases
