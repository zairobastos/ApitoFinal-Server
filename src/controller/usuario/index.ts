import { Request, Response } from "express";
import { Criptografia } from "../../models/crypto";
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

export const Login = async (req: Request, res: Response) => {
	const { email, senha } = req.body;
	const user = await User.seacherEmail(email);
	if (user) {
		if (user.ativo === false) {
			res.status(400).json({
				message: "Ative a sua conta, para poder fazer login",
			});
		} else if (user.ativo === true) {
			if (user.senha === Criptografia(senha)) {
				res.status(200).json({
					message: "Usuário logado com sucesso",
				});
			} else {
				res.status(400).json({
					message: "Dados incorretos",
				});
			}
		}
	} else {
		res.status(400).json({
			message: "Usuário não cadastrado",
		});
	}
};

export const confirmarCadastro = async (req: Request, res: Response) => {
	const { id } = req.params;
	const usuario = await User.setAtivo(id);
	usuario
		? res.status(200).send(res.redirect("http://localhost:5173/login"))
		: res.status(400).send({ message: "Erro ao confirmar usuário!" });
};
