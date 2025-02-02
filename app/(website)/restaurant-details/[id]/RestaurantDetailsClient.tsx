"use client";

import React, { useState } from "react";
import Container from "@/components/global/Container";
import Image from "next/image";
import { MapPin } from "lucide-react";
import FilterCarouselWithDropdown from "@/components/global/FilterCarouselWithDropdown";
import { ProductShortDetailsCarousel } from "@/components/global/ProductShortDetailsCarousel";
import { PlatoType } from "@/types/PlatoType";
import { ProductSkeletonCard } from "@/components/global/ProductSkeletonCard";
import { motion } from "framer-motion";

interface RestaurantDetailsClientProps {
	imageUrl: string;
	locationName: string;
	description: string;
	location: string;
	cartas: { id: string; title: string }[];
	platosPorCarta: { cartaName: string; platos: PlatoType[] }[];
}

const RestaurantDetailsClient: React.FC<RestaurantDetailsClientProps> = ({
	imageUrl,
	locationName,
	description,
	location,
	cartas,
	platosPorCarta,
}) => {
	const [filterKeyword, setFilterKeyword] = useState<string | null>(null);
	const [filterLoading, setFilterLoading] = useState<boolean>(false);

	const filteredPlatosPorCarta = filterKeyword
		? platosPorCarta.filter((carta) => carta.cartaName.toLowerCase().includes(filterKeyword.toLowerCase()))
		: platosPorCarta;

	return (
		<div className="min-h-dvh escape-navbar escape-footer relative">
			<div className="w-full -h-full relative">
				<Image
					src={imageUrl}
					alt="Selected Restaurant"
					width={0}
					height={0}
					className="w-full h-[68vh] object-cover pt-2"
				/>
				<div className="w-full h-full absolute top-0 left-0 bg-black opacity-10"></div>
			</div>
			<Container size="center-container" className="flex flex-col items-center gap-8 pt-4 text-center lg:gap-16">
				<div className="flex flex-col lg:gap-2 lg:mt-3">
					<h2 className="font-semibold text-lg lg:text-3xl">{locationName}</h2>
					<p className="font-thin text-sm lg:text-normal">{description}</p>
					<div className="flex flex-row gap-1 items-center justify-center text-sm mt-3 lg:text-normal lg:mt-1">
						<MapPin size={"18px"} />
						{location}
					</div>
				</div>

				<FilterCarouselWithDropdown
					filterKeyword={filterKeyword}
					setFilterKeyword={setFilterKeyword}
					className="home-section-row"
					items={cartas.map((i) => i.title)}
					setIsLoading={setFilterLoading}
				/>

				{filterLoading ? (
					<div className="flex flex-col gap-4 w-full items-start">
						<h2 className="text-xl font-bold">{filterKeyword ? filterKeyword : cartas[0].title}</h2>
						<div className="relative w-full overflow-hidden">
							<motion.div className="flex gap-4 lg:gap-5 cursor-grab" whileTap={{ cursor: "grabbing" }}>
								{Array.from({ length: 2 }).map((_, index) => (
									<ProductSkeletonCard key={index}></ProductSkeletonCard>
								))}
							</motion.div>
						</div>
					</div>
				) : (
					filteredPlatosPorCarta.map((i, index) => (
						<ProductShortDetailsCarousel key={index} products={i} locationName={locationName} />
					))
				)}
			</Container>
		</div>
	);
};

export default RestaurantDetailsClient;
