'use client'

import { ArrowLeft } from 'lucide-react'
import CardHome from '@/components/home/CardHome'
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import { MigalhasPreinscricao } from "@/components/idoso/pre-inscricao";
import NavBar from '@/components/idoso/navegacao/Navbar';
import { usuario_cpsi } from '@/types/usuario';

export default function RevisaoDeDados() {
  const documentos = [
    'Documento com foto',
    'CÓPIA DO RG (FRENTE)',
    'CÓPIA DO RG (VERSO)',
    'CPF',
    'PASSAPORTE VACINAL',
    'ATESTADO CARDIOLOGISTA',
    'ATESTADO DERMATOLOGISTA',
    'DIPLOMA/CERTIFICADO DE FORMAÇÃO',
    'DECLARAÇÃO DE VOLUNTARIADO',
    'TERMO DE RESPONSABILIDADE E CONDUTA',
    'COMPROVANTE DE RESIDÊNCIA',
  ]

  return (
    <div className="font-courier-prime w-full min-h-screen bg-white flex flex-col">
      <NavBar usuario={usuario_cpsi} />

      <main className="flex-1">
        <CardHome>
          <div className="flex flex-col items-center gap-2 mb-6">
            <span className="text-principal-blue text-center text-xl m-5">
              Verifique as informações <br /> do colaborador
            </span>
            <MigalhasPreinscricao currentStep={3} />
          </div>

          <div className="flex flex-col gap-6 px-2">

            <div className="rounded-2xl border border-principal-blue">
              <div className="bg-principal-blue rounded-t-2xl px-4 py-3 flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <Image
                    src="/professora.jpg"
                    alt="Foto"
                    width={50}
                    height={50}
                    className="rounded-full w-12 h-12 object-cover"
                  />
                  <span className="font-bold">Lilian dos Santos</span>
                </div>
              </div>

              <div className="text-sm text-black px-4 py-3 space-y-2">
                <p>CPF: 123.456.789-00</p>
                <p>Idade: 31</p>
                <p>Data de nascimento: 06/12/1994</p>
                <p>Tel. Contato: (84) 9 9999-9999</p>
              </div>

              <div className="border-t border-principal-blue px-4 py-3 text-sm space-y-1">
                <p className="font-bold text-black">Contato de Emergência</p>
                <p>Nome: Kamila</p>
                <p>Vínculo: Irmã</p>
                <p>Tel. Emergência: (84) 8 8888-8888</p>
              </div>
            </div>

            <div className="rounded-2xl border border-principal-blue overflow-hidden">
              <div className="bg-principal-blue px-6 py-3 flex items-center justify-between text-white font-bold">
                <span>Documentação</span>
              </div>

              <ul className="text-sm text-black">
                {documentos.map((doc, index) => (
                  <li key={index} className="flex border-t border-principal-blue min-h-[44px]">
                    <div className="relative flex items-center justify-center w-10">
                      <Image src="/check.svg" alt="check" width={16} height={16} />
                      <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-principal-blue" />
                    </div>
                    <div className="flex-1 px-4 py-3 flex items-center">
                      <span>{doc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between mb-10 gap-4 mt-6">
              <Button className="bg-principal-blue text-white text-xl px-6 py-2 rounded-full flex items-center gap-2 font-bold cursor-pointer">
                <ArrowLeft size={18} />
                Voltar
              </Button>
              <Button className="bg-principal-blue text-white text-xl px-6 py-2 rounded-full font-bold cursor-pointer">
                Confirmar Cadastro
              </Button>
            </div>
          </div>
        </CardHome>
      </main>
    </div>
  )
}
