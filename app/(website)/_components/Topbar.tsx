import { Logo } from "@/components/global/Logo";
import { WEBSITE_ROUTES } from "@/constants/routes";
import { Bell, Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";

export const Topbar = () => {
	const loggedIn = false;

	return (
		<div className="absolute top-0 w-full py-3 pt-6 px-10 bg-black shadow-[0_0.1px_1px_rgba(255,255,255,0.4)] ">
			<div className="flex justify-between items-center">
				<Logo width={80}></Logo>
				<div className="flex text-white gap-3 self-end opacity-[0.9]">
					{loggedIn ? (
						<>
							<Bell size={"20px"}></Bell>
							<ShoppingBag size={"20px"}></ShoppingBag>
						</>
					) : (
						<>
							<Link href={WEBSITE_ROUTES.HOME}>
								<Search size={"20px"} />
							</Link>
							<Link href={WEBSITE_ROUTES.LOGIN}>
								<User size={"20px"} />
							</Link>
						</>
					)}
				</div>
			</div>
		</div>
	);
};
