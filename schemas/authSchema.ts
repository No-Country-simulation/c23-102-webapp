import * as z from "zod";

// Authentication Schemas
export const loginSchema = z.object({
	email: z.string().email({ message: "El email no es válido." }),
	password: z.string().min(4, { message: "Mínimo 4 caracteres" }),
});

export const registerRestaurantSchema = z
	.object({
		location: z.string().min(3, { message: "Ingrese una dirección" }),
		locationName: z.string().min(3, { message: "Ingrese un nombre para su etablecimiento" }),
		brand: z.string(),
		category: z.string().min(3, { message: "Debes elegir un Tipo de Negocio" }),
		name: z.string().min(3, { message: "Ingrese su nombre" }),
		lastName: z.string().min(3, { message: "Ingrese su apellido" }),
		email: z.string().email({ message: "El email no es válido" }),
		password: z.string().min(4, { message: "Mínimo 4 caracteres" }),
		confirmPassword: z.string(),
		phone: z.string().min(8, { message: "Ingrese un numero de telefono" }),
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
		photo: z.any(),
		name: z.string().min(3, { message: "Ingrese su nombre" }),
		lastName: z.string().min(3, { message: "Ingrese su apellido" }),
		email: z.string().email({ message: "El email no es válido" }),
		password: z.string().min(4, { message: "Mínimo 4 caracteres" }),
		confirmPassword: z.string(),
		phone: z.string().min(8, { message: "Ingrese un numero de telefono valido" }),
		city: z.string().min(3, { message: "Ingrese una Ciudad" }),
		location: z.string().min(3, { message: "Ingrese una dirección" }),
		postalCode: z.string().min(3, { message: "Ingrese un código postal" }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Las contraseñas no coinciden",
		path: ["confirmPassword"],
	});

// CRUD Schemas
export const fullRestaurantDetailsSchema = z.object({
	location: z.string().min(3, { message: "Ingrese una dirección" }),
	locationName: z.string().min(3, { message: "Ingrese un nombre para su etablecimiento" }),
	brand: z.string(),
	category: z.string().min(3, { message: "Debes elegir un Tipo de Negocio" }),
	description: z.string(),
	coverImage: z.any(),
	name: z.string().min(3, { message: "Ingrese su nombre" }),
	lastName: z.string().min(3, { message: "Ingrese su apellido" }),
	phone: z.string().min(8, { message: "Ingrese un numero de telefono" }),
});

export const fullCLientDetailsSchema = z.object({
	photo: z.any(),
	name: z.string().min(3, { message: "Ingrese su nombre" }),
	lastName: z.string().min(3, { message: "Ingrese su apellido" }),
	phone: z.string().min(8, { message: "Ingrese un numero de telefono" }),
	location: z.string().min(3, { message: "Ingrese una dirección" }),
	city: z.string().min(3, { message: "Ingrese una Ciudad" }),
	postalCode: z.string().min(3, { message: "Ingrese un código postal" }),
});

// Authentication Schemas
export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterRestaurantFormData = z.infer<typeof registerRestaurantSchema>;
export type RegisterRestaurantProfileFormData = z.infer<typeof registerRestaurantProfileSchema>;
export type RegisterClientFormData = z.infer<typeof registerClientSchema>;

// CRUD Schemas
export type RestaurantEditFormData = z.infer<typeof fullRestaurantDetailsSchema>;
export type ClientEditFormData = z.infer<typeof fullCLientDetailsSchema>;
