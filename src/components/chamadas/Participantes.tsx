import { Card, CardContent, CardHeader, CardTitle, CardAction } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SquarePen } from "lucide-react";
import { Pesquisar } from "@/components/idoso/pre-inscricao/pesquisa";

interface Participante {
  nome: string;
  cpf: string;
  foto: string;
}

interface ParticipantesProps {
  participantes: Participante[];
}

const Participantes = ({ participantes }: ParticipantesProps) => {
  return (
    <Card className="border-indigo-500 gap-5 py-0 ml-5 mr-5 pb-7">
      <CardHeader className="bg-indigo-500 rounded-t-xl p-4">
        <CardTitle className="text-white text-xl">Participantes</CardTitle>
        <CardAction>
          <SquarePen className="text-white h-8 w-8"/>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Pesquisar/>
        <div className="space-y-2 mt-5">
          {participantes.map((p, i) => (
            <div key={i} className="flex items-center gap-3 border rounded-md p-2">
              <Avatar className="w-16 h-16">
                <AvatarImage src={p.foto} className="object-cover rounded-full" />
                <AvatarFallback>{p.nome[0]}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col text-sm">
                <span>{p.nome}</span>
                <span>{p.cpf}</span>
                <span className="text-xs font-medium">0 Faltas</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
};
export default Participantes;
