export interface RestaurantShortInfoType {
	email: string;
	image_url: string;
	name: string;
	description: string;
	category: string;
}

export interface RestaurantDetailsType {
	email: string;
	location: string;
	locationName: string;
	brand: string;
	category: string;
	description: string;
	image_url: string;
	name: string;
	lastName: string;
	phone: string;
}

export interface RestaurantProfileDetailsType {
	email?: string;
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
