"use server";

import axios from "axios";
import { LOGIN_ERROR_MSG, REGISTER_RESTAURANT_URL, SERVER_ERROR } from "@/constants/app_constants";
import { loggedClient, loggedRestaurant } from "@/constants/mock/authentication";
import { ClientLoginResponse, RestaurantLoginResponse } from "@/types/Authentication";

export async function loginUser(body: FormData): Promise<ClientLoginResponse | RestaurantLoginResponse> {
	try {
		// ================================
		//	Backend Call
		// ================================
		// const response = await axios.post<LoginResponse>(
		// 	`${process.env.NEXT_PUBLIC_REMOTE_BASE_API_URL}${LOGIN_URL}`,
		// 	body
		// );
		// return response.data;

		if (body.get("email") == "client@takeaway.com") {
			return loggedClient;
		}
		if (body.get("email") == "resto@takeaway.com") {
			return loggedRestaurant;
		}
		return loggedRestaurant;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response && error.response.status !== 500) {
			throw new Error(LOGIN_ERROR_MSG);
		}
		throw new Error(SERVER_ERROR);
	}
}

export async function registerUser(body: FormData): Promise<ClientLoginResponse | RestaurantLoginResponse> {
	try {
		// ================================
		//	Backend Call
		// ================================
		// const response = await axios.post<LoginResponse>(
		// 	`${process.env.NEXT_PUBLIC_REMOTE_BASE_API_URL}${REGISTER_URL}`,
		// 	body
		// );
		// return response.data;
		return loggedRestaurant;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response && error.response.status !== 500) {
			throw new Error(LOGIN_ERROR_MSG);
		}
		throw new Error(SERVER_ERROR);
	}
}

export async function registerRestaurant(body: FormData): Promise<RestaurantLoginResponse> {
	try {
		// ================================
		//	Backend Call
		// ================================
		// const response = await axios.post<LoginResponse>(
		// 	`${process.env.NEXT_PUBLIC_REMOTE_BASE_API_URL}${REGISTER_RESTAURANT_URL}`,
		// 	body
		// );
		// return response.data;
		return loggedRestaurant;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response && error.response.status !== 500) {
			throw new Error(LOGIN_ERROR_MSG);
		}
		throw new Error(SERVER_ERROR);
	}
}

export async function registerClient(body: FormData): Promise<ClientLoginResponse> {
	try {
		const response = await axios.post<ClientLoginResponse>(
			`${process.env.NEXT_PUBLIC_REMOTE_BASE_API_URL}${REGISTER_RESTAURANT_URL}`,
			body
		);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response && error.response.status !== 500) {
			throw new Error(LOGIN_ERROR_MSG);
		}
		throw new Error(SERVER_ERROR);
	}
}

