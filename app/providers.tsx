"use client";

import React from "react";

import { ThemeProvider } from "./theme-provider";
import { UserProvider } from "../context/UserContext";
import { ModalProvider } from "@/context/ModalContext";
import { TitleMessageModal } from "@/components/global/TitleMessageModal";
import { CartProvider } from "@/context/CartContext";
import { ProductListModalProvider } from "@/context/ProductListModalContext";
import { ProductListModal } from "@/components/global/ProductListModal";

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
				<ModalProvider>
					<ProductListModalProvider>
						<CartProvider>
							<UserProvider>
								{children}
								<TitleMessageModal></TitleMessageModal>
								<ProductListModal></ProductListModal>
							</UserProvider>
						</CartProvider>
					</ProductListModalProvider>
				</ModalProvider>
			</ThemeProvider>
		</>
	);
};

export default Providers;
