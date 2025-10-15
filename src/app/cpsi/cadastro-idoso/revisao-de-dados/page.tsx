'use client'

import { ArrowLeft, MoreHorizontal } from 'lucide-react'
import CardHome from '@/components/home/CardHome'
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import { MigalhasPreinscricao } from "@/components/idoso/pre-inscricao";
import CardDadosPessoais from "@/components/idoso/perfil/CardDadosPessoais"
import CardDocumentacao from "@/components/idoso/perfil/CardDocumentacao"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useState } from "react"

export default function RevisaoDeDadosIdoso() {
  const [openMenu, setOpenMenu] = useState<number | null>(null)

  const atividades = [
    { id: 1, nome: "Dança", turma: ["TERÇA-FEIRA", "7:00-7:45", "SALA 1"], professor: "Gustavo Brito" },
    { id: 2, nome: "Coral", turma: ["TERÇA-FEIRA", "7:45-8:00", "SALA 3"], professor: "João" },
    { id: 3, nome: "Musculação", turma: ["QUARTA-FEIRA", "7:00-7:45", "SALA 1"], professor: "Maria" }
  ]

  return (
    <div className="font-courier-prime w-full min-h-screen bg-white flex flex-col">
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

      <main className="flex-1">
        <CardHome>
          <div className="flex flex-col items-center gap-2 mb-6">
            <span className="text-principal-blue text-center text-xl m-5">
              Verifique as informações <br /> do idoso
            </span>
            <MigalhasPreinscricao currentStep={3} />
          </div>

          <div className="flex flex-col gap-6 px-2">
            <CardDadosPessoais />

            <Card className="max-w-md mx-auto w-full mt-2 bg-white shadow-lg mb-2 font-courier-prime text-lg border border-indigo-500 rounded-md p-0">
              <CardHeader className="bg-principal-blue rounded-t-sm">
                <CardTitle className="font-extrabold text-white border-b border-principal-blue py-3 text-start text-lg pt-5">
                  Atividades
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-0">
                <nav className="flex pl-4 pb-1 mb-3">
                  <Button variant="ghost" className="border-b-4 border-principal-blue font-extrabold rounded-none px-4 py-2 text-indigo-600 cursor-pointer">
                    Extensão
                  </Button>
                  <Button variant="ghost" className="px-4 py-2 cursor-pointer">
                    Ensino
                  </Button>
                </nav>
                <div>
                  <table className="uppercase w-full text-center border-t font-courier-prime text-sm border-principal-blue">
                    <thead>
                      <tr className="divide-x divide-principal-blue border-b border-principal-blue">
                        <th className="font-normal p-3 px-4">Atividade</th>
                        <th className="font-normal p-3">Turma</th>
                        <th className="font-normal p-3">Professor</th>
                      </tr>
                    </thead>
                    <tbody>
                      {atividades.map((atividade, index) => (
                        <tr
                          key={atividade.id}
                          className="divide-x divide-principal-blue border-b border-principal-blue relative"
                        >
                          <td className="relative text-center">
                            <div className="flex items-center justify-center gap-2">
                              {atividade.nome}
                              <button
                                onClick={() => setOpenMenu(openMenu === index ? null : index)}
                                className="cursor-pointer p-1 rounded hover:bg-gray-200 flex items-top justify-end"
                              >
                                <MoreHorizontal size={20} />
                              </button>
                            </div>

                            {openMenu === index && (
                              <div className="absolute right-12 top-1/2 -translate-y-1/2 flex gap-2 bg-principal-blue p-2 rounded-xl shadow-lg">
                                <Image src="/trash.png" alt="Excluir" width={20} height={20} />
                                <Image src="/edit.png" alt="Editar" width={20} height={20} />
                              </div>
                            )}
                          </td>
                          <td>
                            {atividade.turma.map((linha, i) => (
                              <div key={i}>{linha}</div>
                            ))}
                          </td>
                          <td>{atividade.professor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <CardDocumentacao />

            <div className="flex justify-between mb-10 gap-4 mt-6">
              <Button className="bg-principal-blue text-white text-xl px-5 py-1.5 rounded-full flex items-center gap-2 font-bold cursor-pointer">
                <ArrowLeft size={18} />
                Voltar
              </Button>
              <Button className="bg-principal-blue text-white text-xl px-3.5 py-1.5 rounded-full font-bold cursor-pointer">
                Confirmar Cadastro
              </Button>
            </div>
          </div>
        </CardHome>
      </main>
    </div>
  )
}
