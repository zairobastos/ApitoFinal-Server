import { Router } from "express";
import * as User from "../controller/usuario";
const router = Router();

router.post("/cadastrar", User.Usuario);
router.post("/login", User.Login);
router.get("/confirmar/:id", User.confirmarCadastro);

export default router;
