import React from "react";
import Container from "@/components/global/Container";
import { restaurantDetails } from "@/actions/restaurantsActions";
import { Topbar } from "../../_components/Topbar";
import { Footer } from "../../_components/Footer";

const RestaurantDetailsPage = async ({ params }: { params: { id: string } }) => {
	const { id } = await params;
	const restaurant = await restaurantDetails(id);

	return (
		<>
			<Topbar></Topbar>
			<div className="escape-navbar escape-footer">
				<Container size="center-container-sm" className="flex flex-col items-center gap-8 pt-10">
					<h2>Detalles del Restaurante por ID</h2>
					<h2>{restaurant.locationName}</h2>
				</Container>
			</div>
			<Footer></Footer>
		</>
	);
};

export default RestaurantDetailsPage;
