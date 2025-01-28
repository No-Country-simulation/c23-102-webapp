"use client";

import React from "react";
import { UserNavbar } from "./_components/UserNavbar";
import ClientProtectedRoute from "./_components/ClientProtectedRoute";
import { ClientTopbar } from "./_components/ClientTopbar";

const PlatformContentLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<ClientProtectedRoute>
			<div className="min-h-dvh">
				<main className="min-h-dvh">
					<ClientTopbar></ClientTopbar>
					{children}
					<UserNavbar></UserNavbar>
				</main>
			</div>
		</ClientProtectedRoute>
	);
};

export default PlatformContentLayout;
