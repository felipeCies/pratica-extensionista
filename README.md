# Laboratório Maker

Caso queira acessar o projeto, [clique aqui](https://laboratorio-maker-ruddy.vercel.app/) para acessar o projeto público.

## Participantes

Este projeto foi desenvolvido pelos alunos:

    Maurício Xavier de Oliveira
    Guilherme Henrique Cauvilla
    Felipe Luiz Cieslick
    Gabriel Mazochi

## Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter os seguintes softwares instalados:

- Node (22+) e NPM;
- Docker e Docker Compose;
- Git.

Após clonar o repositório, instale as dependências com:

    npm install

### Execução

Para iniciar o projeto, rode:

    npm run dev

Isso irá:

- Subir o container Docker do banco de dados;
- Rodar as migrações do banco de dados;
- Inicializar o servidor;

OBS: dentro do arquivo `package.json` tem em detalhes quais scripts rodam para inicializar o projeto.

## Documentação

Dentro da pasta `docs/`, terá as documentações do projeto e apresentação:

    docs/
      ├── apresentacao.pptx
      ├── parte-1
      │     └── (diagramas da entrega parcial)
      └── parte-2
            └── (diagramas da entrega final)

## Documentação da API pelo Swagger

Para visualizar e testar a documentação localmente certifique-se de que o banco de dados está ativo e inicie o servidor de desenvolvimento no terminal:

Acesse a rota no navegador:

    -http://localhost:3000/docs

Clique na rota que deseja testar.

Clique no botão branco Try it out no canto superior direito.

Se a rota exigir algum parâmetro (como um id na URL ou dados no corpo da requisição POST/PUT), preencha os campos que irão aparecer.

Clique no botão Execute.

Irão aparecer os dados retornados pelo banco de dados, e os seguintes status:
200 Sucesso
201 Criado 
404 Não encontrado 
 