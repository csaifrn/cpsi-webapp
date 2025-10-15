import NavBar from "@/components/idoso/navegacao/Navbar";
import { usuario_cpsi } from "@/types/usuario";
import { ArrowLeft } from "lucide-react";
import CardTurma from "@/components/chamadas/CardTurma";
import Cronograma from "@/components/chamadas/Cronograma";
import Participantes from "@/components/chamadas/Participantes";

const PerfilTurma = () => {
  const participantes = [
    { nome: "Adelida Conceição Gomes da Silva", cpf: "123.456.789-00", foto: "/idoso.svg" },
    { nome: "Adelida Santos Vieira", cpf: "123.456.789-00", foto: "/idoso.svg" },
    { nome: "Adelida Ferreira da Silva", cpf: "123.456.789-00", foto: "/idoso.svg" },
    { nome: "Adelida Conceição Gomes da Silva", cpf: "123.456.789-00", foto: "/idoso.svg" },
    { nome: "Adelida Santos Vieira", cpf: "123.456.789-00", foto: "/idoso.svg" },
    { nome: "Adelida Ferreira da Silva", cpf: "123.456.789-00", foto: "/idoso.svg" },
  ];

  return (
    <div className="flex justify-center font-courier-prime">
      <div className="w-full max-w-md">
        <NavBar usuario={usuario_cpsi} />
        <h2 className="flex justify-start font-medium mt-8 ml-5">
          <ArrowLeft /> Voltar
        </h2>

        <CardTurma />
        <Cronograma />
        <Participantes participantes={participantes} />
      </div>
    </div>
  );
};

export default PerfilTurma;
