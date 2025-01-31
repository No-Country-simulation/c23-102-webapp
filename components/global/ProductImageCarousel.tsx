"use client";

import React, { useState, useEffect } from "react";
import { useMeasure } from "react-use";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { WEBSITE_ROUTES } from "@/constants/routes";
import { PlatoType } from "@/types/PlatoType";
import { Button } from "../ui/button";

export function ProductImageCarousel({ slides }: { slides: Array<PlatoType> }) {
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
						key={index}
						className="flex-none w-[90%] md:w-[60%] lg:w-[32%] h-[25rem] lg:h-[30rem]"
						whileTap={{ cursor: "grabbing" }}
						ref={ref2}
					>
						{/* La tarjeta completa es draggable */}
						<Card className="h-full relative rounded-xl border-none overflow-hidden">
							<Link
								href={WEBSITE_ROUTES.RESTAURANT_PRODUCT_DETAILS + "/" + slide.id}
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
								<div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-[82%] h-[35%] flex items-center">
									<div className="inline-block px-4 w-full text-white">
										<CardTitle className="self-start">{slide.name}</CardTitle>
										<CardDescription className="text-gray-200">{slide.description}</CardDescription>
										<span className="block h-[3rem] w-full"></span>
									</div>
								</div>
							</Link>
							{/* Contenedor para precio y botón (fuera del Link) */}
							<div className="w-[60%] absolute bottom-5 left-[50%] translate-x-[-50%] flex justify-between items-center">
								<span className="font-semibold text-white">{slide.price}$</span>
								<Button
									className="font-semibold"
									onClick={(e) => {
										e.stopPropagation(); // Evita propagación al Link
										console.log("Clicked");
									}}
								>
									Añadir
								</Button>
							</div>
						</Card>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}
