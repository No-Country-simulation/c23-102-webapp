export interface User {
	username: string;
	token: string; // JWT u otro token
}

export interface UserContextType {
	user: User | null;
	loading: boolean;
	updateUser: (user: User | null) => void;
	logoutUser: () => void;
}
