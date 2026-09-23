# Curso de React

Projeto desenvolvido durante um curso de React, com o objetivo de **aprendizado e prática** dos conceitos fundamentais da biblioteca (componentes, hooks, roteamento, tipagem com TypeScript, etc.). Não tem fins comerciais.

## Sobre o projeto

É um **gerenciador de tarefas** simples, que permite:

- Adicionar novas tarefas (título e descrição)
- Marcar tarefas como concluídas
- Remover tarefas
- Visualizar os detalhes de uma tarefa em uma página separada
- Persistir as tarefas no `localStorage` do navegador (os dados continuam salvos após recarregar a página)

## Tecnologias utilizadas

- [React](https://react.dev/) 18
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/) para navegação entre páginas
- [Tailwind CSS](https://tailwindcss.com/) para estilização
- [lucide-react](https://lucide.dev/) para ícones
- [uuid](https://www.npmjs.com/package/uuid) para geração de IDs únicos

## Estrutura do projeto

```
src/
├── components/   # Componentes reutilizáveis (Button, Input, Title, Tasks, AddTask)
├── pages/        # Páginas da aplicação (TaskPage)
├── App.tsx       # Componente principal, com a lógica de estado das tarefas
├── types.ts      # Tipos TypeScript compartilhados
└── main.tsx      # Ponto de entrada da aplicação
```

## Como rodar o projeto

Pré-requisitos: [Node.js](https://nodejs.org/) instalado.

```bash
# instalar as dependências
npm install

# rodar em modo de desenvolvimento
npm run dev

# gerar build de produção
npm run build

# rodar o lint
npm run lint
```

A aplicação ficará disponível em `http://localhost:5173` (porta padrão do Vite).

## Licença

Este projeto está sob a licença MIT — veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
