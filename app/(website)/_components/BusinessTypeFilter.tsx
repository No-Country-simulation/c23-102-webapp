"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Dropdown } from "@/components/global/Dropdown";
import { ScrollableCarousel } from "@/components/global/ScrollableCarousel";

const BusinessTypeFilter = ({
	businessTypes,
	className,
}: {
	businessTypes: Array<string>;
	className?: string;
}) => {
	const [selectedBusinessType, setSelectedBusinessType] = useState<string | null>(null);

	const handleSelectItem = (item: string): void => {
		setSelectedBusinessType(item);
	};

	return (
		<article className={cn("items-center w-full", className)}>
			<Dropdown items={businessTypes} onSelectItem={handleSelectItem} selected={selectedBusinessType}></Dropdown>
			<ScrollableCarousel
				labels={businessTypes}
				onSelectItem={handleSelectItem}
				selected={selectedBusinessType}
			></ScrollableCarousel>
		</article>
	);
};

export default BusinessTypeFilter;
