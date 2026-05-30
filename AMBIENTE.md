# Ambiente e Validação

Este documento registra o estado do ambiente de desenvolvimento para o projeto **Leitura do Mundo**.

## Verificação em 2026-05-30

| Ferramenta | Disponível | Observação |
|------------|------------|------------|
| `node`   | Sim        | Node.js instalado em `C:\Program Files\nodejs` |
| `npm`    | Sim        | Disponível no PATH após configurar o ambiente |
| `npx`    | Sim        | Incluído com a instalação do Node.js |

## Validação do projeto

Na pasta do projeto:

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

Gerado automaticamente por `npm install`. Não editar manualmente.

## Falso positivo de Node.js

Se `node --version` funcionar mas `npm --version` falhar, o ambiente **não** está completo. O helper interno do Cursor não substitui uma instalação real de Node.js para desenvolvimento.

## Última validação de build

Em 2026-05-30, `npm run build` concluiu com sucesso (6 páginas estáticas geradas em `dist/`).
