"use client";

import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ClientEditFormData, fullCLientDetailsSchema, RegisterClientFormData } from "@/schemas/authSchema";
import { useUser } from "@/context/UserContext";
import { ClientProfileDetailsResponse } from "@/types/ClientTypes";

const ClientProfileForm = ({ initialData }: { initialData: ClientProfileDetailsResponse }) => {
	const [isPending, startTransition] = useTransition();
	const { updateUser } = useUser();

	const splitName = initialData.fullName.split(" ");
	const form = useForm<ClientEditFormData>({
		resolver: zodResolver(fullCLientDetailsSchema),
		defaultValues: {
			name: splitName[0] || "",
			lastName: splitName[1] || "",
			phone: initialData.phone || "",
			location: initialData.location || "",
			city: initialData.city || "",
		},
	});

	const onSubmit = async (values: RegisterClientFormData) => {
		startTransition(async () => {
			try {
				// User Data
				const userFormData = new FormData();
				userFormData.append("name", values.name);
				userFormData.append("lastname", values.lastName);
				userFormData.append("phone", values.phone);

				// Restaurant Data
				const clientFormData = new FormData();
				const clientCompleteName = values.name + " " + values.lastName;
				clientFormData.append("city", values.city);
				clientFormData.append("location", values.location);
				clientFormData.append("completeName", clientCompleteName);

				// Display the values
				for (const value of userFormData.values()) {
					console.log(value);
				}
				// Display the values
				for (const value of clientFormData.values()) {
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
						Guardar Cambios
					</Button>
					{form.formState.errors.root && (
						<FormMessage className="form-response-error ">{form.formState.errors.root.message}</FormMessage>
					)}
				</div>
			</form>
		</Form>
	);
};

export default ClientProfileForm;
