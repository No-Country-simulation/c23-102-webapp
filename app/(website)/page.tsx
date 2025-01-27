"use client";

import React from "react";
import { Topbar } from "./_components/Topbar";
import Container from "../../components/global/Container";
import { ImageCarousel } from "../../components/global/ImageCarousel";
import { Footer } from "./_components/Footer";
import BusinessTypeFilter from "./_components/BusinessTypeFilter";
import { mocked_business_types } from "@/constants/mock/businessTypes";
import { mocked_restaurants_short_info_1, mocked_restaurants_short_info_2 } from "@/constants/mock/restaurant-info";

const Homepage = () => {
	return (
		<>
			<Topbar></Topbar>
			<div className="escape-navbar escape-footer">
				<Container size="center-container" className="w-full flex flex-col gap-20">
					<BusinessTypeFilter className="home-section-row" businessTypes={mocked_business_types}></BusinessTypeFilter>
					<article className="home-section">
						<h1 className="title">Restaurantes</h1>
						<ImageCarousel slides={mocked_restaurants_short_info_1}></ImageCarousel>
					</article>
					<article className="home-section">
						<h1 className="title">Recomendados para ti</h1>
						<ImageCarousel slides={mocked_restaurants_short_info_2}></ImageCarousel>
					</article>
				</Container>
			</div>
			<Footer></Footer>
		</>
	);
};

export default Homepage;
