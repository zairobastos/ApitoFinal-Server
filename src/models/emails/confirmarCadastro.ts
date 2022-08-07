import nodemailer from "nodemailer";
import "dotenv/config";

export const emailConfirmacao = (nome: string, email: string, id: string) => {
	const transport = nodemailer.createTransport({
		host: process.env.EMAIL_HOST,
		port: 465,
		secure: true,
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	});
	transport.sendMail(
		{
			from: "Equipe Apito Final",
			to: `${nome} <${email}>`,
			subject: "Bem vindo ao Apito Final",
			html: `
			<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
				<html>
					<body>
						<h1 class="esd-text">Olá ${nome}, seja bem vindo(a) ao Apito Final!</h1>
						<h3 class="esd-text">Obrigado(a) por inscrever-se em nosso site</h3>
						<a href="http://localhost:3333/usuario/confirmar/${id}"> Confirme seu cadastro</a>
					</body>
				</html>`,
		},
		(err) => {
			if (err) {
				console.log(err);
			} else {
				console.log("Email enviado com sucesso!");
			}
		}
	);
};
