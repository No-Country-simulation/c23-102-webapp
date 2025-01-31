"use client";

import CartItemListCard from "@/components/global/CartItemListCard";
import Container from "@/components/global/Container";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
	const { cart, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();

	return (
		<div className="escape-navbar escape-footer">
			<Container size="center-container" className="flex flex-col gap-8 pt-10">
				<div className="flex flex-col">
					<h2 className="font-semibold">En Proceso</h2>
					<span className=" border-b-[color:--primary-color] border-b-2 w-[8rem]"></span>
				</div>
				<div className="w-[92%] flex flex-col gap-6 items-start">
					{cart.map(({ id, product, quantity }) => {
						return <CartItemListCard key={id} id={id} product={product} quantity={quantity}></CartItemListCard>;
					})}
				</div>
			</Container>
		</div>
	);
};

export default CartPage;
