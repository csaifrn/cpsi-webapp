import NavBar from "@/components/idoso/navegacao/Navbar";
import { usuario_cpsi } from "@/types/usuario";
import { MigalhasPreinscricao } from "@/components/idoso/pre-inscricao";
import { Button } from "@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import { ListaDocumentos } from "@/components/professor/ListaDocumento";
import { Documento } from "@/components/professor/DocumentoCard";

const documentos: Documento[] = [
  { nome: "Documento com foto", status: "ok" },
  { nome: "RG", status: "ok" },
  { nome: "CPF", status: "erro" },
  { nome: "Cardíaco", status: "ok" },
  { nome: "Dermatológico", status: "ok" },
  { nome: "Passaporte Vacinal", status: "erro" },
  { nome: "Diploma/certificado \n de formação", status: "erro" },
  { nome: "Declaração de voluntariado", status: "erro" },
  { nome: "Termo de responsabilidade \n e conduta", status: "ok" },
  { nome: "Comprovante de residência", status: "ok" },
];

export default function Documentacao() {
  const indexAtestado = documentos.findIndex(doc => doc.nome === "Cardíaco");

  const docsNormais = documentos.slice(0, indexAtestado);
  const docsAtestados = documentos.slice(indexAtestado);

  return (
    <>
      <NavBar usuario={usuario_cpsi} />
      <h1 className="my-6 text-xl text-center text-indigo-400">
        Adicione fotos dos documento <br /> solicitados em cada campo
      </h1>
      <MigalhasPreinscricao currentStep={2} />

      <div className="p-4">
        <ListaDocumentos documentos={docsNormais} />
        <ListaDocumentos titulo="Atestados Médicos" documentos={docsAtestados} />
      </div>

      <div className="flex justify-between m-4 mt-10">
        <Button className="bg-indigo-400 rounded-3xl h-8 text-xs">
          <MoveLeft /> Voltar
        </Button>
        <Button className="bg-indigo-400 rounded-xl h-8 text-xs">
          Avançar <MoveRight />
        </Button>
      </div>
    </>
  );
}
