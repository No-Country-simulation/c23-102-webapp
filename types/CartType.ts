import { PlatoType } from "./PlatoType";

// Define the types for the cart item and context
export interface CartItem {
	id: string;
	product: PlatoType;
	quantity: number;
	locationName: string;
}

export interface CartContextType {
	cart: CartItem[];
	addToCart: (item: CartItem) => void;
	removeFromCart: (itemId: string) => void;
	updateQuantity: (itemId: string, quantity: number) => void;
	clearCart: () => void;
	totalItems: number;
	totalPrice: number;
}
