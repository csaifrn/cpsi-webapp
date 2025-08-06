'use client'

import { ArrowLeft } from 'lucide-react'
import CardHome from '@/components/home/CardHome'
import Image from 'next/image'
import DadosPessoais from '@/components/colaborador/DadosPessoais'
import Documentacao from '@/components/colaborador/Documentacao'
import { Button } from "@/components/ui/button";

export default function Perfil() {
  return (
    <div className="font-courier-prime w-full min-h-screen bg-white">
      <header className="bg-principal-blue flex items-center justify-between py-4 px-5">
        <figure>
            <Button className="bg-white/10 p-2 w-12 h-12 rounded-xl hover:bg-white/10 cursor-pointer">
            <Image src="/casa.png" alt="Ícone de casa" width={24} height={24} />
            </Button>
        </figure>
        <figure>
            <Button className="bg-white/10 p-2 w-12 h-12 rounded-xl hover:bg-white/10 cursor-pointer">
            <Image src="/menu.png" alt="Ícone de menu" width={24} height={24} />
            </Button>
        </figure>
    </header>
      
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
