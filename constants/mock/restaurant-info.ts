import { BusinessType } from "@/types/BusinessTypes";
import { RestaurantShortInfoType } from "@/types/RestaurantShortInfoType";
import { mocked_business_types } from "./businessTypes";

export const mocked_restaurants: Array<RestaurantShortInfoType> = [
	{
		id: 1,
		image_url: "https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg",
		name: "Kampai",
		description: "Gastronomia Nikkei",
		businessTypes: [],
	},
	{
		id: 2,
		image_url: "https://images.pexels.com/photos/29913261/pexels-photo-29913261.jpeg",
		name: "Fast Food",
		description: "Hamburguesa y papitas",
		businessTypes: [],
	},
	{
		id: 3,
		image_url: "https://images.pexels.com/photos/30302240/pexels-photo-30302240/free-photo-of-pizza-nina.jpeg",
		name: "La Rotonde",
		description: "Vera cucina italiana",
		businessTypes: [],
	},
	{
		id: 4,
		image_url: "https://images.pexels.com/photos/30238701/pexels-photo-30238701/free-photo-of-plano.jpeg",
		name: "Oh la la!",
		description: "Comida francesa",
		businessTypes: [],
	},
];

// Función para obtener 1 o 2 elementos aleatorios
const getRandomBusinessTypes = (types: Array<BusinessType>): Array<BusinessType> => {
	const shuffled = [...types].sort(() => 0.5 - Math.random()); // Barajar el array
	return shuffled.slice(0, Math.floor(Math.random() * 2) + 1); // Tomar 1 o 2 elementos
};

// Asignar 1 o 2 businessTypes aleatorios a cada restaurante
export const mocked_restaurants_short_info = mocked_restaurants.map((restaurant) => ({
	...restaurant,
	businessTypes: getRandomBusinessTypes(mocked_business_types),
}));
