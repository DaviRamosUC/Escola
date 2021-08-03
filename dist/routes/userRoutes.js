"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Meramente ilustrativo
// router.get("/", userController.index); // Lista todos os usuários
// router.get("/:id", userController.show); // Lista usuário

// Rotas reais
router.post('/', _loginRequired2.default, _UserController2.default.store); // Rota aberta
router.put('/', _loginRequired2.default, _UserController2.default.update); // Precisa de login
router.delete('/', _loginRequired2.default, _UserController2.default.delete); // Precisa de login

exports. default = router;

/*
 * index -> lista todos os usuários -> GET
 * store/create -> cria um novo usuário -> POST
 * delete -> apaga um usuário -> DELETE
 * show -> mostra um usuário -> GET
 * update -> atualiza um usuário -> PATCH (altera apenas um dado) ou PUT
 */
