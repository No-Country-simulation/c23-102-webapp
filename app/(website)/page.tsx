import React from "react";
import Link from "next/link";

import { Topbar } from "./_components/Topbar";
import Container from "../../components/global/Container";

const Homepage = () => {
	return (
		<>
			<Topbar></Topbar>
			<div className="h-full bg-black pt-28">
				<Container className="text-white">
					<h2>Filtro de Categorias</h2>
					<h2>Restaurantes</h2>
					<h2>Recomendados para ti</h2>
					<h2>Etc...</h2>
					<hr className="py-5" />
					<Link href="/register">Registro</Link>
				</Container>
			</div>
		</>
	);
};

export default Homepage;
