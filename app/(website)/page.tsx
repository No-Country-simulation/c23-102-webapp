import React from "react";

import { Topbar } from "./_components/Topbar";
import Container from "../../components/global/Container";
import { ImageCarousel } from "../../components/global/ImageCarousel";
import { LabelCarousel } from "../../components/global/LabelCarousel";
import { Dropdown } from "../../components/global/Dropdown";
import { Footer } from "./_components/Footer";

const Homepage = () => {
	return (
		<div className="relative">
			<Topbar></Topbar>
			<div className="h-full bg-black escape-navbar escape-navbar-lg escape-footer escape-footer-lg">
				<Container className="text-white">
					<article className="pt-4 flex overflow-hidden items-center">
						<Dropdown></Dropdown>
						<LabelCarousel></LabelCarousel>
					</article>
					<article className="home-section">
						<h1 className="title">Restaurantes</h1>
						<ImageCarousel></ImageCarousel>
					</article>
					<article className="home-section">
						<h1 className="title">Recomendados para ti</h1>
						<ImageCarousel></ImageCarousel>
					</article>
					<article className="home-section">
						<h1 className="title">Recomendados para ti</h1>
						<ImageCarousel></ImageCarousel>
					</article>
					<article className="home-section">
						<h1 className="title">Recomendados para ti</h1>
						<ImageCarousel></ImageCarousel>
					</article>
				</Container>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Homepage;
