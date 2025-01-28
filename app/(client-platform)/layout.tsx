"use client";

import React from "react";
import ClientProtectedRoute from "./_components/ClientProtectedRoute";
import { ClientNavbar } from "./_components/ClientNavbar";
import { ClientTopbar } from "./_components/ClientTopbar";

const PlatformContentLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<ClientProtectedRoute>
			<div className="min-h-dvh">
				<main className="min-h-dvh">
					<ClientTopbar></ClientTopbar>
					{children}
					<ClientNavbar></ClientNavbar>
				</main>
			</div>
		</ClientProtectedRoute>
	);
};

export default PlatformContentLayout;
