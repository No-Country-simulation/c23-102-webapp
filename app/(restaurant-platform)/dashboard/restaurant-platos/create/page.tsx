"use client";

import RestaurantPlatosForm from "@/app/(restaurant-platform)/_components/forms/RestaurantPlatosForm";
import { useUser } from "@/context/UserContext";

const RestaurantPlatosCreatePage = () => {
	const { user } = useUser();

	if (user)
		return (
			<div className="bg-black text-white flex items-center justify-around flex-col">
				<div className="w-[90%] flex items-center justify-around flex-col">
					<h1 className="text-3xl"> Platos CREATE </h1>
					<RestaurantPlatosForm></RestaurantPlatosForm>
				</div>
			</div>
		);
};

export default RestaurantPlatosCreatePage;
