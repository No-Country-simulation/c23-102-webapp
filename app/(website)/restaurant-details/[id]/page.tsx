import React from "react";
import Container from "@/components/global/Container";
import { restaurantDetails } from "@/actions/restaurantsActions";

const RestaurantDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	const restaurant = await restaurantDetails(id);

	return (
		<div className="min-h-dvh escape-navbar escape-footer">
			<Container size="center-container-sm" className="flex flex-col items-center gap-8 pt-10">
				<h2>Detalles del Restaurante por ID</h2>
				<h2>{restaurant.locationName}</h2>
			</Container>
		</div>
	);
};

export default RestaurantDetailsPage;
