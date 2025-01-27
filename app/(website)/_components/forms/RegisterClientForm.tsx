"use client";

import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RegisterClientFormData, registerClientSchema } from "@/schemas/authSchema";
import { useRouter } from "next/navigation";
import { registerClient, registerUser } from "@/actions/authActions";
import { useUser } from "@/context/UserContext";
import { PLATFORM_ROUTES } from "@/constants/routes";

const RegisterClientForm = () => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	const { updateUser } = useUser();

	const form = useForm<RegisterClientFormData>({
		resolver: zodResolver(registerClientSchema),
		defaultValues: {
			email: "",
			password: "",
			confirmPassword: "",
			name: "",
			lastName: "",
			phone: "",
			location: "",
			city: "",
		},
	});

	const onSubmit = async (values: RegisterClientFormData) => {
		startTransition(async () => {
			// User Data
			const userFormData = new FormData();
			userFormData.append("email", values.email);
			userFormData.append("password", values.password);
			userFormData.append("name", values.name);
			userFormData.append("lastname", values.lastName);
			userFormData.append("phone", values.phone);

			// Restaurant Data
			const clientFormData = new FormData();
			const clientCompleteName = values.name + " " + values.lastName;
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
						router.push(PLATFORM_ROUTES.DASHBOARD);
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
										className={`form-input-text ${form.formState.errors.email && "form-input-text-validation-error"}`}
										disabled={isPending}
									></Input>
								</FormControl>
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
										className={`form-input-text ${form.formState.errors.email && "form-input-text-validation-error"}`}
										disabled={isPending}
									></Input>
								</FormControl>
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
										className={`form-input-text ${form.formState.errors.email && "form-input-text-validation-error"}`}
										disabled={isPending}
									></Input>
								</FormControl>
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
										className={`form-input-text ${form.formState.errors.email && "form-input-text-validation-error"}`}
										disabled={isPending}
									></Input>
								</FormControl>
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
