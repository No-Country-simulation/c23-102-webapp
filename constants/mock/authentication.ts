import { LoginResponse } from "@/types/Authentication";

export const loggedClient: LoginResponse = {
	email: "fake@client.com",
	accountType: "Client",
};

export const loggedRestaurant: LoginResponse = {
	email: "fake@restaurant.com",
	accountType: "Restaurant",
};
