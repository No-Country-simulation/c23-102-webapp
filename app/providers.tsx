"use client";

import React from "react";

import { ThemeProvider } from "./theme-provider";
import { UserProvider } from "../context/UserContext";
import { ModalProvider } from "@/context/ModalContext";
import { TitleMessageModal } from "@/components/global/TitleMessageModal";

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
				<ModalProvider>
					<UserProvider>
						{children}
						<TitleMessageModal></TitleMessageModal>
					</UserProvider>
				</ModalProvider>
			</ThemeProvider>
		</>
	);
};

export default Providers;
