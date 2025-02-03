import { USER_TYPES } from "@/constants/app_constants";

export interface LoginRequest {
	email: string;
	password: string;
}

export interface ClientLoginResponse {
	email: string;
	accountType: typeof USER_TYPES.CLIENT | typeof USER_TYPES.RESTAURANT;
	fullName?: string;
}

export interface RestaurantLoginResponse {
	email: string;
	accountType: typeof USER_TYPES.CLIENT | typeof USER_TYPES.RESTAURANT;
	locationName?: string;
}

export interface UserContextType {
	user: (ClientLoginResponse & RestaurantLoginResponse) | null;
	loading: boolean;
	updateUser: (user: (ClientLoginResponse | RestaurantLoginResponse) | null) => void;
	logoutUser: () => void;
}
