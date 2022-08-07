import { prisma } from "../../prisma";
import { Criptografia } from "../crypto";
import { emailConfirmacao } from "../emails/confirmarCadastro";

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
			.then((res) => {
				emailConfirmacao(nome, email, res.id);
				return res;
			})
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
	setAtivo: async (id: string) => {
		const usuario = await prisma.usuario
			.update({
				where: {
					id,
				},
				data: {
					ativo: true,
				},
			})
			.then(() => {
				return true;
			})
			.catch(() => {
				return false;
			});
		return usuario;
	},
};
