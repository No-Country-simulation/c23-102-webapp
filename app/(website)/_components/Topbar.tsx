import { Logo } from "@/components/global/Logo";

export const Topbar = () => {
	return (
		<div className="absolute top-0 w-full py-5 px-8 bg-black border-b-[0.5px] border-l-white">
			<Logo width={90}></Logo>
		</div>
	);
};
