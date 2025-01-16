import * as React from "react";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { mocked_categories } from "@/constants/mock/categories";
import { Button } from "../ui/button";

export function LabelCarousel() {
	return (
		<Carousel className="w-full">
			<CarouselContent className="pl-8 flex w-full gap-3 pr-5">
				{mocked_categories.map((category) => (
					<Button key={category.id} variant={"outline"} className="border-1 bg-white bg-opacity-[0.1]">
						{category.name}
					</Button>
				))}
			</CarouselContent>
		</Carousel>
	);
}
