"use client";

import React, { useState, useEffect } from "react";
import { useMeasure } from "react-use";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { PlatoType } from "@/types/PlatoType";
import { Button } from "../ui/button";
import { useCart } from "@/context/CartContext";

export function ProductImageCarousel({ slides, locationName }: { slides: Array<PlatoType>; locationName: string }) {
	const [constraints, setConstraints] = useState({ left: 0, right: 0 });
	const { addToCart } = useCart();
	const [ref, { width: width }] = useMeasure<HTMLDivElement>();
	const [ref2, { width: width2 }] = useMeasure<HTMLDivElement>();

	useEffect(() => {
		if (slides.length > 1) {
			const myleft = -(width2 * slides.length) + width * 0.71;
			setConstraints({ left: myleft, right: 0 });
		} else {
			// Si solo hay un slide, evitamos movimiento
			setConstraints({ left: 0, right: 0 });
		}
	}, [width, slides, width2]);

	return (
		<div className="relative w-full overflow-hidden">
			{/* Contenedor de Framer Motion para el carrusel */}
			<motion.div
				className="flex gap-4 lg:gap-6 cursor-grab"
				initial={{ x: 0 }}
				animate={{ x: 0 }}
				drag={slides.length > 1 ? "x" : false} // Deshabilita drag si solo hay 1 elemento
				dragConstraints={constraints}
				dragElastic={0.1}
				ref={ref}
				style={{ transform: "translate3d(0, 0, 0)" }}
			>
				{slides.map((slide, index) => (
					<motion.div
						key={index}
						className="flex-none w-[270px] h-[20rem] md:w-[340px] md:h-[26rem] lg:h-[30rem]"
						whileTap={{ cursor: "grabbing" }}
						ref={ref2}
					>
						{/* La tarjeta completa es draggable */}
						<Card className="h-full relative rounded-xl border-none overflow-hidden">
							{/* Imagen de fondo */}
							<Image
								src={slide.image_url || "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"} // Usa un fallback si la URL es inválida
								alt={slide.name || "Imagen no disponible"}
								className="h-full rounded-xl pointer-events-none"
								fill
								style={{
									objectFit: "cover",
								}}
								priority={index === 0} // Cargar la primera imagen primero
								loading={index !== 0 ? "lazy" : "eager"} // Lazy load para mejorar rendimiento
								quality={75} // Reducir tamaño de imagen
							/>
							{/* Overlay */}
							<div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-[82%] h-[35%] flex items-center">
								<div className="px-4 w-full text-white flex flex-col items-start gap-1">
									<CardTitle>{slide.name}</CardTitle>
									<CardDescription className="text-gray-200 font-thin">{slide.description}</CardDescription>
									<span className="block h-[2.5rem] w-full"></span>
								</div>
							</div>
							{/* Contenedor para precio y botón (fuera del Link) */}
							<div className="px-4 absolute bottom-3 w-full flex justify-between items-center">
								<span className="font-semibold text-white">{slide.price}$</span>
								<Button
									className="font-medium"
									variant="secondary"
									onClick={() => {
										addToCart({
											id: slide.id,
											product: slide,
											quantity: 1,
											locationName: locationName,
										});
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
