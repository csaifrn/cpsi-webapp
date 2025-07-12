import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox"

interface CardDiaProps {
  dia: string;
  turnosSelecionados: string[];
  onToggleTurno: (turno: string) => void;
}

export function CardDia({ dia, turnosSelecionados, onToggleTurno }: CardDiaProps) {
  const turnos = ["Manhã", "Tarde", "Noite"];

  return (
    <div className="border-1 border-principal-blue rounded-xl w-full">
        <div className="bg-principal-blue text-white font-bold text-center rounded-t-xl py-2 mb-5 font-mono ">
            {dia}
        </div>
        <div className="flex flex-col items-start px-3 py-2 min-h-40 gap-2  ">
            {turnos.map((turno) => {
            const isSelected = turnosSelecionados.includes(turno);

            return (
                <label
                key={turno}
                className="flex items-center gap-1 text-principal-blue font-semibold text-sm mb-2 ml-3 font-mono">
                <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => onToggleTurno(turno)}
                    className=" w-4 h-4 rounded-2 accent-principal-blue border-2 border-principal-blue"/>
                {turno}
                </label>
            );
            })}
        </div>
        </div>

  );
}
