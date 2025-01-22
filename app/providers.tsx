"use client";

import React from "react";

import { ThemeProvider } from "./theme-provider";
import { UserProvider } from "../context/UserContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
				<UserProvider>{children}</UserProvider>
			</ThemeProvider>
		</>
	);
};

export default Providers;
