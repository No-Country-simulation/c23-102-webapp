import { ClientLoginResponse, RestaurantLoginResponse } from "@/types/Authentication";
import { RestaurantDetailsType } from "@/types/RestaurantTypes";
import { USER_TYPES } from "../app_constants";

export const loggedClient: ClientLoginResponse = {
	email: "client@takeaway.com",
	accountType: USER_TYPES.CLIENT,
	fullName: "Fake Client",
};

export const loggedRestaurant: RestaurantLoginResponse = {
	email: "resto@takeaway.com",
	accountType: USER_TYPES.RESTAURANT,
	locationName: "Fast Food!",
};

export const loggedRestaurantDetails: RestaurantDetailsType = {
	email: "resto@takeaway.com",
	locationName: "American Dinner",
	description: "Deluxe",
	category: "Bar",
	image_url: "https://as1.ftcdn.net/v2/jpg/06/36/04/10/1000_F_636041025_Sih9tNIgxw2madJPj518Z3s0pQaSnSVN.jpg",
	location: "Avenida 123",
	phone: "+417994002693",
	name: "Dueño",
	lastName: "Apellido",
	brand: "",
};
