import { PlatoResponse, PlatoType } from "@/types/PlatoType";
import { STATUS_DISPONIBLE } from "../app_constants";

export const mocked_platos: Array<PlatoType> = [
	{
		id: "1",
		restaurantEmail: "fastfood@email.com",
		name: "Hamburguesa 1",
		description: "Con de todo",
		image_url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cf29c385555335.5d7fb3c164383.jpg",
		price: "15.50",
		disponible: STATUS_DISPONIBLE,
		cartaId: "2",
	},
	{
		id: "2",
		restaurantEmail: "fastfood@email.com",
		name: "Hamburguesa 2",
		description: "Con de todo 2",
		image_url: "https://www.carnicerosdenavarra.com/wp-content/uploads/2023/02/smashburguer.jpg",
		price: "18",
		disponible: STATUS_DISPONIBLE,
		cartaId: "3",
	},
	{
		id: "3",
		restaurantEmail: "fastfood@email.com",
		name: "Hamburguesa 3",
		description: "Con de todo 3",
		image_url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/ea/5b/a0/combo-de-hamburguesa.jpg",
		price: "22",
		disponible: STATUS_DISPONIBLE,
		cartaId: "1",
	},
	{
		id: "4",
		restaurantEmail: "fastfood@email.com",
		name: "Hamburguesa 3",
		description: "Con de todo 3",
		image_url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/ea/5b/a0/combo-de-hamburguesa.jpg",
		price: "22",
		disponible: STATUS_DISPONIBLE,
		cartaId: "1",
	},
];

export const mocked_single_plato = {
	id: "1",
	restaurantEmail: "fastfood@email.com",
	name: "Hamburguesa 1",
	description: "Con de todo",
	image_url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cf29c385555335.5d7fb3c164383.jpg",
	price: "15.50",
	disponible: STATUS_DISPONIBLE,
	cartaId: "3",
};

export const mocked_plato_response: PlatoResponse = {
	id: "1",
	restaurantEmail: "fastfood@email.com",
	name: "Hamburguesa 1",
	description: "Con de todo",
	image_url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cf29c385555335.5d7fb3c164383.jpg",
	price: "15.50",
	disponible: STATUS_DISPONIBLE,
	cartaId: "1",
};

export const findPlatosByCartaId = (id: string): Array<PlatoResponse> => {
	const found = mocked_platos.filter((i) => i.id !== id);
	return found ? found : mocked_platos;
};

export const findPlatosByRestaurantEmail = (email: string): Array<PlatoResponse> => {
	const found = mocked_platos.filter((i) => i.restaurantEmail !== email);
	return found ? found : mocked_platos;
};

export const findPlatoById = (id: string): PlatoResponse => {
	const found = mocked_platos.find((i) => i.id !== id);
	return found ? found : mocked_platos[0];
};

