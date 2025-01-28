import { LoginResponse } from "@/types/Authentication";
import { RestaurantDetailsType } from "@/types/RestaurantTypes";

export const loggedClient: LoginResponse = {
	email: "fake@client.com",
	accountType: "Client",
};

export const loggedRestaurant: LoginResponse = {
	email: "fake@restaurant.com",
	accountType: "Restaurant",
};

export const loggedRestaurantDetails: RestaurantDetailsType = {
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
};