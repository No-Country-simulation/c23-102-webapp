import React from "react";
import { findCartaById } from "@/constants/mock/restaurant-carta";
import { fetchPlatosByCartaId } from "@/actions/platosActions";
import ItemListCard from "@/components/global/ItemListCard";
import { RESTAURANT_ROUTES } from "@/constants/routes";

const RestaurantCartasDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	const carta = await findCartaById(id);
	const platos = await fetchPlatosByCartaId(id);

	return (
		<div className=" bg-black text-white flex items-center justify-center flex-col pt-12">
			<div className="flex items-center justify-around flex-col w-[93%] m-auto gap-10">
				<h2 className="text-2xl font-semibold">{carta.title}</h2>
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
		</div>
		// <div className="w-[85%] m-auto text-white flex flex-col">
		// 	<div className="flex gap-8 flex-col pt-8">

		// 	</div>
		// </div>
	);
};

export default RestaurantCartasDetailsPage;
