import database from "models/database.js";

async function getAll() {
  const response = await database.query({
    query: `SELECT * FROM usuario;`,
  });
  return response.rows; 
}

async function getById(id) {
  const response = await database.query({
    query: `SELECT * FROM usuario WHERE id = $1;`,
    values: [id],
  });
  return response.rows[0]; 
}

async function getByEmail(email) {
  const response = await database.query({
    query: `SELECT * FROM usuario WHERE email = $1;`,
    values: [email],
  });
  
  const user = response.rows[0];
  if (!user) throw Error("Credenciais incorretas");
  
  return user;
}

async function create(email, nome, senha) {
  await database.query({
    query: `INSERT INTO usuario (email, nome, senha) VALUES ($1, $2, $3);`,
    values: [email, nome, senha],
  });
  

  return { email, nome }; 
}

async function update(id, email, nome, senha) {
  await database.query({
    query: `UPDATE usuario SET email = $1, nome = $2, senha = $3 WHERE id = $4;`,
    values: [email, nome, senha, id],
  });
  
  return await getById(id); 
}

async function remove(id) {
  const user = await getById(id); 
  
  await database.query({
    query: `DELETE FROM usuario WHERE id = $1;`,
    values: [id],
  });
  
  return user; 
}

const users = {
  getAll,
  getById,
  getByEmail,
  create,
  update,
  remove,
};

export default users;