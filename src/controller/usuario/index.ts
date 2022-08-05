import { Request, Response } from "express";
import { User } from "../../models/usuario";

export const Usuario = async (req: Request, res: Response) => {
	const { nome, email, senha, imagem } = req.body;
	const emailUser = await User.seacherEmail(email);
	if (emailUser) {
		res.status(400).json({
			message: "E-mail já cadastrado",
		});
	} else {
		const user = await User.setUser({ nome, email, senha, imagem });
		user
			? res
					.status(200)
					.json({ message: "Usuário cadastrado com sucesso" })
			: res.status(400).json({ message: "Erro ao cadastrar usuário" });
	}
};
