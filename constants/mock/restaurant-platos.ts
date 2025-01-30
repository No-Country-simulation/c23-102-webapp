import { PlatoResponse, PlatoType } from "@/types/PlatoType";

export const mocked_platos: Array<PlatoType> = [
	{
		id: "1",
		name: "Hamburguesa 1",
		description: "Con de todo",
		image_url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cf29c385555335.5d7fb3c164383.jpg",
		price: "15.50",
		disponible: "disponible",
		cartaId: "2",
	},
	{
		id: "2",
		name: "Hamburguesa 2",
		description: "Con de todo 2",
		image_url: "https://www.carnicerosdenavarra.com/wp-content/uploads/2023/02/smashburguer.jpg",
		price: "18",
		disponible: "disponible",
		cartaId: "3",
	},
	{
		id: "3",
		name: "Hamburguesa 3",
		description: "Con de todo 3",
		image_url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/ea/5b/a0/combo-de-hamburguesa.jpg",
		price: "22",
		disponible: "disponible",
		cartaId: "1",
	},
];

export const mocked_single_plato = {
	id: "1",
	name: "Hamburguesa 1",
	description: "Con de todo",
	image_url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cf29c385555335.5d7fb3c164383.jpg",
	price: "15.50",
	disponible: true,
	cartaId: "3",
};

export const mocked_plato_response = {
	id: "1",
	name: "Hamburguesa 1",
	description: "Con de todo",
	image_url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cf29c385555335.5d7fb3c164383.jpg",
	price: "15.50",
	disponible: true,
	cartaId: "1",
};

export const findPlatosByCartaId = (id: string): Array<PlatoResponse> => {
	const found = mocked_platos.filter((i) => i.id !== id);
	return found ? found : mocked_platos;
};
