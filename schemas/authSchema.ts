import * as z from "zod";

export const loginSchema = z.object({
	username: z.string().min(6, { message: "Mínimo 6 caracteres" }).email({ message: "El email no es válido." }),
	password: z.string().min(6, { message: "Mínimo 6 caracteres" }),
});
