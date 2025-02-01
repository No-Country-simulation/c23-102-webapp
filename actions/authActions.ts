"use server";

import axios from "axios";
import {
	LOGIN_ERROR_MSG,
	LOGIN_URL,
	REGISTER_RESTAURANT_URL,
	REGISTER_URL,
	SERVER_ERROR,
} from "@/constants/app_constants";
import { loggedClient, loggedRestaurant } from "@/constants/mock/authentication";
import { LoginResponse } from "@/types/Authentication";

export async function loginUser(body: FormData): Promise<LoginResponse> {
	try {
		// ================================
		//	Backend Call
		// ================================
		// const response = await axios.post<LoginResponse>(
		// 	`${process.env.NEXT_PUBLIC_REMOTE_BASE_API_URL}${LOGIN_URL}`,
		// 	body
		// );
		// return response.data;


		return body.get("email") == "client@test.com" ? loggedClient : loggedRestaurant;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response && error.response.status !== 500) {
			throw new Error(LOGIN_ERROR_MSG);
		}
		throw new Error(SERVER_ERROR);
	}
}

export async function registerUser(body: FormData): Promise<LoginResponse> {
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

export async function registerRestaurant(body: FormData): Promise<LoginResponse> {
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

export async function registerClient(body: FormData): Promise<LoginResponse> {
	try {
		const response = await axios.post<LoginResponse>(
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

