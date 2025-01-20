import React from 'react';
import { ChefHat, Bike, Utensils } from 'lucide-react';
import { WEBSITE_ROUTES } from '../routes';

export const mocked_user_types = [
    { 
        id: 1,
        icon: Utensils,
        title: "Cliente",
        subtitle: "Usare la app para comprar",
        route: WEBSITE_ROUTES.HOME
     },
    { 
        id: 2,
        icon: ChefHat,
        title: "Restaurante",
        subtitle: "Usare la app para ofrecer mis productos",
        route: WEBSITE_ROUTES.REGISTER
     },
    { 
        id: 3,
        icon: Bike,
        title: "Repartidor",
        subtitle: "Usare la app para ganar dinero",
        route: WEBSITE_ROUTES.HOME
     },
]