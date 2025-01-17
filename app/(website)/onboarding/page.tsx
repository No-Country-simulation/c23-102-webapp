import React from 'react'
import { Logo } from '@/components/global/Logo'
import CardWithIcon from '@/components/global/CardWithIcon'

const Onboarding = () => {
  return (
    <div className=" flex flex-col items-center justify-around bg-black text-white py-20">
			<div className="flex flex-col gap-5 items-center w-4/6 ">

        {/* Logo */}
				<Logo width={130}></Logo>

        <div className='text-center py-5   lg:w-1/3'>
            <h2 className=' text-xl font-semibold'>Bienvenido!</h2>
            <p className='text-sm text-gray-100'>Antes de continuar, elige como que tipo de usuario deseas registrarte</p>
        </div>
        {/* Card 1 */}
        <CardWithIcon
            title="Cliente"
            subtitle="Quiero ordernar comida/bebida"
            icon="utensils.svg"
            route='/register'
        />
        {/* Card 1 */}
        <CardWithIcon
            title="Restaurante"
            subtitle="Quiero ofrecer mis productos"
            icon="cooker-hat.svg"
            route="#"
        />
        {/* Card 1 */}
        <CardWithIcon
            title="Repartidor"
            subtitle="Quiero trabajar como delivery"
            icon="scooter.svg"
            route="#"
        />
			</div>
		</div>
  )
}

export default Onboarding