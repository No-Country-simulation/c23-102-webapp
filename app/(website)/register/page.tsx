import React from "react";
import { Logo } from "@/components/global/Logo";
import Link from "next/link";
import RegisterForm from "../_components/forms/RegisterForm";

const RegisterPage = () => {
	return (
		<div className="min-h-full flex flex-col items-center justify-around bg-black text-white py-20 px-10">
			<div className="flex flex-col items-center  lg:w-4/6 ">
				<Logo width={130}></Logo>
				<RegisterForm/>
				
			</div>
		</div>
	);
};

export default RegisterPage;
