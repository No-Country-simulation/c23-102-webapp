"use client";

import React from "react";
import Container from "../../components/global/Container";
import { ImageCarousel } from "../../components/global/ImageCarousel";
import BusinessTypeFilter from "./_components/BusinessTypeFilter";
import { mocked_business_types } from "@/constants/mock/businessTypes";
import { mocked_restaurants } from "@/constants/mock/restaurant-info";

const Homepage = () => {
	return (
		<div className="escape-navbar escape-footer">
			<Container size="center-container" className="w-full flex flex-col gap-14 pt-10">
				<BusinessTypeFilter className="home-section-row" businessTypes={mocked_business_types}></BusinessTypeFilter>
				<article className="home-section">
					<h1 className="title">Restaurantes</h1>
					<ImageCarousel slides={mocked_restaurants}></ImageCarousel>
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
