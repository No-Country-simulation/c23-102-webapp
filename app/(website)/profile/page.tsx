import React from 'react'
import { Logo } from '@/components/global/Logo'
import { Textarea } from "@/components/ui/textarea"
import ScheduleTable from '@/components/global/ScheduleTable'
import Container from '@/components/global/Container'
import { ImagePlus } from 'lucide-react';
import { Button } from '@/components/ui/button'

const RegisterProfilePage = () => {
  return (
    <div className="min-h-dvh h-full flex flex-col items-center justify-around bg-black text-white py-20 ">
                <div className="center-mobile">
                    <div className="flex flex-col gap-5 items-center w-full lg:w-2/6  mx-auto">
                        <Logo width={130}></Logo>
                        <h2 className='py-5'>Crea tu perfil</h2>
                        <div className='bg-white bg-opacity-10 h-[300px] w-full rounded-xl flex flex-col justify-center items-center  gap-5 p-10'>
                                <ImagePlus width={50} height={50}/>
                                <h3 className='text-center text-gray-500'>Añade una foto de tu restaurante desde tu computadora</h3>
                                <Button className="px-10">Añadir foto</Button>
                        </div>
                        <div className='w-full pb-10'>
                            <h2 className='py-5'>Añade un descripcion</h2>
                            <Textarea className='bg-white bg-opacity-10 border-none'/>
                        </div>
                        <ScheduleTable />
                    </div>
                </div>
    </div>
  )
}

export default RegisterProfilePage

