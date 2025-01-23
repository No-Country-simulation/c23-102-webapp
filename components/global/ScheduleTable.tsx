import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ScheduleTableRow from "./ScheduleTableRow";

const ScheduleTable = () => {
  return (
    <Table>
      <TableCaption>Establece los dias y horarios en los que estara abierto tu restaurante</TableCaption>
      <TableHeader>
        <TableRow className="border-none hover:bg-transparent">
          <TableHead className="w-[100px]">Dia</TableHead>
          <TableHead>Abre</TableHead>
          <TableHead className="text-right">Cierra</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>

            <ScheduleTableRow 
                day="Lunes"
                closes="00:00"
                opens="00:00"
            />
            <ScheduleTableRow 
                day="Martes"
                closes="00:00"
                opens="00:00"
            />
            <ScheduleTableRow 
                day="Miercoles"
                closes="00:00"
                opens="00:00"
            />
            <ScheduleTableRow 
                day="Jueves"
                closes="00:00"
                opens="00:00"
            />
            <ScheduleTableRow 
                day="Viernes"
                closes="00:00"
                opens="00:00"
            />
            <ScheduleTableRow 
                day="Sabado"
                closes="00:00"
                opens="00:00"
            />
            <ScheduleTableRow 
                day="Domingo"
                closes="00:00"
                opens="00:00"
            />

      </TableBody>

      
    </Table>
  );
};

export default ScheduleTable;
