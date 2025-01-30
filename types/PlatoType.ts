export interface PlatoType {
	id: string;
	name: string;
	description: string;
	image_url: string | null;
	price: string;
	disponible: "disponible" | "borrador";
	cartaId: string | null;
}

export interface PlatoResponse {
	id: string;
	name: string;
	description: string;
	image_url: string | null;
	price: string;
	disponible: "disponible" | "borrador";
	cartaId: string | null;
}

