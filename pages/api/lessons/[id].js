import { createRouter } from "next-connect";
import lessons from "models/lessons"; // Importação corrigida!
import { setCORS } from "models/controller";

export default createRouter()
  .use(setCORS)
  .get(GET)
  .put(PUT)
  .delete(DELETE)
  .handler({
    onError: (error, __, res) => {
      console.error("Erro interno no [id].js:", error);
      res.status(500).json({ error: "Erro ao processar a requisição" });
    },
  });

/* =========================================
   ROTA GET: OBTER AULA POR ID
   ========================================= */
async function GET(req, res) {
  const { id } = req.query;

  const lesson = await lessons.getById(id); // Chamando o banco de aulas
  
  if (!lesson) {
    return res.status(404).json({ error: "Aula não encontrada" });
  }

  res.status(200).json(lesson);
}

/* =========================================
   ROTA PUT: ATUALIZAR AULA
   ========================================= */
async function PUT(req, res) {
  const { id } = req.query;
  // Campos específicos de uma aula
  const { curso_id, titulo, video_url, texto_explicativo } = req.body;

  const updatedLesson = await lessons.update(id, curso_id, titulo, video_url, texto_explicativo);
  res.status(200).json(updatedLesson);
}

/* =========================================
   ROTA DELETE: DELETAR AULA
   ========================================= */
async function DELETE(req, res) {
  const { id } = req.query;

  const deletedLesson = await lessons.remove(id);
  res.status(200).json({ message: "Aula deletada com sucesso", lesson: deletedLesson });
}