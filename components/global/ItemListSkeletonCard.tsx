import React from "react";

function ItemListSkeletonCard() {
	return (
		<div className="w-full h-[8.3rem] flex flex-row gap-4 items-center rounded-lg overflow-hidden pr-4 animate-pulse">
			{/* Skeleton para la imagen */}
			<div className="w-[38%] h-full flex items-center justify-center rounded-xl overflow-hidden bg-gray-700"></div>

			{/* Skeleton para el texto */}
			<div className="grow flex flex-col gap-2">
				<div className="h-4 w-1/2 bg-gray-600 rounded"></div>
				<div className="h-3 w-3/4 bg-gray-600 rounded"></div>
				<div className="h-5 w-1/4 bg-gray-600 rounded"></div>
				<div className="h-3 w-1/3 bg-gray-500 rounded"></div>
			</div>

			{/* Skeleton para el icono */}
			<div className="h-5 w-5 bg-gray-500 rounded-full"></div>
		</div>
	);
}

export default ItemListSkeletonCard;
