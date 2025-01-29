import { PlatoType } from "./PlatoType";

export interface CategoryType {
	id: string;
	category: string;
}

export interface RestaurantShortInfoType {
	id: string;
	image_url: string;
	name: string;
	description: string;
	category: CategoryType;
}

export interface RestaurantDetailsType {
	id: string;
	location: string;
	locationName: string;
	brand: string;
	category: string;
	description: string;
	image_url: string;
	name: string;
	lastName: string;
	phone: string;
	platos: Array<PlatoType> | null;
}

export interface RestaurantProfileDetailsType {
	id?: string;
	location: string;
	locationName: string;
	brand: string;
	category: string;
	description: string;
	image_url?: string;
	name: string;
	lastName: string;
	phone: string;
}
