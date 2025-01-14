"use client" //Pintame esto en la pantalla desde el segundo 0, mientras que use server hace su logica primero y luego pinta
import * as z from "zod";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { registerSchema } from "@/schemas/authSchema";
import { useRouter } from "next/navigation";
import Image from "next/image";





const RegisterPage = () => {

    const [isPending, startTransition] = useTransition();
	const router = useRouter();

	const form = useForm<z.infer<typeof registerSchema>>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			email: "",
			password: "",
			passwordConfirmation: "",
		},
	});


  return (
    <div className="h-full flex items-center justify-around flex-col bg-black text-white">
			<div className="flex items-center justify-around flex-col">
            <Form {...form}>
			<form className="flex flex-col gap-10">

                <h2 className="font-extrabold text-yellow-400 text-6xl text-center flex flex-col gap-0">
                    <span>Take</span>
                    <span>Away</span>
                </h2>
				<div className="flex flex-col space-y-6">
                <FormField
					name="email"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input {...field} placeholder={"Email"} type="email" disabled={isPending} className="rounded-full p-6 border-none bg-gray-900 text-white "></Input>
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
								<Input {...field} placeholder={"Contraseña"} type="password" disabled={isPending} className="rounded-full p-6 border-none bg-gray-900 text-white "></Input>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					name="passwordConfirmation"
					control={form.control}
					render={({ field }) => (
						<FormItem className="mt-5">
							<FormControl>
								<Input {...field} placeholder={"Confirmacion de contraseña"} type="password" disabled={isPending}  className="rounded-full p-6 border-none bg-gray-900 text-white "></Input>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" variant={"default"} className="mt-10 w-full p-6 rounded-full bg-white text-black">
					Crear cuenta
				</Button>
				<Button type="submit" variant={"default"} className="mt-10 w-full p-6 rounded-full bg-transparent text-white border-white border-[1px]">
                    <Image src="Google.svg" width={25} height={25} alt="google icon"/>
					Registrarme con Google
				</Button>
				{form.formState.errors.root && <FormMessage className="mt-2">{form.formState.errors.root.message}</FormMessage>}
                </div>
			</form>
		</Form>
			</div>
		</div>
  )
};

export default RegisterPage;
