const RestaurantCartasDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;

	return (
		<div className="bg-black text-white flex items-center flex-col">
			<div className="flex items-center gap-8 flex-col pt-8">
				<h2>{id}</h2>
			</div>
		</div>
	);
};

export default RestaurantCartasDetailsPage;
