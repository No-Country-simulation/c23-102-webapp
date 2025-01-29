import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { RestaurantProfileDetailsType } from "@/types/RestaurantTypes";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { fullRestaurantDetailsSchema } from "@/schemas/authSchema";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { mocked_business_types } from "@/constants/mock/businessTypes";
import { SelectGroup, SelectValue } from "@radix-ui/react-select";
import { ImagePlus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { CreatePlatosFormData } from "@/schemas/platosSchema";

const RestaurantPlatosForm = () => {
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [isPending, startTransition] = useTransition();

	const form = useForm<CreatePlatosFormData>({
		resolver: zodResolver(fullRestaurantDetailsSchema),
		defaultValues: {
			name: " ",
			description: " ",
			coverImage: " ",
			price: " ",
			disponible: true,
		},
	});

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedFile(event.target.files?.[0] || null);
	};

	const onSubmit = (values: RestaurantProfileDetailsType) => {
		startTransition(async () => {
			try {
				const formData = new FormData();

				if (selectedFile) {
					formData.append("coverImage", selectedFile);
				}
				// User Data
				formData.append("name", values.name);
				formData.append("lastname", values.lastName);
				formData.append("phone", values.phone);
				// Restaurant Data
				formData.append("location", values.location);
				formData.append("locationName", values.locationName);
				formData.append("brand", values.brand);
				formData.append("category", values.category);

				// Display the values
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
										placeholder={"Burger"}
										type="text"
										className={`form-input-text ${form.formState.errors.name && "form-input-text-validation-error"}`}
										disabled={isPending}
									></Input>
								</FormControl>
							</FormItem>
						)}
					/>

					<Button type="submit" className="button-fill-primary mt-4" disabled={isPending}>
						Continuar
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
