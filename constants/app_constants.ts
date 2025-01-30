// ==================================
// Textos

import { RESTAURANT_ROUTES } from "./routes";

// ==================================
export const SERVER_ERROR = "Error de red o problema inesperado. Vuelva a intentar mas tarde.";
export const LOGIN_ERROR_MSG = "Error al iniciar sesión. Verifica tus credenciales.";
export const SUCCESS_CREATE_PLATO = {
	title: "Felicitaciones!",
	message: "Tu producto ha sido añadido exitosamente.",
	redirect_url: RESTAURANT_ROUTES.RESTAURANT_PLATOS,
};

// ==================================
// App Constants
// ==================================
export const COOKIE_NAME = "TakeAway-User";
export const USER_TYPES = {
	CLIENT: "Client",
	RESTAURANT: "Restaurant",
};

// ==================================
// Authentication
// ==================================
export const LOGIN_URL = "/login";
export const REGISTER_URL = "/register";
export const REGISTER_RESTAURANT_URL = "/register/restaurant";
export const REGISTER_CLIENT_URL = "/register/client";


// ==================================
// Restaurant
// ==================================

// ==================================
// User
// ==================================

// ==================================
// Platos
// ==================================