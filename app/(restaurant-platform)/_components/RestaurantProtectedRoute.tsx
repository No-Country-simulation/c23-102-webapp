"use client";

import React, { ReactNode, useEffect } from "react";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { WEBSITE_ROUTES } from "@/constants/routes";
import { USER_TYPES } from "@/constants/app_constants";

interface ProtectedRouteProps {
	children: ReactNode;
}

const RestaurantProtectedRoute = ({ children }: ProtectedRouteProps) => {
	const { user, loading } = useUser();
	const router = useRouter();

	useEffect(() => {
		if (!loading && (!user || user.accountType !== USER_TYPES.RESTAURANT)) {
			router.push(WEBSITE_ROUTES.HOME);
		}
	}, [user, loading, router]);

	if (loading || !user || user.accountType !== USER_TYPES.RESTAURANT) {
		return null;
	}

	return <>{children}</>;
};

export default RestaurantProtectedRoute;
