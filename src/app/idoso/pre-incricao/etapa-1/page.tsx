'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button"
import Header from "@/components/idoso/pre-inscricao/Header"
import { CardDia } from "@/components/idoso/pre-inscricao/CardDia"

const disponibilidadeSchema = z.object({
  disponibilidade: z.record(z.array(z.string())),
});

type DisponibilidadeForm = z.infer<typeof disponibilidadeSchema>;

const diasDaSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

export default function PreInscricaoPage() {
  const [disponibilidade, setDisponibilidade] = useState(
    diasDaSemana.reduce((acc, dia) => {
      acc[dia] = [] as string[];
      return acc;
    }, {} as Record<string, string[]>)
  );

  const { handleSubmit } = useForm<DisponibilidadeForm>({
    resolver: zodResolver(disponibilidadeSchema),
    defaultValues: {
      disponibilidade,
    },
  });

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

  const onSubmit = () => {
    console.log("Disponibilidade:", disponibilidade);
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
          <Button
            className="bg-principal-blue hover:bg-principal-blue/80 font-mono"
            onClick={handleSubmit(() => onSubmit())}
          >
            Avançar
          </Button>
        </div>
      </div>
    </>
  );
}
