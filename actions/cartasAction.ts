import { LOGIN_ERROR_MSG, SERVER_ERROR } from "@/constants/app_constants";
import { findCartaById, findCartasByRestaurantEmail } from "@/constants/mock/restaurant-carta";
import { CartaResponse } from "@/types/CartaType";
import axios from "axios";

export async function cartaDetails(id: string): Promise<CartaResponse> {
	try {
		// ================================
		//	Backend Call
		// ================================
		// const response = await axios.post<LoginResponse>(
		// 	`${process.env.NEXT_PUBLIC_REMOTE_BASE_API_URL}${LOGIN_URL}`,
		// 	body
		// );
		// return response.data;

		return findCartaById(id);
	} catch (error) {
		if (axios.isAxiosError(error) && error.response && error.response.status !== 500) {
			throw new Error(LOGIN_ERROR_MSG);
		}
		throw new Error(SERVER_ERROR);
	}
}

export async function fetchCartasByRestaurantEmail(email: string): Promise<Array<CartaResponse>> {
	try {
		// ================================
		//	Backend Call
		// ================================
		// const response = await axios.post<LoginResponse>(
		// 	`${process.env.NEXT_PUBLIC_REMOTE_BASE_API_URL}${LOGIN_URL}`,
		// 	body
		// );
		// return response.data;

		return findCartasByRestaurantEmail(email);
	} catch (error) {
		if (axios.isAxiosError(error) && error.response && error.response.status !== 500) {
			throw new Error(LOGIN_ERROR_MSG);
		}
		throw new Error(SERVER_ERROR);
	}
}
