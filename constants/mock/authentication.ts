import { ClientLoginResponse, RestaurantLoginResponse } from "@/types/Authentication";
import { RestaurantDetailsType } from "@/types/RestaurantTypes";
import { USER_TYPES } from "../app_constants";

export const loggedClient: ClientLoginResponse = {
	email: "client@takeaway.com",
	accountType: USER_TYPES.CLIENT,
	fullName: "Fake Client",
};

export const loggedRestaurant: RestaurantLoginResponse = {
	email: "bistroparisien@email.com",
	accountType: USER_TYPES.RESTAURANT,
	locationName: "Fast Food!",
};

export const loggedRestaurantDetails: RestaurantDetailsType = {
	email: "bistroparisien@email.com",
	locationName: "American Dinner",
	description: "Deluxe",
	category: "Bar",
	image_url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/16/c0/ed/a7/restaurant-entrance-reception.jpg",
	location: "Avenida 123",
	phone: "+417994002693",
	name: "Dueño",
	lastName: "Apellido",
	brand: "",
};
