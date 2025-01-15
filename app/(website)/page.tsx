import React from "react";
import Link from "next/link";

import { Topbar } from "./_components/Topbar";
import Container from "../../components/global/Container";
import { Navbar } from "./_components/Navbar";
import { WEBSITE_ROUTES } from "@/constants/routes";
import { ImageCarousel } from "../../components/global/ImageCarousel";

const Homepage = () => {
	return (
		<>
			<Topbar></Topbar>
			<div className="h-full bg-black pt-32">
				<Container className="text-white">
					<h2>Filtro de Categorias</h2>

					<article>
						<h2>Restaurantes</h2>
						<ImageCarousel></ImageCarousel>
					</article>

					<h2>Recomendados para ti</h2>
					<h2>Etc...</h2>
					<br />
					<hr />
					<br />
					<Link href={WEBSITE_ROUTES.REGISTER}>Registro</Link>
				</Container>
			</div>
			<Navbar></Navbar>
		</>
	);
};

export default Homepage;
