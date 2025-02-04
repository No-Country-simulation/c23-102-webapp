import { RestaurantPedidoType } from "@/types/PedidoType";

export const restaurant_pedidos: Array<RestaurantPedidoType> = [
	{
		id: "1",
		clientName: "Juan José",
		image_url: "https://www.shutterstock.com/image-photo/studio-portrait-smile-indian-student-260nw-2453208639.jpg",
		price: "57",
		itemAmount: 3,
		status: "En envio",
	},
	{
		id: "2",
		clientName: "Victor Ayala",
		image_url:
			"https://media.istockphoto.com/id/119094519/photo/portrait-of-a-young-handsome-man.jpg?s=612x612&w=0&k=20&c=aVOPnsCkhlzgitekfgVVK4MdGGP8MaST83u-snJZv5Y=",
		price: "80",
		itemAmount: 5,
		status: "Entregado",
	},
	{
		id: "3",
		clientName: "Tomas Padilla",
		price: "22",
		itemAmount: 3,
		status: "Entregado",
	},
];
