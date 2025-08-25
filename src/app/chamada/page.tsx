import NavBar from "@/components/idoso/navegacao/Navbar";
import { usuario_cpsi } from "@/types/usuario";
import { Pesquisar } from '@/components/idoso/pre-inscricao/pesquisa';
import { ArrowLeft, Calendar, CheckCircle, Search } from "lucide-react"
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/idoso/pre-inscricao/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
/*import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"*/
import { Label } from "@/components/ui/label"
/*import { Switch } from "@/components/ui/switch"*/
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Chamada() {
  const alunos = [
    { id: 1, nome: "Adailda Conceição Gomes da Silva", cpf: "055.789-09", presente: true, foto: "/user1.jpg" },
    { id: 2, nome: "Adailda Santos Vieira", cpf: "125.789-09", presente: false, foto: "/user2.jpg" },
    { id: 3, nome: "Adailda Ferreira da Silva", cpf: "455.789-09", presente: true, foto: "/user3.jpg" },
    { id: 4, nome: "Adailda Souza Vitor", cpf: "855.789-09", presente: true, foto: "/user4.jpg" },
    { id: 5, nome: "Adailda Ferreira de Lima", cpf: "955.789-09", presente: false, foto: "/user5.jpg" },
  ]

  return (
    
    <div className="">
        <NavBar usuario={usuario_cpsi} />
        <h2 className="flex justify-start mt-5 ml-5"><ArrowLeft/> Voltar</h2>

      <main className="p-4 space-y-4">
        <Card className="bg-amber-200 border-yellow-500 h-20 p-0"> 
          <CardContent className="p-2 flex justify-between items-center">
            <div className="flex justify-start">
                <img src="/Component1.svg" alt="icone" className="w-15 h-15" />
                <div>
                    <h2 className="font-bold">Dança</h2>
                    <p className="text-sm">Turma 1</p>
                    <p className="text-sm">Prof.: Júlio</p>
                </div>
            </div>  
            <span className="text-xs">13:00 - 14:00</span>
          </CardContent>
        </Card>

        <div className="border-amber-800" >
            <div>
                <p className="text-medium">Data: </p>
                <div className="flex justify-between gap-2 mt-4 mb-4">
                    <Input type="date" className="w-30" defaultValue="2025-07-20" />
                    <p className="text-green-500 text-base flex gap-2"> <CheckCircle className="h-5 w-5"/>Chamada cadastrada</p>
                </div>
                <Button className="bg-indigo-400 w-100 mb-4">Editar chamada</Button>
            </div>
            <Pesquisar/>
            <div className="space-y-3 p-1 mt-2">
                {alunos.map((aluno) => (
                    <Card key={aluno.id}>
                    <CardContent className="p-3">
                        <div className="flex items-center gap-3">
                            <img src="/idoso.svg" alt="idoso" className="w-16 h-16" />
                            <div className="text-base">
                                <p>{aluno.nome}</p>
                                <p>CPF: {aluno.cpf}</p>
                                <p><Checkbox className="w-4 h-4 border-principal-blue"/> Presente</p>
                            </div>
                        </div>
                    
                    </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </main>
    </div>
  )
}
