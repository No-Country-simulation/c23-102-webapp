import { Button } from "@/components/ui/button";
import React from "react";

const Homepage = () => {
	return (
		<div className="h-full flex items-center justify-around flex-col">
			<div className="flex items-center justify-around flex-col">
				<h1 className="text-3xl">TakeAway</h1>
				<Button variant={"outline"} size={"lg"} className="capitalize m-8">
					Click!
				</Button>
			</div>
		</div>
	);
};

export default Homepage;
