import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowLeft, AlertCircle, ChevronRight, Search, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import { CardHome } from "@/components/home";

const pessoas = [
  {
    nome: "Adélia Conceição Gomes da Silva",
    cpf: "123.456.789-00",
    foto: "/idosa.jpg",
    alerta: false,
  },
  {
    nome: "Adélia Santos Vieira",
    cpf: "123.456.789-00",
    foto: "/idosa.jpg",
    alerta: true,
  },
  {
    nome: "Adélia Ferreira da Silva",
    cpf: "123.456.789-00",
    foto: "/idosa.jpg",
    alerta: true,
  },
    {
    nome: "Adélia Conceição Gomes da Silva",
    cpf: "123.456.789-00",
    foto: "/idosa.jpg",
    alerta: false,
  },
  {
    nome: "Adélia Santos Vieira",
    cpf: "123.456.789-00",
    foto: "/idosa.jpg",
    alerta: true,
  },
  {
    nome: "Adélia Ferreira da Silva",
    cpf: "123.456.789-00",
    foto: "/idosa.jpg",
    alerta: true,
  },
    {
    nome: "Adélia Conceição Gomes da Silva",
    cpf: "123.456.789-00",
    foto: "/idosa.jpg",
    alerta: false,
  },
    {
    nome: "Adélia Ferreira da Silva",
    cpf: "123.456.789-00",
    foto: "/idosa.jpg",
    alerta: true,
  },
  // Repita para mais pessoas...
];

const InscricoesPage = () => {
  return (
    <div className="flex flex-col font-courier-prime">
      <Header />
      <CardHome>
        {/* Voltar */}
        <div className="flex items-center mr-60 my-2 gap-2 py-2">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-bold text-sm">Voltar</span>
        </div>

        {/* Card da turma */}
        <Card className="flex flex-row items-center w-80 h-19 gap-3 pr-3 rounded-lg shadow bg-primaria-yellow border-second-yellow border-4 mb-2">
            <img src="/imagens/turmas/icones/danca_nao_preenchido.svg" alt="Dança" className="w-12 h-12 ml-3" />
            <div className="flex-1 flex-col gap-2">
            <div className="font-bold text-lg">Dança</div>
            <div className="text-xs font-bold">Turma 1</div>
            <div className="text-xs">Prof. Julio</div>
            </div>
            <div className="text-xs text-right mb-8.5">12:35 - 14:00</div>
        </Card>

        {/* Vagas e inscrições */}
        <div className="flex items-center gap-23 mb-2">
            <span className="flex justify-center bg-white border-2 w-24 px-2 py-1 rounded-full text-xs font-bold">Vagas: 30</span>
            <span className=" justify-center bg-white border-2 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            Inscrições: 36
            <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
            </span>
        </div>

        {/* Botões */}
        <div className="flex flex-col gap-2 mt-2 mb-4">
            <h2 className="text-sm text-center">Confirme os idosos incritos antes <br/> de finalizar as incrições</h2>
            <Button className="bg-primaria-blue text-white flex-1 rounded-full">Finalizar Inscrições</Button>
        </div>

        {/* Busca */}
        <div className="mb-2 pl-3 flex justify-start items-center w-80 bg-white border-2 focus:border-none text-gray-800 text-sm rounded-full">
          <Search className=""/>
          <Input
              type="text"
              name="search"
              id="search"
              autoComplete="off"
              aria-label="Buscar por turma"
              placeholder="Buscar por turma"
               className="border-none rounded-r-full w-85"
            />
        </div>

        {/* Lista de pessoas */}
        <Card className="flex items-center p-3 rounded-lg shadow bg-white">
            {pessoas.map((pessoa, idx) => (
            <Card key={idx} className="flex flex-row items-center gap-3 p-3 rounded-lg shadow bg-white border border-primaria-blue w-74 h-25">
                <div className="flex-1 flex-col items-center gap-3">
                    <div className="flex flex-row items-center gap-3">
                        <img src={pessoa.foto} alt={pessoa.nome} className="w-10 h-10 rounded-full object-cover border-2 border-principal-blue" />
                        <div className="flex-1">
                            <div className="font-bold text-xs">{pessoa.nome}</div>
                            <div className="text-xs">{pessoa.cpf}</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                        <input type="checkbox" className="accent-principal-blue" />
                        <span className="text-xs">Aceitar inscrição</span>
                    </div>
                </div>
                <div>
                {pessoa.alerta ? (
                  <div className="flex flex-col items-center gap-2">
                    <AlertCircle className="w-3 h-3 text-red-500 mb-0.5" />
                    <ChevronRight className="w-4 h-4 text-primaria-blue mb-4.5" />
                  </div>   
                ) : (
                    <ChevronRight className="w-4 h-4 text-primaria-blue" />
                )}
                </div>
            </Card>
            ))}
        </Card>
      </CardHome>
    </div>

    );
}
export default InscricoesPage;