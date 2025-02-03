"use client";

import { fetchCartasByRestaurantEmail } from "@/actions/cartasAction";
import FilterCarouselWithDropdown from "@/components/global/FilterCarouselWithDropdown";
import ItemListCard from "@/components/global/ItemListCard";
import ItemListSkeletonCard from "@/components/global/ItemListSkeletonCard";
import { mocked_base_cartas } from "@/constants/mock/restaurant-carta";
import { RESTAURANT_ROUTES } from "@/constants/routes";
import { useUser } from "@/context/UserContext";
import { cn } from "@/lib/utils";
import { CartaType } from "@/types/CartaType";
import { useEffect, useState } from "react";

const RestaurantCartasPanel = ({ className }: { className?: string }) => {
	const { user } = useUser();
	const [filterKeyword, setFilterKeyword] = useState<string | null>(null);
	const [filterLoading, setFilterLoading] = useState<boolean>(false);
	const [cartas, setCartas] = useState<Array<CartaType>>([]);

	useEffect(() => {
		if (user?.email) {
			(async () => {
				try {
					const restaurantCartas = await fetchCartasByRestaurantEmail(user.email);
					setCartas(restaurantCartas);
				} catch (error) {
					console.error("Error fetching restaurant profile:", error);
				}
			})();
		}
	}, [user?.email]);

	// Filtrar restaurantes por businessType seleccionado
	const filteredCartas = filterKeyword ? cartas.filter((carta) => carta.title === filterKeyword) : mocked_base_cartas;

	if (user)
		return (
			<div className={cn(className, "w-[90%] m-auto flex flex-col")}>
				<div className="w-full flex items-center gap-8 flex-col pt-8">
					<FilterCarouselWithDropdown
						className="home-section-row"
						filterKeyword={filterKeyword}
						setFilterKeyword={setFilterKeyword}
						setIsLoading={setFilterLoading}
						items={mocked_base_cartas.map((i) => i.title)}
					></FilterCarouselWithDropdown>
					<div className="flex flex-col gap-6 items-start">
						{filterLoading ? (
							<ItemListSkeletonCard></ItemListSkeletonCard>
						) : (
							filteredCartas.map(({ id, title, description, image_url, status }) => {
								return (
									<ItemListCard
										key={id}
										title={title}
										description={description}
										image_url={image_url}
										status={status}
										route={RESTAURANT_ROUTES.RESTAURANT_CARTAS + "/" + id}
									></ItemListCard>
								);
							})
						)}
					</div>
				</div>
			</div>
		);
};

export default RestaurantCartasPanel;
