import { Router } from "express";
import * as Auth from "../controller/authorization";

const router = Router();

router.post("/verifyToken", Auth.Authorization);

export default router;
