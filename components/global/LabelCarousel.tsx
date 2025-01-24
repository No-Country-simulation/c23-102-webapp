import React from "react";
import { cn } from "@/lib/utils";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { BusinessType } from "@/types/BusinessTypes";

export function LabelCarousel({
	labels,
	onSelectItem,
	selected,
}: {
	labels: Array<BusinessType>;
	onSelectItem: (item: BusinessType) => void;
	selected: BusinessType | null;
}) {
	return (
		<Carousel
			opts={{
				align: "start",
			}}
		>
			<CarouselContent className="gap-3">
				{labels.map((label) => (
					<Button
						key={label.id}
						variant={"outline"}
						onClick={() => onSelectItem(label)}
						className={cn("border-1", selected?.id === label.id ? "bg-white text-black" : "bg-white bg-opacity-[0.1]")}
					>
						{label.businessType}
					</Button>
				))}
			</CarouselContent>
		</Carousel>
	);
}
