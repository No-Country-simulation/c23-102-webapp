import React from "react";
import { Logo } from "@/components/global/Logo";
import Image from "next/image";
import RegisterRestaurantForm from "../../_components/forms/RegisterRestaurantForm";
import Container from "@/components/global/Container";

const RegisterRestaurantPage = () => {
	return (
		<div className="flex flex-col justify-center xl:flex-row min-h-screen">
			<div className="hidden xl:block xl:w-full max-h-[1200px]">
				<Image
					src="https://images.pexels.com/photos/12325004/pexels-photo-12325004.jpeg"
					alt="Register Restaurant"
					width={0}
					height={0}
					className="w-full object-cover h-full"
				/>
			</div>
			<Container size="center-container-sm" className="flex flex-col items-center py-20 xl:py-0 gap-8">
				<Logo width={130}></Logo>
				<h4 className="form-title">Registra tu emprendimiento</h4>
				<RegisterRestaurantForm />
			</Container>
		</div>
	);
};

export default RegisterRestaurantPage;
