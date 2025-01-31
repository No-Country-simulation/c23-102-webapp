"use client";

import { ClientTopbar } from "@/app/(client-platform)/_components/ClientTopbar";
import { RestaurantTopbar } from "@/app/(restaurant-platform)/_components/RestaurantTopbar";
import LinkButton from "@/components/global/LinkButton";
import LinkWithIcon from "@/components/global/LinkWithIcon";
import { Logo } from "@/components/global/Logo";
import MediaRendering from "@/components/global/MediaRendering";
import { USER_TYPES } from "@/constants/app_constants";
import { WEBSITE_ROUTES } from "@/constants/routes";
import { useUser } from "@/context/UserContext";
import { Search, User } from "lucide-react";

export const Topbar = () => {
	const { user } = useUser();

	if (user && user.accountType == USER_TYPES.CLIENT) {
		return <ClientTopbar></ClientTopbar>;
	}

	if (user && user.accountType == USER_TYPES.RESTAURANT) {
		return <RestaurantTopbar></RestaurantTopbar>;
	}

	return (
		<div className="absolute top-0 bg-black shadow-[0_0.1px_1px_rgba(255,255,255,0.4)] py-3 pt-6 base-top-styles base-top-styles-lg z-50">
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
				</div>
			</div>
		</div>
	);
};
