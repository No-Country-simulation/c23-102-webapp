import React from "react";
import { Logo } from "@/components/global/Logo";
import RegisterRestaurantForm from "../../_components/forms/RegisterRestaurantForm";

const RegisterPage = () => {
	return (
		<div className="min-h-dvh flex flex-col items-center justify-around bg-black text-white pt-24 pb-40">
			<div className="flex flex-col items-center w-[85%] center-forms-lg">
				<Logo width={130}></Logo>
				<div className="w-full mt-16 flex flex-col gap-10">
					<h4 className="form-title">Registra tu emprendimiento</h4>
					<RegisterRestaurantForm />
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
