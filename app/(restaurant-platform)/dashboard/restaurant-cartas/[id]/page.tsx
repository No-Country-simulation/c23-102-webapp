import React from "react";
import { findCartaById } from "@/constants/mock/restaurant-carta";
import { fetchPlatosByCartaId } from "@/actions/platosActions";
import ItemListCard from "@/components/global/ItemListCard";

const RestaurantCartasDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	const carta = await findCartaById(id);
	const platos = await fetchPlatosByCartaId(id);

	return (
		<div className="w-[85%] m-auto text-white flex flex-col">
			<div className="flex gap-8 flex-col pt-8">
				<h2 className="text-2xl font-semibold">{carta.title}</h2>
				{platos.map(({ id, name, description, image_url, price, disponible, cartaId }) => {
					return (
						<ItemListCard
							key={id}
							title={name}
							description={description}
							image_url={image_url}
							route={"/"}
							status={disponible}
							price={price}
						></ItemListCard>
					);
				})}
			</div>
		</div>
	);
};

export default RestaurantCartasDetailsPage;
