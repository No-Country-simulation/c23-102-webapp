import { STATUS_DISPONIBLE, STATUS_BORRADOR } from "@/constants/app_constants";

export interface PlatoType {
	id: string;
	restaurantEmail: string;
	cartaId?: string | null;
	name: string;
	description: string;
	image_url: string | null;
	price: string;
	disponible: typeof STATUS_DISPONIBLE | typeof STATUS_BORRADOR;
}

export interface PlatoResponse {
	id: string;
	restaurantEmail: string;
	cartaId?: string | null;
	name: string;
	description: string;
	image_url: string | null;
	price: string;
	disponible: typeof STATUS_DISPONIBLE | typeof STATUS_BORRADOR;
}

export interface PlatoImageCarouselType {
	cartaName: string;
	platos: Array<PlatoType>;
}