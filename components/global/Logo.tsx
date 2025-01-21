import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import TakeAwayLogo from "../../public/images/TakeAwayLogo.png";
import { WEBSITE_ROUTES } from "@/constants/routes";

export const Logo = ({ width = 30, className }: { width?: number; className?: string }) => {
	return (
		<Link href={WEBSITE_ROUTES.HOME} className={cn("transition items-center gap-x-2 md:flex")}>
			<Image src={TakeAwayLogo} alt={"Logo"} width={width} className={className} priority />
		</Link>
	);
};
