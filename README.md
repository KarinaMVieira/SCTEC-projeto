# Projeto SkillMatch

Este é um projeto desenvolvido em JavaScript utilizando os aprendizados das aulas de Front-End da SCTEC Senai.


## Sobre o projeto

O SkillMatch JS é um simulador de plataforma de RH que visa a triagem no processo de recrutamento. 
O simulador analisa os requisitos de vagas, habilidades que o candidato possui, cruza as informações do perfil do candidato com as vagas disponíveis e mostra:

- Diagnósticos de habilidades em comum entre cada vaga e o candidato;
- Diagnósticos individuais de habilidades faltantes para cada vaga;
- Percentual de compatibilidade com cada vaga;
- Vaga que possui maior compatibilidade;
- Recomendações de estudos para o condidato. 


O projeto foi desenvolvido no VS Code com o nome de skillmatch.js e testado diretamente no console de ferramentas do desenvolvedor do Google Chrome. O fluxo de trabalho foi gerenciado via Git utilizando uma estrutura de Git Flow dividida nas branches: main, develop, feat/analise-vagas e docs/readme. A organização visual das tarefas foi estruturada por meio de um quadro Kanban no Trello, dividido em colunas estrategicamente separadas por: informações gerais do projeto, backlog, a fazer, em andamento e concluído.


## Estrutura do projeto

```txt
Projeto-SCTEC/
│
├── skillmatch.js
│    │
│    └── Fluxo de Branches
│        ├── main
│        ├── develop
│        ├── feat/analise-vagas
│        └── docs/readme
│ 
└── README.md
    │
    └── Links Externos
        ├── Quadro Kanban ──► Trello
        └── Vídeo ────► Google Drive
```


## Objetivo

Praticar os principais conceitos do módulo como:

- Lógica de programação;
- JavaScript;
- Tipos de dados;
- Condicionais;
- Operadores;
- Escopo;
- Laços de repetição;
- Funções;
- Arrow functions;
- Arrays;
- Métodos de array;
- Objetos;
- Classes;
- Herança;
- This;
- Callbacks;
- Closures;
- Promises;
- Async/await;
- GitHub;
- Kanban.


## Como executar

Você pode executar dessa forma:

1. Abrir o navegador Google Chrome;
2. Pressionar F12 ou Ctrl + Shift + J;
3. Abrir a aba Console;
4. Copiar o código do arquivo skillmatch.js;
5. Colar no console;
6. Pressionar Enter.


## Extensões recomendadas

Para o desenvolvimento e execução deste projeto, recomenda-se o uso das seguintes ferramentas no VS Code

- JavaScript (ES6) code snippets;
- Prettier - Code formatter;
- Git Extension/ GitLens;
- Live Server.


## Como a internet funciona

A internet opera fundamentalmente sob o modelo cliente-servidor. O cliente representa o dispositivo final (como o navegador Google Chrome) que faz uma requisição (request) por dados ou serviços através da web. O provedor de internet atua como o intermediário para transportar essa requisição até o servidor e, posteriormente, trazer a resposta (response) de volta para a tela do usuário.


## Declaração de Variáveis

**var:** É um modelo antigo e evitado por possuir instabilidade, permitindo que as informações vazem e deem liberdade para o código quebrar sozinho.

**let:** É uma variável usada para quando se precisa mudar o valor do dado quantas vezes quiser durante o programa. Ela respeita as limitações do bloco onde foi criada, como por exemplo, um laço de repetição.

**const:** É uma constante que nunca mudam, ou seja, não pode receber uma nova atribuição. Se tentar mudar o valor, o JavaScript para o programa e gera um erro.


## Links externos

**Trello**: [Kanban do projeto.](https://trello.com/b/UNWN8EX5/projeto-skillmatch-javascript)

**Google Drive**: [Vídeo explicativo do projeto.](https://drive.google.com/drive/folders/178rqUXCoNvvYRCJDBtAuHQAJSery8Q37?usp=sharing)
