import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ReviewType } from "@/types/ReviewType";

const Reviews = ({ review }: { review: ReviewType }) => {
	return (
		<article className="bg-gray-700 flex flex-col gap-3 w-full py-4 rounded-lg">
			<div className="w-[16rem] flex flex-row gap-2">
				<h2>
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						<AvatarFallback></AvatarFallback>
					</Avatar>
				</h2>
				<div className="flex flex-col">
					<h2 className="font-semibold text-sm">{review.name}</h2>
					<p className="font-thin text-xs opacity-30">{review.time}</p>
				</div>
			</div>
			<p className="font-thin text-sm pl-2">{review.message}</p>
		</article>
	);
};

export default Reviews;
