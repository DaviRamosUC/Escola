import User from "../models/User";

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ["id", "nome", "email"] }); // Retorna somente o Obj com estes atributos
      return res.json(users);
    } catch (e) {
      return res.status(404).json({
        errors: ["Ocorreu um erro"],
        Stack: e.message,
      });
    }
  }

  // Show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) throw new Error("Usuário não encontrado");
      const { id, nome, email } = user;
      return res.json({ id, nome, email }); // Retorna somente o Obj com estes atributos
    } catch (e) {
      return res.status(300).json(e.message);
    }
  }

  // Update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(404).json({
          errors: ["Usuário não existe"],
        });
      }
      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const id = req.userId;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({
          errors: ["Usuário não existe"],
        });
      }
      await user.destroy();
      return res.status(204).json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
