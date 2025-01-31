export interface CartaType {
	id: string;
	restaurantEmail: string;
	title: string;
	description: string;
	image_url: string | null;
	status: "disponible" | "borrador";
}

export interface CartaResponse {
	id: string;
	restaurantEmail: string;
	title: string;
	description: string;
	image_url: string | null;
	status: "disponible" | "borrador";
}
