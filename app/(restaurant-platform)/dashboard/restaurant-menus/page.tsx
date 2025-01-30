"use client";

import { useUser } from "@/context/UserContext";

const RestaurantMenusPage = () => {
	const { user } = useUser();

	if (user)
		return (
			<div className="min-h-dvh bg-black text-white flex items-center justify-around flex-col">
				<div className="flex items-center justify-around flex-col">
					<h1 className="text-3xl"> Menus </h1>
					<h2 className="text-xl">Welcome, {user.email}</h2>

					<span>Carta</span>
					<span>Bebidas</span>
					<span>Postres</span>

					<span>+</span>
				</div>
			</div>
		);
};

export default RestaurantMenusPage;
