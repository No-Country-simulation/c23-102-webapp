import React from "react";
import Link from "next/link";
import { cardWithIconProps } from "@/types/props/websiteProps";

import { Card, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";

const CardWithIcon = ({ route, icon, title, subtitle }: cardWithIconProps) => {
	return (
		<Link href={route} className=" w-full">
			<Card className="cardContainerStyles">
				<CardHeader className="cardStyles">
					{icon}
					<CardTitle>{title}</CardTitle>
					<CardDescription>{subtitle}</CardDescription>
				</CardHeader>
			</Card>
		</Link>
	);
};

export default CardWithIcon;
