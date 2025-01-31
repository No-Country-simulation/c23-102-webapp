import React from "react";
import Container from "@/components/global/Container";
import { restaurantDetails } from "@/actions/restaurantsActions";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { fetchPlatosByRestaurantEmail } from "@/actions/platosActions";
import { fetchCartasByRestaurantEmail } from "@/actions/cartasAction";
import BusinessTypeFilter from "../../_components/BusinessTypeFilter";
import { ProductShortDetailsCarousel } from "@/components/global/ProductShortDetailsCarousel";
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
		<div className="min-h-dvh escape-navbar escape-footer relative">
			<Image
				src={image_url}
				alt="Selected Restaurant"
				width={0}
				height={0}
				className="w-full h-[68vh] object-cover pt-2"
			></Image>
			<Container size="center-container" className="flex flex-col items-center gap-8 pt-4 text-center">
				<div className="flex flex-col">
					<h2 className="font-semibold text-lg">{locationName}</h2>
					<p className="font-thin text-sm">{description}</p>
					<div className="flex flex-row gap-1 items-center justify-center text-sm mt-3">
						<MapPin size={"18px"}></MapPin>
						{location}
					</div>
				</div>
				<BusinessTypeFilter
					className="home-section-row"
					businessTypes={cartas.map((i) => i.title)}
				></BusinessTypeFilter>
				{platosPorCarta.map((i, index) => {
					return <ProductShortDetailsCarousel key={index} products={i} locationName={locationName}></ProductShortDetailsCarousel>;
				})}
			</Container>
		</div>
	);
};

export default RestaurantDetailsPage;
