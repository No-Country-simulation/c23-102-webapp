"use client";

import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RegisterClientFormData, registerClientSchema } from "@/schemas/authSchema";
import { useRouter } from "next/navigation";
import { registerClient, registerUser } from "@/actions/authActions";
import { useUser } from "@/context/UserContext";
import { RESTAURANT_ROUTES } from "@/constants/routes";
import { USER_TYPES } from "@/constants/app_constants";
import { ImageUp } from "lucide-react";
import Image from "next/image";

const RegisterClientForm = () => {
	const router = useRouter();
	const { updateUser } = useUser();
	const [isPending, startTransition] = useTransition();
	const [selectedFile, setSelectedFile] = useState<File | null>(null);

	const form = useForm<RegisterClientFormData>({
		resolver: zodResolver(registerClientSchema),
		defaultValues: {
			photo: null,
			email: "",
			password: "",
			confirmPassword: "",
			name: "",
			lastName: "",
			phone: "",
			location: "",
			city: "",
			postalCode: "",
		},
	});

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedFile(event.target.files?.[0] || null);
	};

	const onSubmit = async (values: RegisterClientFormData) => {
		startTransition(async () => {
			// User Data
			const userFormData = new FormData();
			userFormData.append("role", USER_TYPES.CLIENT);
			userFormData.append("email", values.email);
			userFormData.append("password", values.password);
			userFormData.append("name", values.name);
			userFormData.append("lastname", values.lastName);
			userFormData.append("phone", values.phone);

			// Restaurant Data
			const clientFormData = new FormData();
			const clientCompleteName = values.name + " " + values.lastName;
			if (selectedFile) {
				clientFormData.append("photo", selectedFile);
			}
			clientFormData.append("city", values.city);
			clientFormData.append("location", values.location);
			clientFormData.append("completeName", clientCompleteName);
			clientFormData.append("email", values.email);

			registerUser(userFormData)
				.then((response) => {
					updateUser(response);
				})
				.then(() => {
					registerClient(clientFormData).then(() => {
						router.push(RESTAURANT_ROUTES.DASHBOARD);
					});
				})
				.catch((error) => {
					form.setError("root", {
						type: "manual",
						message: (error as Error).message,
					});
				});
		});
	};

	return (
		<Form {...form}>
			<form className="w-full forms-max-width" onSubmit={form.handleSubmit(onSubmit)}>
				{/* Cover Image */}
				<FormField
					name="photo"
					control={form.control}
					render={({}) => {
						const imageUrl = selectedFile && URL.createObjectURL(selectedFile);
						return (
							<FormItem className="w-full">
								<FormControl>
									<div className="relative rounded-full w-24 h-24 bg-[#fffffff1] m-auto mb-8">
										{imageUrl ? (
											<>
												<Image
													src={imageUrl}
													alt="Preview"
													width={0}
													height={0}
													className="object-cover w-full h-full rounded-full"
												/>
												<span className="absolute -bottom-1 -right-1 bg-[color:--primary-color] text-black rounded-full h-8 w-8 flex items-center justify-center cursor-pointer">
													<ImageUp></ImageUp>
												</span>
											</>
										) : (
											<>
												<span className="absolute -bottom-1 -right-1 bg-[color:--primary-color] text-black rounded-full h-8 w-8 flex items-center justify-center cursor-pointer">
													<ImageUp></ImageUp>
												</span>
											</>
										)}
										<Input
											type="file"
											className="w-full h-full absolute top-0 left-0 opacity-0 cursor-pointer"
											onChange={(e) => {
												handleFileChange(e);
											}}
											disabled={isPending}
										/>
									</div>
								</FormControl>
								<FormMessage className="form-message-validation-error" />
							</FormItem>
						);
					}}
				/>
				{/* Nombre y apellido */}
				<div className="w-full justify-between flex gap-4">
					<FormField
						name="name"
						control={form.control}
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>Nombre</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder={"John"}
										type="text"
										className={`form-input-text ${form.formState.errors.name && "form-input-text-validation-error"}`}
										disabled={isPending}
									></Input>
								</FormControl>
								<FormMessage className="form-message-validation-error" />
							</FormItem>
						)}
					/>
					{/* Apellido */}
					<FormField
						name="lastName"
						control={form.control}
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>Apellido</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder={"Doe"}
										type="text"
										className={`form-input-text ${
											form.formState.errors.lastName && "form-input-text-validation-error"
										}`}
										disabled={isPending}
									></Input>
								</FormControl>
								<FormMessage className="form-message-validation-error" />
							</FormItem>
						)}
					/>
				</div>
				{/* Direccion */}
				<div className="space-x-1 flex flex-col gap-3 items-center">
					<FormField
						name="location"
						control={form.control}
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>Direccion</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder={"Ferniche 1985"}
										type="text"
										className={`form-input-text ${
											form.formState.errors.location && "form-input-text-validation-error"
										}`}
										disabled={isPending}
									></Input>
								</FormControl>
								<FormMessage className="form-message-validation-error" />
							</FormItem>
						)}
					/>
					{/* Ciudad */}
					<FormField
						name="city"
						control={form.control}
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>Ciudad</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder={"Ciudad de Buenos Aires"}
										type="text"
										className={`form-input-text ${form.formState.errors.city && "form-input-text-validation-error"}`}
										disabled={isPending}
									></Input>
								</FormControl>
								<FormMessage className="form-message-validation-error" />
							</FormItem>
						)}
					/>
					{/* Postal Code */}
					<FormField
						name="postalCode"
						control={form.control}
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>Código Postal</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder={"1636"}
										type="text"
										className={`form-input-text ${
											form.formState.errors.postalCode && "form-input-text-validation-error"
										}`}
										disabled={isPending}
									></Input>
								</FormControl>
								<FormMessage className="form-message-validation-error" />
							</FormItem>
						)}
					/>
					{/* Email */}
					<FormField
						name="email"
						control={form.control}
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder={"johndoe@gmail.com"}
										type="email"
										className={`form-input-text ${form.formState.errors.email && "form-input-text-validation-error"}`}
										disabled={isPending}
									></Input>
								</FormControl>
								<FormMessage className="form-message-validation-error" />
							</FormItem>
						)}
					/>
					{/* Contraseña */}
					<FormField
						name="password"
						control={form.control}
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>Contraseña</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder={"******"}
										type="password"
										className={`form-input-text ${
											form.formState.errors.password && "form-input-text-validation-error"
										}`}
										autoComplete="off"
										disabled={isPending}
									></Input>
								</FormControl>
								<FormMessage className="form-message-validation-error" />
							</FormItem>
						)}
					/>
					{/* Confirmar contraseña */}
					<FormField
						name="confirmPassword"
						control={form.control}
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>Confirmar contraseña</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder={"******"}
										type="password"
										className={`form-input-text ${
											form.formState.errors.confirmPassword && "form-input-text-validation-error"
										}`}
										autoComplete="off"
										disabled={isPending}
									></Input>
								</FormControl>
								<FormMessage className="form-message-validation-error" />
							</FormItem>
						)}
					/>
					{/* Numero de telefono movil */}
					<FormField
						name="phone"
						control={form.control}
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>Teléfono</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder={"+54110000000"}
										type="text"
										className={`form-input-text ${form.formState.errors.phone && "form-input-text-validation-error"}`}
										disabled={isPending}
									></Input>
								</FormControl>
								<FormMessage className="form-message-validation-error" />
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

export default RegisterClientForm;
