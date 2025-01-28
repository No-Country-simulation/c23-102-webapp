import React from "react";
import BG from "@/public/images/LoginBG.png";
import Container from "@/components/global/Container";
import { restaurantDetails } from "@/actions/restaurantsActions";

const RestaurantDetailsPage = async ({ params }: { params: { id: string } }) => {
	const { id } = await params;
	const restaurant = await restaurantDetails(id);

	return (
		<div
			className="min-h-dvh flex flex-col items-center justify-around"
			style={{
				backgroundColor: "max-md:bg-black",
				backgroundImage: `url(${BG.src})`,
				objectFit: "cover",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
		>
			<Container size="center-container-sm" className="flex flex-col items-center gap-8">
				<h2>Detalles del Restaurante por ID</h2>
				<h2>{restaurant.locationName}</h2>
			</Container>
		</div>
	);
};

export default RestaurantDetailsPage;
