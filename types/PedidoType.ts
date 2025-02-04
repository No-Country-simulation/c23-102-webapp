export interface PedidoType {
	id: string;
	restaurant: string;
	image_url: string;
	price: string;
	itemAmount: number;
	status: string;
}

export interface RestaurantPedidoType {
	id: string;
	clientName: string;
	image_url?: string;
	price: string;
	itemAmount: number;
	status: string;
}
