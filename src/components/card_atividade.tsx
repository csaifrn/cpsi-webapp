import { Checkbox } from "@/components/ui/checkbox";

interface ActivityCardProps {
  title: string;
  teacher: string;
  time: string;
}

export function Card({ title, teacher, time }: ActivityCardProps) {
  return (
      <div className="w-80 m-5 border border-primaria-blue rounded-xl p-3 flex justify-between items-center text-principal-blue font-mono">
        <div className="flex items-center gap-4">
          <img src="/danca.svg" alt="Atividade" className="" />
          <div>
            <p className="text-sm font-semibold">{title}</p>
            <p className="text-xs">{teacher} &nbsp; {time}</p>
          </div>
        </div>
        <Checkbox className="data-[state=checked]:bg-principal-blue data-[state=checked]:border-principal-blue" />
      </div>
  );
}
