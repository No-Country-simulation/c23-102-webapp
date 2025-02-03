"use client";

import Container from "@/components/global/Container";
import { ScrollableItemListCarousel } from "@/components/global/ScrollableItemListCard";
import ScrollableReviews from "@/components/global/ScrollableReviews";
import { mocked_platos } from "@/constants/mock/restaurant-platos";
import { RESTAURANT_ROUTES } from "@/constants/routes";
import { useUser } from "@/context/UserContext";
import Link from "next/link";

const DashboardPage = () => {
	const { user } = useUser();

	if (user)
		return (
			<Container size={"center-container"} className="pt-2 flex flex-col gap-10">
				<div className="flex flex-col gap-2">
					<h1 className="text-3xl text-[color:--primary-color]">Bienvenido,</h1>
					<h2 className="text-xl">{user.locationName}</h2>
				</div>
				<div className="flex flex-col gap-2">
					<Link
						href={RESTAURANT_ROUTES.DASHBOARD}
						className="w-full bg-purple-700 py-1 px-4 rounded-lg border-[#ffffff46] border-[1px]"
					>
						Mira tus estadisticas
					</Link>
					<Link
						href={RESTAURANT_ROUTES.DASHBOARD}
						className="w-full bg-blue-700 py-1 px-4 rounded-lg border-[#ffffff46] border-[1px]"
					>
						Publicita con nosotros
					</Link>
				</div>
				<div className="flex flex-col gap-3">
					<h2 className="text-xl font-semibold">Pedidos en Curso</h2>
					<ScrollableItemListCarousel products={mocked_platos.slice(0, 3)}></ScrollableItemListCarousel>
				</div>
				<div className="flex flex-col gap-3">
					<h2 className="text-xl font-semibold">Ultimas Reviews</h2>
					<ScrollableReviews></ScrollableReviews>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-xl font-semibold">Productos mas vendidos</h2>
					<ScrollableItemListCarousel products={mocked_platos.slice(0, 3)}></ScrollableItemListCarousel>
				</div>
			</Container>
		);
};

export default DashboardPage;
