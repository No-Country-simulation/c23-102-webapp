"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useMeasure } from "react-use";

export const ScrollableCarousel = ({
	labels,
	onSelectItem,
	selected,
}: {
	labels: Array<string>;
	onSelectItem: (item: string) => void;
	selected: string | null;
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
				{labels.map((label, index) => (
					<div key={index} ref={ref2}>
						<Button
							variant="outline"
							onClick={() => onSelectItem(label)}
							className={cn(
								"border-1 rounded-md",
								selected === label ? "bg-white text-black" : "bg-white bg-opacity-[0.1]"
							)}
						>
							{label}
						</Button>
					</div>
				))}
			</motion.div>
		</div>
	);
};
