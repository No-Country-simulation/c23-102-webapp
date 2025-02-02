import { RESTAURANT_ROUTES } from "./routes";

// ==================================
// Textos
// ==================================
export const SERVER_ERROR = "Error de red o problema inesperado. Vuelva a intentar mas tarde.";
export const LOGIN_ERROR_MSG = "Error al iniciar sesión. Verifica tus credenciales.";
export const SUCCESS_CREATE_PLATO = {
	title: "Felicitaciones!",
	message: "Tu producto ha sido añadido exitosamente.",
	redirect_url: RESTAURANT_ROUTES.RESTAURANT_PLATOS,
};
export const SUCCESS_UPDATE_PLATO = {
	title: "Felicitaciones!",
	message: "Tu producto ha sido modificado exitosamente.",
	redirect_url: RESTAURANT_ROUTES.RESTAURANT_PLATOS,
};

// ==================================
// App Constants
// ==================================
export const COOKIE_NAME = "TakeAway-User";
export const CART_LOCAL_STORAGE = "TakeAway-Cart";
export const USER_TYPES = {
	CLIENT: "Cliente",
	RESTAURANT: "Restaurante",
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
export const STATUS_DISPONIBLE = "disponible";
export const STATUS_BORRADOR = "borrador";
