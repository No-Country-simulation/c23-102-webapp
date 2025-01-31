"use client";

import React from "react";

import { ThemeProvider } from "./theme-provider";
import { UserProvider } from "../context/UserContext";
import { ModalProvider } from "@/context/ModalContext";
import { TitleMessageModal } from "@/components/global/TitleMessageModal";
import { CartProvider } from "@/context/CartContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
				<ModalProvider>
					<CartProvider>
						<UserProvider>
							{children}
							<TitleMessageModal></TitleMessageModal>
						</UserProvider>
					</CartProvider>
				</ModalProvider>
			</ThemeProvider>
		</>
	);
};

export default Providers;
