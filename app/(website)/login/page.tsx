import React from "react";
import LoginForm from "../_components/forms/LoginForm";
import { Logo } from "@/components/global/Logo";
import Link from "next/link";

const LoginPage = () => {
	return (
		<div className="h-full flex flex-col items-center justify-around bg-black text-white">
			<div className="flex flex-col items-center w-4/6">
				<Logo width={130}></Logo>
				<LoginForm></LoginForm>
				<div className="mt-5 flex flex-col items-center">
					<Link href="/">Olvidaste tu contraseña?</Link>
					<Link href="/register" className="mt-3">
						No tienes cuenta? Registrate
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
