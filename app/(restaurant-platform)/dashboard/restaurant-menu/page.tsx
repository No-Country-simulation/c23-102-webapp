"use client";

import { useUser } from "@/context/UserContext";
import RestaurantCartasPanel from "./_components/RestaurantCartasPanel";
import RestaurantPlatosPanel from "./_components/RestaurantPlatosPanel";
import Container from "@/components/global/Container";
import { useState } from "react";
import MagicButton from "../../_components/MagicButton";

const RestaurantMenuPage = () => {
	const { user } = useUser();
	const [selectedMenu, setSelectedMenu] = useState<"Cartas" | "Platos">("Cartas");

	const handleSelection = (event: React.MouseEvent<HTMLDivElement>) => {
		const selectedText = event.currentTarget.innerText;
		if (selectedText === "Cartas" || selectedText === "Platos") {
			setSelectedMenu(selectedText);
		}
	};

	if (user)
		return (
			<div>
				<MagicButton window={selectedMenu}></MagicButton>
				<Container size={"center-container"} className="flex gap-4 pt-4">
					<div className="flex flex-col cursor-pointer" onClick={handleSelection}>
						<h2 className="font-semibold text-xl">Cartas</h2>
						<span
							className={`${
								selectedMenu == "Cartas" ? "border-b-[color:--primary-color]" : "border-b-black"
							}    border-b-2 w-[8rem]`}
						></span>
					</div>
					<div className="flex flex-col cursor-pointer" onClick={handleSelection}>
						<h2 className="font-semibold  text-xl">Platos</h2>
						<span
							className={`${
								selectedMenu == "Platos" ? "border-b-[color:--primary-color]" : "border-b-black"
							}    border-b-2 w-[8rem]`}
						></span>
					</div>
				</Container>
				{selectedMenu == "Cartas" ? (
					<RestaurantCartasPanel></RestaurantCartasPanel>
				) : (
					<RestaurantPlatosPanel></RestaurantPlatosPanel>
				)}
			</div>
		);
};

export default RestaurantMenuPage;
