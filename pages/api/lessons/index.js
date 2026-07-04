import { createRouter } from "next-connect";
import lessons from "models/lessons";
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
  const { course_id } = req.query;

  if (course_id) {
    const courseLessons = await lessons.getByCourseId(course_id);
    return res.status(200).json(courseLessons || []);
  }

  const allLessons = await lessons.getAll();
  return res.status(200).json(allLessons || []);
}

async function POST(req, res) {
  const { curso_id, titulo, video_url, texto_explicativo } = req.body;

  const newLesson = await lessons.create(curso_id, titulo, video_url, texto_explicativo);
  
  res.status(201).json({ message: "Aula criada com sucesso", lesson: newLesson });
}