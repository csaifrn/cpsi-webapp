import { ProfessorCard } from "./ProfessorCard"

interface Professor {
  nome: string
  cpf: string
}

interface ListaProfessoresProps {
  professores: Professor[]
}

export function ListaProfessores({ professores }: ListaProfessoresProps) {
  return (
    <div className="mt-2 w-full border border-gray-300 rounded-xl p-4 bg-white shadow-sm">
      {professores.map((professor, index) => (
        <ProfessorCard
          key={index}
          nome={professor.nome}
          cpf={professor.cpf}
        />
      ))}
    </div>
  )
}
