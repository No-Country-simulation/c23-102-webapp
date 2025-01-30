"use server";

import { LOGIN_ERROR_MSG, SERVER_ERROR } from "@/constants/app_constants";
import { loggedRestaurantDetails } from "@/constants/mock/authentication";
import { findRestaurantByEmail } from "@/constants/mock/restaurant-info";
import { RestaurantDetailsType, RestaurantProfileDetailsType } from "@/types/RestaurantTypes";
import axios from "axios";

export async function restaurantDetails(email: string): Promise<RestaurantDetailsType> {
	try {
		// ================================
		//	Backend Call
		// ================================
		// const response = await axios.post<LoginResponse>(
		// 	`${process.env.NEXT_PUBLIC_REMOTE_BASE_API_URL}${LOGIN_URL}`,
		// 	body
		// );
		// return response.data;
		return findRestaurantByEmail(decodeURIComponent(email));
	} catch (error) {
		if (axios.isAxiosError(error) && error.response && error.response.status !== 500) {
			throw new Error(LOGIN_ERROR_MSG);
		}
		throw new Error(SERVER_ERROR);
	}
}

export async function restaurantProfileByEmail(email: string): Promise<RestaurantProfileDetailsType> {
	try {
		// ================================
		//	Backend Call
		// ================================
		// const response = await axios.post<LoginResponse>(
		// 	`${process.env.NEXT_PUBLIC_REMOTE_BASE_API_URL}${LOGIN_URL}`,
		// 	body
		// );
		// return response.data;
		return loggedRestaurantDetails;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response && error.response.status !== 500) {
			throw new Error(LOGIN_ERROR_MSG);
		}
		throw new Error(SERVER_ERROR);
	}
}
