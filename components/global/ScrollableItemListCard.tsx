"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMeasure } from "react-use";
import ItemListCard from "./ItemListCard";
import { PlatoType } from "@/types/PlatoType";
import { CLIENT_ROUTES, RESTAURANT_ROUTES } from "@/constants/routes";

export const ScrollableItemListCarousel = ({
	products,
	withPrice,
}: {
	products: Array<PlatoType>;
	withPrice?: boolean;
}) => {
	const [ref, { width: width }] = useMeasure<HTMLDivElement>();
	const [ref2, { width: width2 }] = useMeasure<HTMLDivElement>();
	const [constraints, setConstraints] = useState({ left: 0, right: 0 });

	useEffect(() => {
		const myleft = -(width2 * products.length) + width * 0.7;
		setConstraints({ left: myleft, right: 0 });
	}, [width, products.length, width2]);

	return (
		<div className="overflow-hidden scrollbar-hide">
			<motion.div
				ref={ref}
				className="w-full flex items-center gap-3 cursor-grab mr-5"
				drag="x"
				dragConstraints={constraints}
				dragElastic={0.1}
			>
				{products.map((product, index) => {
					return (
						<div key={index} ref={ref2}>
							<ItemListCard
								isScrollable
								price={withPrice ? product.price : undefined}
								title={product.name}
								description={product.description}
								image_url={product.image_url}
								route={withPrice ? CLIENT_ROUTES.CLIENT : RESTAURANT_ROUTES.DASHBOARD}
							></ItemListCard>
						</div>
					);
				})}
			</motion.div>
		</div>
	);
};
