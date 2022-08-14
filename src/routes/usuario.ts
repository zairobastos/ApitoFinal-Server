import { Router } from "express";
import * as User from "../controller/usuario";
const router = Router();

router.post("/cadastrar", User.Usuario);
router.post("/login", User.Login);
router.get("/confirmar/:id", User.confirmarCadastro);
router.post("/possuiImagem", User.getImagem);
router.delete("/deleteUser/:id", User.deleteUser);

export default router;
