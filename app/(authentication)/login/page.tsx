import React from "react";
import LoginForm from "../_components/forms/LoginForm";
import { Logo } from "@/components/global/Logo";
import Link from "next/link";
import { WEBSITE_ROUTES } from "@/constants/routes";
import BG from "@/public/images/LoginBG.png";
import Container from "@/components/global/Container";

const LoginPage = () => {
	return (
		<div
			className="min-h-dvh flex flex-col items-center justify-around"
			style={{
				backgroundColor: "max-md:bg-black",
				backgroundImage: `url(${BG.src})`,
				objectFit: "cover",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
		>
			<Container size="center-container-sm" className="flex flex-col items-center gap-8">
				<Logo width={130}></Logo>
				<LoginForm></LoginForm>
				<div className="flex flex-col items-center font-thin gap-2">
					<Link href={WEBSITE_ROUTES.HOME}>Olvidaste tu contraseña?</Link>
					<Link href={WEBSITE_ROUTES.ONBOARDING}>
						No tienes cuenta? <span className="text-[color:--primary-color] font-semibold">Registrate</span>
					</Link>
				</div>
			</Container>
		</div>
	);
};

export default LoginPage;
