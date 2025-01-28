import React from "react";
import { Logo } from "@/components/global/Logo";
import Image from "next/image";
import RegisterRestaurantForm from "../../_components/forms/RegisterRestaurantForm";
import Container from "@/components/global/Container";

const RegisterRestaurantPage = () => {
	return (
		<div className="min-h-dvh flex flex-col items-center justify-around xl:grid xl:grid-cols-2 xl:gap-2 xl:max-h-dvh">
			<div className="hidden xl:block xl:w-full xl:h-full xl:max-h-dvh">
				<Image
					src="https://images.pexels.com/photos/12325004/pexels-photo-12325004.jpeg"
					alt="Register Restaurant"
					width={0}
					height={0}
					className="w-full h-full object-cover xl:h-full"
				/>
			</div>
			<Container size="center-container-sm" className="flex flex-col items-center gap-8 py-14 xl:py-0">
				<Logo width={130}></Logo>
				<h4 className="form-title">Registra tu emprendimiento</h4>
				<RegisterRestaurantForm />
			</Container>
		</div>
	);
};

export default RegisterRestaurantPage;
