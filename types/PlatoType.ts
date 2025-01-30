import { STATUS_DISPONIBLE, STATUS_BORRADOR } from "@/constants/app_constants";

export interface PlatoType {
	id: string;
	name: string;
	description: string;
	image_url: string | null;
	price: string;
	disponible: typeof STATUS_DISPONIBLE | typeof STATUS_BORRADOR;
	cartaId: string | null;
}

export interface PlatoResponse {
	id: string;
	name: string;
	description: string;
	image_url: string | null;
	price: string;
	disponible: typeof STATUS_DISPONIBLE | typeof STATUS_BORRADOR;
	cartaId: string | null;
}
