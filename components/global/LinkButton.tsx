import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";

function LinkButton({
	children,
	className,
	buttonClassName,
	route,
}: {
	children: React.ReactNode;
	className?: string;
	buttonClassName?: string;
	route: string;
}) {
	return (
		<Link href={route} className={cn("w-full", className)}>
			<Button className={cn("w-full", buttonClassName)}>{children}</Button>
		</Link>
	);
}

export default LinkButton;
