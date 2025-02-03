import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { PedidoType } from "@/types/PedidoType";

function PedidosListCard({ pedido, isScrollable }: { pedido: PedidoType; isScrollable?: boolean }) {
	const { restaurant, image_url, price, itemAmount, status } = pedido;
	return (
		<div className="w-full h-[8.3rem] flex flex-row gap-4 items-center rounded-lg overflow-hidden pr-4">
			{/* Contenedor de la imagen o el fallback (30% del ancho) */}
			<div
				className={`${
					isScrollable ? "w-[7.3rem]" : "w-[38%]"
				} h-full flex items-center justify-center rounded-xl overflow-hidden"`}
			>
				{image_url ? (
					<Image src={image_url} alt={restaurant} width={0} height={0} className="w-full h-full object-cover" />
				) : (
					<span className="w-full h-full rounded-lg flex items-center justify-center bg-gray-700 text-white font-bold text-5xl">
						{restaurant.charAt(0).toUpperCase()}
					</span>
				)}
			</div>
			<div className="grow flex flex-col">
				<h2 className="text-sm font-bold">{restaurant}</h2>
				<p className="text-sm font-thin">Items: {itemAmount}</p>
				{price && <span className="text-[color:--primary-color] text-md font-bold">{price + " $"}</span>}
				<span
					className={`text-xs font-semibold ${
						status == "Entregado" ? "text-green-600 opacity-70" : "text-[color:--primary-color]"
					} capitalize"`}
				>
					{status}
				</span>
			</div>
			<ChevronRight className=""></ChevronRight>
		</div>
	);
}

export default PedidosListCard;
