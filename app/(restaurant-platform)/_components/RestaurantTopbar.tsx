"use client";

import LinkWithIcon from "@/components/global/LinkWithIcon";
import { Logo } from "@/components/global/Logo";
import { RESTAURANT_ROUTES } from "@/constants/routes";
import { useUser } from "@/context/UserContext";

export const RestaurantTopbar = () => {
	const { user } = useUser();

	if (user)
		return (
			<div className="hidden lg:block">
				<div className="absolute top-0 bg-black shadow-[0_0.1px_1px_rgba(255,255,255,0.4)] py-3 pt-6 base-top-styles base-top-styles-lg">
					<div className="flex justify-between items-center w-10/12 xl:w-[85%]">
						<Logo width={80} className={"lg:w-24"}></Logo>
						<div className="flex flex-row items-center justify-center gap-8">
							<LinkWithIcon route={RESTAURANT_ROUTES.RESTAURANT_PLATOS}>Crear</LinkWithIcon>
							<LinkWithIcon route={RESTAURANT_ROUTES.RESTAURANT_MENUS}>Menus</LinkWithIcon>
							<LinkWithIcon route={RESTAURANT_ROUTES.RESTAURANT_PEDIDOS}>Pedidos</LinkWithIcon>
							<LinkWithIcon route={RESTAURANT_ROUTES.RESTAURANT_PROFILE}>Perfil</LinkWithIcon>
						</div>
						<h2 className="text-sm font-normal text-[color:--primary-color]">Bienvenido, {user.email}</h2>
					</div>
				</div>
			</div>
		);
};
