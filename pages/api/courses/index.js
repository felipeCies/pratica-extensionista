import { createRouter } from "next-connect";
import { setCORS } from "models/controller";
import courses from "models/courses";

export default createRouter().use(setCORS).get(GET).post(POST).put(PUT).delete(DELETE).handler();

async function GET(_, res) {
  const coursesList = await courses.getAll();

  res.status(200).json(coursesList);
}
async function POST(req, res) {
  const { nome, descricao } = req.body;

  const newCourse = await courses.create(nome, descricao);
  
  res.status(201).json({ message: "Curso criado com sucesso", course: newCourse });
}
async function PUT(req, res) {
  const { id } = req.query; 
  const { nome, descricao } = req.body; 

  const updatedCourse = await courses.update(id, nome, descricao);
  
  res.status(200).json(updatedCourse);
}
async function DELETE(req, res) {
  const { id } = req.query; 

  const deletedCourse = await courses.remove(id);
  
  res.status(200).json({ message: "Curso deletado com sucesso", course: deletedCourse });
}