"use client";

import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { RESTAURANT_ROUTES } from "@/constants/routes";
import { useProductListModal } from "@/context/ProductListModalContext";
import { PlatoType } from "@/types/PlatoType";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const MagicButton = ({
	window,
	cartaName,
	platos,
}: {
	window?: string;
	cartaName?: string;
	platos?: Array<PlatoType>;
}) => {
	const { openModal } = useProductListModal();
	if (window == "cartas/platos" && cartaName && platos) {
		return (
			<>
				<Drawer>
					<DrawerTrigger asChild>
						<article className="fixed bottom-[7.2rem] right-8 w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[color:--primary-color] cursor-pointer z-1">
							<Plus size={28} strokeWidth={2.6} />
						</article>
					</DrawerTrigger>
					<DrawerContent className="bg-black pb-8">
						<div className="mx-auto w-full max-w-sm text-white bg-black items-center">
							<DrawerHeader>
								<DrawerTitle className="font-thin text-sm text-center">Carta: {cartaName}</DrawerTitle>
								<VisuallyHidden>
									<DrawerDescription></DrawerDescription>
								</VisuallyHidden>
							</DrawerHeader>
							<div className="flex flex-col gap-2 w-[80%] m-auto items-center">
								<DrawerClose asChild className="bg-gray-900 w-full text-center py-2 rounded-full">
									<div
										onClick={() =>
											openModal("Lista de Platos", `Selecciona los Platos a añadir a ${cartaName}`, platos)
										}
									>
										Añadir Plato a {cartaName}
									</div>
								</DrawerClose>
								<DrawerClose asChild className="bg-gray-900 w-full text-center py-2 rounded-full">
									<Link href={RESTAURANT_ROUTES.RESTAURANT_PLATOS_CREATE}>Nuevo Plato</Link>
								</DrawerClose>
							</div>
						</div>
					</DrawerContent>
				</Drawer>
			</>
		);
	}
	if (window == "Platos") {
		return (
			<Link
				href={RESTAURANT_ROUTES.RESTAURANT_PLATOS_CREATE}
				className="fixed bottom-[7.2rem] right-8 w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[color:--primary-color] cursor-pointer z-1"
			>
				<Plus size={28} strokeWidth={2.6} />
			</Link>
		);
	}
	if (window == "Cartas") {
		return (
			<>
				<Drawer>
					<DrawerTrigger asChild>
						<article className="fixed bottom-[7.2rem] right-8 w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[color:--primary-color] cursor-pointer z-1">
							<Plus size={28} strokeWidth={2.6} />
						</article>
					</DrawerTrigger>
					<DrawerContent className="bg-black pb-8">
						<div className="mx-auto w-full max-w-sm text-white bg-black items-center">
							<DrawerHeader>
								<DrawerTitle className="font-thin text-sm text-center">{window}</DrawerTitle>
								<VisuallyHidden>
									<DrawerDescription></DrawerDescription>
								</VisuallyHidden>
							</DrawerHeader>
							<div className="flex flex-col gap-2 w-[80%] m-auto items-center">
								<DrawerClose asChild className="bg-gray-900 w-full text-center py-2 rounded-full">
									<Link href={RESTAURANT_ROUTES.RESTAURANT_MENU}>Nueva Carta</Link>
								</DrawerClose>
								<DrawerClose asChild className="bg-gray-900 w-full text-center py-2 rounded-full">
									<Link href={RESTAURANT_ROUTES.RESTAURANT_MENU}>Editar</Link>
								</DrawerClose>
							</div>
						</div>
					</DrawerContent>
				</Drawer>
			</>
		);
	}
};

export default MagicButton;
