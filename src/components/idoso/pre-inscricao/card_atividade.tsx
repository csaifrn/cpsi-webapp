import { Checkbox } from "@/components/idoso/pre-inscricao/ui/checkbox";

interface ActivityCardProps {
  title: string;
  teacher: string;
  time: string;
}

export function Card({ title, teacher, time }: ActivityCardProps) {
  return (
      <div className="w-80 m-5 border border-primaria-blue rounded-xl p-3 flex justify-between items-center text-principal-blue font-mono">
        <div className="flex items-center gap-4">
          <div>
            <p className="text-lg font-semibold">{title}</p>
            <p className="text-sm">{teacher} &nbsp; {time}</p>
          </div>
        </div>
        <Checkbox className="data-[state=checked]:bg-principal-blue w-6 h-6 border-principal-blue data-[state=checked]:border-principal-blue" />
      </div>
  );
}