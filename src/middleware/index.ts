import { Request, Response, NextFunction } from "express";

export const Auth = {
	login: (req: Request, res: Response, next: NextFunction) => {
		const sucess = true;
		if (sucess) {
			next();
		} else {
			res.status(401).send("Acesso negado");
		}
	},
};
