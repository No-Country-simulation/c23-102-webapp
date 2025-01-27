"use client";

import { useUser } from "@/context/UserContext";

const RestaurantProfileEditPage = () => {
	const { user } = useUser();

	if (user)
		return (
			<div className="min-h-dvh bg-black text-white flex items-center justify-around flex-col">
				<div className="flex items-center justify-around flex-col">
					<h1 className="text-3xl"> Profile </h1>
					<h2 className="text-xl">Welcome, {user.email}</h2>
				</div>
			</div>
		);
};

export default RestaurantProfileEditPage;
