import React from "react";

import { Topbar } from "./_components/Topbar";
import Container from "../../components/global/Container";
import { ImageCarousel } from "../../components/global/ImageCarousel";
import { LabelCarousel } from "../../components/global/LabelCarousel";
import { Dropdown } from "../../components/global/Dropdown";

const Homepage = () => {
	return (
		<>
			<Topbar></Topbar>
			<div className=" bg-black pt-24 pb-40">
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
				</Container>
			</div>
		</>
	);
};

export default Homepage;
