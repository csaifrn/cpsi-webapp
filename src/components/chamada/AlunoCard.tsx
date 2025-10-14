import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/idoso/pre-inscricao/ui/checkbox";

interface AlunoCardProps {
  nome: string;
  cpf: string;
  foto: string;
}

const AlunoCard = ({ nome, cpf, foto }: AlunoCardProps) => (
  <Card>
    <CardContent className="p-1">
      <div className="flex items-center gap-3 pl-2">
        <img src={foto} alt="idoso" className="w-17 h-17" />
        <div className="text-base">
          <p>{nome}</p>
          <p>CPF: {cpf}</p>
          <p>
            <Checkbox className="w-4 h-4 border-principal-blue data-[state=checked]:bg-principal-blue data-[state=checked]:border-principal-blue" />{" "}
            Presente
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default AlunoCard;
