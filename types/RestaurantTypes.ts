export interface BusinessType {
	id: string;
	businessType: string | null;
}

export interface RestaurantShortInfoType {
	id: string;
	image_url: string;
	name: string;
	description: string;
	businessTypes: Array<BusinessType>;
}

export interface RestaurantDetailsType {
	id: string;
	locationName: string | null;
	description: string | null;
	businessTypes: Array<BusinessType> | null;
	image_url: string | null;
	location: string | null;
	phone: string | null;
	name: string | null;
	lastName: string | null;
	brand: string | null;
	platos: Array<PlatoType> | null;
}

export interface PlatoType {
	id: string;
	name: string | null;
	description: string | null;
	image_url: string | null;
	price: string | null;
}
