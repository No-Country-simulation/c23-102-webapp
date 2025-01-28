"use client";

import LinkButton from "@/components/global/LinkButton";
import LinkWithIcon from "@/components/global/LinkWithIcon";
import { Logo } from "@/components/global/Logo";
import MediaRendering from "@/components/global/MediaRendering";
import { CLIENT_ROUTES, RESTAURANT_ROUTES, WEBSITE_ROUTES } from "@/constants/routes";
import { useUser } from "@/context/UserContext";
import { Bell, Search, ShoppingBag, User } from "lucide-react";

export const Topbar = () => {
	const { user } = useUser();

	return (
		<div className="absolute top-0 bg-black shadow-[0_0.1px_1px_rgba(255,255,255,0.4)] py-3 pt-6 base-top-styles base-top-styles-lg">
			<div className="flex justify-between items-center w-10/12 xl:w-[85%]">
				<Logo width={85} className={"lg:w-28"}></Logo>
				<div className="flex text-white gap-3 self-end opacity-[0.9] lg:self-center lg:gap-7 lg:items-center">
					{!user && (
						<div className="flex flex-row gap-6 items-center">
							<MediaRendering minWidth="1024" maxWidth={null}>
								<LinkButton buttonClassName="button-fill-primary" route={WEBSITE_ROUTES.LOGIN}>
									Iniciar Sesion
								</LinkButton>
							</MediaRendering>
							<LinkWithIcon route={WEBSITE_ROUTES.HOME}>
								<Search size={"25px"} />
							</LinkWithIcon>
							<LinkWithIcon route={WEBSITE_ROUTES.LOGIN}>
								<User size={"25px"} />
							</LinkWithIcon>
						</div>
					)}

					{user && user.accountType == "Client" && (
						<div className="w-full flex flex-col gap-2 items-end lg:flex-row lg:gap-6">
							<h2 className="text-xs font-thin lg:text-sm">Bienvenido, {user.email}</h2>
							<div className="flex flex-row gap-4 items-center">
								<LinkWithIcon route={WEBSITE_ROUTES.HOME}>
									<Search size={"23px"} />
								</LinkWithIcon>
								<LinkWithIcon route={WEBSITE_ROUTES.HOME}>
									<Bell size={"23px"} />
								</LinkWithIcon>
								<LinkWithIcon route={WEBSITE_ROUTES.CART}>
									<ShoppingBag size={"23px"} />
								</LinkWithIcon>
								<LinkWithIcon route={CLIENT_ROUTES.CLIENT}>
									<User size={"23px"} />
								</LinkWithIcon>
							</div>
						</div>
					)}

					{user && user.accountType == "Restaurant" && (
						<div className="w-full flex flex-col gap-2 items-end lg:flex-row lg:gap-6">
							<h2 className="text-xs font-thin lg:text-sm">Bienvenido, {user.email}</h2>
							<div className="flex flex-row gap-4 items-center">
								<LinkWithIcon route={WEBSITE_ROUTES.HOME}>
									<Search size={"23px"} />
								</LinkWithIcon>
								<LinkWithIcon route={WEBSITE_ROUTES.HOME}>
									<Bell size={"23px"} />
								</LinkWithIcon>
								<LinkWithIcon route={WEBSITE_ROUTES.HOME}>
									<ShoppingBag size={"23px"} />
								</LinkWithIcon>
								<LinkWithIcon route={RESTAURANT_ROUTES.DASHBOARD}>
									<User size={"23px"} />
								</LinkWithIcon>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
