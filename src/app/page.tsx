"use client"

import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/ui/forms/Header"
import CampoTexto from "@/components/ui/forms/CampoTexto"
import BotaoAvancar from "@/components/ui/forms/BotaoAvancar"
import FormProgress from "@/components/ui/forms/FormProgress"
import BotaoVoltar from "@/components/ui/forms/BotaoVoltar"


export default function CadastroIdoso() {
  return (
    <div className="font-mono min-h-screen bg-background text-foreground">
      <Header />

      <div className="px-4 pt-6 pb-20 max-w-sm mx-auto">
        <h1 className="text-principal-blue text-center text-lg font-medium leading-snug mb-4">
          Cadastre um idoso inserindo<br />os dados solicitados
        </h1>

        <FormProgress />

        <Card className="shadow-none border-0">
          <CardContent className="space-y-4 p-0">
            <CampoTexto label="CPF" placeholder="Digite o CPF do idoso" />
            <CampoTexto label="Nome" placeholder="Digite o nome do idoso" size="sm" />

            <div className="grid grid-cols-2 gap-4">
              <CampoTexto label="Data de nascimento" placeholder="DIA / MES / ANO" />
              <CampoTexto label="Idade" placeholder="Gerado" />
            </div>

            <div className="pt-2">
              <p className="text-principal-blue text-lg font-bold">Contato de Emergência</p>
            </div>

            <CampoTexto label="Nome do contato" placeholder="Digite o nome do contato de emergência" />
            <CampoTexto label="Telefone do contato" placeholder="Número do telefone do contato de emergência" />

            <div className="flex justify-between">
              <BotaoVoltar />
              <BotaoAvancar />
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  )
}
