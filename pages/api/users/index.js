import { createRouter } from "next-connect";
import users from "models/users";
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
  const allUsers = await users.getAll(); 
  
  res.status(200).json(allUsers || []);
}

async function POST(req, res) {
  const { email, nome, senha } = req.body;

  const newUser = await users.create(email, nome, senha);
  res.status(201).json({ message: "Criado com sucesso", user: newUser })
}