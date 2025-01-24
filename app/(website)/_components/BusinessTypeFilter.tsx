"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Dropdown } from "@/components/global/Dropdown";
import { LabelCarousel } from "@/components/global/LabelCarousel";
import { BusinessType } from "@/types/BusinessTypes";

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
		<>
			<article className={cn("flex items-center justify-between", className)}>
				<Dropdown items={businessTypes} onSelectItem={handleSelectItem} selected={selectedBusinessType}></Dropdown>
				<LabelCarousel
					labels={businessTypes}
					onSelectItem={handleSelectItem}
					selected={selectedBusinessType}
				></LabelCarousel>
			</article>
		</>
	);
};

export default BusinessTypeFilter;
