/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import JWT from "jsonwebtoken";
type user = {
	id: string;
	email: string;
	nome?: string;
};

export const Authorization = (req: Request, res: Response) => {
	const { token } = req.body;
	if (token) {
		const decoded: user | any = JWT.verify(
			token,
			process.env.JWT_SECRET as string
		);
		if (decoded) {
			res.json({
				user: {
					id: decoded.id,
					email: decoded.email,
					nome: decoded.nome,
				},
			});
		} else {
			res.json({ message: "Token inválido!" }).status(400);
		}
	}
};
