"use client";

import React from "react";
import { cn } from "@/lib/utils";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { newsletterSchema } from "@/schemas/newsletterSchema";

function NewsletterBanner({ className }: { className?: string }) {
	const form = useForm<z.infer<typeof newsletterSchema>>({
		resolver: zodResolver(newsletterSchema),
		defaultValues: { email: "" },
	});

	return (
		<article className={cn("flex flex-col gap-4 center-forms-lg", className)}>
			<div className="flex flex-col w-full">
				<h2 className="font-bold">Quieres enterarte de ofertas y descuentos?</h2>
				<p>Únete a nuestra mail-list para recibir actualizaciones de nuestras últimas novedades!</p>
			</div>
			<Form {...form}>
				<form className="text-white w-full flex flex-col gap-3 xl:flex-row xl:justify-between">
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
										className="form-input-text xl:w-[280px]"
										autoComplete="off"
									></Input>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit" variant={"default"} className="w-[50%] xl:w-full">
						Suscríbete
					</Button>
				</form>
			</Form>
		</article>
	);
}

export default NewsletterBanner;
