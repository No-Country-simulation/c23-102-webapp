import { CartaResponse, CartaType } from "@/types/CartaType";
import { mocked_restaurants } from "./restaurant-info";
import { STATUS_DISPONIBLE } from "../app_constants";

export const mocked_base_cartas: Array<CartaType> = mocked_restaurants.flatMap((restaurant, index) => {
	return [
		{
			id: `${restaurant.email}-1`,
			restaurantEmail: restaurant.email,
			title: "Carta",
			description: "Menu principal",
			image_url: "https://images.pexels.com/photos/7613439/pexels-photo-7613439.jpeg",
			status: STATUS_DISPONIBLE,
		},
		{
			id: `${restaurant.email}-2`,
			restaurantEmail: restaurant.email,
			title: "Bebidas",
			description: "Carta de bebidas",
			image_url:
				"https://www.allrecipes.com/thmb/uzxCGTc-5WCUZnZ7BUcYcmWKxjo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-48974-vanilla-milkshake-hero-4x3-c815295c714f41f6b17b104e7403a53b.jpg",
			status: STATUS_DISPONIBLE,
		},
		{
			id: `${restaurant.email}-3`,
			restaurantEmail: restaurant.email,
			title: "Postres",
			description: "Carta de postres",
			image_url: "https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg",
			status: STATUS_DISPONIBLE,
		},
	];
});

export const findCartaById = (id: string) => {
	const found = mocked_base_cartas.find((i) => {
		return i.id == id;
	});
	return found as CartaResponse;
};

export const findCartasByRestaurantEmail = (email: string): Array<CartaType> => {
	return mocked_base_cartas.filter((i) => i.restaurantEmail === email);
};
