import { Router } from "express";
import * as User from "../controller/usuario";
import { Auth } from "../middleware";
const router = Router();

router.post("/cadastrar", User.Usuario);
router.post("/login", Auth.login, User.Login);
router.get("/confirmar/:id", User.confirmarCadastro);

export default router;
