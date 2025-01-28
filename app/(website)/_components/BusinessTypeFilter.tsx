"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Dropdown } from "@/components/global/Dropdown";
import { BusinessType } from "@/types/RestaurantTypes";
import { ScrollableCarousel } from "@/components/global/ScrollableCarousel";

const BusinessTypeFilter = ({
	businessTypes,
	className,
}: {
	businessTypes: Array<BusinessType>;
	className?: string;
}) => {
	const [selectedBusinessType, setSelectedBusinessType] = useState<BusinessType | null>(null);

	const handleSelectItem = (item: BusinessType): void => {
		setSelectedBusinessType({ id: item.id, businessType: item.businessType });
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
