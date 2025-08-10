import NavBar from "@/components/idoso/navegacao/Navbar";
import { usuario_cpsi } from "@/types/usuario";
import { MigalhasPreinscricao } from "@/components/idoso/pre-inscricao";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {Upload, Eye, Trash2, CheckCircle, AlertTriangle, Camera} from "lucide-react";

type Status = "ok" | "erro";
type Documento = {
  nome: string;
  status: Status;
};

const documentos: Documento[] = [
  { nome: "Documento com foto", status: "ok" },
  { nome: "RG", status: "ok" },
  { nome: "CPF", status: "erro" },
  { nome: "Atestado médico", status: "ok" },
  { nome: "Cardíaco", status: "erro" },
  { nome: "Dermatológico", status: "ok" },
  { nome: "Passaporte Vacinal", status: "ok" },
  { nome: "Diploma/certificado de formação", status: "ok" },
  { nome: "Declaração de voluntariado", status: "erro" },
  { nome: "Termo de responsabilidade e conduta", status: "ok" },
  { nome: "Comprovante de residência", status: "ok" },
];

const Documentacao = () => {

  return (
    <>
      <NavBar usuario={usuario_cpsi} />
      <h1 className="my-6 text-xl text-center text-indigo-400">
        Adicione fotos dos documento <br /> solicitados em cada campo
      </h1>
      <MigalhasPreinscricao currentStep={2} />

      <div className="p-4 flex flex-col gap-4 ">
        {documentos.map((doc, idx) => (
          <Card key={idx} className="shadow-sm">
            <span className="text-lg text-indigo-400 ml-4">{doc.nome}</span>
                    <div className="flex items-center justify-between p-2 gap-2">
                    {doc.status === "ok" ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                    )}
                    <span className="text-xs text-gray-500">10/30mb</span>
                    <div className="flex justify-end gap-3 border-2 border-indigo-400 p-3 rounded-sm ">
                        <Upload className="w-5 h-5 text-indigo-400" />
                        <Camera className="w-5 h-5 text-indigo-400" /> 
                        <Eye className="w-5 h-5 text-indigo-400" />
                        
                    </div>
                    
              </div>
          </Card>
        ))}
      </div>
    </>
  );
}
export default Documentacao;
