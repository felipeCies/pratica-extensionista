import { createRouter } from "next-connect";
import ideas from "models/ideas";
import { setCORS } from "models/controller";

export default createRouter()
  .use(setCORS)
  .get(GET)
  .post(POST) 
  .handler({
    onError: (error, __, res) => {
      console.error("Erro interno:", error);
      res.status(500).json({ error: "Erro ao processar requisição" });
    },
  });


async function GET(req, res) {

  const allIdeas = await ideas.getAll();
  res.status(200).json(allIdeas || []);
}

async function POST(req, res) {
  const { titulo, conteudo } = req.body;

  const newIdea = await ideas.create(titulo, conteudo);
  

  res.status(201).json({ message: "Ideia criada com sucesso", idea: newIdea });
}