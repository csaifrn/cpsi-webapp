import NavBar from "@/components/idoso/navegacao/Navbar";
import { usuario_cpsi } from "@/types/usuario";
import { MigalhasPreinscricao} from "@/components/idoso/pre-inscricao";
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { UploadIcon, EyeIcon, Trash2Icon } from "lucide-react";




type Documento = {
  nome: string
}

const documentos: Documento[] = [
  { nome: "Documento com foto"},
  { nome: "RG"},
  { nome: "CPF" },
  { nome: "Atestado médico"},
  { nome: "Cardíaco"},
  { nome: "Dermatológico"},
  { nome: "Passaporte Vacinal"},
  { nome: "Diploma/certificado de formação"},
  { nome: "Declaração de voluntariado"},
  { nome: "Termo de responsabilidade e conduta"},
  { nome: "Comprovante de residência"},
]

const Documentacao = () => {
  return (
    <>
        <NavBar usuario={usuario_cpsi} />
        <h1 className="my-6 text-xl text-center text-indigo-400">Adicione fotos dos documento <br/> solicitados em cada campo</h1>
        <MigalhasPreinscricao currentStep={2} />

        <div className="space-y-2 m-5">
        {documentos.map((doc, i) => (
          <Card key={i} className="p-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-indigo-400">{doc.nome}</p>
                <p className="text-xs text-muted-foreground">10/50mb</p>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost">
                  <UploadIcon className="w-6 h-6 text-indigo-400" />
                </Button>
                <Button variant="ghost">
                  <EyeIcon className="w-6 h-6  text-indigo-400" />
                </Button>
                <Button variant="ghost">
                  <Trash2Icon className="w-6 h-6  text-indigo-400" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  )
}
export default Documentacao;