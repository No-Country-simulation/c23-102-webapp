import React from "react";

import { Topbar } from "./_components/Topbar";
import Container from "../../components/global/Container";
import { Navbar } from "./_components/Navbar";
import { ImageCarousel } from "../../components/global/ImageCarousel";

const Homepage = () => {
	return (
		<>
			<Topbar></Topbar>
			<div className=" bg-black py-32">
				<Container className="text-white">
					<article className="home-section">
						<h1 className="title">Filtro Categorias</h1>
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
			<Navbar></Navbar>
		</>
	);
};

export default Homepage;
