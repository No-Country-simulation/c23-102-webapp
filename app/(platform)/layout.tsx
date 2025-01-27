"use client";

import React from "react";
import ProtectedRoute from "@/components/global/ProtectedRoute";
import { Navbar } from "./_components/Navbar";
import { useUser } from "@/context/UserContext";
import { RestaurantTopbar } from "./_components/RestaurantTopbar";

const PlatformContentLayout = ({ children }: { children: React.ReactNode }) => {
	const { user } = useUser();

	if (!user) {
		return null;
	}
	return (
		<ProtectedRoute>
			<div className="min-h-dvh">
				<RestaurantTopbar></RestaurantTopbar>
				<main className="min-h-dvh">{children}</main>
				<Navbar></Navbar>
			</div>
		</ProtectedRoute>
	);
};

export default PlatformContentLayout;
