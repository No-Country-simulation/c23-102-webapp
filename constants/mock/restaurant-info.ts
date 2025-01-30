import { RestaurantDetailsType, RestaurantShortInfoType } from "@/types/RestaurantTypes";
import { STATUS_DISPONIBLE } from "../app_constants";

export const mocked_restaurants: Array<RestaurantShortInfoType> = [
	{
		email: "kampai@email.com",
		image_url: "https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg",
		name: "Kampai",
		description: "Gastronomia Nikkei",
		category: "Restaurante",
	},

	{
		email: "fastfood@email.com",
		image_url: "https://images.pexels.com/photos/29913261/pexels-photo-29913261.jpeg",
		name: "Fast Food",
		description: "Hamburguesa y papitas",
		category: "Restaurante",
	},
	{
		email: "larotonde@email.com",
		image_url: "https://images.pexels.com/photos/30302240/pexels-photo-30302240/free-photo-of-pizza-nina.jpeg",
		name: "La Rotonde",
		description: "Vera cucina italiana",
		category: "Heladeria",
	},
	{
		email: "ohlala@email.com",
		image_url: "https://images.pexels.com/photos/30238701/pexels-photo-30238701/free-photo-of-plano.jpeg",
		name: "Oh la la!",
		description: "Comida francesa",
		category: "Bar",
	},
	{
		email: "holycow@email.com",
		image_url:
			"https://dirona.com/wp-content/uploads/2018/08/Beverlys-at-The-Coeur-d%E2%80%99Alene-Resort-in-Coeur-d%E2%80%99Alene-ID-Owners-Dining-Room-DiRoNA-Awarded-Restaurant.png",
		name: "Holy Cow",
		description: "Las mejores hamburguesas",
		category: "Restaurante",
	},
	{
		email: "ninjaburguer@email.com",
		image_url: "https://www.coastlinenservices.com/wp-content/uploads/2019/07/shutterstock_741884605.jpg",
		name: "Ninja Burguer",
		description: "Con de todo",
		category: "Restaurante",
	},
	{
		email: "americandinner@email.com",
		image_url: "https://as1.ftcdn.net/v2/jpg/06/36/04/10/1000_F_636041025_Sih9tNIgxw2madJPj518Z3s0pQaSnSVN.jpg",
		name: "American Dinner",
		description: "De lujo para todos",
		category: "Bar",
	},
];

export const mocked_restaurant_details: Array<RestaurantDetailsType> = [
	{
		email: "kampai@email.com",
		locationName: "Kampai",
		description: "Gastronomia Nikkei",
		category: "Restaurante",
		image_url: "https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg",
		location: "Avenida 123",
		phone: "+417994002693",
		name: "Dueño",
		lastName: "Apellido",
		brand: "",
		platos: [
			{
				id: "1",
				name: "Hamburguesa 1",
				description: "Con de todo",
				image_url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cf29c385555335.5d7fb3c164383.jpg",
				price: "15.50",
				disponible: STATUS_DISPONIBLE,
			},
			{
				id: "2",
				name: "Hamburguesa 2",
				description: "Con de todo 2",
				image_url: "https://www.carnicerosdenavarra.com/wp-content/uploads/2023/02/smashburguer.jpg",
				price: "18",
				disponible: STATUS_DISPONIBLE,
			},
			{
				id: "3",
				name: "Hamburguesa 3",
				description: "Con de todo 3",
				image_url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/ea/5b/a0/combo-de-hamburguesa.jpg",
				price: "22",
				disponible: STATUS_DISPONIBLE,
			},
		],
	},
	{
		email: "fastfood@email.com",
		locationName: "Fast Food",
		description: "Hamburguesas y papitas :D",
		category: "Restaurante",
		image_url: "https://images.pexels.com/photos/29913261/pexels-photo-29913261.jpeg",
		location: "Avenida 123",
		phone: "+417994002693",
		name: "Dueño",
		lastName: "Apellido",
		brand: "",
		platos: [
			{
				id: "1",
				name: "Hamburguesa 1",
				description: "Con de todo",
				image_url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cf29c385555335.5d7fb3c164383.jpg",
				price: "15.50",
				disponible: STATUS_DISPONIBLE,
			},
			{
				id: "2",
				name: "Hamburguesa 2",
				description: "Con de todo 2",
				image_url: "https://www.carnicerosdenavarra.com/wp-content/uploads/2023/02/smashburguer.jpg",
				price: "18",
				disponible: STATUS_DISPONIBLE,
			},
			{
				id: "3",
				name: "Hamburguesa 3",
				description: "Con de todo 3",
				image_url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/ea/5b/a0/combo-de-hamburguesa.jpg",
				price: "22",
				disponible: STATUS_DISPONIBLE,
			},
		],
	},
	{
		email: "larotonde@email.com",
		locationName: "La Rotonde",
		description: "Cucina Italiana",
		category: "Heladeria",
		image_url: "https://images.pexels.com/photos/30302240/pexels-photo-30302240/free-photo-of-pizza-nina.jpeg",
		location: "Avenida 123",
		phone: "+417994002693",
		name: "Dueño",
		lastName: "Apellido",
		brand: "",
		platos: [
			{
				id: "1",
				name: "Hamburguesa 1",
				description: "Con de todo",
				image_url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cf29c385555335.5d7fb3c164383.jpg",
				price: "15.50",
				disponible: STATUS_DISPONIBLE,
			},
			{
				id: "2",
				name: "Hamburguesa 2",
				description: "Con de todo 2",
				image_url: "https://www.carnicerosdenavarra.com/wp-content/uploads/2023/02/smashburguer.jpg",
				price: "18",
				disponible: STATUS_DISPONIBLE,
			},
			{
				id: "3",
				name: "Hamburguesa 3",
				description: "Con de todo 3",
				image_url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/ea/5b/a0/combo-de-hamburguesa.jpg",
				price: "22",
				disponible: STATUS_DISPONIBLE,
			},
		],
	},
	{
		email: "ohlala@email.com",
		locationName: "Oh La La!",
		description: "French Style",
		category: "Bar",
		image_url: "https://images.pexels.com/photos/30238701/pexels-photo-30238701/free-photo-of-plano.jpeg",
		location: "Avenida 123",
		phone: "+417994002693",
		name: "Dueño",
		lastName: "Apellido",
		brand: "",
		platos: [
			{
				id: "1",
				name: "Hamburguesa 1",
				description: "Con de todo",
				image_url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cf29c385555335.5d7fb3c164383.jpg",
				price: "15.50",
				disponible: STATUS_DISPONIBLE,
			},
			{
				id: "2",
				name: "Hamburguesa 2",
				description: "Con de todo 2",
				image_url: "https://www.carnicerosdenavarra.com/wp-content/uploads/2023/02/smashburguer.jpg",
				price: "18",
				disponible: STATUS_DISPONIBLE,
			},
			{
				id: "3",
				name: "Hamburguesa 3",
				description: "Con de todo 3",
				image_url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/ea/5b/a0/combo-de-hamburguesa.jpg",
				price: "22",
				disponible: STATUS_DISPONIBLE,
			},
		],
	},
	{
		email: "holycow@email.com",
		locationName: "Holy Cow!",
		description: "Las mejores hamburguesas",
		category: "Restaurante",
		image_url:
			"https://dirona.com/wp-content/uploads/2018/08/Beverlys-at-The-Coeur-d%E2%80%99Alene-Resort-in-Coeur-d%E2%80%99Alene-ID-Owners-Dining-Room-DiRoNA-Awarded-Restaurant.png",
		location: "Avenida 123",
		phone: "+417994002693",
		name: "Dueño",
		lastName: "Apellido",
		brand: "",
		platos: [
			{
				id: "1",
				name: "Hamburguesa 1",
				description: "Con de todo",
				image_url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cf29c385555335.5d7fb3c164383.jpg",
				price: "15.50",
				disponible: STATUS_DISPONIBLE,
			},
			{
				id: "2",
				name: "Hamburguesa 2",
				description: "Con de todo 2",
				image_url: "https://www.carnicerosdenavarra.com/wp-content/uploads/2023/02/smashburguer.jpg",
				price: "18",
				disponible: STATUS_DISPONIBLE,
			},
			{
				id: "3",
				name: "Hamburguesa 3",
				description: "Con de todo 3",
				image_url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/ea/5b/a0/combo-de-hamburguesa.jpg",
				price: "22",
				disponible: STATUS_DISPONIBLE,
			},
		],
	},
	{
		email: "ninjaburguer@email.com",
		locationName: "Ninja Burger",
		description: "Las mejores hamburguesas",
		category: "Restaurante",
		image_url: "https://www.coastlinenservices.com/wp-content/uploads/2019/07/shutterstock_741884605.jpg",
		location: "Avenida 123",
		phone: "+417994002693",
		name: "Dueño",
		lastName: "Apellido",
		brand: "",
		platos: [
			{
				id: "1",
				name: "Hamburguesa 1",
				description: "Con de todo",
				image_url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cf29c385555335.5d7fb3c164383.jpg",
				price: "15.50",
				disponible: STATUS_DISPONIBLE,
			},
			{
				id: "2",
				name: "Hamburguesa 2",
				description: "Con de todo 2",
				image_url: "https://www.carnicerosdenavarra.com/wp-content/uploads/2023/02/smashburguer.jpg",
				price: "18",
				disponible: STATUS_DISPONIBLE,
			},
			{
				id: "3",
				name: "Hamburguesa 3",
				description: "Con de todo 3",
				image_url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/ea/5b/a0/combo-de-hamburguesa.jpg",
				price: "22",
				disponible: STATUS_DISPONIBLE,
			},
		],
	},
	{
		email: "americandinner@email.com",
		locationName: "American Dinner",
		description: "Deluxe",
		category: "Bar",
		image_url: "https://as1.ftcdn.net/v2/jpg/06/36/04/10/1000_F_636041025_Sih9tNIgxw2madJPj518Z3s0pQaSnSVN.jpg",
		location: "Avenida 123",
		phone: "+417994002693",
		name: "Dueño",
		lastName: "Apellido",
		brand: "",
		platos: [
			{
				id: "1",
				name: "Hamburguesa 1",
				description: "Con de todo",
				image_url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cf29c385555335.5d7fb3c164383.jpg",
				price: "15.50",
				disponible: STATUS_DISPONIBLE,
			},
			{
				id: "2",
				name: "Hamburguesa 2",
				description: "Con de todo 2",
				image_url: "https://www.carnicerosdenavarra.com/wp-content/uploads/2023/02/smashburguer.jpg",
				price: "18",
				disponible: STATUS_DISPONIBLE,
			},
			{
				id: "3",
				name: "Hamburguesa 3",
				description: "Con de todo 3",
				image_url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/ea/5b/a0/combo-de-hamburguesa.jpg",
				price: "22",
				disponible: STATUS_DISPONIBLE,
			},
		],
	},
];

export const findRestaurantByEmail = (email: string) => {
	const foundResto = mocked_restaurant_details.find((i) => i.email == email);
	return foundResto ? foundResto : mocked_restaurant_details[0];
};
