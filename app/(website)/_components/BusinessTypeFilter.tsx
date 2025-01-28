"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Dropdown } from "@/components/global/Dropdown";
import { CategoryType } from "@/types/RestaurantTypes";
import { ScrollableCarousel } from "@/components/global/ScrollableCarousel";

const BusinessTypeFilter = ({
	businessTypes,
	className,
}: {
	businessTypes: Array<CategoryType>;
	className?: string;
}) => {
	const [selectedBusinessType, setSelectedBusinessType] = useState<CategoryType | null>(null);

	const handleSelectItem = (item: CategoryType): void => {
		setSelectedBusinessType({ id: item.id, category: item.category });
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
