import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Davi",
      sobrenome: "Ramos",
      email: "davi.lima@ucsal.edu.br",
      idade: 21,
      peso: 70.0,
      altura: 1.72,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
