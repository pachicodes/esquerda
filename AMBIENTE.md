# Ambiente e Validação — Fase 0

Este documento registra o estado do ambiente de desenvolvimento e a estratégia de validação adotada para o projeto **O Direito de Entender**.

## Verificação realizada em 2026-05-30

| Ferramenta | Disponível | Observação |
|------------|------------|------------|
| `node`     | Parcial    | Apenas o helper interno do Cursor (`node.exe` em `AppData\Local\Programs\cursor\...`). **Não** é uma instalação completa de Node.js para desenvolvimento. |
| `npm`      | Não        | Comando não encontrado no PATH. |
| `npx`      | Não        | Comando não encontrado no PATH. |

## Decisão: validação manual

Como `npm` e `npx` não estão disponíveis neste ambiente:

- A implementação das fases 1 a 8 **pode continuar** com criação manual dos arquivos do projeto.
- A validação completa (`npm install`, `npm run build`, `npm run preview`) **fica pendente** até instalar Node.js 18+ com npm incluído.
- Erros de schema, imports e build do Astro só serão detectados automaticamente depois que npm estiver disponível.

## Requisito para validação completa

Instalar **Node.js 18 ou superior** (recomendado: versão LTS atual) a partir de [https://nodejs.org](https://nodejs.org).

Após instalar, na pasta do projeto:

```bash
npm install
npm run dev
npm run build
```

Opcionalmente, após o build:

```bash
npm run preview
```

## `package-lock.json`

- **Não** criar `package-lock.json` manualmente nesta execução.
- O arquivo será gerado automaticamente na primeira vez que `npm install` for executado com npm disponível.

## Falso positivo de Node.js

Se `node --version` retornar uma versão (por exemplo `v22.x`), isso **não** significa que o ambiente está pronto para desenvolvimento. Verifique se `npm --version` também funciona antes de considerar o ambiente completo.

## Verificação final (Fase 9 — 2026-05-30)

A auditoria da primeira versão foi concluída com **revisão manual**. O projeto está estruturalmente pronto para deploy estático; a confirmação automática (`npm install`, `npm run build`) depende de instalar Node.js 18+ com npm no PATH.

## Próximo passo

Instalar Node.js, rodar `npm install` e `npm run build` na pasta do projeto e publicar conforme [COMO_ADICIONAR_POSTS.md](COMO_ADICIONAR_POSTS.md).
