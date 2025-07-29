'use client';
import { Checkbox } from "@/components/idoso/pre-inscricao/ui/checkbox";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form"; // Para acessar o form no contexto

interface ActivityCardProps {
  title: string;
  teacher: string;
  time: string;
}
// Idoso/etapa 2: Card de Atividade
export function Card({ title, teacher, time }: ActivityCardProps) {
  const { setValue, watch } = useFormContext<{ atividades: string[] }>();

  // Escuta se o checkbox está selecionado
  const atividadesSelecionadas = watch("atividades") || [];

  const checked = atividadesSelecionadas.includes(title);

  const onCheckedChange = (checked: boolean) => {
    if (checked) {
      setValue("atividades", [...atividadesSelecionadas, title], { shouldValidate: true });
    } else {
      setValue("atividades", atividadesSelecionadas.filter((a) => a !== title), { shouldValidate: true });
    }
  };

  return (
    <div className="w-90 m-5 border border-primaria-blue rounded-xl p-3 flex justify-between items-center text-principal-blue font-mono">
      <div className="flex items-center gap-4 pl-5">
        <div>
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-sm">{teacher} &nbsp; {time}</p>
        </div>
      </div>
      <Checkbox
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="data-[state=checked]:bg-principal-blue w-6 h-6 border-principal-blue data-[state=checked]:border-principal-blue"
      />
    </div>
  );
}

