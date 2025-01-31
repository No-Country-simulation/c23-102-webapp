import { USER_TYPES } from "@/constants/app_constants";

export interface LoginRequest {
	email: string;
	password: string;
}

export interface LoginResponse {
	email: string;
	accountType: typeof USER_TYPES.CLIENT | typeof USER_TYPES.RESTAURANT;
}

export interface UserContextType {
	user: LoginResponse | null;
	loading: boolean;
	updateUser: (user: LoginResponse | null) => void;
	logoutUser: () => void;
}
