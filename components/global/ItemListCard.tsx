import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

function ItemListCard({
	title,
	description,
	image_url,
	route,
	status,
}: {
	title: string;
	description: string;
	image_url: string | null;
	status?: string;
	route: string;
}) {
	return (
		<Link className="w-full h-[8.3rem] flex flex-row gap-4 items-center rounded-lg overflow-hidden pr-4" href={route}>
			{/* Contenedor de la imagen o el fallback (30% del ancho) */}
			<div className="w-[38%] h-full flex items-center justify-center rounded-xl overflow-hidden">
				{image_url ? (
					<Image src={image_url} alt={title} width={0} height={0} className="w-full h-full object-cover" />
				) : (
					<span className="w-full h-full rounded-lg flex items-center justify-center bg-gray-700 text-white font-bold text-5xl">
						{title.charAt(0).toUpperCase()}
					</span>
				)}
			</div>
			<div className="grow flex flex-col gap-2">
				<h2 className="text-lg font-semibold">{title}</h2>
				<p className="text-sm font-thin">{description}</p>
				<span className="text-xs font-semibold text-green-600 capitalize">{status}</span>
			</div>
			<ChevronRight className=""></ChevronRight>
		</Link>
	);
}

export default ItemListCard;
