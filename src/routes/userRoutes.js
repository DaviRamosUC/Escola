import { Router } from "express";

import userController from "../controllers/UserController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// Meramente ilustrativo
router.get("/", userController.index); // Lista todos os usuários
router.get("/:id", userController.show); // Lista usuário

// Rotas reais
router.post("/", userController.store); // Rota aberta
router.put("/", loginRequired, userController.update); // Precisa de login
router.delete("/", loginRequired, userController.delete); // Precisa de login

export default router;

/*
 * index -> lista todos os usuários -> GET
 * store/create -> cria um novo usuário -> POST
 * delete -> apaga um usuário -> DELETE
 * show -> mostra um usuário -> GET
 * update -> atualiza um usuário -> PATCH (altera apenas um dado) ou PUT
 */
