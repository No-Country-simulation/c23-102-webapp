"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Dropdown } from "@/components/global/Dropdown";
import { ScrollableCarousel } from "@/components/global/ScrollableCarousel";

const FilterCarouselWithDropdown = ({
	items,
	filterKeyword,
	setFilterKeyword,
	setIsLoading,
	className,
}: {
	items: Array<string>;
	filterKeyword: string | null;
	setFilterKeyword: (item: string | null) => void;
	setIsLoading: (args: boolean) => void;
	className?: string;
}) => {
	const handleSelectItem = (item: string) => {
		setIsLoading(true);
		setFilterKeyword(filterKeyword === item ? null : item);
		setTimeout(() => {
			setIsLoading(false);
		}, 850);
	};
	return (
		<article className={cn("items-center w-full", className)}>
			<Dropdown items={items} onSelectItem={handleSelectItem} selected={filterKeyword}></Dropdown>
			<ScrollableCarousel labels={items} onSelectItem={handleSelectItem} selected={filterKeyword}></ScrollableCarousel>
		</article>
	);
};

export default FilterCarouselWithDropdown;
