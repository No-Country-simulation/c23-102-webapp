import React from "react";
import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { BusinessType } from "@/types/RestaurantTypes";

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
		<Carousel>
			<CarouselContent>
				{labels.map((label) => (
					<CarouselItem key={label.id}>
						<Button
							variant={"outline"}
							onClick={() => onSelectItem(label)}
							className={cn(
								"border-1",
								selected?.id === label.id ? "bg-white text-black" : "bg-white bg-opacity-[0.1]"
							)}
						>
							{label.businessType}
						</Button>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}
