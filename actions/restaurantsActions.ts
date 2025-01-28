"use server";

import { LOGIN_ERROR_MSG, SERVER_ERROR } from "@/constants/app_constants";
import { mocked_restaurant_details } from "@/constants/mock/restaurant-info";
import { RestaurantDetailsType } from "@/types/RestaurantTypes";
import axios from "axios";

export async function restaurantDetails(id: string): Promise<RestaurantDetailsType> {
	try {
		// ================================
		//	Backend Call
		// ================================
		// const response = await axios.post<LoginResponse>(
		// 	`${process.env.NEXT_PUBLIC_REMOTE_BASE_API_URL}${LOGIN_URL}`,
		// 	body
		// );
		// return response.data;
		return mocked_restaurant_details;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response && error.response.status !== 500) {
			throw new Error(LOGIN_ERROR_MSG);
		}
		throw new Error(SERVER_ERROR);
	}
}
