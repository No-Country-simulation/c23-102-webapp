"use client";

import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RegisterRestaurantProfileFormData, registerRestaurantProfileSchema } from "@/schemas/authSchema";
import { Textarea } from "@/components/ui/textarea";

const RegisterRestaurantProfileForm = () => {
	const [isPending, startTransition] = useTransition();

	const form = useForm<RegisterRestaurantProfileFormData>({
		resolver: zodResolver(registerRestaurantProfileSchema),
		defaultValues: { coverImage: null, description: "" },
	});

	const onSubmit = async (values: RegisterRestaurantProfileFormData) => {
		startTransition(async () => {
			try {
				const formData = new FormData();
				console.log(formData);
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
					<FormField
						name="coverImage"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input {...field} placeholder="Picture" type="file" accept="image/*" />
								</FormControl>
								<FormMessage className="form-message-validation-error" />
							</FormItem>
						)}
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
					<div className="flex flex-row gap-2 items-center justify-between w-full mt-5">
						<Button type="submit" className="button-fill-primary" disabled={isPending}>
							Finalizar
						</Button>
						<Button className="button-outline" disabled={isPending}>
							Omitir
						</Button>
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
