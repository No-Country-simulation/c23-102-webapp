import { Logo } from "@/components/global/Logo";
import { Bell, ShoppingBag } from "lucide-react";

export const Topbar = () => {
	return (
		<div className="absolute top-0 w-full py-3 pt-6 px-10 bg-black shadow-[0_0.1px_1px_rgba(255,255,255,0.4)] ">
			<div className="flex justify-between items-center">
				<Logo width={80}></Logo>
				<div className="flex text-white gap-3 self-end opacity-[0.9]">
					<Bell size={"20px"}></Bell>
					<ShoppingBag size={"20px"}></ShoppingBag>
				</div>
			</div>
		</div>
	);
};
