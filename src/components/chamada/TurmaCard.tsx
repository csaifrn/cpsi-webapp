import { Card, CardContent } from "@/components/ui/card";

const TurmaCard = () => (
  <Card className="bg-amber-200 border-yellow-500 h-25 p-2">
    <CardContent className="relative p-2 flex">
      <div className="flex gap-2">
        <img src="/Component1.svg" alt="icone" className="w-15 h-15" />
        <div>
          <h2 className="font-bold">Dança</h2>
          <p className="text-sm">Turma 1</p>
          <p className="text-sm">Prof.: Júlio</p>
        </div>
      </div>
      <span className="absolute top-2 right-2 text-xs">12:35 - 14:00</span>
    </CardContent>
  </Card>
);

export default TurmaCard;
