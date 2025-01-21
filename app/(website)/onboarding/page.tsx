import React from 'react'
import { Logo } from '@/components/global/Logo'
import CardWithIcon from '@/components/global/CardWithIcon'
import { mocked_user_types } from '@/constants/mock/onboarding'

const Onboarding = () => {
  return (
		<div className="min-h-dvh h-full flex flex-col items-center justify-around bg-black text-white py-20">
			<div className="flex flex-col gap-5 items-center w-4/6 ">
				{/* Logo */}
				<Logo width={130}></Logo>

				<div className="text-center py-5   lg:w-1/3">
					<h2 className=" text-xl font-semibold">Bienvenido!</h2>
					<p className="text-sm text-gray-100">Antes de continuar, elige como que tipo de usuario deseas registrarte</p>
				</div>

				<div className="flex flex-col items-center gap-5">
					{mocked_user_types.map(({ id, title, subtitle, route, icon }) => {
						return (
							<CardWithIcon key={id} title={title} subtitle={subtitle} icon={React.createElement(icon)} route={route} />
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Onboarding