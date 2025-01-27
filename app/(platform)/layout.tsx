"use client";

import React from "react";
import ProtectedRoute from "@/components/global/ProtectedRoute";
import { Navbar } from "./_components/Navbar";

const PlatformContentLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<ProtectedRoute>
			<div className="min-h-dvh">
				{/* Dashboard Sidebar o Navbar iran aca, las paginas seran renderizadas dentro */}
				<main className="min-h-dvh">{children}</main>
				<Navbar></Navbar>
			</div>
		</ProtectedRoute>
	);
};

export default PlatformContentLayout;
