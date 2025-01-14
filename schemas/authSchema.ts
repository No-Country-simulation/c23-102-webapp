import * as z from "zod";

export const registerSchema = z
	.object({
		email: z.string().min(6, { message: "Mínimo 6 caracteres" }).email({ message: "El email no es válido." }),
		password: z.string().min(6, { message: "Mínimo 6 caracteres" }),
		passwordConfirmation: z.string(),
		roleId: z.number(),
	})
	.refine(
		(data) => {
			return data.password === data.passwordConfirmation;
		},
		{
			message: "Las contraseñas no coinciden.",
			path: ["passwordConfirmation"],
		}
	);