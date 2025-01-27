import LinkButton from "@/components/global/LinkButton";
import LinkWithIcon from "@/components/global/LinkWithIcon";
import { Logo } from "@/components/global/Logo";
import MediaRendering from "@/components/global/MediaRendering";
import { WEBSITE_ROUTES } from "@/constants/routes";
import { Bell, Search, ShoppingBag, User } from "lucide-react";

export const Topbar = () => {
	const loggedIn = false;

	return (
		<div className="absolute top-0 bg-black shadow-[0_0.1px_1px_rgba(255,255,255,0.4)] py-3 pt-6 base-top-styles base-top-styles-lg">
			<div className="flex justify-between items-center w-10/12 xl:w-[85%]">
				<Logo width={85} className={"lg:w-28"}></Logo>
				<div className="flex text-white gap-3 self-end opacity-[0.9] lg:self-center lg:gap-7 lg:items-center">
					{loggedIn ? (
						<>
							<LinkWithIcon route={WEBSITE_ROUTES.HOME}>
								<Search size={"25px"} />
							</LinkWithIcon>
							<LinkWithIcon route={WEBSITE_ROUTES.HOME}>
								<Bell size={"23px"} />
							</LinkWithIcon>
							<LinkWithIcon route={WEBSITE_ROUTES.HOME}>
								<ShoppingBag size={"23px"} />
							</LinkWithIcon>
						</>
					) : (
						<>
							<MediaRendering minWidth="1024" maxWidth={null}>
								<LinkButton buttonClassName="button-fill-dark" route={WEBSITE_ROUTES.LOGIN}>
									Iniciar Sesion
								</LinkButton>
							</MediaRendering>
							<LinkWithIcon route={WEBSITE_ROUTES.HOME}>
								<Search size={"25px"} />
							</LinkWithIcon>
							<LinkWithIcon route={WEBSITE_ROUTES.LOGIN}>
								<User size={"25px"} />
							</LinkWithIcon>
						</>
					)}
				</div>
			</div>
		</div>
	);
};
