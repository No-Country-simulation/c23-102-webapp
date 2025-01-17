import React from 'react'
import Link from 'next/link'

import {
    Card,
    CardHeader,
    CardDescription,
    CardTitle,
  } from "@/components/ui/card"
import Image from 'next/image'

type cardProps = {
    icon: string
    title: string
    subtitle: string
    route: string
  }

const CardWithIcon = ({ route, icon, title, subtitle }: cardProps) => {
  return (
    <Link href={route}>
        <Card className="cardContainerStyles">
            <CardHeader className='cardStyles'>
                <Image src={icon} alt="Logo" height={30} width={30} />
                <CardTitle>{title}</CardTitle>
                <CardDescription>{subtitle}</CardDescription>
            </CardHeader>
    </Card>
</Link>
  )
}

export default CardWithIcon