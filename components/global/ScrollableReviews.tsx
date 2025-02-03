import React, { useEffect, useState } from "react";
import Reviews from "./Reviews";
import { motion } from "framer-motion";
import { useMeasure } from "react-use";

const ScrollableReviews = () => {
	const [ref, { width: width }] = useMeasure<HTMLDivElement>();
	const [ref2, { width: width2 }] = useMeasure<HTMLDivElement>();
	const [constraints, setConstraints] = useState({ left: 0, right: 0 });

	useEffect(() => {
		const myleft = -(width2 * reviews.length) + width * 0.7;
		setConstraints({ left: myleft, right: 0 });
	}, [width, width2]);

	return (
		<div className="overflow-hidden scrollbar-hide">
			<motion.div
				ref={ref}
				className="w-full flex items-center gap-3 cursor-grab mr-5"
				drag="x"
				dragConstraints={constraints}
				dragElastic={0.1}
			>
				{reviews.map((review) => {
					return (
						<div key={review.id} ref={ref2}>
							<Reviews review={review}></Reviews>
						</div>
					);
				})}
			</motion.div>
		</div>
	);
};

export default ScrollableReviews;

export const reviews = [
	{
		id: "1",
		name: "Evelyn Harper",
		time: "hace 2 horas",
		message: "Estoy totalmente de acuerdo con los puntos mencionados en este artículo. ¡Muy perspicaz!",
	},
	{
		id: "2",
		name: "Victor Ayala",
		time: "hace 2.5 horas",
		message: "Resueno completamente con las ideas compartidas en este artículo. ¡Realmente iluminador!",
	},
	{
		id: "3",
		name: "Tomas Padilla",
		time: "hace 2 dias",
		message: "Estoy totalmente de acuerdo con los puntos mencionados en este artículo. ¡Muy perspicaz!",
	},
];
