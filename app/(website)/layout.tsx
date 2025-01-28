"use client";

import React from "react";
import { Topbar } from "./_components/Topbar";
import { USER_TYPES } from "@/constants/app_constants";
import { ClientNavbar } from "../(client-platform)/_components/ClientNavbar";
import { Footer } from "./_components/Footer";
import { useUser } from "@/context/UserContext";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
	const { user } = useUser();
	return (
		<div className="min-h-dvh">
			<main className="min-h-dvh">
				<Topbar></Topbar>
				{children}
				{user && user.accountType === USER_TYPES.CLIENT && <ClientNavbar></ClientNavbar>}
				<Footer></Footer>
			</main>
		</div>
	);
};

export default LandingLayout;
