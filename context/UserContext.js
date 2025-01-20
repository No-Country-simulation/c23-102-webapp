"use client"; // Necesario para usar context en el lado del cliente
import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
	const [user, setUser] = useState(null);

	const updateUser = (userData) => {
		setUser(userData); // Actualiza el contexto con los datos del backend
	};

	return <UserContext.Provider value={{ user, updateUser }}>{children}</UserContext.Provider>;
}

export function useUser() {
	return useContext(UserContext);
}
