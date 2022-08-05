import CryptoJS from "crypto-js";

export const Criptografia = (senha: string) => {
	const crypto = CryptoJS.SHA256(senha);
	return crypto.toString(CryptoJS.enc.Base64);
};
