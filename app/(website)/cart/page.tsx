"use client";

import CartItemListCard from "@/components/global/CartItemListCard";
import Container from "@/components/global/Container";
import LinkButton from "@/components/global/LinkButton";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
	const { cart, totalPrice, getRestaurantSubtotals } = useCart();
	const restaurantSubtotals = getRestaurantSubtotals();

	return (
		<div className="escape-navbar escape-footer">
			<Container size="center-container" className="flex flex-col gap-8 pt-10">
				<div className="flex flex-col">
					<h2 className="font-semibold">En Proceso</h2>
					<span className=" border-b-[color:--primary-color] border-b-2 w-[8rem]"></span>
				</div>
				<div className="flex flex-col gap-[2.5rem] items-center justify-between">
					{Object.entries(restaurantSubtotals).map(([locationName, subtotal]) => (
						<article key={locationName} className="flex flex-col gap-4">
							<h2 className="font-bold text-2xl">{locationName}</h2>
							{cart
								.filter((item) => item.locationName === locationName)
								.map(({ id, product, quantity }) => (
									<CartItemListCard key={id} id={id} product={product} quantity={quantity} />
								))}
							<div className="flex flex-col gap-1 mt-[0.17rem] opacity-40">
								<div className="flex flex-row items-center justify-between w-[98%] m-auto">
									<h2 className="font-normal">Subtotal</h2>
									<p>{"$ " + subtotal.toFixed(2)}</p>
								</div>
								<span className="border-b-gray-600 border-b-2 w-full"></span>
							</div>
						</article>
					))}
				</div>
				<div className="flex flex-col gap-1 mt-[4rem]">
					<div className="flex flex-row items-center justify-between w-[95%] m-auto text-xl font-bold">
						<h2>TOTAL</h2>
						<p>{"$ " + totalPrice.toFixed(2)}</p>
					</div>
					<span className="border-b-gray-600 border-b-2 w-full"></span>
					<LinkButton route="/" buttonClassName="button-fill-primary" className="mt-[0.7rem]">
						Pagar!
					</LinkButton>
				</div>
			</Container>
		</div>
	);
};

export default CartPage;
