"use client";

import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginSchema, LoginFormData } from "@/schemas/authSchema";
import { loginUser } from "@/actions/authActions";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { PLATFORM_ROUTES } from "@/constants/routes";

const LoginForm = () => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	const { updateUser } = useUser();

	const form = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
		defaultValues: { email: "", password: "" },
	});

	const onSubmit = async (values: LoginFormData) => {
		startTransition(async () => {
			try {
				const formData = new FormData();
				Object.entries(values).forEach(([key, value]) => {
					formData.append(key, value);
				});
				const response = await loginUser(formData);
				updateUser(response);
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
			<form className="text-white mt-8 w-full" onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					name="email"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									{...field}
									placeholder={"Email"}
									type="email"
									className={`form-input-text ${form.formState.errors.email && "form-input-text-validation-error"}`}
									autoComplete="off"
									disabled={isPending}
								></Input>
							</FormControl>
							<FormMessage className="form-message-validation-error" />
						</FormItem>
					)}
				/>
				<FormField
					name="password"
					control={form.control}
					render={({ field }) => (
						<FormItem className="mt-5">
							<FormControl>
								<Input
									{...field}
									placeholder={"Password"}
									type="password"
									className={`form-input-text ${
										form.formState.errors.password && "form-input-text-validation-error text-red-600"
									}`}
									autoComplete="off"
									disabled={isPending}
								></Input>
							</FormControl>
							<FormMessage className="form-message-validation-error" />
						</FormItem>
					)}
				/>
				<Button type="submit" className="button-fill mt-5" disabled={isPending}>
					Iniciar Sesion
				</Button>
				{form.formState.errors.root && (
					<FormMessage className="form-response-error ">{form.formState.errors.root.message}</FormMessage>
				)}
			</form>
		</Form>
	);
};

export default LoginForm;
