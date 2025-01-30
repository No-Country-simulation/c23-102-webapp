import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImagePlus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { CreatePlatosFormData, platosCreateSchema } from "@/schemas/platosSchema";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";

const RestaurantPlatosForm = () => {
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [isPending, startTransition] = useTransition();

	const form = useForm<CreatePlatosFormData>({
		resolver: zodResolver(platosCreateSchema),
		defaultValues: {
			name: "",
			description: "",
			coverImage: "",
			price: "",
			disponible: "",
		},
	});

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedFile(event.target.files?.[0] || null);
	};

	const onSubmit = (values: CreatePlatosFormData) => {
		startTransition(async () => {
			try {
				const formData = new FormData();

				if (selectedFile) {
					formData.append("coverImage", selectedFile);
				}

				// Convertir disponible (string) a booleano
				const isDisponible = values.disponible === "disponible";

				formData.append("name", values.name);
				formData.append("description", values.description);
				formData.append("price", String(values.price));
				formData.append("disponible", String(isDisponible));

				for (const value of formData.values()) {
					console.log(value);
				}
			} catch (error) {
				form.setError("root", {
					type: "manual",
					message: (error as Error).message,
				});
			}
		});
	};

	return (
		<Form {...form}>
			<form className="w-full forms-max-width" onSubmit={form.handleSubmit(onSubmit)}>
				<div className="space-x-1 flex flex-col gap-3 items-center">
					{/* Image */}
					<FormField
						name="coverImage"
						control={form.control}
						render={({}) => {
							const imageUrl = selectedFile && URL.createObjectURL(selectedFile);
							return (
								<FormItem className="w-full">
									<FormControl>
										<div className="flex flex-col gap-3 w-full mb-10">
											{/* Contenedor de la imagen */}
											<div className="relative w-full h-[15rem] flex items-center justify-center bg-gray-900">
												{imageUrl ? (
													<Image
														src={imageUrl}
														alt="Preview"
														width={0}
														height={0}
														className="rounded-lg object-cover w-full h-full"
													/>
												) : (
													<div className="text-gray-400 flex flex-col items-center">
														<ImagePlus width={40} height={40} />
														<span className="text-sm">Añade una imagen</span>
													</div>
												)}
											</div>

											{/* Botón e Input Oculto */}
											<div className="relative lg:w-[500px] md:w-[400px] md:m-auto">
												<Button className="w-full button-outline">
													{selectedFile ? selectedFile.name : "Seleccionar Imagen"}
												</Button>
												<Input
													type="file"
													className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
													onChange={handleFileChange}
													disabled={isPending}
												/>
											</div>
										</div>
									</FormControl>
									<FormMessage className="form-message-validation-error" />
								</FormItem>
							);
						}}
					/>
					{/* Nombre Plato */}
					<FormField
						name="name"
						control={form.control}
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>Nombre del Plato</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder={"Burger"}
										type="text"
										className={`form-input-text ${form.formState.errors.name && "form-input-text-validation-error"}`}
										disabled={isPending}
									></Input>
								</FormControl>
								<FormMessage className="form-message-validation-error" />
							</FormItem>
						)}
					/>
					{/* Description */}
					<FormField
						name="description"
						control={form.control}
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>Descripción</FormLabel>
								<FormControl>
									<Textarea
										{...field}
										placeholder={"Descripcion de tu emprendimiento..."}
										className={`form-input-textarea ${
											form.formState.errors.description && "form-input-text-validation-error text-red-600"
										}`}
										rows={4}
										disabled={isPending}
									></Textarea>
								</FormControl>
								<FormMessage className="form-message-validation-error" />
							</FormItem>
						)}
					/>
					{/* Precio */}
					<FormField
						name="price"
						control={form.control}
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>Precio</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder={"15.99"}
										type="text"
										pattern="[0-9]+([\.,][0-9]+)?"
										className={`form-input-text ${form.formState.errors.price && "form-input-text-validation-error"}`}
										disabled={isPending}
									></Input>
								</FormControl>
								<FormMessage className="form-message-validation-error" />
							</FormItem>
						)}
					/>
					{/* Status */}
					{/* Tipo de negocio */}
					<FormField
						name="disponible"
						control={form.control}
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>Estado</FormLabel>
								<Select
									value={field.value} // Asegura que el valor sea manejado correctamente
									onValueChange={(value) => field.onChange(value)} // Guarda el string directamente
									disabled={isPending}
								>
									<SelectTrigger
										className={`form-input-text ${
											form.formState.errors.disponible && "form-input-text-validation-error"
										}`}
									>
										<SelectValue placeholder="Estado" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectItem value={"disponible"}>Disponible</SelectItem>
											<SelectItem value={"borrador"}>Borrador</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
								<FormMessage className="form-message-validation-error" />
							</FormItem>
						)}
					/>
					<Button type="submit" className="button-fill-primary mt-4" disabled={isPending}>
						Crear
					</Button>
					{form.formState.errors.root && (
						<FormMessage className="form-response-error ">{form.formState.errors.root.message}</FormMessage>
					)}
				</div>
			</form>
		</Form>
	);
};

export default RestaurantPlatosForm;
