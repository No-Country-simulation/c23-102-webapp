import { ChefHat, Utensils } from "lucide-react";
import { WEBSITE_ROUTES } from "../routes";

export const mocked_user_types = [
	{
		id: 1,
		icon: Utensils,
		title: "Cliente",
		subtitle: "Usaré la app para comprar",
		route: WEBSITE_ROUTES.REGISTER_CLIENT,
	},
	{
		id: 2,
		icon: ChefHat,
		title: "Restaurante",
		subtitle: "Usaré la app para ofrecer mis productos",
		route: WEBSITE_ROUTES.REGISTER_RESTAURANT,
	},
];
