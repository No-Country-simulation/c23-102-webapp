import Link from "next/link";
import Image from "next/image";

import TakeAwayLogo from "../../public/images/TakeAwayLogo.png";

export const Logo = ({ height = 30, width = 30 }) => {
	return (
		<Link href="/" className="transition items-center gap-x-2 md:flex">
			<Image src={TakeAwayLogo} alt={"Logo"} height={height} width={width} />
		</Link>
	);
};
