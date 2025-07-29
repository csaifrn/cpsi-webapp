'use client';
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


const Horario = () => {
    return (        
        <div className="border-2 border-gray-200 rounded-lg w-80 mx-auto">
          <div className="bg-principal-blue text-white text-center py-3 rounded-t-lg mb-0.5">
            <h2 className="text-2xl font-bold">Atividade de Hoje</h2>
          </div>
          <Table>
            <TableHeader>
              <TableRow className="border-b-2 border-principal-blue">
                <TableHead className="text-center text-sm w-[150px] h-[50px] text-gray-700 font-semibold">ATIVIDADE</TableHead>
                <TableHead className="text-center text-sm *:w-[150px] h-[50px] border-x-1 border-principal-blue text-gray-700 font-semibold">HORÁRIO</TableHead>
                <TableHead className="text-center text-sm w-[150px] h-[50px] text-gray-700 font-semibold">PROFESSOR</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* First Row: Dança */}
              <TableRow className="border-b-1 border-principal-blue">
                <TableCell className="text-center text-sm font-medium w-[150px] h-[50px]">Dança</TableCell>
                <TableCell className="text-center text-sm border-x-1 border-principal-blue w-[150px] h-[50px]">7:00-7:45 <br/> Sala 1</TableCell>
                <TableCell className="text-center text-sm w-[150px] h-[50px]">GUSTAVO BRITO</TableCell>
              </TableRow>

              {/* Second Row: Coral */}
              <TableRow className="border-b-1 border-principal-blue">
                <TableCell className="text-center text-sm font-medium  w-[150px] h-[50px]">Coral</TableCell>
                <TableCell className="text-center text-sm border-x-1 border-principal-blue w-[150px] h-[50px]">7:45-8:00 <br/> Sala 2</TableCell>
                <TableCell className="text-center text-sm w-[150px] h-[50px]">JOÃO</TableCell>
              </TableRow>

              {/* Third Row: Musculação */}
              <TableRow>
                <TableCell className="text-center text-sm font-medium w-[150px] h-[50px]">Musculação</TableCell>
                <TableCell className="text-center border-x-1 text-sm border-principal-blue w-[150px] h-[50px]">9:00-10:15 <br/> Sala 3</TableCell>
                <TableCell className="text-center text-sm w-[150px] h-[50px]">MARIA</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
    )
};

export default Horario;