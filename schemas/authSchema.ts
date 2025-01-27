import * as z from "zod";

export const loginSchema = z.object({
	email: z.string().email({ message: "El email no es válido." }),
	password: z.string().min(4, { message: "Mínimo 4 caracteres" }),
});

export const registerRestaurantSchema = z
	.object({
		location: z.string().min(3, { message: "Ingrese una dirección" }),
		locationName: z.string().min(3, { message: "INgrese un nombre para su etablecimiento" }),
		brand: z.string(),
		category: z.string().min(3, { message: "Debes elegir un Tipo de Negocio" }),
		name: z.string().min(3, { message: "Ingrese su nombre" }),
		lastName: z.string().min(3, { message: "Ingrese su apellido" }),
		email: z.string().email({ message: "El email no es válido" }),
		password: z.string().min(4, { message: "Mínimo 4 caracteres" }),
		confirmPassword: z.string(),
		phone: z.string().min(8, { message: "Ingrese un numero de telefono valido" }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Las contraseñas no coinciden",
		path: ["confirmPassword"],
	});

export const registerRestaurantProfileSchema = z.object({
	coverImage: z.any(),
	description: z.string(),
});

export const registerClientSchema = z
	.object({
		name: z.string().min(3, { message: "Ingrese su nombre" }),
		lastName: z.string().min(3, { message: "Ingrese su apellido" }),
		email: z.string().email({ message: "El email no es válido" }),
		password: z.string().min(4, { message: "Mínimo 4 caracteres" }),
		confirmPassword: z.string(),
		phone: z.string().min(8, { message: "Ingrese un numero de telefono valido" }),
		city: z.string().min(3, { message: "Ingrese una Ciudad" }),
		location: z.string().min(3, { message: "Ingrese una dirección" }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Las contraseñas no coinciden",
		path: ["confirmPassword"],
	});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterRestaurantFormData = z.infer<typeof registerRestaurantSchema>;
export type RegisterRestaurantProfileFormData = z.infer<typeof registerRestaurantProfileSchema>;
export type RegisterClientFormData = z.infer<typeof registerClientSchema>;
