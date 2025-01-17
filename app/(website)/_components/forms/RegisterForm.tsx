"use client";

import * as z from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { registerSchema } from "@/schemas/authSchema";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
  } from "@/components/ui/select"
  
  import { mocked_business_types } from "@/constants/mock/businessTypes";
import { mocked_countries_with_phone_codes } from "@/constants/mock/countriesPhoneCodes";


const RegisterForm = () => {
	const form = useForm<z.infer<typeof registerSchema>>({
		resolver: zodResolver(registerSchema),
		defaultValues: { 
			location: "",
			establishmentName: "",
			brandName: "",
			businessType: "",
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
			phone: ""
		}
	});
	return (
		<Form {...form}>
			<form className="w-full mt-8">
                <h4 className="form-title mb-5">Registra tu restaurante</h4>
                {/* Direccion del establecimiento */}
				<FormField
					name="location"
					control={form.control}
					render={({ field }) => (
						<FormItem>
                            <FormLabel>Direccion del establecimiento</FormLabel>
							<FormControl>
								<Input {...field} placeholder={"Ferniche 1985"} type="text" className="form-input-text"></Input>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
                {/* Nombre del establecimiento */}
				<FormField
					name="establishmentName"
					control={form.control}
					render={({ field }) => (
						<FormItem className="mt-5">
                            <FormLabel>Nombre del establecimiento</FormLabel>
							<FormControl>
								<Input {...field} placeholder={"Pizza Hub"} type="text" className="form-input-text"></Input>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
                {/* Nombre de marca */}
				<FormField
					name="brandName"
					control={form.control}
					render={({ field }) => (
						<FormItem className="my-5">
                            <FormLabel>Nombre de marca</FormLabel>
							<FormControl>
								<Input {...field} placeholder={"Brews"} type="text" className="form-input-text"></Input>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
                {/* Tipo de negocio */}
				<FormField
					name="businessType"
					control={form.control}
					render={({ field }) => (
						<Select {...field} >
								<label className="text-sm">Tipo de negocio</label>
								<SelectTrigger className="w-[100%] form-input-text ">
									<SelectValue placeholder="Tipo de negocio" />
								</SelectTrigger>
								<SelectContent>
									{
										mocked_business_types.map((business) => (
											<SelectItem key={business} value={business}>
												{business}
											</SelectItem>
										))
									}
								</SelectContent>
								</Select>
					)}
				/>
				{/* Nombre y apellido */}
				<div className="flex gap-3">
						<FormField
							name="firstName"
							control={form.control}
							render={({ field }) => (
								<FormItem className="mt-5">
									<FormLabel>Nombre</FormLabel>
									<FormControl>
										<Input {...field} placeholder={"John"} type="text" className="form-input-text"></Input>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						{/* Apellido */}
						<FormField
							name="lastName"
							control={form.control}
							render={({ field }) => (
								<FormItem className="mt-5">
									<FormLabel>Apellido</FormLabel>
									<FormControl>
										<Input {...field} placeholder={"Doe"} type="text" className="form-input-text"></Input>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
				</div>
				{/* Email */}
				<FormField
							name="email"
							control={form.control}
							render={({ field }) => (
								<FormItem className="mt-5">
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input {...field} placeholder={"johndoe@gmail.com"} type="email" className="form-input-text"></Input>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
				{/* Contraseña */}
				<FormField
							name="password"
							control={form.control}
							render={({ field }) => (
								<FormItem className="mt-5">
									<FormLabel>Contraseña</FormLabel>
									<FormControl>
										<Input {...field} placeholder={"******"} type="password" className="form-input-text"></Input>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
				{/* Confirmar contraseña */}
				<FormField
							name="confirmPassword"
							control={form.control}
							render={({ field }) => (
								<FormItem className="mt-5">
									<FormLabel>Confirmar contraseña</FormLabel>
									<FormControl>
										<Input {...field} placeholder={"******"} type="password" className="form-input-text"></Input>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					{/* Numero de telefono movil */}
					<div className="flex flex-col pt-5">
						<FormLabel>Numero de telefono movil</FormLabel>
						<div className="flex gap-3  items-end">
							{/* Codigo del pais */}
						<div className="w-[25%]">
						<Select>
								<SelectTrigger className="w-[100%] form-input-text">
									<SelectValue placeholder="ES" />
								</SelectTrigger>
								<SelectContent>
									{
										mocked_countries_with_phone_codes.map((country) => (
											<SelectItem key={country.code} value={country.code}>
												{country.name}
											</SelectItem>
										))
									}
								</SelectContent>
								</Select>
						</div>
						{/* Numero de telefono */}
						<div className="flex-1">
								<FormField
								name="phone"
								control={form.control}
								render={({ field }) => (
									<FormItem className="mt-5">
										<FormControl>
											<Input {...field} placeholder={"1234 6578"} type="number" className="form-input-text"></Input>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
					</div>
						</div>
					</div>
					<Button type="submit" className="w-[100%] bg-gray-500 text-white py-5 rounded-xl mt-5">Continuar</Button>
			</form>
		</Form>
	);
};

export default RegisterForm;
