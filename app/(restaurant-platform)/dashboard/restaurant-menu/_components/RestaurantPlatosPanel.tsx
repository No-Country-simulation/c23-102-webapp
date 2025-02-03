"use client";

import { fetchPlatosByRestaurantEmail } from "@/actions/platosActions";
import FilterCarouselWithDropdown from "@/components/global/FilterCarouselWithDropdown";
import ItemListCard from "@/components/global/ItemListCard";
import ItemListSkeletonCard from "@/components/global/ItemListSkeletonCard";
import { STATUS_BORRADOR, STATUS_DISPONIBLE } from "@/constants/app_constants";
import { RESTAURANT_ROUTES } from "@/constants/routes";
import { useUser } from "@/context/UserContext";
import { cn } from "@/lib/utils";
import { PlatoType } from "@/types/PlatoType";
import { useEffect, useState } from "react";

const RestaurantPlatosPanel = ({ className }: { className?: string }) => {
	const { user } = useUser();
	const [filterKeyword, setFilterKeyword] = useState<string | null>(null);
	const [filterLoading, setFilterLoading] = useState<boolean>(false);
	const [platos, setPlatos] = useState<Array<PlatoType>>([]);

	const platosStatuses = [STATUS_DISPONIBLE, STATUS_BORRADOR];

	// Filtrar restaurantes por businessType seleccionado
	const filteredPlatos = filterKeyword ? platos.filter((plato) => plato.disponible == filterKeyword) : platos;

	useEffect(() => {
		if (user?.email) {
			(async () => {
				try {
					const restaurantPlatos = await fetchPlatosByRestaurantEmail(user.email);
					setPlatos(restaurantPlatos);
				} catch (error) {
					console.error("Error fetching restaurant profile:", error);
				}
			})();
		}
	}, [user?.email]);

	return (
		<div className={cn(className, "w-[90%] m-auto flex flex-col")}>
			<div className="w-full flex items-center gap-8 flex-col pt-8">
				<FilterCarouselWithDropdown
					className="home-section-row"
					filterKeyword={filterKeyword}
					setFilterKeyword={setFilterKeyword}
					setIsLoading={setFilterLoading}
					items={platosStatuses.map((i) => i)}
				></FilterCarouselWithDropdown>
				<div className="w-full flex flex-col gap-6 items-start">
					{filterLoading ? (
						<ItemListSkeletonCard></ItemListSkeletonCard>
					) : filteredPlatos.length > 0 ? (
						filteredPlatos.map(({ id, name, description, image_url, price, disponible }) => {
							return (
								<ItemListCard
									key={id}
									title={name}
									description={description}
									image_url={image_url}
									route={RESTAURANT_ROUTES.RESTAURANT_PLATOS + "/" + id}
									status={disponible}
									price={price}
								></ItemListCard>
							);
						})
					) : (
						<h2>No hay platos: {filterKeyword}</h2>
					)}
				</div>
			</div>
		</div>
	);
};

export default RestaurantPlatosPanel;
