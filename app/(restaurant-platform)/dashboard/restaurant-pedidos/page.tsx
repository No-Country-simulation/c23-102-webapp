"use client";

import Container from "@/components/global/Container";
import RestaurantPedidosListCard from "@/components/global/RestaurantPedidosListCard";
import { restaurant_pedidos } from "@/constants/mock/restaurant-pedidos";
import { useUser } from "@/context/UserContext";

const RestaurantPedidosPage = () => {
	const { user } = useUser();

	if (user)
		return (
			<Container size="center-container" className="flex flex-col pt-4">
				<div className="flex flex-col">
					<h2 className="font-semibold">En Proceso</h2>
					<span className=" border-b-[color:--primary-color] border-b-2 w-[8rem]"></span>
				</div>
				<div className="w-full flex flex-col gap-6 mt-8">
					{restaurant_pedidos.map((pedido) => {
						return <RestaurantPedidosListCard key={pedido.id} pedido={pedido}></RestaurantPedidosListCard>;
					})}
				</div>
			</Container>
		);
};

export default RestaurantPedidosPage;
