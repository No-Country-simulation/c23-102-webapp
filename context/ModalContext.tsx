import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

type ModalContextType = {
	isOpen: boolean;
	message: string;
	title: string;
	redirectUrl?: string;
	openModal: (title: string, message: string, redirectUrl?: string) => void;
	closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [title, setTitle] = useState("");
	const [message, setMessage] = useState("");
	const [redirectUrl, setRedirectUrl] = useState<string | undefined>(undefined);
	const router = useRouter();

	const openModal = (title: string, message: string, redirectUrl?: string) => {
		setTitle(title);
		setMessage(message);
		setRedirectUrl(redirectUrl);
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
		if (redirectUrl) {
			router.push(redirectUrl); // Redirigir al cerrar
		}
	};

	return (
		<ModalContext.Provider value={{ isOpen, title, message, redirectUrl, openModal, closeModal }}>
			{children}
		</ModalContext.Provider>
	);
};

export const useModal = () => {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error("useModal debe usarse dentro de un ModalProvider");
	}
	return context;
};
