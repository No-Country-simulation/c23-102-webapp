"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";

const PlatformContentLayout = ({ children }: { children: React.ReactNode }) => {
	const { user, loading } = useUser();
	const router = useRouter();

	useEffect(() => {
		if (!loading && user == null) {
			router.push("/login");
		}
	}, [loading, user, router]);

	if (loading) {
		return (
			<div className="min-h-dvh h-full w-full bg-black text-white flex items-center justify-center">Loading...</div>
		); // Indicador de carga
	}
	return (
		<div className="h-dvh">
			{/* Dashboard Sidebar o Navbar iran aca, las paginas seran renderizadas dentro */}
			<main className="h-full">{children}</main>
		</div>
	);
};

export default PlatformContentLayout;
