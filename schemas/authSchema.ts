import * as z from "zod";

export const loginSchema = z.object({
	username: z.string().min(6, { message: "Mínimo 6 caracteres" }).email({ message: "El email no es válido." }),
	password: z.string().min(6, { message: "Mínimo 6 caracteres" }),
});


export const registerSchema = z.object({
  location: z.string().min(5, "La dirección del establecimiento debe tener al menos 5 caracteres"),
  establishmentName: z.string().min(3, "El nombre del establecimiento debe tener al menos 3 caracteres"),
  brandName: z.string().min(3, "El nombre de la marca debe tener al menos 3 caracteres"),
  businessType: z.string().min(1, "Debes seleccionar un tipo de negocio"),
  firstName: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  lastName: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
  email: z.string().email("El correo electrónico no es válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  confirmPassword: z.string().min(6, "La contraseña de confirmación debe tener al menos 6 caracteres"),
  phone: z.string().regex(/^\d{10}$/, "El número de teléfono debe ser de 10 dígitos").optional(),
  countryCode: z.string().min(1, "Debes seleccionar un código de país"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});
