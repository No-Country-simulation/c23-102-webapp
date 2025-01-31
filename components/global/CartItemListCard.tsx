import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { PlatoType } from "@/types/PlatoType";
import { Button } from "../ui/button";

function CartItemListCard({ id, product, quantity }: { id: string; product: PlatoType; quantity: number }) {
	const { removeFromCart } = useCart();
	const { name, description, price, image_url } = product;
	return (
		<article className="w-full h-[8.3rem] flex flex-row gap-4 items-center rounded-lg overflow-hidden pr-4">
			{/* Contenedor de la imagen o el fallback (30% del ancho) */}
			<div className="w-[38%] h-full flex items-center justify-center rounded-xl overflow-hidden">
				{image_url ? (
					<Image src={image_url} alt={name} width={0} height={0} className="w-full h-full object-cover" />
				) : (
					<span className="w-full h-full rounded-lg flex items-center justify-center bg-gray-700 text-white font-bold text-5xl">
						{name.charAt(0).toUpperCase()}
					</span>
				)}
			</div>
			<div className="grow flex flex-col">
				<h2 className="text-sm font-bold">{name}</h2>
				<p className="text-sm font-thin">{description}</p>
				{price && <span className="text-[color:--primary-color] text-md font-bold">{price + " $"}</span>}
				<p className="max-w-[3.8rem] text-xs font-semibold text-red-600 cursor-pointer" onClick={() => removeFromCart(id)}>
					Remover
				</p>
			</div>
			<aside className="font-semibold">x {quantity}</aside>
		</article>
	);
}

export default CartItemListCard;
