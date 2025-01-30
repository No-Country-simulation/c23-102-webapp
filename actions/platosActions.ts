import { LOGIN_ERROR_MSG, SERVER_ERROR } from "@/constants/app_constants";
import { findPlatosByCartaId, mocked_plato_response } from "@/constants/mock/restaurant-platos";
import { PlatoResponse } from "@/types/PlatoType";
import axios from "axios";

export async function createPlato(body: FormData): Promise<PlatoResponse> {
	try {
		// ================================
		//	Backend Call
		// ================================
		// const response = await axios.post<LoginResponse>(
		// 	`${process.env.NEXT_PUBLIC_REMOTE_BASE_API_URL}${LOGIN_URL}`,
		// 	body
		// );
		// return response.data;

		return mocked_plato_response;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response && error.response.status !== 500) {
			throw new Error(LOGIN_ERROR_MSG);
		}
		throw new Error(SERVER_ERROR);
	}
}

export async function fetchPlatosByCartaId(id: string): Promise<Array<PlatoResponse>> {
	try {
		// ================================
		//	Backend Call
		// ================================
		// const response = await axios.post<LoginResponse>(
		// 	`${process.env.NEXT_PUBLIC_REMOTE_BASE_API_URL}${LOGIN_URL}`,
		// 	body
		// );
		// return response.data;

		return findPlatosByCartaId(id);
	} catch (error) {
		if (axios.isAxiosError(error) && error.response && error.response.status !== 500) {
			throw new Error(LOGIN_ERROR_MSG);
		}
		throw new Error(SERVER_ERROR);
	}
}

