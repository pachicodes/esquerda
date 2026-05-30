# O Direito de Entender

Blog estático em Astro 5 com posts em Markdown.

## Requisitos

Para rodar o projeto localmente ou gerar o build, é necessário:

- **Node.js 18 ou superior** (recomendado: versão LTS)
- **npm** (incluído na instalação padrão do Node.js em [nodejs.org](https://nodejs.org))

Sem Node.js e npm instalados, os arquivos do projeto podem existir no repositório, mas não será possível instalar dependências nem validar o build localmente.

Consulte [AMBIENTE.md](AMBIENTE.md) para o registro do ambiente e da estratégia de validação.

## Comandos (após instalar Node.js)

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Manutenção de posts

**Para adicionar, editar ou publicar textos**, siga o guia passo a passo:

- **[COMO_ADICIONAR_POSTS.md](COMO_ADICIONAR_POSTS.md)** — onde criar arquivos, frontmatter, categorias, rascunhos, erros comuns e deploy

Os posts ficam em `src/content/posts/` (um arquivo `.md` por texto).

## Documentação

- [COMO_ADICIONAR_POSTS.md](COMO_ADICIONAR_POSTS.md) — como publicar e editar posts
- [ROADMAP.md](ROADMAP.md) — fases de desenvolvimento e critérios de aceite
- [AMBIENTE.md](AMBIENTE.md) — ambiente e validação

## Publicação

Deploy estático em **Vercel** ou **Netlify** (passo a passo detalhado em [COMO_ADICIONAR_POSTS.md](COMO_ADICIONAR_POSTS.md)):

| Campo | Valor |
|-------|--------|
| Build command | `npm run build` |
| Output directory | `dist` |
| Framework preset | Astro (quando detectado automaticamente) |

Conecte o repositório Git ao serviço escolhido; cada envio de alterações pode gerar um novo deploy automaticamente.
