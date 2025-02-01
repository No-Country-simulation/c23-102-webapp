"use client";

import FilterCarouselWithDropdown from "@/components/global/FilterCarouselWithDropdown";
import ItemListCard from "@/components/global/ItemListCard";
import ItemListSkeletonCard from "@/components/global/ItemListSkeletonCard";
import { mocked_base_cartas } from "@/constants/mock/restaurant-carta";
import { RESTAURANT_ROUTES } from "@/constants/routes";
import { useUser } from "@/context/UserContext";
import { useState } from "react";

const RestaurantCartasPage = () => {
	const [filterKeyword, setFilterKeyword] = useState<string | null>(null);
	const [filterLoading, setFilterLoading] = useState<boolean>(false);

	const { user } = useUser();

	// Filtrar restaurantes por businessType seleccionado
	const filteredRestaurants = filterKeyword
		? mocked_base_cartas.filter((carta) => carta.title === filterKeyword)
		: mocked_base_cartas;

	if (user)
		return (
			<div className="bg-black text-white flex flex-col items-center">
				<div className="flex items-center gap-8 flex-col pt-8">
					<FilterCarouselWithDropdown
						className="home-section-row"
						filterKeyword={filterKeyword}
						setFilterKeyword={setFilterKeyword}
						setIsLoading={setFilterLoading}
						items={mocked_base_cartas.map((i) => i.title)}
					></FilterCarouselWithDropdown>
					<div className="w-[92%] flex flex-col gap-6 items-start">
						{filterLoading ? (
							<ItemListSkeletonCard></ItemListSkeletonCard>
						) : (
							filteredRestaurants.map(({ id, title, description, image_url, status }) => {
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

export default RestaurantCartasPage;
