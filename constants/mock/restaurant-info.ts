import { RestaurantDetailsType, RestaurantShortInfoType } from "@/types/RestaurantTypes";

export const mocked_restaurants: Array<RestaurantShortInfoType> = [
	{
		id: "1",
		image_url: "https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg",
		name: "Kampai",
		description: "Gastronomia Nikkei",
		category: {
			id: "1",
			category: "Restaurante",
		},
	},
	{
		id: "2",
		image_url: "https://images.pexels.com/photos/29913261/pexels-photo-29913261.jpeg",
		name: "Fast Food",
		description: "Hamburguesa y papitas",
		category: {
			id: "1",
			category: "Restaurante",
		},
	},
	{
		id: "3",
		image_url: "https://images.pexels.com/photos/30302240/pexels-photo-30302240/free-photo-of-pizza-nina.jpeg",
		name: "La Rotonde",
		description: "Vera cucina italiana",
		category: {
			id: "4",
			category: "Heladeria",
		},
	},
	{
		id: "4",
		image_url: "https://images.pexels.com/photos/30238701/pexels-photo-30238701/free-photo-of-plano.jpeg",
		name: "Oh la la!",
		description: "Comida francesa",
		category: {
			id: "3",
			category: "Bar",
		},
	},
	{
		id: "5",
		image_url:
			"https://dirona.com/wp-content/uploads/2018/08/Beverlys-at-The-Coeur-d%E2%80%99Alene-Resort-in-Coeur-d%E2%80%99Alene-ID-Owners-Dining-Room-DiRoNA-Awarded-Restaurant.png",
		name: "Holy Cow",
		description: "Las mejores hamburguesas",
		category: {
			id: "1",
			category: "Restaurante",
		},
	},
	{
		id: "6",
		image_url: "https://www.coastlinenservices.com/wp-content/uploads/2019/07/shutterstock_741884605.jpg",
		name: "Ninja Burguer",
		description: "Con de todo",
		category: {
			id: "1",
			category: "Restaurante",
		},
	},
	{
		id: "7",
		image_url: "https://as1.ftcdn.net/v2/jpg/06/36/04/10/1000_F_636041025_Sih9tNIgxw2madJPj518Z3s0pQaSnSVN.jpg",
		name: "American Dinner",
		description: "De lujo para todos",
		category: {
			id: "3",
			category: "Bar",
		},
	},
];

export const mocked_restaurant_details: Array<RestaurantDetailsType> = [
	{
		id: "1",
		locationName: "Kampai",
		description: "Gastronomia Nikkei",
		category: {
			id: "1",
			category: "Restaurante",
		},
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
			},
			{
				id: "2",
				name: "Hamburguesa 2",
				description: "Con de todo 2",
				image_url: "https://www.carnicerosdenavarra.com/wp-content/uploads/2023/02/smashburguer.jpg",
				price: "18",
			},
			{
				id: "3",
				name: "Hamburguesa 3",
				description: "Con de todo 3",
				image_url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/ea/5b/a0/combo-de-hamburguesa.jpg",
				price: "22",
			},
		],
	},
	{
		id: "2",
		locationName: "Fast Food",
		description: "Hamburguesas y papitas :D",
		category: {
			id: "1",
			category: "Restaurante",
		},
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
			},
			{
				id: "2",
				name: "Hamburguesa 2",
				description: "Con de todo 2",
				image_url: "https://www.carnicerosdenavarra.com/wp-content/uploads/2023/02/smashburguer.jpg",
				price: "18",
			},
			{
				id: "3",
				name: "Hamburguesa 3",
				description: "Con de todo 3",
				image_url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/ea/5b/a0/combo-de-hamburguesa.jpg",
				price: "22",
			},
		],
	},
	{
		id: "3",
		locationName: "La Rotonde",
		description: "Cucina Italiana",
		category: {
			id: "4",
			category: "Heladeria",
		},
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
			},
			{
				id: "2",
				name: "Hamburguesa 2",
				description: "Con de todo 2",
				image_url: "https://www.carnicerosdenavarra.com/wp-content/uploads/2023/02/smashburguer.jpg",
				price: "18",
			},
			{
				id: "3",
				name: "Hamburguesa 3",
				description: "Con de todo 3",
				image_url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/ea/5b/a0/combo-de-hamburguesa.jpg",
				price: "22",
			},
		],
	},
	{
		id: "4",
		locationName: "Oh La La!",
		description: "French Style",
		category: {
			id: "3",
			category: "Bar",
		},
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
			},
			{
				id: "2",
				name: "Hamburguesa 2",
				description: "Con de todo 2",
				image_url: "https://www.carnicerosdenavarra.com/wp-content/uploads/2023/02/smashburguer.jpg",
				price: "18",
			},
			{
				id: "3",
				name: "Hamburguesa 3",
				description: "Con de todo 3",
				image_url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/ea/5b/a0/combo-de-hamburguesa.jpg",
				price: "22",
			},
		],
	},
	{
		id: "5",
		locationName: "Holy Cow!",
		description: "Las mejores hamburguesas",
		category: {
			id: "1",
			category: "Restaurante",
		},
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
			},
			{
				id: "2",
				name: "Hamburguesa 2",
				description: "Con de todo 2",
				image_url: "https://www.carnicerosdenavarra.com/wp-content/uploads/2023/02/smashburguer.jpg",
				price: "18",
			},
			{
				id: "3",
				name: "Hamburguesa 3",
				description: "Con de todo 3",
				image_url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/ea/5b/a0/combo-de-hamburguesa.jpg",
				price: "22",
			},
		],
	},
	{
		id: "6",
		locationName: "Ninja Burger",
		description: "Las mejores hamburguesas",
		category: {
			id: "1",
			category: "Restaurante",
		},
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
			},
			{
				id: "2",
				name: "Hamburguesa 2",
				description: "Con de todo 2",
				image_url: "https://www.carnicerosdenavarra.com/wp-content/uploads/2023/02/smashburguer.jpg",
				price: "18",
			},
			{
				id: "3",
				name: "Hamburguesa 3",
				description: "Con de todo 3",
				image_url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/ea/5b/a0/combo-de-hamburguesa.jpg",
				price: "22",
			},
		],
	},
	{
		id: "7",
		locationName: "American Dinner",
		description: "Deluxe",
		category: {
			id: "3",
			category: "Bar",
		},
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
			},
			{
				id: "2",
				name: "Hamburguesa 2",
				description: "Con de todo 2",
				image_url: "https://www.carnicerosdenavarra.com/wp-content/uploads/2023/02/smashburguer.jpg",
				price: "18",
			},
			{
				id: "3",
				name: "Hamburguesa 3",
				description: "Con de todo 3",
				image_url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/ea/5b/a0/combo-de-hamburguesa.jpg",
				price: "22",
			},
		],
	},
];

export const findRestaurantById = (id: string) => {
	const foundResto = mocked_restaurant_details.find((i) => i.id === id);

	return foundResto ? foundResto : mocked_restaurant_details[0];
};
