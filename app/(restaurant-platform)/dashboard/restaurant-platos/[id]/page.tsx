import RestaurantPlatosForm from "@/app/(restaurant-platform)/_components/forms/RestaurantPlatosForm";
import { findPlatoById } from "@/constants/mock/restaurant-platos";

const RestaurantPlatosEditPage = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	const plato = await findPlatoById(id);

	return (
		<div className=" bg-black text-white flex items-center justify-center flex-col pt-12">
			<div className="flex items-center justify-around flex-col w-[93%] m-auto gap-8">
				<h4 className="form-title flex flex-col">
					<p className="font-light">Estas modificando:</p>
					<span className="text-[color:--primary-color]">{plato.name}</span>
				</h4>
				<RestaurantPlatosForm editProduct={plato}></RestaurantPlatosForm>
			</div>
		</div>
	);
};

export default RestaurantPlatosEditPage;
