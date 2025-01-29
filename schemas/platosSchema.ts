import * as z from "zod";

export const platosCreateSchema = z.object({
	name: z.string().min(1, { message: "Ingrese un nombre" }),
	description: z.string().min(3, { message: "Ingrese un nombre" }),
	coverImage: z.any(),
	price: z.string().min(1, { message: "Ingrese un nombre" }),
	disponible: z.boolean(),
});

export type CreatePlatosFormData = z.infer<typeof platosCreateSchema>;
