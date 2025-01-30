"use client";

import BusinessTypeFilter from "@/app/(website)/_components/BusinessTypeFilter";
import ItemListCard from "@/components/global/ItemListCard";
import { mocked_base_cartas } from "@/constants/mock/restaurant-carta";
import { RESTAURANT_ROUTES } from "@/constants/routes";
import { useUser } from "@/context/UserContext";

const RestaurantCartasPage = () => {
	const { user } = useUser();

	if (user)
		return (
			<div className="bg-black text-white flex flex-col items-center">
				<div className="flex items-center gap-8 flex-col pt-8">
					<BusinessTypeFilter
						className="home-section-row"
						businessTypes={mocked_base_cartas.map((i) => i.title)}
					></BusinessTypeFilter>
					<div className="w-[92%] flex flex-col gap-6 items-start">
						{mocked_base_cartas.map(({ id, title, description, image_url, status }) => {
							return (
								<ItemListCard
									key={id}
									title={title}
									description={description}
									image_url={image_url}
									status={status}
									route={RESTAURANT_ROUTES.RESTAURANT_CARTAS + "/" + id}
								></ItemListCard>
							);
						})}
					</div>
				</div>
			</div>
		);
};

export default RestaurantCartasPage;
