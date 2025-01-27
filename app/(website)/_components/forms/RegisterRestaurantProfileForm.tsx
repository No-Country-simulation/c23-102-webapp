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
import { PLATFORM_ROUTES, WEBSITE_ROUTES } from "@/constants/routes";
import Link from "next/link";

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

				// Display the values
				for (const value of formData.values()) {
					console.log(value);
				}

				router.push(PLATFORM_ROUTES.DASHBOARD);
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
						<Link className="w-full" href={PLATFORM_ROUTES.DASHBOARD}>
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
