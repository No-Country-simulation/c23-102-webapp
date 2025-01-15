import * as React from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { mocked_restaurants } from "@/constants/mock/restaurant-info";
import Image from "next/image";

export function ImageCarousel() {
	return (
		<Carousel className="w-full" opts={{ loop: true }}>
			<CarouselContent>
				{mocked_restaurants.map((restaurant) => (
					<CarouselItem key={restaurant.id} className="h-[20rem]">
						<div className="p-1 w-full h-full relative">
							<Card className="w-full h-full rounded-xl">
								<Image
									src={restaurant.image_url}
									alt="asd"
									className="w-full h-full rounded-xl"
									layout="fill"
									objectFit="cover"
								/>
								{/* Overlay */}
								<div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 h-[30%] p-3">
									<CardTitle className="text-white">{restaurant.name}</CardTitle>
									<CardDescription className="text-gray-200">{restaurant.distance}</CardDescription>
								</div>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}
