"use client";

import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RegisterFormData, registerSchema } from "@/schemas/authSchema";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { mocked_business_types } from "@/constants/mock/businessTypes";
import { SelectGroup, SelectValue } from "@radix-ui/react-select";
import { useRouter } from "next/navigation";
import { registerRestaurant, registerUser } from "@/actions/authActions";
import { useUser } from "@/context/UserContext";
import { PLATFORM_ROUTES } from "@/constants/routes";

const RegisterForm = () => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	const { updateUser } = useUser();

	const form = useForm<RegisterFormData>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			location: "",
			locationName: "",
			brand: "",
			category: "",
			email: "",
			password: "",
			confirmPassword: "",
			name: "",
			lastName: "",
			phone: "",
		},
	});

	const onSubmit = async (values: RegisterFormData) => {
		startTransition(async () => {
			// User Data
			const userFormData = new FormData();
			userFormData.append("email", values.email);
			userFormData.append("password", values.password);
			userFormData.append("name", values.name);
			userFormData.append("lastname", values.lastName);
			userFormData.append("phone", values.phone);

			// Restaurant Data
			const restaurantFormData = new FormData();
			restaurantFormData.append("location", values.location);
			restaurantFormData.append("locationName", values.locationName);
			restaurantFormData.append("brand", values.brand);
			restaurantFormData.append("category", values.category);
			restaurantFormData.append("email", values.email);

			registerUser(userFormData)
				.then((response) => {
					updateUser(response);
				})
				.then(() => {
					registerRestaurant(restaurantFormData).then(() => {
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
			<form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
				{/* Direccion del establecimiento */}
				<div className="space-x-1 flex flex-col gap-4 items-center">
					<FormField
						name="location"
						control={form.control}
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>Direccion del establecimiento</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder={"Ferniche 1985"}
										type="text"
										className="form-input-text"
										disabled={isPending}
									></Input>
								</FormControl>
							</FormItem>
						)}
					/>
					{/* Nombre del establecimiento */}
					<FormField
						name="locationName"
						control={form.control}
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>Nombre del establecimiento</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder={"Pizza Hub"}
										type="text"
										className="form-input-text"
										disabled={isPending}
									></Input>
								</FormControl>
							</FormItem>
						)}
					/>
					{/* Nombre de marca */}
					<FormField
						name="brand"
						control={form.control}
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>Nombre de marca</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder={"Brews"}
										type="text"
										className="form-input-text"
										disabled={isPending}
									></Input>
								</FormControl>
							</FormItem>
						)}
					/>
					{/* Tipo de negocio */}
					<FormField
						name="category"
						control={form.control}
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>Tipo de Negocio</FormLabel>
								<Select
									{...field}
									onValueChange={(value) => field.onChange(value)} // Conectar onValueChange
									defaultValue={field.value} // Asegurarte de que el valor inicial sea respetado
									disabled={isPending}
								>
									<SelectTrigger
										className={`form-input-text ${
											form.formState.errors.category && "form-input-text-validation-error"
										}`}
									>
										<SelectValue placeholder="Tipo de Negocio" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											{mocked_business_types.map((business) => (
												<SelectItem key={business.id} value={String(business.businessType)}>
													{business.businessType}
												</SelectItem>
											))}
										</SelectGroup>
									</SelectContent>
								</Select>
								<FormMessage className="form-message-validation-error" />
							</FormItem>
						)}
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
											className="form-input-text"
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
											className="form-input-text"
											disabled={isPending}
										></Input>
									</FormControl>
								</FormItem>
							)}
						/>
					</div>
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
										className={`form-input-text ${form.formState.errors.email && "form-input-text-validation-error"}`}
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
										className={`form-input-text ${form.formState.errors.email && "form-input-text-validation-error"}`}
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
										className={`form-input-text ${form.formState.errors.email && "form-input-text-validation-error"}`}
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
				</div>
			</form>
		</Form>
	);
};

export default RegisterForm;

