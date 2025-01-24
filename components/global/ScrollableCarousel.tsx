"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"; // Ajusta el import de Shadcn
import { BusinessType } from "@/types/BusinessTypes";

export const ScrollableCarousel = ({
	labels,
	onSelectItem,
	selected,
}: {
	labels: Array<BusinessType>;
	onSelectItem: (item: BusinessType) => void;
	selected: BusinessType | null;
}) => {
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

	// Calcula las restricciones del drag después de renderizar
	useEffect(() => {
		if (scrollContainerRef.current) {
			const containerWidth = scrollContainerRef.current.scrollWidth;
			const viewportWidth = scrollContainerRef.current.offsetWidth;
			setDragConstraints({
				left: -(containerWidth - viewportWidth),
				right: 0,
			});
		}
	}, [labels]);

	return (
		<div className="overflow-hidden scrollbar-hide">
			<motion.div
				ref={scrollContainerRef}
				className="flex items-center gap-3 cursor-grab mr-5"
				drag="x"
				dragConstraints={dragConstraints}
				dragElastic={0.1}
			>
				{labels.map((label) => (
					<Button
						key={label.id}
						variant="outline"
						onClick={() => onSelectItem(label)}
						className={cn(
							"border-1 rounded-md",
							selected?.id === label.id ? "bg-white text-black" : "bg-white bg-opacity-[0.1]"
						)}
					>
						{label.businessType}
					</Button>
				))}
			</motion.div>
		</div>
	);
};
