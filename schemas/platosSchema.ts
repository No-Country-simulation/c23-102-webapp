import * as z from "zod";

export const platosCreateSchema = z.object({
	name: z.string().min(1, { message: "Ingrese un nombre" }),
	description: z.string().min(3, { message: "Ingrese una descripcion del producto" }),
	coverImage: z.any(),
	price: z.number().refine((n) => n > 0, {
		message: "Debe ingresar un precio",
	}),
	disponible: z.string().min(1, { message: "Debe elegir un estado: Disponible, Borrador" }),
});

export type CreatePlatosFormData = z.infer<typeof platosCreateSchema>;
