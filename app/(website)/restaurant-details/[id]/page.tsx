import React from "react";
import { restaurantDetails } from "@/actions/restaurantsActions";
import { fetchPlatosByRestaurantEmail } from "@/actions/platosActions";
import { fetchCartasByRestaurantEmail } from "@/actions/cartasAction";
import RestaurantDetailsClient from "./RestaurantDetailsClient";
import { PlatoType } from "@/types/PlatoType";

const RestaurantDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	const { description, image_url, location, locationName } = await restaurantDetails(id);
	const platos = await fetchPlatosByRestaurantEmail(id);
	const cartas = await fetchCartasByRestaurantEmail(id);

	// Crear un diccionario de cartas { cartaId: name }
	const cartasDict = cartas.reduce((acc: Record<string, string>, carta) => {
		acc[carta.id] = carta.title;
		return acc;
	}, {});

	// Agrupar los platos por cartaId, permitiendo null
	const groupedPlatos = platos.reduce((acc: Record<string, PlatoType[]>, plato) => {
		const key = plato.cartaId ?? "null"; // Si es null, usar "null" como clave
		if (!acc[key]) acc[key] = [];
		acc[key].push(plato);
		return acc;
	}, {});

	// Transformarlo en un array con la estructura deseada
	const platosPorCarta = Object.keys(groupedPlatos).map((cartaId) => ({
		cartaName: cartaId === "null" ? "Sin carta" : cartasDict[cartaId] || "Sin carta",
		platos: groupedPlatos[cartaId],
	}));

	return (
		<RestaurantDetailsClient
			imageUrl={image_url}
			locationName={locationName}
			description={description}
			location={location}
			cartas={cartas}
			platosPorCarta={platosPorCarta}
		/>
	);
};

export default RestaurantDetailsPage;
