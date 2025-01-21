import React from "react";
import { Logo } from "@/components/global/Logo";
import RegisterForm from "../_components/forms/RegisterForm";

const RegisterPage = () => {
	return (
		<div className="h-full flex flex-col items-center justify-around bg-black text-white pt-24 pb-40">
			<div className="flex flex-col items-center w-[85%]">
				<Logo width={130}></Logo>
				<RegisterForm />
			</div>
		</div>
	);
};

export default RegisterPage;
