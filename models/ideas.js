import database from "models/database"; 
// Ou "models/database.js" se for o padrão que estão a usar

async function getAll() {
  const response = await database.query({
    query: `SELECT * FROM ideia;`,
  });
  return response.rows;
}

async function getById(id) {
  const response = await database.query({
    query: `SELECT * FROM ideia WHERE id = $1;`,
    values: [id],
  });
  return response.rows[0];
}

async function create(titulo, conteudo) {
  await database.query({
    query: `INSERT INTO ideia (titulo, conteudo) VALUES ($1, $2);`,
    values: [titulo, conteudo],
  });
  
  return { titulo, conteudo };
}

async function update(id, titulo, conteudo) {
  await database.query({
    query: `UPDATE ideia SET titulo = $1, conteudo = $2 WHERE id = $3;`,
    values: [titulo, conteudo, id],
  });
  
  return await getById(id);
}

async function remove(id) {
  const idea = await getById(id);
  
  await database.query({
    query: `DELETE FROM ideia WHERE id = $1;`,
    values: [id],
  });
  
  return idea;
}

const ideas = {
  getAll,
  getById,
  create,
  update,
  remove,
};

export default ideas;