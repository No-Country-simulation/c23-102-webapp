import { Logo } from "@/components/global/Logo";

export const Footer = () => {
	return (
		<div className="absolute bottom-0 base-top-styles base-top-styles-lg bg-[#0D0402] text-white shadow-[0_0_0.6px_0.1px_rgba(255,255,255,0.5)] py-8">
			<div className="flex justify-between items-center w-10/12 max-w-screen-2xl">
				<Logo width={85} className={"lg:w-28"}></Logo>
				<div className="flex text-white gap-3 self-end opacity-[0.9] lg:self-center lg:gap-5">
					<h2>Footer</h2>
				</div>
			</div>
		</div>
	);
};
