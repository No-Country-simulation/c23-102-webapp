import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useProductListModal } from "@/context/ProductListModalContext";
import { ProductImageCarousel } from "./ProductImageCarousel";

export function ProductListModal() {
	const { isOpen, title, message, closeModal, products } = useProductListModal();
	return (
		<Dialog open={isOpen} onOpenChange={closeModal}>
			<DialogContent className="w-[90%] max-w-[425px]  h-fullrounded-lg border border-white bg-black text-center flex flex-col justify-center gap-8">
				<VisuallyHidden>
					<DialogTitle></DialogTitle>
					<DialogDescription>Fixed warning</DialogDescription>
				</VisuallyHidden>
				<span className="text-[color:--primary-color] font-bold text-3xl">{title}</span>
				<p>{message}</p>
				<ProductImageCarousel slides={products} locationName="" isAddToCarta></ProductImageCarousel>
				<DialogFooter>
					<Button onClick={closeModal} className="button-fill">
						Cerrar
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
