# Roadmap de Execução — O Direito de Entender

Este documento é a referência principal para executar o projeto. Ele registra a ordem de desenvolvimento, os critérios de aceite, os testes possíveis, os riscos conhecidos e o que fica fora do escopo da primeira versão.

## Objetivo do Projeto

Criar um blog estático em Astro chamado **O Direito de Entender**, com posts em Markdown, visual minimalista e manutenção simples para uma pessoa que quer escrever sem lidar com complexidade técnica desnecessária.

O projeto deve evitar backend, banco de dados, autenticação, CMS obrigatório, painel administrativo, React e dependências desnecessárias.

## Decisões de Base

- Usar Astro com Content Collections.
- Usar Astro 5.
- Usar posts em Markdown dentro de `src/content/posts/`.
- Todos os posts devem ficar exclusivamente em `src/content/posts/`.
- Usar CSS simples, sem framework visual.
- Usar filtro de categoria na página inicial com JavaScript simples, sem React.
- O script do filtro ficará dentro de `CategoryFilter.astro`, por ser pequeno e localizado.
- Garantir que, sem JavaScript, todos os posts publicados continuem visíveis.
- Usar `published: false` como mecanismo de rascunho.
- Usar `readingTime` preenchido manualmente no frontmatter.
- Usar datas no formato `YYYY-MM-DD`, por exemplo `2026-05-30`.
- Usar slugs a partir do nome do arquivo Markdown, em letras minúsculas, sem acentos e com palavras separadas por hífen.
- Manter o projeto pronto para publicação estática em Vercel ou Netlify.

## Fora do Escopo da Primeira Versão

- Backend.
- Banco de dados.
- Autenticação.
- Painel administrativo.
- CMS obrigatório.
- React.
- Busca textual.
- Paginação.
- Comentários.
- Newsletter.
- Analytics.
- Dark mode.
- Página individual de categoria.
- Tags além de categoria.
- Compartilhamento social avançado.
- URL canônica (`canonical`) antes de existir um domínio final definido.

## Riscos e Cuidados

- **Node.js/npm não disponível no ambiente atual:** os arquivos podem ser criados, mas a validação com `npm install` e `npm run build` depende de instalar Node.js 18+.
- **Validação parcial:** se Node/npm não estiver disponível, a revisão será manual e o build precisará ser executado depois.
- **Complexidade desnecessária:** evitar abstrações, dependências e funcionalidades que dificultem a manutenção.
- **Filtro por categoria:** deve continuar simples. Não criar páginas separadas de categoria nesta versão.
- **Posts não publicados:** todo código que lista ou gera páginas de posts deve respeitar `published: false`.
- **Acessibilidade e leitura:** o visual deve priorizar contraste, legibilidade, HTML semântico, foco visível e responsividade.
- **Documentação:** a pessoa mantenedora deve conseguir criar posts copiando um exemplo, sem entender profundamente Astro.

## Ordem de Desenvolvimento

As fases abaixo devem ser executadas em ordem. Uma fase só deve ser considerada concluída quando seus critérios de aceite forem atendidos.

## Fase 0 — Ambiente e Forma de Validação

### Objetivo

Definir claramente se o projeto será validado com Node/npm agora ou se a implementação seguirá com revisão manual até o ambiente estar pronto.

### Escopo

- Verificar se `node`, `npm` e `npx` estão disponíveis no sistema.
- Registrar a versão mínima recomendada: Node.js 18+.
- Não criar `package-lock.json` manualmente se npm não estiver disponível.
- Gerar `package-lock.json` apenas quando `npm install` puder ser executado.
- Registrar no projeto que a ausência de npm impede validação completa local.

### Critérios de Aceite

- Está claro se a validação será completa (`npm install` e `npm run build`) ou manual.
- O roadmap e a documentação reconhecem a dependência de Node.js/npm.
- Se npm estiver indisponível, isso não bloqueia a criação dos arquivos, mas bloqueia a confirmação final por build.
- Se npm estiver indisponível, `package-lock.json` não será criado nesta execução.

### Validação

- Se npm estiver disponível, confirmar versão com `npm --version`.
- Se npm não estiver disponível, registrar que a validação final precisa ser feita após instalar Node.js 18+.

### Status: concluída (2026-05-30)

- **Modo de validação:** manual até instalar Node.js 18+ com npm.
- **npm / npx:** indisponíveis no ambiente atual.
- **`package-lock.json`:** não criado; será gerado na primeira execução de `npm install`.
- **Registros:** [AMBIENTE.md](AMBIENTE.md), [README.md](README.md), [FASE-1-PREPARACAO.md](FASE-1-PREPARACAO.md).
- **Próxima fase:** Fase 1 — criar arquivos Astro manualmente (sem `npm create astro`).

## Fase 1 — Base Mínima do Projeto Astro

### Objetivo

Criar a estrutura inicial para o projeto ser reconhecido como um app Astro simples.

### Escopo

- Criar `package.json` com scripts `dev`, `build` e `preview`.
- Criar `astro.config.mjs`.
- Criar `tsconfig.json`.
- Criar `.gitignore`.
- Criar a estrutura inicial de `src/`.

### Critérios de Aceite

- O projeto tem configuração compatível com Astro.
- `package.json` não inclui dependências desnecessárias.
- Os comandos esperados estão documentáveis: `npm install`, `npm run dev`, `npm run build`.
- Nenhuma tecnologia proibida foi adicionada.

### Validação

- Revisar manualmente os arquivos de configuração.
- Se `npm` estiver disponível, rodar `npm install`.

### Status: concluída (2026-05-30)

- **Arquivos criados:** `package.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`, `src/pages/index.astro`.
- **Dependências:** apenas `astro@^5.0.0` em `package.json`.
- **`package-lock.json`:** não criado (aguarda primeiro `npm install`).
- **Validação npm:** não executada — `npm` continua indisponível no ambiente. Revisão manual dos arquivos concluída.
- **Validação pendente (após instalar Node.js 18+):** `npm install`, `npm run dev`, `npm run build`.
- **Próxima fase:** Fase 2 — Content Collections e posts Markdown.

## Fase 2 — Content Collections e Posts Markdown

### Objetivo

Garantir que os posts sejam a unidade central de manutenção do blog.

### Escopo

- Criar `src/content.config.ts`.
- Definir a coleção `posts`.
- Validar o frontmatter com:
  - `title`
  - `date`
  - `category`
  - `description`
  - `readingTime`
  - `published`
- Definir as categorias iniciais no schema:
  - `Direito de Entender`
  - `Linguagem do Poder`
  - `Tecnologia não é Neutra`
  - `Esquerda para Gente Cansada`
  - `Vida Cotidiana e Política`
- Criar os 3 posts iniciais em `src/content/posts/`.

### Critérios de Aceite

- Os 3 posts de exemplo existem com os nomes pedidos.
- Todos os posts ficam exclusivamente em `src/content/posts/`.
- As 5 categorias iniciais estão validadas no schema.
- Os posts usam frontmatter completo.
- O campo `date` usa o formato `YYYY-MM-DD`.
- Os nomes dos arquivos usam letras minúsculas, sem acentos e com hífen entre palavras.
- O conteúdo dos posts é curto e provisório.
- A estrutura permite adicionar posts novos apenas criando arquivos Markdown.

### Validação

- Revisar frontmatter dos 3 posts.
- Se `npm` estiver disponível, rodar build para validar o schema.

### Status: concluída (2026-05-30)

- **Arquivos criados:** `src/content.config.ts`, 3 posts em `src/content/posts/`.
- **Coleção:** `posts` com schema Zod (title, date, category, description, readingTime, published).
- **Categorias no enum:** 5 categorias iniciais validadas no build.
- **`index.astro`:** não alterado (listagem de posts na Fase 4).
- **Validação npm:** não executada — `npm` indisponível. Revisão manual do frontmatter e paths concluída.
- **Validação pendente:** `npm install` e `npm run build` após instalar Node.js 18+.
- **Próxima fase:** Fase 3 — Layout base e estilo visual.

## Fase 3 — Layout Base e Estilo Visual

### Objetivo

Criar a base visual e estrutural reutilizável do blog.

### Escopo

- Criar `src/layouts/BaseLayout.astro`.
- Criar `src/styles/global.css`.
- Definir variáveis de cor, tipografia e espaçamento.
- Criar estrutura semântica com `header`, `nav`, `main` e `footer`.
- Incluir SEO básico por página com `title` e `description`.

### Critérios de Aceite

- Todas as páginas podem reutilizar o mesmo layout.
- O HTML usa `lang="pt-BR"`.
- O conteúdo principal tem largura confortável para leitura, idealmente entre `65ch` e `72ch`.
- A tipografia usa `line-height` generoso, idealmente entre `1.6` e `1.8`.
- O layout é mobile-first e funciona em celular e desktop.
- Links e botões têm estado de foco visível.
- O contraste entre texto, fundo e links é adequado para leitura.
- Há detalhes em verde abacate ou roxo suave.
- Não há excesso de cards, sombras ou animações.

### Validação

- Revisar o CSS e a estrutura HTML.
- Quando possível, abrir em navegador e testar larguras de celular e desktop.

### Status: concluída (2026-05-30)

- **Arquivos criados:** `src/layouts/BaseLayout.astro`, `src/styles/global.css`.
- **Arquivo alterado:** `src/pages/index.astro` (passa a usar `BaseLayout`).
- **Layout:** `header`, `nav`, `main`, `footer`; SEO com props `title` e `description`; padrão de título `Título | O Direito de Entender`.
- **Estilo:** fundo claro, `--measure: 68ch`, `line-height: 1.7`, verde abacate e roxo suave nos links/hover, foco visível.
- **Validação npm:** não executada — `npm` indisponível. Revisão manual de HTML/CSS concluída.
- **Validação pendente:** `npm run dev` e checagem visual no navegador após instalar Node.js 18+.
- **Próxima fase:** Fase 4 — Página inicial com lista de posts.

## Fase 4 — Página Inicial com Lista de Posts

### Objetivo

Entregar a página inicial com apresentação do blog e lista de posts publicados, antes de adicionar comportamento interativo.

### Escopo

- Criar `src/pages/index.astro`.
- Criar `src/components/PostCard.astro`.
- Buscar apenas posts publicados.
- Ordenar posts por data, do mais recente ao mais antigo.
- Mostrar nome do blog, tagline, apresentação curta e link para `/sobre`.

### Critérios de Aceite

- A home mostra nome do blog, tagline e breve apresentação.
- A home mostra os posts publicados mais recentes.
- Posts com `published: false` não aparecem na home.
- A home tem link claro para `/sobre`.
- Cada card mostra título, data, categoria, descrição e tempo de leitura.

### Validação

- Revisar a lógica de busca e ordenação.
- Confirmar que a ordenação usa data decrescente.
- Quando possível, abrir a home no navegador.

### Status: concluída (2026-05-30)

- **Arquivos criados:** `src/components/PostCard.astro`.
- **Arquivos alterados:** `src/pages/index.astro`, `src/styles/global.css`.
- **Lógica:** `getCollection` com filtro `published`, ordenação por data decrescente.
- **Home:** tagline, apresentação, link `/sobre`, lista de ensaios com metadados completos.
- **Links dos posts:** `/posts/{id}` (páginas individuais na Fase 6).
- **Validação npm:** não executada — `npm` indisponível. Revisão manual concluída.
- **Validação pendente:** `npm run dev` e checagem visual após instalar Node.js 18+.
- **Próxima fase:** Fase 5 — Filtro simples por categoria.

## Fase 5 — Filtro Simples por Categoria

### Objetivo

Adicionar filtro por categoria na home sem transformar o projeto em uma aplicação complexa.

### Escopo

- Criar `src/components/CategoryFilter.astro`.
- Adicionar botões para `Todas` e para as 5 categorias iniciais.
- Filtrar cards com JavaScript simples usando atributos `data-category`.
- Manter o script do filtro dentro de `CategoryFilter.astro`.
- Manter todos os posts publicados visíveis quando JavaScript estiver desativado.

### Critérios de Aceite

- O filtro mostra todos os posts ou apenas uma categoria.
- O filtro não depende de React.
- Posts com `published: false` não aparecem no filtro porque não são renderizados na home.
- Sem JavaScript, todos os posts publicados continuam visíveis.
- O comportamento é fácil de remover ou alterar.

### Validação

- Quando possível, testar o filtro no navegador.
- Conferir que todos os botões são acessíveis por teclado.
- Conferir que o estado ativo do filtro é perceptível visualmente.

### Status: concluída (2026-05-30)

- **Arquivos criados:** `src/components/CategoryFilter.astro`.
- **Arquivos alterados:** `src/pages/index.astro` (`data-category` nos itens da lista), `src/styles/global.css`.
- **Filtro:** botões Todas + 5 categorias; script vanilla dentro do componente; `aria-pressed` e classe `is-active`.
- **Sem JavaScript:** posts não são ocultados no HTML inicial; lista completa permanece visível.
- **Validação npm:** não executada — `npm` indisponível. Revisão manual concluída.
- **Validação pendente:** `npm run dev` e teste de cliques/teclado no navegador.
- **Próxima fase:** Fase 6 — Página individual de post.

## Fase 6 — Página Individual de Post

### Objetivo

Criar a leitura completa de cada ensaio em página própria.

### Escopo

- Criar `src/pages/posts/[...slug].astro`.
- Gerar rotas estáticas para posts publicados.
- Renderizar título, data, categoria, tempo de leitura, descrição e corpo Markdown.
- Adicionar link para voltar à página inicial.

### Critérios de Aceite

- Cada post publicado tem uma URL própria.
- O corpo Markdown é renderizado corretamente.
- A página tem boa legibilidade.
- A página usa SEO básico com título e descrição do post.
- O título da página segue o padrão `Título do post | O Direito de Entender`.
- Posts com `published: false` não geram página pública.

### Validação

- Quando possível, abrir as 3 páginas de posts no navegador.
- Confirmar que metadados e conteúdo aparecem corretamente.

### Status: concluída (2026-05-30)

- **Arquivos criados:** `src/pages/posts/[...slug].astro`.
- **Arquivos alterados:** `src/styles/global.css` (estilos `.post-article`, `.post-content`, `.post-back`).
- **Rotas:** `/posts/tecnologia-nao-e-neutra`, `/posts/a-esquerda-precisa-abrir-portas`, `/posts/quem-ganha-quando-o-povo-nao-entende` (posts publicados).
- **Render:** `getStaticPaths` + `render(post)` + `<Content />`; SEO via `BaseLayout`.
- **Validação npm:** não executada — `npm` indisponível. Revisão manual concluída.
- **Validação pendente:** `npm run dev` e abrir as 3 URLs no navegador.
- **Próxima fase:** Fase 7 — Página Sobre.

## Fase 7 — Página Sobre

### Objetivo

Criar uma página institucional simples e fácil de editar depois.

### Escopo

- Criar `src/pages/sobre.astro`.
- Escrever apresentação provisória da autora.
- Explicar o propósito do blog em linguagem simples.
- Evitar dados pessoais definitivos da autora nesta versão.
- Usar o layout base.

### Critérios de Aceite

- A rota `/sobre` existe.
- A página é acessível pelo menu e pela home.
- O texto é claramente provisório e fácil de substituir.
- O texto não depende de dados pessoais definitivos da autora.
- A página não adiciona estrutura complexa.

### Validação

- Revisar o texto.
- Quando possível, abrir `/sobre` no navegador.

### Status: concluída (2026-05-30)

- **Arquivos criados:** `src/pages/sobre.astro`.
- **Conteúdo:** apresentação provisória do blog (propósito, público, seções editoriais); nota explícita de texto provisório; sem dados pessoais definitivos da autora.
- **Layout:** `BaseLayout` com SEO (`Sobre | O Direito de Entender`); reutiliza `.home-intro` e `.post-back`.
- **Navegação:** menu (`/sobre`) e link na home já existiam; rota `/sobre` passa a responder.
- **Validação npm:** não executada — `npm` indisponível. Revisão manual concluída.
- **Validação pendente:** `npm run dev` e abrir `/sobre` no navegador.
- **Próxima fase:** Fase 8 — Documentação de Manutenção e Publicação.

## Fase 8 — Documentação de Manutenção e Publicação

### Objetivo

Permitir que a pessoa mantenedora publique e edite o blog sem depender de conhecimento técnico profundo.

### Escopo

- Criar `COMO_ADICIONAR_POSTS.md`.
- Atualizar `README.md`.
- Explicar onde ficam os posts.
- Explicar como criar um novo Markdown.
- Explicar o frontmatter.
- Explicar o formato de data `YYYY-MM-DD`.
- Explicar o padrão de slug dos arquivos Markdown.
- Explicar como usar `published: false`.
- Explicar como rodar localmente.
- Explicar como publicar em Vercel ou Netlify.
- Listar erros comuns e soluções.
- Incluir um bloco de frontmatter pronto para copiar.

### Critérios de Aceite

- A documentação está em português simples.
- Uma pessoa consegue criar um post novo copiando um exemplo.
- `COMO_ADICIONAR_POSTS.md` inclui um bloco de frontmatter pronto para copiar.
- A documentação explica a necessidade de instalar Node.js/npm.
- Os comandos locais estão claros.
- A publicação está descrita sem exigir conhecimento avançado.
- A documentação informa os valores de deploy:
  - comando de build: `npm run build`
  - diretório de saída: `dist`
  - preset/plataforma: Astro, quando detectado automaticamente

### Validação

- Ler a documentação como se fosse o primeiro contato com o projeto.
- Remover ou reescrever qualquer trecho técnico demais.

### Status: concluída (2026-05-30)

- **Arquivos alterados:** `COMO_ADICIONAR_POSTS.md` (guia completo), `README.md` (link ao guia, seção de manutenção, deploy).
- **Conteúdo do guia:** pasta dos posts, passo a passo, frontmatter copiável, campos, 5 categorias, slug/URL, `published: false`, comandos locais, Vercel/Netlify, erros comuns.
- **Deploy documentado:** `npm run build`, `dist`, preset Astro.
- **Validação npm:** não executada — `npm` indisponível. Revisão manual da documentação concluída.
- **Validação pendente:** ler como primeiro contato; opcionalmente seguir o guia com `npm install` e `npm run dev`.
- **Próxima fase:** Fase 9 — Verificação Final.

## Fase 9 — Verificação Final

### Objetivo

Confirmar que o projeto está pronto para uso ou registrar claramente o que ainda depende do ambiente.

### Escopo

- Verificar a estrutura final de arquivos.
- Confirmar ausência de backend, banco, autenticação, CMS obrigatório e React.
- Conferir posts publicados e rascunhos.
- Rodar validações possíveis.

### Critérios de Aceite

- O projeto contém todos os arquivos pedidos.
- A home, a página Sobre e as páginas de post estão implementadas.
- A estrutura permite adicionar posts por Markdown.
- A documentação está completa.
- O projeto está pronto para deploy estático.
- Não foram adicionadas funcionalidades fora do escopo da primeira versão.

### Validação

- Preferencialmente rodar:

```bash
npm install
npm run build
```

- Opcionalmente, após o build:

```bash
npm run preview
```

- Se `npm` não estiver disponível, registrar que a validação completa depende da instalação do Node.js 18+ e fazer revisão manual dos arquivos.

## Definição de Pronto

O projeto estará pronto quando:

- O blog puder ser mantido principalmente editando arquivos Markdown.
- A página inicial listar posts publicados e filtrar por categoria.
- Cada post publicado tiver página própria.
- Posts com `published: false` não aparecerem na home, no filtro ou como páginas públicas.
- A página Sobre existir.
- A documentação explicar manutenção e publicação em português simples.
- O código permanecer simples, estático e sem dependências desnecessárias.
