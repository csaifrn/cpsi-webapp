import NavBar from "@/components/idoso/navegacao/Navbar"
import { usuario_cpsi } from "@/types/usuario"
import { Pesquisar } from "@/components/idoso/pre-inscricao/pesquisa"
import { ListaProfessores } from "@/components/professor/ListaProfessores"
import { CardHome } from "@/components/home";

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
      <CardHome>
        <div className="py-4">
          <div className="w-full mb-4">
            <Pesquisar />
          </div>
          <ListaProfessores professores={professores} />
        </div>
      </CardHome>
    </>
  )
}
