"use server";

import axios from "axios";
import { LoginRequest, LoginResponse } from "@/types/authentication";
import { LOGIN_ERROR_MSG, LOGIN_URL, SERVER_ERROR } from "@/constants/app_constants";

export async function loginUser(body: LoginRequest): Promise<LoginResponse> {
	try {
		const response = await axios.post<LoginResponse>(`${process.env.NEXT_PUBLIC_LOCAL_BASE_API_URL}${LOGIN_URL}`, body);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response && error.response.status !== 500) {
			throw new Error(LOGIN_ERROR_MSG);
		}
		throw new Error(SERVER_ERROR);
	}
}
