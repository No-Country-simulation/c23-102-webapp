export interface LoginRequest {
	email: string;
	password: string;
}

export interface LoginResponse {
	email: string;
	accountType: "Client" | "Restaurant";
	token?: string; // Agrega el JWT si se devuelve en la respuesta
}

export interface UserContextType {
	user: LoginResponse | null;
	loading: boolean;
	updateUser: (user: LoginResponse | null) => void;
	logoutUser: () => void;
}
