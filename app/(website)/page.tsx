import { Button } from "@/components/ui/button";
import React from "react";

const Homepage = () => {
	return (
		<div className="bg-red-400">
			<h1 className="text-3xl">TakeAway</h1>
			<Button variant={"outline"} size={"lg"} className="capitalize m-8">
				Click!
			</Button>
		</div>
	);
};

export default Homepage;
