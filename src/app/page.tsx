"use client"

import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function CadastroIdoso() {
  return (
    <div className="font-mono min-h-screen bg-white">
      
      <div className="bg-indigo-500 text-white p-4 flex justify-between items-center">
        <span className="bg-white/30 w-10 h-10 flex items-center justify-center rounded-lg">
          <Image src="/pessoa.png" alt="casa" width={20} height={20} />
        </span>
        <span className="bg-white/30 w-10 h-10 flex items-center justify-center rounded-lg">
          <Image src="/menu.png" alt="menu" width={20} height={20} />
        </span>
      </div>

      <div className="px-4 pt-6 pb-20 max-w-sm mx-auto">
        <h1 className="text-indigo-600 text-center text-lg font-medium leading-snug mb-4">
          Cadastre um idoso inserindo<br />os dados solicitados
        </h1>

        <div className="flex justify-center gap-2 mb-6">
          <div className="w-2 h-2 bg-indigo-500 rounded-full" />
          <div className="w-2 h-2 border border-indigo-500 rounded-full" />
          <div className="w-2 h-2 border border-indigo-500 rounded-full" />
        </div>

        <Card className="shadow-none border-0">
          <CardContent className="space-y-4 p-0">
            
            <div>
              <Label className="text-[#6875F5] text-lg">CPF</Label>
              <Input className="font-mono border-0 border-b border-gray-400 rounded-none px-0 text-lg" placeholder="Digite o CPF do idoso"/>
            </div>

            
            <div>
              <Label className="text-[#6875F5] text-lg">Nome</Label>
              <Input
                className="font-mono border-0 border-b border-gray-400 rounded-none px-0 text-sm " placeholder="Digite o nome do idoso"/>
            </div>

            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-[#6875F5] text-lg">Data de nascimento</Label>
                <Input
                  className="font-mono border-0 border-b border-gray-400 rounded-none px-0 text-lg" placeholder="DIA / MES / ANO"/>
              </div>

              <div>
                <Label className="text-[#6875F5] text-lg">Idade</Label>
                <Input
                  className="font-mono border-0 border-b border-gray-400 rounded-none px-0 text-lg" placeholder="Gerado"/>
              </div>
            </div>

           
            <div className="pt-2">
              <Label className="text-[#6875F5] text-lg font-bold">Contato de Emergência</Label>
            </div>

            
            <div>
              <Label className="text-[#6875F5] text-lg">Nome do contato</Label>
              <Input
                className="font-mono border-0 border-b border-gray-400 rounded-none px-0 text-lg" placeholder="Digite o nome do contato de emergência"/>
            </div>

            <div>
              <Label className="text-[#6875F5] text-lg">Telefone do contato</Label>
              <Input
                className="font-mono border-0 border-b border-gray-400 rounded-none px-0 text-lg" placeholder="Número do telefone do contato de emergência" />
            </div>

            <div className="flex justify-end pt-4">
              <Button className="font-mono bg-[#6875F5] text-white hover:bg-[#5a66d4] flex gap-2 px-6 rounded-full text-lg">
                Avançar
                <Image src="/seta.png" alt="Seta" width={14} height={14} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
