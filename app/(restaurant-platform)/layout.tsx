"use client";

import React from "react";
import { RestaurantNavbar } from "./_components/RestaurantNavbar";
import { useUser } from "@/context/UserContext";
import { RestaurantTopbar } from "./_components/RestaurantTopbar";
import RestaurantProtectedRoute from "./_components/RestaurantProtectedRoute";

const PlatformContentLayout = ({ children }: { children: React.ReactNode }) => {
	const { user } = useUser();

	if (!user) {
		return null;
	}
	return (
		<RestaurantProtectedRoute>
			<div className="min-h-dvh">
				<RestaurantTopbar></RestaurantTopbar>
				<main className="min-h-dvh">{children}</main>
				<RestaurantNavbar></RestaurantNavbar>
			</div>
		</RestaurantProtectedRoute>
	);
};

export default PlatformContentLayout;
