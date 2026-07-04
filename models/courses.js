import database from "models/database";

async function getAll() {
  const courses = await runSelectQuery();

  return courses;

  async function runSelectQuery() {
    const response = await database.query({
      query: `
        SELECT
          *
        FROM
          curso
      ;`,
    });

    return response.rows;
  }
}
async function getById(id) {
  const courses = await runSelectQuery();

  return courses;

  async function runSelectQuery() {
    const response = await database.query({
      query: `
        SELECT
          *
        FROM
          curso
            WHERE
             id = $1
      ;`,
      values: [id]
    }
  );

    return response.rows;
  }
}

async function create(nome, descricao) {
  await database.query({
    query: `INSERT INTO curso (nome, descricao) VALUES ($1, $2);`,
    values: [nome, descricao],
  });
  
  return { nome, descricao }; 
}

async function update(id, nome, descricao) {
  await database.query({
    query: `UPDATE curso SET nome = $1, descricao = $2 WHERE id = $3;`,
    values: [nome, descricao, id],
  });
  
  return await getById(id); 
}

async function remove(id) {
  const course = await getById(id); 
  
  await database.query({
    query: `DELETE FROM curso WHERE id = $1;`,
    values: [id],
  });
  
  return course; 
}

const courses = {
  getAll, getById, create, update, remove
};

export default courses;
