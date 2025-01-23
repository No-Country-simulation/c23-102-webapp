import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

function LinkWithIcon({
	children,
	route,
	className,
}: {
	children: React.ReactNode;
	route: string;
	className?: string;
}) {
	return (
		<Link href={route} className={cn("", className)}>
			{children}
		</Link>
	);
}

export default LinkWithIcon;
