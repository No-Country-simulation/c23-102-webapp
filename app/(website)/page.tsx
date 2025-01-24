import React from "react";

import { Topbar } from "./_components/Topbar";
import Container from "../../components/global/Container";
import { ImageCarousel } from "../../components/global/ImageCarousel";
import { LabelCarousel } from "../../components/global/LabelCarousel";
import { Dropdown } from "../../components/global/Dropdown";
import { Footer } from "./_components/Footer";

const Homepage = () => {
	return (
		<>
			<Topbar></Topbar>
			<div className="escape-navbar escape-footer">
				<Container className="flex flex-col gap-12">
					<article className="flex overflow-hidden items-center">
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
		</>
	);
};

export default Homepage;
