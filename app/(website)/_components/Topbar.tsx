import { Logo } from "@/components/global/Logo";

export const Topbar = () => {
	return (
		<div className="absolute top-0 w-full py-5 px-10 bg-black shadow-[0_0.1px_1px_rgba(255,255,255,0.4)]">
			<Logo width={100}></Logo>
		</div>
	);
};
