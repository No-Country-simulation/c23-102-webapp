"use client";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { RESTAURANT_ROUTES } from "@/constants/routes";

export function MenuBreadcrumbs({ current }: { current: string }) {
	console.log(current);
	return (
		<Breadcrumb className="px-5 pt-3">
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href={RESTAURANT_ROUTES.RESTAURANT_MENU}>Carta</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage className="text-white">{current}</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}
