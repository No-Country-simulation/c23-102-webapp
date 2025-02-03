import { PedidoType } from "@/types/PedidoType";

export const client_pedidos: Array<PedidoType> = [
	{
		id: "1",
		restaurant: "Bistro Parisien",
		image_url: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
		price: "57",
		itemAmount: 3,
		status: "En envio",
	},
	{
		id: "2",
		restaurant: "El Rancho",
		image_url: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg",
		price: "80",
		itemAmount: 5,
		status: "Entregado",
	},
	{
		id: "3",
		restaurant: "Beer Spot",
		image_url: "https://images.pexels.com/photos/13229769/pexels-photo-13229769.jpeg",
		price: "22",
		itemAmount: 3,
		status: "Entregado",
	},
];
