import { CartaResponse, CartaType } from "@/types/CartaType";

export const mocked_base_cartas: Array<CartaType> = [
	{
		id: "1",
		restaurantEmail: "fastfood@gmail.com",
		title: "Carta",
		description: "Menu principal",
		image_url: null,
		status: "disponible",
	},
	{
		id: "2",
		restaurantEmail: "fastfood@gmail.com",
		title: "Bebidas",
		description: "Carta de bebidas",
		image_url:
			"https://www.allrecipes.com/thmb/uzxCGTc-5WCUZnZ7BUcYcmWKxjo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-48974-vanilla-milkshake-hero-4x3-c815295c714f41f6b17b104e7403a53b.jpg",
		status: "disponible",
	},
	{
		id: "3",
		restaurantEmail: "fastfood@gmail.com",
		title: "Postres",
		description: "Carta de postres",
		image_url: null,
		status: "disponible",
	},
];

export const findCartaById = (id: string) => {
	const found = mocked_base_cartas.find((i) => i.id === id);
	return found ? found : mocked_base_cartas[0];
};

export const findCartasByRestaurantEmail = (email: string): Array<CartaResponse> => {
	const found = mocked_base_cartas.filter((i) => i.restaurantEmail !== email);
	return found ? found : mocked_base_cartas;
};
