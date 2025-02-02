"use client";

import React, { useTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RegisterRestaurantProfileFormData, registerRestaurantProfileSchema } from "@/schemas/authSchema";
import { Textarea } from "@/components/ui/textarea";
import { ImagePlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { RESTAURANT_ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

const RegisterRestaurantProfileForm = () => {
	const router = useRouter();
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [isPending, startTransition] = useTransition();

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedFile(event.target.files?.[0] || null);
	};

	const form = useForm<RegisterRestaurantProfileFormData>({
		resolver: zodResolver(registerRestaurantProfileSchema),
		defaultValues: { coverImage: null, description: "" },
	});

	const onSubmit = async (values: RegisterRestaurantProfileFormData) => {
		startTransition(async () => {
			try {
				const formData = new FormData();
				if (selectedFile) {
					formData.append("coverImage", selectedFile);
				}
				formData.append("description", values.description);
				router.push(RESTAURANT_ROUTES.DASHBOARD);
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
				<div className="flex flex-col gap-8 items-center">
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
											<div className="relative w-full h-[25rem] flex items-center justify-center bg-gray-900">
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
										rows={6}
										disabled={isPending}
									></Textarea>
								</FormControl>
								<FormMessage className="form-message-validation-error" />
							</FormItem>
						)}
					/>
					<div className="flex flex-row gap-6 items-center justify-between w-full mt-5">
						<Button type="submit" className="button-fill-primary" disabled={isPending}>
							Finalizar
						</Button>
						<Link className="w-full" href={RESTAURANT_ROUTES.DASHBOARD}>
							<Button className="button-outline">Omitir</Button>
						</Link>
					</div>
					{form.formState.errors.root && (
						<FormMessage className="form-response-error ">{form.formState.errors.root.message}</FormMessage>
					)}
				</div>
			</form>
		</Form>
	);
};

export default RegisterRestaurantProfileForm;
