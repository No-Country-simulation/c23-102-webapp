"use client";

import Container from "@/components/global/Container";
import { ImageCarousel } from "@/components/global/ImageCarousel";
import { ScrollableItemListCarousel } from "@/components/global/ScrollableItemListCard";
import { mocked_restaurants } from "@/constants/mock/restaurant-info";
import { mocked_platos } from "@/constants/mock/restaurant-platos";
import { CLIENT_ROUTES } from "@/constants/routes";
import { useUser } from "@/context/UserContext";
import Link from "next/link";

const ClientDashboardPage = () => {
	const { user } = useUser();

	if (user)
		return (
			<Container size={"center-container"} className="pt-2 flex flex-col gap-10">
				<div className="flex flex-col gap-2">
					<h1 className="text-3xl text-[color:--primary-color]">Bienvenido</h1>
					<h2 className="text-xl">{user.email}</h2>
				</div>
				<div className="flex flex-col gap-2">
					<Link
						href={CLIENT_ROUTES.CLIENT}
						className="w-full bg-yellow-500 py-1 px-4 rounded-lg border-[#ffffff46] border-[1px]"
					>
						Tus compras este mes
					</Link>
					<Link
						href={CLIENT_ROUTES.CLIENT}
						className="w-full bg-purple-700 py-1 px-4 rounded-lg border-[#ffffff46] border-[1px]"
					>
						Recibe ofertas en tu correo
					</Link>
				</div>
				<div className="flex flex-col gap-3">
					<h2 className="text-xl font-semibold">Vuelve a pedir</h2>
					<ScrollableItemListCarousel withPrice products={mocked_platos.slice(0, 2)}></ScrollableItemListCarousel>
				</div>
				<article className="home-section">
					<h1 className="title">Recomendados para ti</h1>
					<ImageCarousel slides={mocked_restaurants.slice(0, 3)}></ImageCarousel>
				</article>
			</Container>
		);
};

export default ClientDashboardPage;
