import { BusinessType } from "./BusinessTypes";

export interface RestaurantShortInfoType {
	id: number | null;
	image_url: string;
	name: string;
	description: string;
	businessTypes: Array<BusinessType>;
}
