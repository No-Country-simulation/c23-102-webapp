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


export const registerRestaurantProfileSchema = z.object({
	coverImage: z
		.custom<FileList>()
		.transform((file) => file.length > 0 && file.item(0))
		.refine((file) => !file || (!!file && file.size <= 10 * 1024 * 1024), {
			message: "Maximo 10MB por imagen. Intente nuevamente",
		})
		.refine((file) => !file || (!!file && file.type?.startsWith("image")), {
			message: "Solo archivos de tipo 'image'. Intente nuevamente",
		}),
	description: z.string(),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type RegisterRestaurantProfileFormData = z.infer<typeof registerRestaurantProfileSchema>;
