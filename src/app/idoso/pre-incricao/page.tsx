'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button"
import Header from "@/components/idoso/pre-inscricao/Header"
import {CardDia} from "@/components/idoso/pre-inscricao/CardDia"


const diasDaSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

export default function PreInscricaoPage() {
  const [disponibilidade, setDisponibilidade] = useState(
    diasDaSemana.reduce((acc, dia) => {
      acc[dia] = [] as string[];
      return acc;
    }, {} as Record<string, string[]>)
  );

  const toggleTurno = (dia: string, turno: string) => {
    setDisponibilidade((prev) => {
      const turnos = prev[dia];
      return {
        ...prev,
        [dia]: turnos.includes(turno)
          ? turnos.filter((t) => t !== turno)
          : [...turnos, turno],
      };
    });
  };

  return (
    <>
    
      <Header />

      <div className="p-4 max-w-md mx-auto ">
        <h1 className="text-principal-blue text-center font-mono text-lg font-semibold mb-6 font-mono">
            Quais seus horários livres?
        </h1>


        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 justify-items-center">
          {diasDaSemana.map((dia) => (
            <CardDia
              key={dia}
              dia={dia}
              turnosSelecionados={disponibilidade[dia]}
              onToggleTurno={(turno) => toggleTurno(dia, turno)}
            />
          ))}
        </div>

        <div className="flex justify-end mt-6">
          <Button className="bg-principal-blue hover:bg-principal-blue/80 font-mono">
            Avançar
          </Button>
        </div>
      </div>
    </>
  );
}
