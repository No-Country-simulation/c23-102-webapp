import { PlatoImageCarouselType } from "@/types/PlatoType";
import { ProductImageCarousel } from "./ProductImageCarousel";

export const ProductShortDetailsCarousel = ({ products }: { products: PlatoImageCarouselType }) => {
	const { cartaName, platos } = products;

	return (
		<div className="flex flex-col gap-4 w-full items-start">
			<h2 className="text-xl font-bold">{cartaName}</h2>
			<ProductImageCarousel slides={platos}></ProductImageCarousel>
		</div>
	);
};
