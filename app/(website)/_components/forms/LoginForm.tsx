"use client";

import * as z from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginSchema } from "@/schemas/authSchema";
import GoogleIcon from "../../../../public/images/GoogleIcon.png";
import Image from "next/image";
import { loginUser } from "@/actions/authActions";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";

const LoginForm = () => {
	const router = useRouter();
	const { updateUser } = useUser();

	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: { username: "", password: "" },
	});

	const onSubmit = (values: z.infer<typeof loginSchema>) => {
		const response = loginUser(values);
		updateUser(response);
		router.push("/dashboard");
	};

	return (
		<Form {...form}>
			<form className="text-white mt-8 w-full" onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					name="username"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input {...field} placeholder={"Email"} type="email" className="form-input-text"></Input>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					name="password"
					control={form.control}
					render={({ field }) => (
						<FormItem className="mt-5">
							<FormControl>
								<Input {...field} placeholder={"Password"} type="password" className="form-input-text"></Input>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="button-fill mt-5">
					Iniciar Sesion
				</Button>
				<Button className="button-outline mt-5">
					<Image src={GoogleIcon} alt="Google Icon" />
					Iniciar con Google
				</Button>
			</form>
		</Form>
	);
};

export default LoginForm;
