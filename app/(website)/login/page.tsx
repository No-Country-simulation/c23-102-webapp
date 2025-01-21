import React from "react";
import LoginForm from "../_components/forms/LoginForm";
import { Logo } from "@/components/global/Logo";
import Link from "next/link";
import { WEBSITE_ROUTES } from "@/constants/routes";
import BG from "@/public/images/LoginBG.png";

const LoginPage = () => {
	return (
		<div
			className="min-h-dvh flex flex-col items-center justify-around text-white"
			style={{
				backgroundColor: "max-md:bg-black",
				backgroundImage: `url(${BG.src})`,
				objectFit: "cover",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
		>
			<div className="flex flex-col items-center w-[80%] center-forms-lg">
				<Logo width={130}></Logo>
				<LoginForm></LoginForm>
				<div className="mt-5 flex flex-col items-center">
					<Link href={WEBSITE_ROUTES.HOME}>Olvidaste tu contraseña?</Link>
					<Link href={WEBSITE_ROUTES.ONBOARDING} className="mt-3">
						No tienes cuenta? Registrate
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
