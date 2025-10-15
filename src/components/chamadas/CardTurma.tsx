import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardAction } from "@/components/ui/card";
import { SquarePen } from "lucide-react";

const CardTurma = () => {
  return (
    <Card className="border-indigo-500 gap-2 py-0 m-5 pb-5">
      <CardHeader className="bg-indigo-500 rounded-t-xl p-4">
        <CardTitle className="text-white text-xl">Dança</CardTitle>
        <CardDescription className="text-white text-base">Turma 1</CardDescription>
        <CardAction>
          <SquarePen className="text-white h-8 w-8"/>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm font-semibold">Professor(a)</p>
        <div className="gap-3 mt-2 flex items-center">
          <img src="/professora.svg" alt="professora" className="w-15 h-15" />
          <p className="text-base">Lilian dos Santos</p>
        </div>
      </CardContent>
    </Card>
  )
};
export default CardTurma;