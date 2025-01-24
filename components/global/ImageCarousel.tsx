import * as React from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { RestaurantShortInfoType } from "@/types/RestaurantShortInfoType";

export function ImageCarousel({ slides }: { slides: Array<RestaurantShortInfoType> }) {
	return (
		<Carousel className="w-full" opts={{ loop: true, align: "center", skipSnaps: true, dragFree: true }}>
			<CarouselContent className="flex gap-1 w-[90%] md:w-[60%] lg:w-[28%]">
				{slides.map((slide) => (
					<CarouselItem key={slide.id} className="h-[25rem] lg:h-[30rem]">
						<div className="h-full rounded-xl ">
							<Card className="h-full relative border-none">
								<Image
									src={slide.image_url}
									alt={slide.name}
									className="h-full rounded-xl"
									fill
									style={{
										objectFit: "cover",
									}}
								/>
								{/* Overlay */}
								<div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 h-[28%] flex items-center">
									<div className="inline-block px-4 align-middle w-full">
										<CardTitle className="text-white">{slide.name}</CardTitle>
										<CardDescription className="text-gray-200">{slide.description}</CardDescription>
										<div className="flex mt-3 flex-wrap gap-2">
											{slide.businessTypes.map((businessType) => {
												return (
													<Badge
														variant="secondary"
														className="bg-gray-500 text-gray-200 font-thin px-3 py-1 text-xs opacity-[0.65]"
														key={businessType.id}
													>
														{businessType.businessType}
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
