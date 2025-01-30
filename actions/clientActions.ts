import { LOGIN_ERROR_MSG, SERVER_ERROR } from "@/constants/app_constants";
import { loggedClientDetails } from "@/constants/mock/client";

import { ClientProfileDetailsType } from "@/types/ClientTypes";
import axios from "axios";

export async function clientProfileByEmail(email: string): Promise<ClientProfileDetailsType> {
	try {
		// ================================
		//	Backend Call
		// ================================
		// const response = await axios.post<LoginResponse>(
		// 	`${process.env.NEXT_PUBLIC_REMOTE_BASE_API_URL}${LOGIN_URL}`,
		// 	body
		// );
		// return response.data;
		return loggedClientDetails;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response && error.response.status !== 500) {
			throw new Error(LOGIN_ERROR_MSG);
		}
		throw new Error(SERVER_ERROR);
	}
}
