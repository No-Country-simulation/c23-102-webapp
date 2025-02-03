"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { UserContextType, ClientLoginResponse, RestaurantLoginResponse } from "@/types/Authentication";
import { COOKIE_NAME } from "@/constants/app_constants";

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<ClientLoginResponse | RestaurantLoginResponse | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const cookieUser = Cookies.get(COOKIE_NAME);
		if (cookieUser) {
			try {
				setUser(JSON.parse(decodeURIComponent(cookieUser)));
			} catch (error) {
				console.error("Error parsing user cookie:", error);
				setUser(null);
			}
		}
		setLoading(false);
	}, []);

	// =========================
	//  Functions
	// =========================
	const updateUser = (newUser: ClientLoginResponse | RestaurantLoginResponse | null) => {
		setUser(newUser);
		if (newUser) {
			Cookies.set(COOKIE_NAME, encodeURIComponent(JSON.stringify(newUser)), {
				expires: 7,
				secure: false,
			});
		} else {
			Cookies.remove(COOKIE_NAME);
		}
		setLoading(false);
	};

	const logoutUser = () => {
		setUser(null);
		Cookies.remove(COOKIE_NAME);
		setLoading(false);
	};

	return <UserContext.Provider value={{ user, loading, updateUser, logoutUser }}>{children}</UserContext.Provider>;
}

export const useUser = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error("useUser must be used within a UserProvider");
	}
	return context;
};
