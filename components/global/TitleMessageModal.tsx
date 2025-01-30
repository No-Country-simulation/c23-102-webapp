import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle } from "@/components/ui/dialog";
import { useModal } from "@/context/ModalContext";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function TitleMessageModal() {
	const { isOpen, title, message, closeModal } = useModal();

	return (
		<Dialog open={isOpen} onOpenChange={closeModal}>
			<DialogContent className="w-[90%] max-w-[425px] rounded-lg border border-white bg-black text-center h-[25rem] flex flex-col justify-center gap-8">
				<VisuallyHidden>
					<DialogTitle></DialogTitle>
					<DialogDescription>Fixed warning</DialogDescription>
				</VisuallyHidden>
				<span className="text-[color:--primary-color] font-bold text-3xl">{title}</span>
				<p>{message}</p>
				<DialogFooter>
					<Button onClick={closeModal} className="button-fill">
						Cerrar
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
