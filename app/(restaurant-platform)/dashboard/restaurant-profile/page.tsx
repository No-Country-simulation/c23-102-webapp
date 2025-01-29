"use client";

import { useUser } from "@/context/UserContext";
import RestaurantProfileForm from "../../_components/forms/RestaurantProfileForm";
import { useEffect, useState } from "react";
import { restaurantProfileByEmail } from "@/actions/restaurantsActions";
import { RestaurantProfileDetailsType } from "@/types/RestaurantTypes";
import Container from "@/components/global/Container";

const RestaurantProfileEditPage = () => {
	const { user } = useUser();
	const [restaurantDetails, setRestaurantDetails] = useState<RestaurantProfileDetailsType | null>(null);

	useEffect(() => {
		if (user?.email) {
			(async () => {
				try {
					const details = await restaurantProfileByEmail(user.email);
					setRestaurantDetails(details);
				} catch (error) {
					console.error("Error fetching restaurant profile:", error);
				}
			})();
		}
	}, [user?.email]);

	if (!restaurantDetails) {
		return <p>Error. Intenta neuvamente.</p>;
	}

	if (user)
		return (
			<div className=" bg-black text-white flex items-center justify-center flex-col pt-12">
				<div className="flex items-center justify-around flex-col w-[93%] m-auto gap-10">
					<h4 className="form-title">Edita tu Perfil</h4>
					<RestaurantProfileForm initialData={restaurantDetails}></RestaurantProfileForm>
				</div>
			</div>
		);
};

export default RestaurantProfileEditPage;
