"use client";

import React from "react";
import ProtectedRoute from "@/components/global/ProtectedRoute";

const PlatformContentLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<ProtectedRoute>
			<div className="min-h-dvh">
				{/* Dashboard Sidebar o Navbar iran aca, las paginas seran renderizadas dentro */}
				<main className="min-h-dvh">{children}</main>
			</div>
		</ProtectedRoute>
	);
};

export default PlatformContentLayout;
