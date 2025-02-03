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
			<>
				<MagicButton window={selectedMenu}></MagicButton>
				<div className="center-container flex gap-4 pt-4">
					<div className="flex flex-col cursor-pointer z-50" onClick={handleSelection}>
						<h2 className="font-semibold text-xl">Cartas</h2>
						<span
							className={`${
								selectedMenu == "Cartas" ? "border-b-[color:--primary-color]" : "border-b-black"
							}    border-b-2 w-[8rem]`}
						></span>
					</div>
					<div className="flex flex-col cursor-pointer z-50" onClick={handleSelection}>
						<h2 className="font-semibold  text-xl">Platos</h2>
						<span
							className={`${
								selectedMenu == "Platos" ? "border-b-[color:--primary-color]" : "border-b-black"
							}    border-b-2 w-[8rem]`}
						></span>
					</div>
				</div>
				{selectedMenu == "Cartas" ? (
					<RestaurantCartasPanel></RestaurantCartasPanel>
				) : (
					<RestaurantPlatosPanel></RestaurantPlatosPanel>
				)}
			</>
		);
};

export default RestaurantMenuPage;
