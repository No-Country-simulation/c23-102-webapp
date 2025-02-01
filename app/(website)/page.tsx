"use client";

import React, { useState } from "react";
import Container from "../../components/global/Container";
import { ImageCarousel } from "../../components/global/ImageCarousel";
import { mocked_business_types } from "@/constants/mock/businessTypes";
import { mocked_restaurants } from "@/constants/mock/restaurant-info";
import FilterCarouselWithDropdown from "@/components/global/FilterCarouselWithDropdown";
import { motion } from "framer-motion";
import { ProductSkeletonCard } from "@/components/global/ProductSkeletonCard";

const Homepage = () => {
	const [filterKeyword, setFilterKeyword] = useState<string | null>(null);
	const [filterLoading, setFilterLoading] = useState<boolean>(false);

	// Filtrar restaurantes por businessType seleccionado
	const filteredRestaurants = filterKeyword
		? mocked_restaurants.filter((restaurant) => restaurant.category === filterKeyword)
		: mocked_restaurants;

	return (
		<div className="escape-navbar escape-footer">
			<Container size="center-container" className="w-full flex flex-col gap-14 pt-10">
				<FilterCarouselWithDropdown
					className="home-section-row"
					items={mocked_business_types}
					filterKeyword={filterKeyword}
					setFilterKeyword={setFilterKeyword}
					setIsLoading={setFilterLoading}
				></FilterCarouselWithDropdown>
				<article className="home-section">
					<h1 className="title">{filterKeyword ? filterKeyword : filteredRestaurants[0].category}</h1>
					{filterLoading ? (
						<motion.div className="flex gap-4 lg:gap-5 cursor-grab" whileTap={{ cursor: "grabbing" }}>
							{Array.from({ length: 2 }).map((_, index) => (
								<ProductSkeletonCard key={index}></ProductSkeletonCard>
							))}
						</motion.div>
					) : (
						<ImageCarousel slides={filteredRestaurants} filterBy={filterKeyword}></ImageCarousel>
					)}
				</article>
				<article className="home-section">
					<h1 className="title">Recomendados para ti</h1>
					<ImageCarousel slides={mocked_restaurants}></ImageCarousel>
				</article>
			</Container>
		</div>
	);
};

export default Homepage;
