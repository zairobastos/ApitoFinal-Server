import { Router } from "express";
import * as User from "../controller/usuario";
const router = Router();

router.post("/cadastrar", User.Usuario);

export default router;
