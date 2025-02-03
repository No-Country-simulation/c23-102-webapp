"use client";

import { fetchPlatosByRestaurantEmail } from "@/actions/platosActions";
import ItemListCard from "@/components/global/ItemListCard";
import LinkButton from "@/components/global/LinkButton";
import { RESTAURANT_ROUTES } from "@/constants/routes";
import { useUser } from "@/context/UserContext";
import { PlatoType } from "@/types/PlatoType";
import { useEffect, useState } from "react";

const RestaurantPlatosPanel = ({ className }: { className?: string }) => {
	const { user } = useUser();
	const [platos, setPlatos] = useState<Array<PlatoType>>([]);

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
		<div className="">
			<h1 className="text-3xl"> Platos </h1>
			{!platos ? (
				<LinkButton route={RESTAURANT_ROUTES.RESTAURANT_PLATOS_CREATE}>Create</LinkButton>
			) : (
				<div className="w-[92%] flex flex-col gap-6 items-start m-auto">
					{platos.map(({ id, name, description, image_url, price, disponible }) => {
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
					})}
				</div>
			)}
		</div>
	);
};

export default RestaurantPlatosPanel;
