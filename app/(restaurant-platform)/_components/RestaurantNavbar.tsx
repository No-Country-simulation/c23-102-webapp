import React from "react";
import Link from "next/link";
import { House, ReceiptText, User, Plus, UtensilsCrossed } from "lucide-react";
import { RESTAURANT_ROUTES } from "@/constants/routes";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export const RestaurantNavbar = () => {
	return (
		<div className="fixed bottom-0 w-full py-6 bg-black text-white shadow-[0_0.1px_0_0.25px_rgba(255,255,255,0.4)] lg:hidden">
			<div className="flex flex-row justify-between items-center w-[85%] m-auto sm:w-[75%]">
				<Link href={RESTAURANT_ROUTES.DASHBOARD} className="flex flex-col items-center justify-center">
					<House />
					<h3 className="font-thin text-sm">Inicio</h3>
				</Link>
				<Link href={RESTAURANT_ROUTES.RESTAURANT_CARTAS} className="flex flex-col items-center justify-center">
					<UtensilsCrossed />
					<h3 className="font-thin text-sm">Carta</h3>
				</Link>
				<Drawer>
					<DrawerTrigger asChild>
						<span className="flex flex-col items-center justify-center">
							<Plus />
							<h3 className="font-thin text-sm">Crear</h3>
						</span>
					</DrawerTrigger>
					<DrawerContent className="bg-black pb-8">
						<div className="mx-auto w-full max-w-sm text-white bg-black items-center">
							<DrawerHeader>
								<DrawerTitle className="font-thin text-sm text-center">Que quieres crear?</DrawerTitle>
								<VisuallyHidden>
									<DrawerDescription></DrawerDescription>
								</VisuallyHidden>
							</DrawerHeader>
							<div className="flex flex-col gap-2 w-[80%] m-auto items-center">
								<DrawerClose asChild className="bg-gray-900 w-full text-center py-2 rounded-full">
									<Link href={RESTAURANT_ROUTES.RESTAURANT_CARTAS}>Carta</Link>
								</DrawerClose>
								<DrawerClose asChild className="bg-gray-900 w-full text-center py-2 rounded-full">
									<Link href={RESTAURANT_ROUTES.RESTAURANT_PLATOS_CREATE}>Producto</Link>
								</DrawerClose>
							</div>
						</div>
					</DrawerContent>
				</Drawer>
				<Link href={RESTAURANT_ROUTES.RESTAURANT_PEDIDOS} className="flex flex-col items-center justify-center">
					<ReceiptText />
					<h3 className="font-thin text-sm">Pedidos</h3>
				</Link>
				<Link href={RESTAURANT_ROUTES.RESTAURANT_PROFILE} className="flex flex-col items-center justify-center">
					<User />
					<h3 className="font-thin text-sm">Cuenta</h3>
				</Link>
			</div>
		</div>
	);
};
