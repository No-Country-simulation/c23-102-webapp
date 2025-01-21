import React from "react";
import { Logo } from "@/components/global/Logo";
import { take_away_socials, take_away_footer_routes, take_away_footer_legal } from "@/constants/mock/takeAway-info";
import LinkWithIcon from "@/components/global/LinkWithIcon";
import Link from "next/link";
import NewsletterBanner from "@/components/global/NewsletterBanner";

export const Footer = () => {
	return (
		<div className="h-full bottom-0 base-top-styles  bg-[#0D0402] text-white shadow-[0_0_0.6px_0.1px_rgba(255,255,255,0.5)] pt-12 pb-20">
			<div className="flex flex-col gap-10 items-center w-[75%] max-w-screen-2xl base-footer-styles-xl xl:w-[90%]">
				{/* Logo & Socials */}
				<article className="w-full flex flex-col items-start gap-2 xl:w-[65%]">
					<Logo width={110}></Logo>
					<div className="flex gap-3 items-center">
						{take_away_socials.map(({ id, icon, url }) => {
							return (
								<LinkWithIcon key={id} route={url}>
									{React.createElement(icon)}
								</LinkWithIcon>
							);
						})}
					</div>
				</article>
				<article className="w-full flex flex-col items-start gap-3 xl:w-[65%]">
					{take_away_footer_routes.map(({ id, name, url }) => {
						return (
							<Link key={id} href={url} className="font-thin">
								{name}
							</Link>
						);
					})}
				</article>
				<article className="w-full flex flex-col items-start gap-3 xl:w-[65%]">
					{take_away_footer_legal.map(({ id, name, url }) => {
						return (
							<Link key={id} href={url} className="font-thin">
								{name}
							</Link>
						);
					})}
				</article>
				<article className="w-full flex flex-col items-start gap-3">
					<NewsletterBanner className=""></NewsletterBanner>
				</article>
			</div>
		</div>
	);
};
