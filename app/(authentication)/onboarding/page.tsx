import React from "react";
import { Logo } from "@/components/global/Logo";
import CardWithIcon from "@/components/global/CardWithIcon";
import { mocked_user_types } from "@/constants/mock/onboarding";
import Container from "@/components/global/Container";

const Onboarding = () => {
	return (
		<div className="min-h-dvh flex flex-col items-center justify-around">
			<Container size="center-container-sm" className="flex flex-col items-center gap-8">
				<Logo width={130}></Logo>
				<div className="flex flex-col items-center font-thin text-center gap-6">
					<div className="flex flex-col gap-1">
						<h2 className="text-xl font-semibold">Bienvenido!</h2>
						<p className="text-sm text-gray-100">
							Antes de continuar, elige como que tipo de usuario deseas registrarte
						</p>
					</div>
					<div className="flex flex-col gap-4">
						{mocked_user_types.map(({ id, title, subtitle, route, icon }) => {
							return (
								<CardWithIcon
									key={id}
									title={title}
									subtitle={subtitle}
									icon={React.createElement(icon)}
									route={route}
								/>
							);
						})}
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Onboarding;
