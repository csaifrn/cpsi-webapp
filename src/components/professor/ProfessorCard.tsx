import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

interface ProfessorCardProps {
  nome: string
  cpf: string
}

export function ProfessorCard({ nome, cpf }: ProfessorCardProps) {
  return (
    <Card className="border border-gray-300 w-full mb-3 p-2 shadow-none">
      <CardContent className="flex items-center justify-between py-1 px-1">
        <div className="flex items-center gap-3">
          <img
            src="/idosa2.svg"
            alt="professor"
            className="w-18 h-18 rounded-full object-contain p-1"
          />
          <div className="text-left leading-tight">
            <p className="text-base">{nome}</p>
            <p className="text-base">{cpf}</p>
          </div>
        </div>
        <ChevronRight className="text-indigo-500 w-7 h-7" />
      </CardContent>
    </Card>
  )
}
