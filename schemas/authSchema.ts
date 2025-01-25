import * as z from "zod";

export const loginSchema = z.object({
	email: z.string().email({ message: "El email no es válido." }),
	password: z.string().min(6, { message: "Mínimo 6 caracteres" }),
});

export const registerSchema = z
	.object({
		location: z.string(),
		locationName: z.string(),
		brand: z.string(),
		category: z.string().min(2, { message: "Debes elegir un Tipo de Negocio" }),
		name: z.string(),
		lastName: z.string(),
		email: z.string().email({ message: "El email no es válido." }),
		password: z.string().min(6, { message: "Mínimo 6 caracteres" }),
		confirmPassword: z.string(),
		phone: z.string().min(6, { message: "Ingrese un numero de telefono valido." }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Las contraseñas no coinciden",
		path: ["confirmPassword"],
	});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
