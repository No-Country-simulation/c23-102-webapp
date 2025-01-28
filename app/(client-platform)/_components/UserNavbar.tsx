import React from "react";
import Link from "next/link";
import { House, ReceiptText, User, Search } from "lucide-react";
import { CLIENT_ROUTES, WEBSITE_ROUTES } from "@/constants/routes";

export const UserNavbar = () => {
	return (
		<div className="fixed bottom-0 w-full py-6 bg-black text-white shadow-[0_0.1px_0_0.25px_rgba(255,255,255,0.4)] lg:hidden">
			<div className="flex flex-row justify-between items-center w-[85%] m-auto sm:w-[75%]">
				<Link href={CLIENT_ROUTES.CLIENT} className="flex flex-col items-center justify-center">
					<House />
					<h3 className="font-thin text-sm">Inicio</h3>
				</Link>
				<Link href={WEBSITE_ROUTES.HOME} className="flex flex-col items-center justify-center">
					<Search />
					<h3 className="font-thin text-sm">Buscar</h3>
				</Link>
				<Link href={CLIENT_ROUTES.CLIENT_PEDIDOS} className="flex flex-col items-center justify-center">
					<ReceiptText />
					<h3 className="font-thin text-sm">Pedidos</h3>
				</Link>
				<Link href={CLIENT_ROUTES.CLIENT_PROFILE} className="flex flex-col items-center justify-center">
					<User />
					<h3 className="font-thin text-sm">Cuenta</h3>
				</Link>
			</div>
		</div>
	);
};
