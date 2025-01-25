"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RegisterFormData, registerSchema } from "@/schemas/authSchema";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { mocked_business_types } from "@/constants/mock/businessTypes";
import { SelectGroup } from "@radix-ui/react-select";

const RegisterForm = () => {
	const [formData, setFormData] = useState({});

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

	const onSubmit = (values: RegisterFormData) => {
		setFormData(values);
		console.log(values);
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
									<Input {...field} placeholder={"Ferniche 1985"} type="text" className="form-input-text"></Input>
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
									<Input {...field} placeholder={"Pizza Hub"} type="text" className="form-input-text"></Input>
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
									<Input {...field} placeholder={"Brews"} type="text" className="form-input-text"></Input>
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
								<Select {...field}>
									<SelectTrigger className="form-input-text">
										<h2>Tipo de Negocio</h2>
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											{mocked_business_types.map((business) => (
												<SelectItem key={business.id} value={business.businessType as string}>
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
										<Input {...field} placeholder={"John"} type="text" className="form-input-text"></Input>
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
										<Input {...field} placeholder={"Doe"} type="text" className="form-input-text"></Input>
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
									<Input {...field} placeholder={"johndoe@gmail.com"} type="email" className="form-input-text"></Input>
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
										className="form-input-text"
										autoComplete="off"
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
										className="form-input-text"
										autoComplete="off"
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
									<Input {...field} placeholder={"+54110000000"} type="text" className="form-input-text"></Input>
								</FormControl>
								<FormMessage className="form-message-validation-error" />
							</FormItem>
						)}
					/>
					<Button type="submit" className="button-fill-primary mt-4">
						Continuar
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default RegisterForm;
