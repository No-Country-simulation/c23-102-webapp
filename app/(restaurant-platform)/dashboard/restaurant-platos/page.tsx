"use client";

import LinkButton from "@/components/global/LinkButton";
import { RESTAURANT_ROUTES } from "@/constants/routes";
import { useUser } from "@/context/UserContext";

const RestaurantPlatosPage = () => {
	const { user } = useUser();
	const platos = false;

	if (user)
		return (
			<div className="bg-black text-white flex items-center justify-around flex-col">
				<div className="flex items-center justify-around flex-col gap-8">
					<h1 className="text-3xl"> Platos </h1>
					{!platos && <LinkButton route={RESTAURANT_ROUTES.RESTAURANT_PLATOS_CREATE}>Create</LinkButton>}
				</div>
			</div>
		);
};

export default RestaurantPlatosPage;
