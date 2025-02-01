"use client";

import React from "react";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { WEBSITE_ROUTES } from "@/constants/routes";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

const LogoutButton = ({ className }: { className?: string }) => {
	const { logoutUser } = useUser();
	const { clearCart } = useCart();
	const router = useRouter();

	const handleLogout = () => {
		clearCart();
		logoutUser();
		router.push(WEBSITE_ROUTES.HOME);
	};

	return (
		<Button onClick={handleLogout} className={cn("", className)}>
			Logout
		</Button>
	);
};

export default LogoutButton;
