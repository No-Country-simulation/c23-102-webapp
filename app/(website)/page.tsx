import React from "react";

import { Topbar } from "./_components/Topbar";
import Container from "../../components/global/Container";
import { ImageCarousel } from "../../components/global/ImageCarousel";
import { Footer } from "./_components/Footer";
import BusinessTypeFilter from "./_components/BusinessTypeFilter";
import { mocked_business_types } from "@/constants/mock/businessTypes";
import { mocked_restaurants_short_info } from "@/constants/mock/restaurant-info";

const Homepage = () => {
	return (
		<>
			<Topbar></Topbar>
			<div className="escape-navbar escape-footer">
				<Container className="w-full flex flex-col gap-12">
					<BusinessTypeFilter className="home-section-row" businessTypes={mocked_business_types}></BusinessTypeFilter>
					<article className="home-section">
						<h1 className="title">Restaurantes</h1>
						<ImageCarousel slides={mocked_restaurants_short_info}></ImageCarousel>
					</article>
					<article className="home-section">
						<h1 className="title">Recomendados para ti</h1>
						<ImageCarousel slides={mocked_restaurants_short_info}></ImageCarousel>
					</article>
				</Container>
			</div>
			<Footer></Footer>
		</>
	);
};

export default Homepage;
