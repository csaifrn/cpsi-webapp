import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const professores = [
  { id: 1, nome: "Liliana dos Santos", foto: "/professor.png" },
  { id: 2, nome: "Maria Silva", foto: "/professor2.png" },
  { id: 3, nome: "João Santos", foto: "/professor3.png" },
  { id: 4, nome: "Ana Costa", foto: "/professor4.png" },
];

interface Professor {
  id: number;
  nome: string;
  foto: string;
}

interface ProfessorSelectorProps {
  professorSelecionado: Professor;
  onProfessorChange: (professor: Professor) => void;
}

// Componente de seleção de professor
export const ProfessorSelector = ({ professorSelecionado, onProfessorChange }: ProfessorSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="flex items-center gap-3 cursor-pointer rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Avatar className="w-16 h-16 border-2 border-primaria-blue rounded-full">
          <AvatarImage
            src={professorSelecionado?.foto || "/professor-default.png"}
            alt="Foto do professor"
          />
          <AvatarFallback>
            {professorSelecionado?.nome
              ?.split(" ")
              .map((n) => n[0])
              .join("") || "?"}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="text-lg">
            {professorSelecionado?.nome || "Selecione um professor"}
          </h3>
        </div>
        {isOpen ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
          {professores.map((professor) => (
            <div
              key={professor.id}
              className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
              onClick={() => {
                onProfessorChange(professor);
                setIsOpen(false);
              }}
            >
              <Avatar className="w-12 h-12 border-2 border-primaria-blue rounded-full">
                <AvatarImage
                  src={professor.foto}
                  alt={`Foto de ${professor.nome}`}
                />
                <AvatarFallback>
                  {professor.nome
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-lg">{professor.nome}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

