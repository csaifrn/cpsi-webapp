"use client"


import CardHome from "@/components/home/CardHome"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Trash, ArrowLeft } from "lucide-react";
import Image from "next/image"
import NavBar from "@/components/idoso/navegacao/Navbar";
import { usuario_cpsi } from "@/types/usuario";


export default function CriarTurma() {
  const cronogramasIniciais = [
    { hora: "12:35–14:00", dia: "Terça", sala: "SALA 1" },
    { hora: "12:35–14:00", dia: "Quinta", sala: "SALA 1" },
  ]
  const [cronogramas, setCronogramas] = useState(cronogramasIniciais)
  const [novoHorario, setNovoHorario] = useState("")
  const [novoDiaSala, setNovoDiaSala] = useState("")

  const adicionarCronograma = () => {
    if (!novoHorario || !novoDiaSala) return
    const partes = novoDiaSala.split(" - ")
    const dia = partes[0] || ""
    const sala = partes[1] || ""

    setCronogramas(
      cronogramas.concat({ hora: novoHorario, dia: dia, sala: sala })
    )

    setNovoHorario("")
    setNovoDiaSala("")
  }

  const removerCronograma = (index: number) => {
    const novos = cronogramas.slice()
    novos.splice(index, 1)
    setCronogramas(novos)
  }

  return (
    <>
      <NavBar usuario={usuario_cpsi} />
      <main className="bg-white min-h-screen font-courier-prime text-base">
        <CardHome>
          <div className="pt-4 pb-12 space-y-10">
            <button className="flex items-center gap-2 cursor-pointer">
              <ArrowLeft />
              <span className="font-bold ">Voltar</span>
            </button>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-principal-blue">Modalidade</label>
                <div className="relative">
                  <select className="w-full appearance-none border-b border-gray-400 bg-transparent text-gray-500 focus:outline-none py-1 pr-6">
                    <option disabled selected>Selecione a modalidade</option>
                    <option>Dança</option>
                    <option>Hidroginástica</option>
                    <option>Const. Corporal</option>
                    <option>Musculação</option>
                    <option>Desenho</option>
                    <option>Natação</option>
                    <option>Ballet</option>
                    <option>Canto</option>
                  </select>
                  <div className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 14a1 1 0 01-.707-.293l-5-5a1 1 0 111.414-1.414L10 11.586l4.293-4.293a1 1 0 111.414 1.414l-5 5A1 1 0 0110 14z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-principal-blue">Número da Turma</label>
                <input
                  type="text"
                  placeholder="Digite a numeração da turma"
                  className="w-full border-b border-gray-400 bg-transparent placeholder-gray-400 focus:outline-none py-1"
                />
              </div>

              <div className="space-y-2">
                <label className="text-principal-blue">Professor</label>
                <div className="relative">
                  <select className="w-full appearance-none border-b border-gray-400 bg-transparent text-gray-500 focus:outline-none py-1 pr-6">
                    <option disabled selected>Selecione o professor</option>
                    <option>Julio Ribeira Marques</option>
                    <option>Marina Carvalho Pereira</option>
                    <option>João Pedro de Almeida</option>
                    <option>Clara de Alves Araujo</option>
                  </select>
                  <div className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 14a1 1 0 01-.707-.293l-5-5a1 1 0 111.414-1.414L10 11.586l4.293-4.293a1 1 0 111.414 1.414l-5 5A1 1 0 0110 14z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-4">
              <h2 className="text-principal-blue">Cronograma</h2>
              <div className="flex justify-between font-bold">
                <span>Horário</span>
                <span>Dia e Local</span>
              </div>

              {cronogramas.map((item, index) => (
                <div key={index} className="flex justify-between border-b py-1">
                  <div>{item.hora}</div>
                  <div className="text-right">
                    <div>{item.dia}</div>
                    <div className="flex justify-end items-center gap-2">
                      <span>{item.sala}</span>
                      <Trash
                        size={16}
                        className="text-primaria-red cursor-pointer"
                        onClick={() => removerCronograma(index)}
                      />
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex justify-between items-center gap-4 mt-2">
                <input
                  type="text"
                  placeholder="00:00–00:00"
                  className="text-muted-foreground bg-transparent focus:outline-none border-b w-2/5"
                  value={novoHorario}
                  onChange={(e) => setNovoHorario(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Segunda - SALA 1"
                  className="text-muted-foreground bg-transparent focus:outline-none border-b text-right w-3/5"
                  value={novoDiaSala}
                  onChange={(e) => setNovoDiaSala(e.target.value)}
                />
              </div>

              <div className="flex flex-col items-end gap-5 pt-4">
                <Button className="bg-principal-blue text-white hover:bg-principal-blue cursor-pointer px-4 py-1 rounded-full h-9 min-w-[160px]">
                  Adicionar dia
                </Button>

                <Button className="bg-second-green text-black text-lg px-10 py-2 rounded-full h-12 min-w-[220px] flex items-center justify-center gap-2 hover:bg-second-green cursor-pointer">
                  Criar Turma
                  <Image src="/setadois.png" alt="Seta" width={20} height={20} />
                </Button>
              </div>
            </div>
          </div>
        </CardHome>
      </main>
    </>
  )
}
