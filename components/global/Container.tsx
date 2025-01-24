import { cn } from "@/lib/utils";
import React from "react";

function Container({ children, className }: { children: React.ReactNode; className?: string }) {
	return <div className={cn("center-container", className)}>{children}</div>;
}

export default Container;
