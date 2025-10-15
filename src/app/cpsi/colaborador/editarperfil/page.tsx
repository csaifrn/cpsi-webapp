'use client'

import { ArrowLeft, Eye, LucideCamera, Upload } from 'lucide-react'
import CardHome from '@/components/home/CardHome'
import Image from 'next/image'
import DadosPessoais from '@/components/colaborador/DadosPessoais'
import Documentacao from '@/components/colaborador/Documentacao'
import { Button } from "@/components/ui/button";
import NavBar from '@/components/idoso/navegacao/Navbar'
import { usuario_cpsi } from '@/types/usuario';

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

export default function Perfil() {
  return (
    <div className="font-courier-prime w-full min-h-screen bg-white">
      <NavBar usuario={usuario_cpsi} />

      <CardHome>
      <div className='flex flex-row mt-4 mb-4 justify-between'>
        <div className="flex items-center px-4 py-3 text-black font-bold text-sm gap-2 cursor-pointer">
          <ArrowLeft size={20} />
          <span>Voltar</span>
        </div>
        <Button className="font-bold  text-black bg-primaria-green mt-1 w-50 rounded-4xl px-4 py-2">salvar alterações</Button>
      </div>

        <div className="flex flex-col gap-4 px-2">
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
          <div className="rounded-2xl border border-principal-blue overflow-hidden mb-6">
            <div className="bg-principal-blue px-6 py-3 flex items-center justify-between text-white font-bold">
              <span>Documentação</span>
            </div>

            <ul className="text-sm text-black">
                {documentos.map((doc, index) => (
                    <li
                    key={index}
                    className="flex border-t border-principal-blue min-h-[44px]"
                    >
                    <div className="relative flex items-center justify-center w-10">
                        <Image src="/check.svg" alt="check" width={16} height={16} />
                        <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-principal-blue" />
                    </div>

                    <div className="flex-1 px-4 py-3 flex items-center">
                        <span>{doc}</span>
                        <div className='flex items-center justify-between ml-auto border-2 border-principal-blue rounded-lg p-1'>
                            <Upload size={20} className="mx-1 text-principal-blue cursor-pointer" />
                            <LucideCamera size={20} className="mx-1 text-principal-blue cursor-pointer" />
                            <Eye size={20} className="mx-1 text-principal-blue cursor-pointer" />
                        </div>
                    </div>
                    </li>
                ))}
            </ul>
            </div>
        </div>
      </CardHome>
    </div>
  )
}
