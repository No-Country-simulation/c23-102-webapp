"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BusinessType } from "@/types/BusinessTypes";
import { useMeasure } from "react-use";

export const ScrollableCarousel = ({
	labels,
	onSelectItem,
	selected,
}: {
	labels: Array<BusinessType>;
	onSelectItem: (item: BusinessType) => void;
	selected: BusinessType | null;
}) => {
	const [ref, { width: width }] = useMeasure<HTMLDivElement>();
	const [ref2, { width: width2 }] = useMeasure<HTMLDivElement>();
	const [constraints, setConstraints] = useState({ left: 0, right: 0 });

	useEffect(() => {
		const myleft = -(width2 * labels.length) + width * 0.4;
		setConstraints({ left: myleft, right: 0 });
	}, [width, labels.length, width2]);

	return (
		<div className="w-full overflow-hidden scrollbar-hide">
			<motion.div
				ref={ref}
				className="w-full flex items-center gap-3 cursor-grab mr-5"
				drag="x"
				dragConstraints={constraints}
				dragElastic={0.1}
			>
				{labels.map((label) => (
					<div key={label.id} ref={ref2}>
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
					</div>
				))}
			</motion.div>
		</div>
	);
};
