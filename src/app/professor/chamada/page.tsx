import NavBar from "@/components/idoso/navegacao/Navbar";
import { usuario_cpsi } from "@/types/usuario";
import { Pesquisar } from "@/components/idoso/pre-inscricao/pesquisa";
import { ArrowLeft } from "lucide-react";
import { CardHome } from "@/components/home";
import TurmaCard from "@/components/chamada/TurmaCard";
import ChamadaHeader from "@/components/chamada/ChamadaHeader";
import AlunoCard from "@/components/chamada/AlunoCard";

const Chamada = () => {
  const alunos = [
    { id: 1, nome: "Adailda Conceição Gomes da Silva", cpf: "055.789-09", presente: true, foto: "/idoso.svg" },
    { id: 2, nome: "Adailda Santos Vieira", cpf: "125.789-09", presente: false, foto: "/idoso.svg" },
    { id: 3, nome: "Adailda Ferreira da Silva", cpf: "455.789-09", presente: true, foto: "/idoso.svg" },
    { id: 4, nome: "Adailda Souza Vitor", cpf: "855.789-09", presente: true, foto: "/idoso.svg" },
    { id: 5, nome: "Adailda Ferreira de Lima", cpf: "955.789-09", presente: false, foto: "/idoso.svg" },
  ];

  return (
    <>
      <NavBar usuario={usuario_cpsi} />
      <CardHome>
        <h2 className="flex justify-start mt-8 ml-3"><ArrowLeft /> Voltar</h2>
        <main className="p-4 space-y-4">
          <TurmaCard />

          <div className="p-4 border border-gray-300 rounded-2xl shadow-sm">
            <ChamadaHeader />
            <Pesquisar />
            <div className="space-y-3 p-1 mt-3 pl-2">
              {alunos.map((aluno) => (
                <AlunoCard 
                  key={aluno.id}
                  nome={aluno.nome}
                  cpf={aluno.cpf}
                  foto={aluno.foto}
                />
              ))}
            </div>
          </div>
        </main>
      </CardHome>
    </>
  );
};

export default Chamada;
