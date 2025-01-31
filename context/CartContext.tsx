"use client";

import { CART_LOCAL_STORAGE } from "@/constants/app_constants";
import { CartContextType, CartItem } from "@/types/CartType";
import React, { createContext, useContext, useEffect, useState } from "react";

// Create the CartContext
const CartContext = createContext<CartContextType | null>(null);

// CartProvider component to wrap your app
export function CartProvider({ children }: { children: React.ReactNode }) {
	const [cart, setCart] = useState<CartItem[]>([]);

	// Load cart from localStorage on initial render
	useEffect(() => {
		const savedCart = localStorage.getItem(CART_LOCAL_STORAGE);
		if (savedCart) {
			setCart(JSON.parse(savedCart));
		}
	}, []);

	// Save cart to localStorage whenever it changes
	useEffect(() => {
		localStorage.setItem(CART_LOCAL_STORAGE, JSON.stringify(cart));
	}, [cart]);

	// Add an item to the cart
	const addToCart = (item: CartItem) => {
		setCart((prevCart) => {
			const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
			if (existingItem) {
				// If the item already exists, update its quantity
				return prevCart.map((cartItem) =>
					cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem
				);
			} else {
				// If the item doesn't exist, add it to the cart
				return [...prevCart, item];
			}
		});
	};

	// Remove an item from the cart
	const removeFromCart = (itemId: string) => {
		setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
	};

	// Update the quantity of an item in the cart
	const updateQuantity = (itemId: string, quantity: number) => {
		if (quantity <= 0) {
			// If quantity is 0 or less, remove the item
			removeFromCart(itemId);
		} else {
			setCart((prevCart) => prevCart.map((item) => (item.id === itemId ? { ...item, quantity } : item)));
		}
	};

	// Clear the entire cart
	const clearCart = () => {
		setCart([]);
	};

	// Calculate the total number of items in the cart
	const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

	// Calculate subtotals for each locationName
	const getRestaurantSubtotals = (): { [location: string]: number } => {
		const subtotals: Record<string, number> = {};
		cart.forEach(({ locationName, product, quantity }) => {
			if (!subtotals[locationName]) {
				subtotals[locationName] = 0;
			}
			subtotals[locationName] += Number(product.price) * quantity;
		});
		return subtotals;
	};

	// Calculate the total price of the cart
	const totalPrice = cart.reduce((total, item) => total + Number(item.product.price) * item.quantity, 0);

	// Provide the cart state and functions to the app
	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				updateQuantity,
				clearCart,
				getRestaurantSubtotals,
				totalItems,
				totalPrice,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

// Custom hook to use the CartContext
export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};
