'use client'

import { ArrowLeft } from 'lucide-react'
import CardHome from '@/components/home/CardHome'
import Image from 'next/image'
import DadosPessoais from '@/components/colaborador/DadosPessoais'
import Documentacao from '@/components/colaborador/Documentacao'
import { Button } from "@/components/ui/button";
import NavBar from '@/components/idoso/navegacao/Navbar'
import { usuario_cpsi } from '@/types/usuario';

export default function Perfil() {
  return (
    <div className="font-courier-prime w-full min-h-screen bg-white">
      <NavBar usuario={usuario_cpsi} />

      <CardHome>
      <div className="flex items-center px-4 py-3 text-black font-bold text-sm gap-2 cursor-pointer">
        <ArrowLeft size={20} />
        <span>Voltar</span>
      </div>

        <div className="flex flex-col gap-4 px-2">
          <DadosPessoais />
          <Documentacao />
        </div>
      </CardHome>
    </div>
  )
}
