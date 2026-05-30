---
name: Blog Astro Direito Entender
overview: Criar um blog estático completo em Astro chamado "O Direito de Entender", com posts em Markdown via Content Collections, visual minimalista, filtro por categoria sem React, e documentação em português para manutenção fácil.
todos:
  - id: phase-1-scaffold
    content: Fase 1 — Criar a base mínima do projeto Astro e scripts locais
    status: pending
  - id: phase-2-content
    content: Fase 2 — Configurar Content Collections e criar posts Markdown de exemplo
    status: pending
  - id: phase-3-layout-style
    content: Fase 3 — Criar layout base, estilo global e identidade visual minimalista
    status: pending
  - id: phase-4-home
    content: Fase 4 — Criar página inicial com lista de posts, ordenação e filtro por categoria
    status: pending
  - id: phase-5-post-pages
    content: Fase 5 — Criar páginas individuais dos posts com rota dinâmica
    status: pending
  - id: phase-6-about
    content: Fase 6 — Criar página Sobre com texto provisório editável
    status: pending
  - id: phase-7-docs
    content: Fase 7 — Escrever documentação para manutenção, posts e publicação
    status: pending
  - id: phase-8-verify
    content: Fase 8 — Validar funcionamento local/build ou registrar bloqueio por falta de Node/npm
    status: pending
isProject: true
---

## O Direito de Entender — Blog estático em Astro

Blog autoral estático, sem backend/banco/CMS, com posts em Markdown e foco em simplicidade e leitura confortável.

### Decisões tomadas (sem necessidade de confirmação)
- **Astro 5** com Content Collections usando o `glob` loader e validação por `zod`.
- **Sem React**: o filtro por categoria na página inicial será feito com um pequeno script JavaScript vanilla (mostra/esconde os cards). Mantém o site estático e simples.
- **Cor de destaque**: verde abacate como cor primária e roxo suave em detalhes/hover, sobre fundo claro off-white. Definido via variáveis CSS para troca fácil.
- **`readingTime`**: campo manual no frontmatter (conforme a spec), preenchido pela autora. Sem dependências extras.
- **Build estático** padrão do Astro (`dist/`), pronto para Vercel/Netlify sem configuração especial.

### Atenção (ambiente)
Não há Node.js/npm instalado nesta máquina (o `node` detectado é o helper interno do Cursor). Os arquivos do projeto serão todos criados, mas para rodar `npm install` / `npm run dev` e publicar será preciso instalar o Node.js 18+. Isso será explicado no `README.md` e no `COMO_ADICIONAR_POSTS.md`.

### Roadmap por fases

Cada fase deve deixar o projeto em um estado compreensível e verificável. Se uma fase falhar, a próxima não deve começar antes de corrigir o problema ou registrar claramente o bloqueio.

#### Fase 1 — Base mínima do projeto Astro
**Objetivo:** criar a estrutura inicial para o projeto ser reconhecido como um app Astro simples.

**Escopo:**
- Criar `package.json` com scripts `dev`, `build`, `preview` e dependência do Astro.
- Criar `astro.config.mjs`, `tsconfig.json` e `.gitignore`.
- Criar a estrutura inicial de pastas `src/`.

**Critérios de aceite:**
- `package.json` tem comandos claros e sem dependências desnecessárias.
- A estrutura do projeto é compatível com Astro.
- A documentação futura pode apontar para comandos simples: `npm install`, `npm run dev`, `npm run build`.

**Teste/validação:**
- Revisar se os arquivos de configuração existem e não dependem de backend, CMS, banco ou React.
- Se `npm` estiver disponível, rodar `npm install` e confirmar que instala sem erro.

#### Fase 2 — Content Collections e posts Markdown
**Objetivo:** garantir que os posts sejam a unidade central de manutenção do blog.

**Escopo:**
- Criar `src/content.config.ts` com a coleção `posts`.
- Validar frontmatter com `title`, `date`, `category`, `description`, `readingTime` e `published`.
- Criar os 3 posts iniciais em `src/content/posts/`.
- Usar `published: true` nos exemplos.

**Critérios de aceite:**
- Os 3 arquivos Markdown existem nos slugs pedidos.
- O schema limita categorias às 5 categorias iniciais.
- Um post com `published: false` pode ser identificado pelo código e excluído das listagens.
- O conteúdo dos posts é curto e claramente provisório.

**Teste/validação:**
- Revisar se todos os posts têm frontmatter completo.
- Se `npm` estiver disponível, o build do Astro deve validar a coleção sem erro de schema.

#### Fase 3 — Layout base e estilo visual
**Objetivo:** criar a base visual e estrutural reutilizável antes das páginas específicas.

**Escopo:**
- Criar `src/layouts/BaseLayout.astro`.
- Criar `src/styles/global.css`.
- Definir tipografia, cores, espaçamentos e responsividade.
- Incluir SEO básico por props (`title`, `description`).

**Critérios de aceite:**
- Todas as páginas podem usar o mesmo layout.
- O HTML base usa `lang="pt-BR"`, `header`, `nav`, `main` e `footer`.
- O visual é claro, minimalista, responsivo e não parece portal de notícias.
- As cores de destaque usam verde abacate e roxo suave com contraste adequado.

**Teste/validação:**
- Revisar visualmente em largura de celular e desktop quando o servidor local estiver disponível.
- Verificar se o conteúdo principal mantém leitura confortável, com largura limitada e espaçamento generoso.

#### Fase 4 — Página inicial com lista e filtro
**Objetivo:** entregar a principal experiência de descoberta dos textos.

**Escopo:**
- Criar `src/pages/index.astro`.
- Criar `src/components/PostCard.astro`.
- Criar `src/components/CategoryFilter.astro`.
- Buscar somente posts publicados.
- Ordenar posts por data, do mais recente ao mais antigo.
- Implementar filtro por categoria com JavaScript simples, sem React.

**Critérios de aceite:**
- A home mostra nome do blog, tagline, apresentação curta, link para `/sobre` e posts recentes.
- Posts com `published: false` não aparecem.
- O filtro permite ver todos os posts ou apenas uma categoria.
- O filtro continua utilizável sem animações complexas ou estado difícil de manter.

**Teste/validação:**
- Marcar temporariamente um post como rascunho durante revisão manual e confirmar que a lógica o excluiria da home.
- Testar o filtro no navegador quando o servidor local estiver disponível.

#### Fase 5 — Página individual de post
**Objetivo:** criar a leitura completa de cada ensaio em página própria.

**Escopo:**
- Criar `src/pages/posts/[...slug].astro`.
- Gerar rotas estáticas apenas para posts publicados.
- Renderizar título, data, categoria, tempo de leitura, descrição e Markdown.
- Incluir link de retorno para a página inicial.

**Critérios de aceite:**
- Cada post publicado tem uma URL própria.
- O corpo Markdown é renderizado com boa legibilidade.
- A página tem SEO básico com título e descrição do post.
- Posts com `published: false` não geram página pública.

**Teste/validação:**
- Abrir as 3 rotas dos posts quando o servidor local estiver disponível.
- Conferir se datas e metadados aparecem corretamente.

#### Fase 6 — Página Sobre
**Objetivo:** oferecer uma página institucional simples e fácil de editar.

**Escopo:**
- Criar `src/pages/sobre.astro`.
- Escrever texto provisório sobre autora e propósito do blog.
- Usar o layout base e manter o texto em português simples.

**Critérios de aceite:**
- A página `/sobre` existe e é acessível pelo menu e pela home.
- O texto é assumidamente provisório e fácil de substituir depois.
- A página não cria dependências extras nem estruturas complexas.

**Teste/validação:**
- Abrir `/sobre` quando o servidor local estiver disponível.
- Revisar se o conteúdo cumpre o papel sem parecer final demais.

#### Fase 7 — Documentação de manutenção e publicação
**Objetivo:** permitir que uma pessoa não técnica publique e mantenha o blog com confiança.

**Escopo:**
- Criar `COMO_ADICIONAR_POSTS.md`.
- Atualizar `README.md`.
- Explicar posts, frontmatter, rascunhos, comandos locais, publicação em Vercel/Netlify e erros comuns.
- Incluir observação sobre instalar Node.js/npm antes de rodar comandos nesta máquina.

**Critérios de aceite:**
- A documentação está em português simples.
- Uma pessoa consegue criar um post novo copiando o modelo de frontmatter.
- `published: false` está explicado como modo de rascunho.
- Os comandos locais e de publicação estão explícitos.

**Teste/validação:**
- Ler a documentação como se fosse a primeira vez no projeto e verificar se há algum passo técnico implícito demais.

#### Fase 8 — Verificação final
**Objetivo:** confirmar que o projeto está pronto para uso ou registrar claramente o que falta no ambiente.

**Escopo:**
- Rodar validações possíveis.
- Se `npm` estiver disponível: instalar dependências e rodar build.
- Se `npm` não estiver disponível: revisar arquivos manualmente e registrar que a validação completa depende da instalação do Node.js.

**Critérios de aceite:**
- O projeto não contém backend, banco, autenticação, CMS obrigatório, React ou dependências desnecessárias.
- Os arquivos pedidos existem.
- A estrutura permite adicionar posts apenas criando Markdown.
- O resultado final é simples de publicar em Vercel ou Netlify.

**Teste/validação:**
- Preferencial: `npm install` e `npm run build`.
- Alternativo: revisão manual completa + instrução clara para instalar Node.js 18+.

### Estrutura de arquivos a criar

```
package.json
astro.config.mjs
tsconfig.json
.gitignore
README.md
COMO_ADICIONAR_POSTS.md
src/
  content.config.ts        # coleção "posts" + schema zod
  styles/global.css        # variáveis CSS, tipografia, layout responsivo
  layouts/BaseLayout.astro # <head> com SEO, header, footer, slot
  components/PostCard.astro
  components/CategoryFilter.astro
  pages/
    index.astro            # home: nome, tagline, apresentação, filtro, lista
    sobre.astro            # página Sobre (texto provisório)
    posts/[...slug].astro  # rota dinâmica do post
  content/posts/
    quem-ganha-quando-o-povo-nao-entende.md
    a-esquerda-precisa-abrir-portas.md
    tecnologia-nao-e-neutra.md
```

### Content Collections — `src/content.config.ts`
Define a coleção `posts` com schema:
- `title: string`
- `date: coerce.date()`
- `category: enum([...5 categorias])`
- `description: string`
- `readingTime: string`
- `published: boolean` (default `true`)

O `enum` das categorias garante que erros de digitação sejam pegos no build. As 5 categorias: Direito de Entender, Linguagem do Poder, Tecnologia não é Neutra, Esquerda para Gente Cansada, Vida Cotidiana e Política.

### Layout base — `src/layouts/BaseLayout.astro`
- `<html lang="pt-BR">`, `<head>` com `title` e `<meta name="description">` recebidos por props (SEO básico).
- Header com nome do blog (link para `/`) e navegação (Início / Sobre).
- `<main>` com `<slot />`, footer simples.
- HTML semântico (`header`, `nav`, `main`, `article`, `footer`) e foco em acessibilidade (contraste, `aria` onde fizer sentido, skip-friendly).

### Página inicial — `src/pages/index.astro`
- Busca posts com `getCollection('posts', p => p.data.published)`, ordena por `date` desc.
- Mostra nome, tagline, breve apresentação.
- `CategoryFilter` com botões (Todas + 5 categorias) que filtram os `PostCard` via JS vanilla usando `data-category`.
- Link para `/sobre`.

### Página de post — `src/pages/posts/[...slug].astro`
- `getStaticPaths()` gera uma rota por post publicado.
- Renderiza título, data formatada (pt-BR), categoria, tempo de leitura, descrição e o corpo Markdown (`<Content />`).
- Link "← Voltar para a página inicial".
- Posts `published: false` não geram rota.

### Estilo — `src/styles/global.css`
- Variáveis CSS para cores (`--accent-green`, `--accent-purple`, fundo claro), espaçamentos e tipografia.
- Tipografia confortável (medida ~65ch, line-height generoso) para leitura longa.
- Responsivo (mobile-first), poucos elementos decorativos, sem excesso de sombras/animações, sem cara de portal de notícias.

### Posts de exemplo
3 arquivos `.md` curtos com frontmatter preenchido (title, date, category, description, readingTime, published: true) e parágrafos de placeholder só para testar o layout.

### Documentação
- `COMO_ADICIONAR_POSTS.md`: explica em português simples onde ficam os posts, como criar/preencher o frontmatter, escrever conteúdo, marcar rascunho com `published: false`, rodar localmente, publicar (Vercel/Netlify) e erros comuns.
- `README.md`: instalação, desenvolvimento (`npm install`, `npm run dev`), build e publicação.

### Verificação ao final
Tentar `npm install` e `npm run build` se o Node estiver disponível; caso contrário, revisar os arquivos manualmente e documentar o passo de instalação do Node para a autora.
