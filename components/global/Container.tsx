import { cn } from "@/lib/utils";
import React from "react";

function Container({ size, children, className }: { size: string; children: React.ReactNode; className?: string }) {
	return <div className={cn(`${size}`, className)}>{children}</div>;
}

export default Container;
