import React from "react";
import Link from "next/link";
import { House, Search, ReceiptText, User } from "lucide-react";
import { WEBSITE_ROUTES } from "@/constants/routes";

export const Navbar = () => {
	return (
		<div className="absolute bottom-0 w-full py-6 px-10 bg-black text-white shadow-[0_0.1px_0_0.25px_rgba(255,255,255,0.4)]">
			<div className="flex h-auto text-xs text-center justify-between">
				<Link href={WEBSITE_ROUTES.HOME} className="flex flex-col items-center justify-center">
					<House />
					<h3 className="mt-1">Inicio</h3>
				</Link>
				<Link href={WEBSITE_ROUTES.HOME} className="flex flex-col items-center justify-center">
					<Search />
					<h3 className="mt-1">Buscar</h3>
				</Link>
				<Link href={WEBSITE_ROUTES.HOME} className="flex flex-col items-center justify-center">
					<ReceiptText />
					<h3 className="mt-1">Pedidos</h3>
				</Link>
				<Link href={WEBSITE_ROUTES.LOGIN} className="flex flex-col items-center justify-center">
					<User />
					<h3 className="mt-1">Cuenta</h3>
				</Link>
			</div>
		</div>
	);
};
