"use client";

import React from "react";
import ProtectedRoute from "@/components/global/ProtectedRoute";
import { useUser } from "@/context/UserContext";
import { UserNavbar } from "./_components/UserNavbar";

const PlatformContentLayout = ({ children }: { children: React.ReactNode }) => {
	const { user } = useUser();

	if (!user) {
		return null;
	}
	return (
		<ProtectedRoute>
			<div className="min-h-dvh">
				<main className="min-h-dvh">
					{children}
					<UserNavbar></UserNavbar>
				</main>
			</div>
		</ProtectedRoute>
	);
};

export default PlatformContentLayout;
