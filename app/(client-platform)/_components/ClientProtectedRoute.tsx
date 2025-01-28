"use client";

import React, { ReactNode, useEffect } from "react";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { WEBSITE_ROUTES } from "@/constants/routes";

interface ProtectedRouteProps {
	children: ReactNode;
}

const ClientProtectedRoute = ({ children }: ProtectedRouteProps) => {
	const { user, loading } = useUser();
	const router = useRouter();

	useEffect(() => {
		if (!loading && (!user || user.accountType !== "Client")) {
			router.push(WEBSITE_ROUTES.HOME);
		}
	}, [user, loading, router]);

	if (loading || !user || user.accountType !== "Client") {
		return null; // or a loading spinner
	}

	return <>{children}</>;
};

export default ClientProtectedRoute;
