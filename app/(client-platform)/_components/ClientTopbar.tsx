"use client";

import LinkWithIcon from "@/components/global/LinkWithIcon";
import { Logo } from "@/components/global/Logo";
import LogoutButton from "@/components/global/LogoutButton";
import { CLIENT_ROUTES, WEBSITE_ROUTES } from "@/constants/routes";
import { useCart } from "@/context/CartContext";
import { useUser } from "@/context/UserContext";
import { Bell, Search, ShoppingBag } from "lucide-react";

export const ClientTopbar = () => {
	const { user } = useUser();
	const { totalItems } = useCart();

	if (user)
		return (
			<>
				{/* Mobile */}
				<div className="absolute top-0 bg-black shadow-[0_0.1px_1px_rgba(255,255,255,0.4)] py-3 pt-6 base-top-styles base-top-styles-lg z-50">
					<div className="flex justify-between items-center w-10/12 xl:w-[85%]">
						<Logo width={85} className={"lg:w-28"}></Logo>
						<div className="flex text-white gap-3 self-end opacity-[0.9] lg:self-center lg:gap-7 lg:items-center">
							<div className="w-full flex flex-col gap-2 items-end lg:hidden">
								<div className="flex flex-row gap-4 items-center">
									<LinkWithIcon route={WEBSITE_ROUTES.HOME}>
										<Bell size={"23px"} />
									</LinkWithIcon>
									<div className="flex flex-row relative justify-center items-center">
										<LinkWithIcon route={WEBSITE_ROUTES.CART}>
											<ShoppingBag size={"23px"} />
											<span className="absolute -top-2 -right-2 bg-[color:--primary-color] text-black font-bold text-sm rounded-full h-5 w-5 flex items-center justify-center">
												{totalItems}
											</span>
										</LinkWithIcon>
									</div>
									<LogoutButton></LogoutButton>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Desktop */}
				<div className="hidden lg:block z-50">
					<div className="absolute top-0 bg-black shadow-[0_0.1px_1px_rgba(255,255,255,0.4)] py-3 pt-6 base-top-styles base-top-styles-lg z-50">
						<div className="flex justify-between items-center w-10/12 xl:w-[85%]">
							<Logo width={80} className={"lg:w-24"}></Logo>
							<div className="flex flex-row items-center justify-center gap-8">
								<LinkWithIcon route={CLIENT_ROUTES.CLIENT}>Inicio</LinkWithIcon>
								<LinkWithIcon route={WEBSITE_ROUTES.HOME}>Buscar</LinkWithIcon>
								<LinkWithIcon route={CLIENT_ROUTES.CLIENT_PEDIDOS}>Pedidos</LinkWithIcon>
								<LinkWithIcon route={CLIENT_ROUTES.CLIENT_PROFILE}>Perfil</LinkWithIcon>
							</div>
							<div className="flex flex-row items-center gap-4">
								<h2 className="text-sm font-thin text-[color:--primary-color]">Bienvenido, {user.fullName}</h2>
								<LinkWithIcon route={WEBSITE_ROUTES.HOME}>
									<Search size={"23px"} />
								</LinkWithIcon>
								<LinkWithIcon route={WEBSITE_ROUTES.HOME}>
									<Bell size={"23px"} />
								</LinkWithIcon>
								<div className="flex flex-row relative justify-center items-center">
									<LinkWithIcon route={WEBSITE_ROUTES.CART}>
										<ShoppingBag size={"23px"} />
										<span className="absolute -top-2 -right-2 bg-[color:--primary-color] text-black font-bold text-sm rounded-full h-5 w-5 flex items-center justify-center">
											{totalItems}
										</span>
									</LinkWithIcon>
								</div>
								<LogoutButton></LogoutButton>
							</div>
						</div>
					</div>
				</div>
			</>
		);
};
