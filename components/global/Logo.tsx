import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import TakeAwayLogo from "../../public/images/TakeAwayLogo.png";
import { WEBSITE_ROUTES } from "@/constants/routes";

export const Logo = ({
	height = 30,
	width = 30,
	className,
}: {
	height?: number;
	width?: number;
	className?: string;
}) => {
	return (
		<Link href={WEBSITE_ROUTES.HOME} className={cn("transition items-center gap-x-2 md:flex")}>
			<Image src={TakeAwayLogo} alt={"Logo"} height={height} width={width} className={className} />
		</Link>
	);
};
