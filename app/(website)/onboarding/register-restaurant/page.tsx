import React from "react";
import { Logo } from "@/components/global/Logo";
import RegisterRestaurantForm from "../../_components/forms/RegisterRestaurantForm";
import Container from "@/components/global/Container";

const RegisterPage = () => {
	return (
		<div className="min-h-dvh flex flex-col items-center justify-around">
			<Container size="center-container-sm" className="flex flex-col items-center gap-8 py-14">
				<Logo width={130}></Logo>
				<h4 className="form-title">Registra tu emprendimiento</h4>
				<RegisterRestaurantForm />
			</Container>
		</div>
	);
};

export default RegisterPage;
