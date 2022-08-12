import express from "express";
import "dotenv/config";
import cors from "cors";

import usuario from "./routes/usuario";
import authRoutes from "./routes/auth";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/usuario", usuario);
app.use("/auth", authRoutes);

app.listen(process.env.PORT, () => {
	console.log("Servidor está rodando!");
});
