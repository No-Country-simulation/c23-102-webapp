import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { PlatoType } from "@/types/PlatoType";

type ProductListModalContextType = {
	isOpen: boolean;
	message: string;
	products: Array<PlatoType>;
	title: string;
	redirectUrl?: string;
	openModal: (title: string, message: string, platos: Array<PlatoType>) => void;
	closeModal: () => void;
};

const ProductModalListContext = createContext<ProductListModalContextType | undefined>(undefined);

export const ProductListModalProvider = ({ children }: { children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [title, setTitle] = useState("");
	const [message, setMessage] = useState("");
	const [products, setProducts] = useState<Array<PlatoType>>([]);

	const openModal = (title: string, message: string, products: Array<PlatoType>) => {
		setTitle(title);
		setMessage(message);
		setProducts(products);
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<ProductModalListContext.Provider value={{ isOpen, title, message, products, openModal, closeModal }}>
			{children}
		</ProductModalListContext.Provider>
	);
};

export const useProductListModal = () => {
	const context = useContext(ProductModalListContext);
	if (!context) {
		throw new Error("useProductListModal debe usarse dentro de un ProductListModalProvider");
	}
	return context;
};
