"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ProductSkeletonCard() {
	return (
		<div className="flex-none w-[270px] h-[20rem] md:w-[340px] md:h-[26rem] lg:h-[30rem] animate-pulse">
			<Card className="h-full relative rounded-xl border-none overflow-hidden bg-gray-200">
				{/* Imagen de fondo simulada */}
				<div className="absolute inset-0 bg-gray-300"></div>
				<Image
					src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"
					alt="Skeleton"
					className="h-full w-full rounded-xl opacity-0"
					fill
					style={{ objectFit: "cover" }}
				/>
				{/* Overlay de información */}
				<div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-[82%] h-[35%] flex items-center">
					<div className="inline-block px-4 w-full text-white">
						<div className="h-6 w-3/4 bg-gray-400 rounded"></div>
						<div className="h-4 w-1/2 bg-gray-400 rounded mt-2"></div>
						<span className="block h-[3rem] w-full"></span>
					</div>
				</div>
				{/* Contenedor de precio y botón */}
				<div className="w-[60%] absolute bottom-5 left-[50%] translate-x-[-50%] flex justify-between items-center">
					<span className="h-5 w-10 bg-gray-400 rounded"></span>
					<Button className="bg-gray-400 text-transparent h-8 w-20 rounded"></Button>
				</div>
			</Card>
		</div>
	);
}
