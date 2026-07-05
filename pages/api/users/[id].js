import { createRouter } from "next-connect";
import users from "models/users";
import { setCORS } from "models/controller";

export default createRouter()
  .use(setCORS)
  .get(GET)
  .put(PUT)
  .delete(DELETE)
  .handler({
    onError: (err, _, res) => {
      res
        .status(400)
        .json({ error: err.message || "Erro ao processar requisição" });
    },
  });

async function GET(req, res) {
  const { id } = req.query;

  const user = await users.getById(id);
  res.status(200).json(user);
}

async function PUT(req, res) {
  const { id } = req.query;
  const { email, nome, senha } = req.body;

  const user = await users.update(id, email, nome, senha);
  res.status(200).json(user);
}

async function DELETE(req, res) {
  const { id } = req.query;

  const user = await users.remove(id);
  res.status(200).json({ message: "Usuário deletado com sucesso", user });
}