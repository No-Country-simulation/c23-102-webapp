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
		<article className={cn("flex flex-col gap-4", className)}>
			<h2 className="font-bold">Quieres enterarte de ofertas y descuentos?</h2>
			<p>Únete a nuestra mail-list para recibir actualizaciones de nuestras últimas novedades!</p>
			<Form {...form}>
				<form className="text-white flex flex-col gap-3">
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
										className="form-input-text"
										autoComplete="off"
									></Input>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit" variant={"default"} className="w-[50%]">
						Suscríbete
					</Button>
				</form>
			</Form>
		</article>
	);
}

export default NewsletterBanner;
