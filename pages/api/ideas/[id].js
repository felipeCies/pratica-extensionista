import { createRouter } from "next-connect";
import ideas from "models/ideas";
import { setCORS } from "models/controller";

export default createRouter()
  .use(setCORS)
  .get(GET)
  .put(PUT)
  .delete(DELETE) // Removido o .create() que estava sobrando
  .handler({
    onError: (error, __, res) => {
      console.error("Erro interno no [id].js:", error);
      res.status(500).json({ error: "Erro ao processar a requisição" });
    },
  });

/* =========================================
   ROTA GET: OBTER IDEIA POR ID
   ========================================= */
async function GET(req, res) {
  const { id } = req.query;

  const idea = await ideas.getById(id);
  
  if (!idea) {
    return res.status(404).json({ error: "Ideia não encontrada" });
  }

  res.status(200).json(idea);
}

/* =========================================
   ROTA PUT: ATUALIZAR IDEIA
   ========================================= */
async function PUT(req, res) {
  const { id } = req.query;
  // Ajustado para receber apenas os campos que a tabela de ideias realmente tem
  const { titulo, conteudo } = req.body; 

  const updatedIdea = await ideas.update(id, titulo, conteudo);
  res.status(200).json(updatedIdea);
}

/* =========================================
   ROTA DELETE: DELETAR IDEIA
   ========================================= */
async function DELETE(req, res) {
  const { id } = req.query;

  const deletedIdea = await ideas.remove(id);
  res.status(200).json({ message: "Ideia deletada com sucesso", idea: deletedIdea });
}