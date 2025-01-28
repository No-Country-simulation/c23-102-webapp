"use client";

import React, { useState, useEffect } from "react";
import { useMeasure } from "react-use";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { RestaurantShortInfoType } from "@/types/RestaurantTypes";
import Link from "next/link";
import { WEBSITE_ROUTES } from "@/constants/routes";

export function ImageCarousel({ slides }: { slides: Array<RestaurantShortInfoType> }) {
	const [ref, { width: width }] = useMeasure<HTMLDivElement>();
	const [ref2, { width: width2 }] = useMeasure<HTMLDivElement>();
	const [constraints, setConstraints] = useState({ left: 0, right: 0 });

	useEffect(() => {
		const myleft = -(width2 * slides.length) + width * 0.71;
		setConstraints({ left: myleft, right: 0 });
	}, [width, slides, width2]);

	return (
		<div className="relative w-full overflow-hidden">
			{/* Contenedor de Framer Motion para el carrusel */}
			<motion.div
				className="flex gap-4 lg:gap-5 cursor-grab"
				initial={{ x: 0 }}
				animate={{ x: 0 }}
				drag="x"
				dragConstraints={constraints}
				dragElastic={0.1}
				ref={ref}
			>
				{slides.map((slide, index) => (
					<motion.div
						key={slide.id || index}
						className="flex-none w-[90%] md:w-[60%] lg:w-[32%] h-[25rem] lg:h-[30rem]"
						whileTap={{ cursor: "grabbing" }}
						ref={ref2}
					>
						{/* La tarjeta completa es draggable */}
						<Card className="h-full relative rounded-xl border-none overflow-hidden">
							<Link
								href={WEBSITE_ROUTES.RESTAURANT_DETAILS + "/" + slide.id}
								className="absolute top-0 left-0 h-full w-full"
							>
								{/* Imagen de fondo */}
								<Image
									src={slide.image_url || "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"} // Usa un fallback si la URL es inválida
									alt={slide.name || "Imagen no disponible"}
									className="h-full rounded-xl pointer-events-none"
									fill
									style={{
										objectFit: "cover",
									}}
								/>
								{/* Overlay */}
								<div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 h-[28%] flex items-center pointer-events-none">
									<div className="inline-block px-4 align-middle w-full">
										<CardTitle className="text-white">{slide.name}</CardTitle>
										<CardDescription className="text-gray-200">{slide.description}</CardDescription>
										<div className="flex mt-3 flex-wrap gap-2">
											<Badge
												variant="secondary"
												className="bg-gray-500 text-gray-200 font-thin px-3 py-1 text-xs opacity-[0.65]"
											>
												{slide.category.category}
											</Badge>
										</div>
									</div>
								</div>
							</Link>
						</Card>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}
