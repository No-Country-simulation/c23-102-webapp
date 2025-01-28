"use client";

import React from "react";
import { Logo } from "@/components/global/Logo";
import Container from "@/components/global/Container";
import Image from "next/image";
import RegisterRestaurantProfileForm from "@/app/(authentication)/_components/forms/RegisterRestaurantProfileForm";
import ProtectedRoute from "@/components/global/ProtectedRoute";

const RegisterRestaurantProfilePage = () => {
	
	return (
		<ProtectedRoute>
			<div className="min-h-dvh flex flex-col items-center justify-around xl:grid xl:grid-cols-2 xl:gap-2 xl:max-h-dvh">
				<div className="hidden xl:block xl:w-full xl:h-full xl:max-h-dvh">
					<Image
						src="https://images.pexels.com/photos/4676401/pexels-photo-4676401.jpeg"
						alt="Register Restaurant"
						width={0}
						height={0}
						className="w-full h-full object-cover xl:h-full"
					/>
				</div>
				<Container size="center-container-sm" className="flex flex-col items-center gap-8 py-14 xl:py-0">
					<Logo width={130}></Logo>
					<h4 className="form-title">Crea tu perfil</h4>
					<RegisterRestaurantProfileForm></RegisterRestaurantProfileForm>
				</Container>
			</div>
		</ProtectedRoute>
	);
};

export default RegisterRestaurantProfilePage;
