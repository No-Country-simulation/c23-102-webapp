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
	{
		id: 5,
		image_url:
			"https://dirona.com/wp-content/uploads/2018/08/Beverlys-at-The-Coeur-d%E2%80%99Alene-Resort-in-Coeur-d%E2%80%99Alene-ID-Owners-Dining-Room-DiRoNA-Awarded-Restaurant.png",
		name: "Holy Cow",
		description: "Fine dinning",
		businessTypes: [],
	},
	{
		id: 6,
		image_url: "https://www.coastlinenservices.com/wp-content/uploads/2019/07/shutterstock_741884605.jpg",
		name: "Mostaza",
		description: "Con de todo",
		businessTypes: [],
	},
	{
		id: 7,
		image_url: "https://as1.ftcdn.net/v2/jpg/06/36/04/10/1000_F_636041025_Sih9tNIgxw2madJPj518Z3s0pQaSnSVN.jpg",
		name: "American Dinner",
		description: "De lujo para todos",
		businessTypes: [],
	},
];

// Función para obtener 1 o 2 elementos aleatorios
const getRandomBusinessTypes = (types: Array<BusinessType>): Array<BusinessType> => {
	const shuffled = [...types].sort(() => 0.5 - Math.random()); // Barajar el array
	return shuffled.slice(0, Math.floor(Math.random() * 2) + 1); // Tomar 1 o 2 elementos
};


// Asignar 1 o 2 businessTypes aleatorios a cada restaurante
export const mocked_restaurants_short_info_1 = mocked_restaurants
	.map((restaurant) => ({
		...restaurant,
		businessTypes: getRandomBusinessTypes(mocked_business_types),
	}))
	.sort(() => 0.5 - Math.random());

export const mocked_restaurants_short_info_2 = mocked_restaurants
	.map((restaurant) => ({
		...restaurant,
		businessTypes: getRandomBusinessTypes(mocked_business_types),
	}))
	.sort(() => 0.5 - Math.random());


	export const findByBusinessType = (businessTypeId: number) => {
		return mocked_restaurants.filter((restaurant) =>
			restaurant.businessTypes.some((businessType) => businessType.id === businessTypeId)
		);
	};
