import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const swaggerSpec = {
  openapi: '3.0.0',
  info: {
    title: 'API Laboratório Maker',
    version: '1.0.0',
    description: 'Documentação completa da API REST do projeto Laboratório Maker. \n\nDesenvolvido por: Felipe, Gabriel, Mauricio e Guilherme.',
  },
  components: {
    schemas: {
      Usuario: {
        type: 'object',
        properties: {
          id: { type: 'integer', example: 1 },
          email: { type: 'string', example: 'usuario@example.com' },
          nome: { type: 'string', example: 'João Silva' },
          senha: { type: 'string', example: 'senha123' },
        },
      },
      Curso: {
        type: 'object',
        properties: {
          id: { type: 'integer', example: 1 },
          nome: { type: 'string', example: 'Introdução à Programação' },
          descricao: { type: 'string', example: 'Aprenda os conceitos básicos...' },
        },
      },
      Aula: {
        type: 'object',
        properties: {
          id: { type: 'integer', example: 1 },
          curso_id: { type: 'integer', example: 1 },
          titulo: { type: 'string', example: 'Variáveis e Tipos' },
          video_url: { type: 'string', example: 'https://youtube.com/...' },
          texto_explicativo: { type: 'string', example: 'Aprenda sobre variáveis...' },
        },
      },
      Ideia: {
        type: 'object',
        properties: {
          id: { type: 'integer', example: 1 },
          titulo: { type: 'string', example: 'Plataforma de Aprendizado' },
          conteudo: { type: 'string', example: 'Detalhes da ideia...' },
        },
      },
    },
  },
  paths: {
    //  USUÁRIOS
    '/api/users': {
      get: {
        summary: 'Lista todos os usuários',
        tags: ['Usuários'],
        responses: { '200': { description: 'Sucesso' } },
      },
      post: {
        summary: 'Criar novo usuário',
        tags: ['Usuários'],
        requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/Usuario' } } } },
        responses: { '201': { description: 'Criado com sucesso' } },
      },
    },
    '/api/users/{id}': {
      get: {
        summary: 'Obter usuário por ID',
        tags: ['Usuários'],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        responses: { '200': { description: 'Sucesso' }, '404': { description: 'Não encontrado' } },
      },
      put: {
        summary: 'Atualizar usuário',
        tags: ['Usuários'],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/Usuario' } } } },
        responses: { '200': { description: 'Atualizado com sucesso' } },
      },
      delete: {
        summary: 'Deletar usuário',
        tags: ['Usuários'],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        responses: { '204': { description: 'Deletado com sucesso' } },
      },
    },

    // CURSOS
    '/api/courses': {
      get: {
        summary: 'Lista todos os cursos',
        tags: ['Cursos'],
        responses: { '200': { description: 'Sucesso' } },
      },
      post: {
        summary: 'Criar novo curso',
        tags: ['Cursos'],
        requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/Curso' } } } },
        responses: { '201': { description: 'Criado com sucesso' } },
      },
    },
    '/api/courses/{id}': {
      get: {
        summary: 'Obter curso por ID',
        tags: ['Cursos'],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        responses: { '200': { description: 'Sucesso' } },
      },
      put: {
        summary: 'Atualizar curso',
        tags: ['Cursos'],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/Curso' } } } },
        responses: { '200': { description: 'Atualizado com sucesso' } },
      },
      delete: {
        summary: 'Deletar curso',
        tags: ['Cursos'],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        responses: { '204': { description: 'Deletado com sucesso' } },
      },
    },

    // AULAS / LIÇÕES
    '/api/lessons': {
      get: {
        summary: 'Listar todas as aulas',
        tags: ['Aulas'],
        responses: { '200': { description: 'Sucesso' } },
      },
      post: {
        summary: 'Criar nova aula',
        tags: ['Aulas'],
        requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/Aula' } } } },
        responses: { '201': { description: 'Criado com sucesso' } },
      },
    },
    '/api/lessons/{id}': {
      get: {
        summary: 'Obter aula por ID',
        tags: ['Aulas'],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        responses: { '200': { description: 'Sucesso' } },
      },
      put: {
        summary: 'Atualizar aula',
        tags: ['Aulas'],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/Aula' } } } },
        responses: { '200': { description: 'Atualizado com sucesso' } },
      },
      delete: {
        summary: 'Deletar aula',
        tags: ['Aulas'],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        responses: { '204': { description: 'Deletado com sucesso' } },
      },
    },

    // IDEIAS
    '/api/ideas': {
      get: {
        summary: 'Listar todas as ideias',
        tags: ['Ideias'],
        responses: { '200': { description: 'Sucesso' } },
      },
      post: {
        summary: 'Criar nova ideia',
        tags: ['Ideias'],
        requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/Ideia' } } } },
        responses: { '201': { description: 'Criado com sucesso' } },
      },
    },
    '/api/ideas/{id}': {
      get: {
        summary: 'Obter ideia por ID',
        tags: ['Ideias'],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        responses: { '200': { description: 'Sucesso' } },
      },
      put: {
        summary: 'Atualizar ideia',
        tags: ['Ideias'],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/Ideia' } } } },
        responses: { '200': { description: 'Atualizado com sucesso' } },
      },
      delete: {
        summary: 'Deletar ideia',
        tags: ['Ideias'],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        responses: { '204': { description: 'Deletado com sucesso' } },
      },
    },
  },
};

export default function ApiDocs() {
  return (
    <div style={{ padding: '20px', backgroundColor: 'white', minHeight: '100vh' }}>
      <SwaggerUI spec={swaggerSpec} />
    </div>
  );
}