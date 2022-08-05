import { prisma } from "../../prisma";
import { Criptografia } from "../crypto";

export type Usuario = {
	nome: string;
	email: string;
	senha: string;
	imagem: string;
};

export const User = {
	setUser: async ({ nome, email, senha, imagem }: Usuario) => {
		const cad = await prisma.usuario
			.create({
				data: {
					nome,
					email,
					senha: Criptografia(senha),
					imagem,
				},
			})
			.then((res) => res)
			.catch((err) => err);
		return cad;
	},
	seacherEmail: async (email: string) => {
		const user = await prisma.usuario
			.findFirst({
				where: {
					email,
				},
			})
			.then((res) => res)
			.catch((err) => err);
		return user;
	},
};
