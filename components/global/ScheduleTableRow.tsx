import React from 'react'
import {
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { scheduleTableRowProps } from '@/types/props/websiteProps';


const ScheduleTableRow = ({day, opens, closes}: scheduleTableRowProps) => {
  return (
    <TableRow className=' hover:text-black bg-opacity-10'>
          <TableCell className="font-medium border-none">{day}</TableCell>
          <TableCell className="border-none">{opens}</TableCell>
          <TableCell className="text-right border-none">{closes}</TableCell>
    </TableRow>
  )
}

export default ScheduleTableRow