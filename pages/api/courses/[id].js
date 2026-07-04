import { createRouter } from "next-connect";
import { setCORS } from "models/controller";
import courses from "models/courses";

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
  console.log(id)

  

  const course = await courses.getById(id);
  console.log(course)
  res.status(200).json(course);
  
}

async function PUT(req, res) {
  const { id } = req.query;
  const { nome, descricao } = req.body;

  const course = await courses.update(id, nome, descricao);
  res.status(200).json(course);
}

async function DELETE(req, res) {
  const { id } = req.query;

  const course = await courses.remove(id);
  res.status(200).json({ message: "Curso deletado com sucesso", course });
}