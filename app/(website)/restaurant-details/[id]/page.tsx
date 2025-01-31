import React from "react";
import Container from "@/components/global/Container";
import { restaurantDetails } from "@/actions/restaurantsActions";
import Image from "next/image";

const RestaurantDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	const { brand, category, description, email, image_url, lastName, name, location, locationName, phone, platos } =
		await restaurantDetails(id);

	return (
		<div className="min-h-dvh escape-navbar escape-footer relative">
			<Image
				src={image_url}
				alt="Selected Restaurant"
				width={0}
				height={0}
				className="w-full h-[68vh] object-cover pt-2"
			></Image>
			<Container size="center-container-sm" className="flex flex-col items-center gap-8 pt-10">
				<h2>Hola</h2>
			</Container>
		</div>
	);
};

export default RestaurantDetailsPage;
