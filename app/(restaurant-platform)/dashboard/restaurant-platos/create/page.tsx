"use client";

import RestaurantPlatosForm from "@/app/(restaurant-platform)/_components/forms/RestaurantPlatosForm";
import { useUser } from "@/context/UserContext";

const RestaurantPlatosCreatePage = () => {
	const { user } = useUser();

	if (user)
		return (
			<div className=" bg-black text-white flex items-center justify-center flex-col pt-12">
				<div className="flex items-center justify-around flex-col w-[93%] m-auto gap-10">
					<h4 className="form-title">Describe tu Producto</h4>
					<RestaurantPlatosForm></RestaurantPlatosForm>
				</div>
			</div>
		);
};

export default RestaurantPlatosCreatePage;
