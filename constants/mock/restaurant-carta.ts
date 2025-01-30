import { CartaType } from "@/types/CartaType";

export const mocked_base_cartas: Array<CartaType> = [
	{
		id: "1",
		title: "Carta",
		description: "Menu principal",
		image_url: null,
		status: "disponible",
	},
	{
		id: "2",
		title: "Bebidas",
		description: "Carta de bebidas",
		image_url:
			"https://www.allrecipes.com/thmb/uzxCGTc-5WCUZnZ7BUcYcmWKxjo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-48974-vanilla-milkshake-hero-4x3-c815295c714f41f6b17b104e7403a53b.jpg",
		status: "disponible",
	},
	{
		id: "3",
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

