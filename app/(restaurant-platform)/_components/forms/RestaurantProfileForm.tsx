import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { RestaurantProfileDetailsType } from "@/types/RestaurantTypes";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { registerRestaurantSchema, RestaurantEditFormData } from "@/schemas/authSchema";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { mocked_business_types } from "@/constants/mock/businessTypes";
import { SelectGroup, SelectValue } from "@radix-ui/react-select";
import { ImagePlus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const RestaurantProfileForm = ({ initialData }: { initialData: RestaurantProfileDetailsType }) => {
	const [formData, setFormData] = useState<RestaurantProfileDetailsType>(initialData);
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [isPending, startTransition] = useTransition();

	const form = useForm<RestaurantEditFormData>({
		resolver: zodResolver(registerRestaurantSchema),
		defaultValues: {
			location: "",
			locationName: "",
			brand: "",
			category: "",
			description: "",
			name: "",
			lastName: "",
			phone: "",
		},
	});

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedFile(event.target.files?.[0] || null);
	};

	const onSubmit = async (values: RestaurantEditFormData) => {
		startTransition(async () => {
			console.log(values);
			setFormData(formData);
		});
	};

	return (
		<Form {...form}>
			<form className="w-full forms-max-width" onSubmit={form.handleSubmit(onSubmit)}>
				{/* Direccion del establecimiento */}
				<div className="space-x-1 flex flex-col gap-3 items-center">
					<FormField
						name="coverImage"
						control={form.control}
						render={({}) => {
							return (
								<FormItem className="w-full">
									<FormControl>
										<div className="relative rounded-lg flex flex-col items-center gap-5 p-8 cursor-pointer bg-[#1a1a1a]">
											<ImagePlus width={50} height={50} />
											<h3 className="text-center text-gray-500">
												Añade una foto de tu restaurante desde tu computadora
											</h3>
											<Input
												type="file"
												className="w-full h-full absolute top-0 left-0 opacity-0 "
												onChange={(e) => {
													handleFileChange(e);
												}}
												disabled={isPending}
											/>
											<Button className="button-input w-[75%]">
												{selectedFile ? selectedFile.name : "Añadir Imagen"}
											</Button>
										</div>
									</FormControl>
									<FormMessage className="form-message-validation-error" />
								</FormItem>
							);
						}}
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
										className={`form-input-text ${
											form.formState.errors.locationName && "form-input-text-validation-error"
										}`}
										disabled={isPending}
										value={formData.locationName}
									></Input>
								</FormControl>
							</FormItem>
						)}
					/>
					{/* Address */}
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
										className={`form-input-text ${
											form.formState.errors.location && "form-input-text-validation-error"
										}`}
										disabled={isPending}
										value={formData.location}
									></Input>
								</FormControl>
							</FormItem>
						)}
					/>
					{/* Description */}
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
										value={formData.brand || ""}
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
									onValueChange={(value) => {
										field.onChange(value);
										setFormData((prev) => ({
											...prev,
											category: mocked_business_types.find((cat) => cat.category === value) || prev.category,
										}));
									}}
									value={form.watch("category") || formData.category.category}
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
											{mocked_business_types.map((category) => (
												<SelectItem key={category.id} value={category.category}>
													{category.category}
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
											className={`form-input-text ${form.formState.errors.name && "form-input-text-validation-error"}`}
											disabled={isPending}
											value={formData.name}
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
											className={`form-input-text ${
												form.formState.errors.lastName && "form-input-text-validation-error"
											}`}
											disabled={isPending}
											value={formData.lastName}
										></Input>
									</FormControl>
								</FormItem>
							)}
						/>
					</div>
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
										value={formData.phone}
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

export default RestaurantProfileForm;
