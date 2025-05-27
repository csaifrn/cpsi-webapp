"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button" 


const DadosPessoais = () => {
  return (
    <section className="min-h-screen bg-white">
      <div className="bg-indigo-500 text-white p-4 flex justify-between items-center">
        
        <span className="bg-white/30 w-10 h-10 flex items-center justify-center rounded-lg">
          <a><Image src="/casa.png" alt="casa" width={20} height={20} /></a>
        </span>
        
        <span className="bg-white/30 w-10 h-10 flex items-center justify-center rounded-lg">
          <Image src="/menu.png" alt="menu" width={20} height={20} />
        </span>
      </div>

      <div className="p-4 max-w-md mx-auto text-gray-900 font-courier-prime">
        <div className="flex items-center text-lg font-semibold mb-4">
          <Button variant="ghost" size="icon" className="mr-2 p-0 h-auto w-auto">
            <Image src="/seta.png" alt="voltar" width={20} height={20} />
          </Button>
          <span>Dados Pessoais</span>
        </div>

        <Card className="border border-purple-500 rounded-lg shadow-md overflow-hidden">
          <CardHeader className="bg-indigo-500 text-white p-8 flex items-center gap-3">
            <Avatar className="w-16 h-16 border-2 border-white rounded-full">
              <AvatarImage src="/idosa.jpg" alt="Foto do idoso" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <span className="font-bold text-lg font-courier-prime">
              Adeilda Conceição Gomes da Silva
            </span>
          </CardHeader>

          <CardContent className="space-y-1 text-lg text-gray-900 font-courier-prime">
            <p>CPF: 123.456.789-00</p>
            <p>Idade: 61</p>
            <p>Data de nascimento: 06/12/1960</p>
            <p>Tel. Contato: (84) 9 9999-9999</p>
          </CardContent>

          <CardFooter className="border-t border-purple-500 px-7 py-6 text-lg text-gray-900 flex flex-col items-start">
            <p className="font-bold mb-1 font-courier-prime">Contato de Emergência</p>
            <p>Nome: Kamila</p>
            <p>Vínculo: Filha</p>
            <p>Tel. Emergência: (84) 8 8888-8888</p>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}


const Atividades = () => {
  return (
    <section className="text-gray-900 font-courier-prime flex flex-col items-center bg-white p-5  mx-auto">
      <div className="border pb-4 border-indigo-500 w-full rounded-md shadow-md bg-white text-lg max-w-md">
        <h2 className=" font-extrabold border-b border-indigo-500 p-3 pl-7.5">Atividades</h2>
        <nav className="justify-items-start p-4 pl-7.5"> 
            <button className="border-b-3 border-indigo-500 font-extrabold">Extensão</button>
            <button className="pl-4">Ensino</button>
        </nav>
        <div >
            <table className="uppercase border border-indigo-500 rounded-md w-full text-center">
              <thead>
                <tr className="border border-indigo-500 divide-x divide-indigo-500">
                  <th className=" font-normal p-3 px-4">Atividade</th>
                  <th className=" font-normal p-3">Turma</th>
                  <th className=" font-normal p-3">Professor</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-indigo-500 divide-x divide-indigo-500">
                  <td>Dança</td>
                  <td>Terça-feira<br></br>
                  7:00-7:45<br></br>
                  Sala 1
                  </td>
                  <td>Null</td>
                </tr>
                <tr className="border border-indigo-500 divide-x divide-indigo-500">
                  <td>Coral</td>
                  <td>TERÇA-FEIRA<br></br>
                  7:45-8:00<br></br>
                  SALA 3</td>
                  <td>Null</td>
                </tr>
                <tr className="border border-indigo-500 divide-x divide-indigo-500">
                  <td>Musculação</td>
                  <td>QUARTA-FEIRA<br></br>
                  7:00-7:45<br></br>
                  SALA 1</td>
                  <td>Null</td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    </section>
  );
}


const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <DadosPessoais />
            <Atividades />
            <crad2 />
        </div>
    );
}

export default Home; 
