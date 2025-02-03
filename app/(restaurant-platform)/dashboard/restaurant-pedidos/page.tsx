"use client";

import Container from "@/components/global/Container";
import PedidosListCard from "@/components/global/PedidosListCard";
import { client_pedidos } from "@/constants/mock/client-pedidos";
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
					{client_pedidos.map((pedido) => {
						return <PedidosListCard key={pedido.id} pedido={pedido}></PedidosListCard>;
					})}
				</div>
			</Container>
		);
};

export default RestaurantPedidosPage;
