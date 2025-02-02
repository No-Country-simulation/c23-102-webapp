"use client";

import React, { useState, useEffect } from "react";
import { useMeasure } from "react-use";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { RestaurantShortInfoType } from "@/types/RestaurantTypes";
import { WEBSITE_ROUTES } from "@/constants/routes";

export function ImageCarousel({
	slides,
	filterBy,
}: {
	slides: Array<RestaurantShortInfoType>;
	filterBy?: string | null;
}) {
	const [constraints, setConstraints] = useState({ left: 0, right: 0 });
	const [isClick, setIsClick] = useState(false);
	const [startX, setStartX] = useState(0);
	const [startY, setStartY] = useState(0);
	const [startTime, setStartTime] = useState(0);
	const [ref, { width: width }] = useMeasure<HTMLDivElement>();
	const [ref2, { width: width2 }] = useMeasure<HTMLDivElement>();

	useEffect(() => {
		const myleft = -(width2 * slides.length) + width * 0.71;
		setConstraints({ left: myleft, right: 0 });
	}, [width, slides, width2]);

	const handlePointerDown = (event: React.PointerEvent) => {
		setIsClick(true);
		setStartX(event.clientX);
		setStartY(event.clientY);
		setStartTime(event.timeStamp); // Capture timestamp for detecting long presses
	};

	const handlePointerUp = (event: React.PointerEvent, url: string) => {
		const endX = event.clientX;
		const endY = event.clientY;
		const elapsedTime = event.timeStamp - startTime; // Calculate interaction duration

		// Detect if user moved significantly (drag)
		const movedEnough = Math.abs(startX - endX) > 5 || Math.abs(startY - endY) > 5;

		if (movedEnough || elapsedTime > 300) {
			// If dragged or long press, prevent redirection
			setIsClick(false);
			return;
		}
		// If it's really a click, redirect
		if (isClick) {
			window.location.href = url;
		}
	};

	if (slides.length === 0 && filterBy) {
		return <h2 className="text-thin pl-5">No encontramos Restaurantes de tipo: {filterBy}.</h2>;
	}
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
				style={{ transform: "translate3d(0, 0, 0)" }} // Fuerza aceleración por GPU
			>
				{slides.map((slide, index) => (
					<motion.div
						key={index}
						className="flex-none w-[90%] md:w-[60%] lg:w-[32%] h-[25rem] lg:h-[30rem]"
						whileTap={{ cursor: "grabbing" }}
						ref={ref2}
						onPointerDown={handlePointerDown}
						onPointerUp={(event) => handlePointerUp(event, WEBSITE_ROUTES.RESTAURANT_DETAILS + "/" + slide.email)}
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
								priority={index === 0} // Carga la primera imagen de inmediato
								loading={index !== 0 ? "lazy" : "eager"} // Las demás, con carga diferida
								quality={75} // Reduce el peso de las imágenes sin perder mucha calidad
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
											{slide.category}
										</Badge>
									</div>
								</div>
							</div>
						</Card>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}
