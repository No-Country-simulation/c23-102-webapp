"use client";

import React, { ReactNode, useEffect } from "react";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { WEBSITE_ROUTES } from "@/constants/routes";

interface ProtectedRouteProps {
	children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
	const { user } = useUser();
	const router = useRouter();

	useEffect(() => {
		if (!user) {
			router.push(WEBSITE_ROUTES.LOGIN);
		}
	}, [user, router]);

	if (!user) {
		return null;
	}

	return <>{children}</>;
};

export default ProtectedRoute;
