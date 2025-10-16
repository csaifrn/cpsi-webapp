"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CardHome from "@/components/home/CardHome";
import HorarioDia from "@/components/idoso/home/HorarioDia";
import NavBar from "@/components/idoso/navegacao/Navbar";
import { usuario_idoso } from "@/types/usuario";

export default function Horarios() {
  const [diaSelecionado, setDiaSelecionado] = useState("Terça");
  const dias = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
  return (
    <>
      <NavBar usuario={usuario_idoso} />
      <CardHome>
        <div className="py-4 max-w-md mx-auto text-gray-900 font-courier-prime">
          <div className="flex items-center text-lg font-semibold">
            <Button variant="ghost" size="icon" className="mr-2 p-0 h-auto w-auto m-3">
              <Image src="/seta.png" alt="voltar" width={20} height={20} />
            </Button>
            <span>Voltar</span>
          </div>
        </div>

        <div className="px-4 mt-2 mb-4">
          <div className="flex space-x-3 overflow-x-auto no-scrollbar- pb-1">
            {dias.map((dia) => (
              <button
                key={dia}
                onClick={() => setDiaSelecionado(dia)}
                className={`px-4 py-2 rounded-lg font-semibold text-base whitespace-nowrap transition-all duration-200 ${
                  diaSelecionado === dia
                    ? "bg-second-blue text-white shadow-sm"
                    : "bg-transparent text-black"
                }`}
              >
                {dia}
              </button>
            ))}
          </div>
        </div>

        <HorarioDia />
      </CardHome>
    </>
  );
}