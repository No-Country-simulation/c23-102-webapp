import * as React from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { mocked_restaurants } from "@/constants/mock/restaurant-info";
import Image from "next/image";

export function ImageCarousel() {
	return (
		<Carousel className="w-full" opts={{ loop: true, align: "center", skipSnaps: true, dragFree: true }}>
			<CarouselContent className="flex gap-1 w-[90%]">
				{mocked_restaurants.map((restaurant) => (
					<CarouselItem key={restaurant.id} className="h-[25rem]">
						<div className="h-full relative">
							<Card className="h-full rounded-xl">
								<Image
									src={restaurant.image_url}
									alt={restaurant.name}
									className="h-full rounded-xl"
									layout="fill"
									objectFit="cover"
								/>
								{/* Overlay */}
								<div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 h-[28%] flex items-center">
									<div className="inline-block px-4 align-middle w-full">
										<CardTitle className="text-white">{restaurant.name}</CardTitle>
										<CardDescription className="text-gray-200">{restaurant.distance}</CardDescription>
										<div className="flex mt-3 flex-wrap gap-2">
											{restaurant.categories.map((cat) => {
												return (
													<Badge variant="secondary" className="bg-gray-500 text-gray-200 font-thin" key={cat.id}>
														{cat.name}
													</Badge>
												);
											})}
										</div>
									</div>
								</div>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}
