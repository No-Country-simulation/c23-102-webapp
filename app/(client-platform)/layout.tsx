"use client";

import React from "react";
import { UserNavbar } from "./_components/UserNavbar";
import ClientProtectedRoute from "./_components/ClientProtectedRoute";

const PlatformContentLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<ClientProtectedRoute>
			<div className="min-h-dvh">
				<main className="min-h-dvh">
					{children}
					<UserNavbar></UserNavbar>
				</main>
			</div>
		</ClientProtectedRoute>
	);
};

export default PlatformContentLayout;
