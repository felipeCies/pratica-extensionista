import database from "models/database.js"; 

async function getAll() {
  const response = await database.query({
    query: `SELECT * FROM aula;`,
  });
  return response.rows;
}

async function getByCourseId(courseId) {
  const response = await database.query({
    query: `SELECT * FROM aula WHERE curso_id = $1;`,
    values: [courseId],
  });
  return response.rows;
}


async function getById(id) {
  const response = await database.query({
    query: `SELECT * FROM aula WHERE id = $1;`,
    values: [id],
  });
  return response.rows[0];
}

async function create(curso_id, titulo, video_url, texto_explicativo) {
  await database.query({
    query: `INSERT INTO aula (curso_id, titulo, video_url, texto_explicativo) VALUES ($1, $2, $3, $4);`,
    values: [curso_id, titulo, video_url, texto_explicativo],
  });
  
  return { curso_id, titulo, video_url, texto_explicativo };
}


async function update(id, curso_id, titulo, video_url, texto_explicativo) {
  await database.query({
    query: `UPDATE aula SET curso_id = $1, titulo = $2, video_url = $3, texto_explicativo = $4 WHERE id = $5;`,
    values: [curso_id, titulo, video_url, texto_explicativo, id],
  });
  
  return await getById(id);
}

async function remove(id) {
  const lesson = await getById(id);
  
  await database.query({
    query: `DELETE FROM aula WHERE id = $1;`,
    values: [id],
  });
  
  return lesson;
}


const lessons = {
  getAll,
  getByCourseId,
  getById,
  create,
  update,
  remove,
};

export default lessons;