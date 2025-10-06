import NavBar from "@/components/idoso/navegacao/Navbar"
import { usuario_cpsi } from "@/types/usuario"
import { Pesquisar } from "@/components/idoso/pre-inscricao/pesquisa"
import { ListaProfessores } from "@/components/professor/ListaProfessores"

export default function ProfessoresPage() {
  const professores = [
    { nome: "Julio Marques Rodrigues", cpf: "123.456.789-00" },
    { nome: "Lilian Marina dos Santos", cpf: "123.456.789-00" },
    { nome: "João Pedro Carvalho", cpf: "123.456.789-00" },
    { nome: "Julio Matins de Calvario Marques", cpf: "123.456.789-00" },
    { nome: "Clara Roberta dos Santos", cpf: "123.456.789-00" },
    { nome: "Adelida Santos Vieira", cpf: "123.456.789-00" },
  ]

  return (
    <>
      <NavBar usuario={usuario_cpsi} />
      <div className="flex flex-col items-center max-w-md mx-auto px-4 py-4 font-courier-prime w-full shadow-none">
        <div className="w-full mb-4">
          <Pesquisar />
        </div>
        <ListaProfessores professores={professores} />
      </div>
    </>
  )
}
