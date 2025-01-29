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

const RestaurantPlatosForm = () => {
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [isPending, startTransition] = useTransition();

	const form = useForm<CreatePlatosFormData>({
		resolver: zodResolver(platosCreateSchema),
		defaultValues: {
			name: "",
			description: "",
			coverImage: "",
			price: 0,
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
							return (
								<FormItem className="w-full">
									<FormControl>
										<div className="relative rounded-lg flex flex-col items-center gap-5 p-8 cursor-pointer bg-[#1a1a1a]">
											<ImagePlus width={50} height={50} />
											<h3 className="text-center text-gray-500">
												Añade una foto de tu restaurante desde tu computadora
											</h3>
											<Input
												type="file"
												className="w-full h-full absolute top-0 left-0 opacity-0 "
												onChange={(e) => {
													handleFileChange(e);
												}}
												disabled={isPending}
											/>
											<Button className="button-input w-[75%]">
												{selectedFile ? selectedFile.name : "Añadir Imagen"}
											</Button>
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
										type="number"
										className={`form-input-text ${form.formState.errors.name && "form-input-text-validation-error"}`}
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
