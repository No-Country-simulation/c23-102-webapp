import React from "react";
import { fetchPlatosByCartaId } from "@/actions/platosActions";
import ItemListCard from "@/components/global/ItemListCard";
import { RESTAURANT_ROUTES } from "@/constants/routes";
import MagicButton from "@/app/(restaurant-platform)/_components/MagicButton";
import { MenuBreadcrumbs } from "@/app/(restaurant-platform)/_components/MenuBreadcrumbs";
import { cartaDetails } from "@/actions/cartasAction";

const RestaurantCartasDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	const carta = await cartaDetails(id);
	const platos = await fetchPlatosByCartaId(id, carta.restaurantEmail);

	return (
		<>
			<MagicButton window={"cartas/platos"} cartaName={carta.title} platos={platos}></MagicButton>
			<MenuBreadcrumbs current={carta.title}></MenuBreadcrumbs>
			<div className=" bg-black text-white flex items-center justify-center flex-col pt-4">
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
		</>
	);
};

export default RestaurantCartasDetailsPage;
