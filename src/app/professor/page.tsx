import NavBar from "@/components/idoso/navegacao/Navbar";
import { usuario_cpsi } from "@/types/usuario";
import { MigalhasPreinscricao} from "@/components/idoso/pre-inscricao";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button"


const Form = () => {
  return (
    <>
        <NavBar usuario={usuario_cpsi} />
        <h1 className="my-6 text-xl text-center text-indigo-400">Cadastre os dados do <br/> colaborador</h1>
        <MigalhasPreinscricao currentStep={1} />

        <div className="">
            <Label htmlFor="cpf" className="text-indigo-400">CPF</Label>
            <Input type="text" id="cpf" placeholder="Digite o CPF do professor" />
        </div>

        <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="nome">Nome</Label>
            <Input type="text" id="nome" placeholder="Digite o nome do professor" />
        </div>

        <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="nascimento">Data de nascimento</Label>
            <Input type="date" id="nascimento" placeholder="DIA / MES / ANO" />
        </div>

        <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="idade">Idade</Label>
            <Input type="number" id="idade" placeholder="Idade" disabled />
        </div>

        <h2 className="mt-4 font-semibold">Telefone para contato</h2>
        <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="nome-contato">Nome do contato</Label>
            <Input type="text" id="nome-contato" placeholder="DIgite o nome do contato de emergência" />
        </div>

        <h2 className="mt-4 font-semibold">Contato de emergência</h2>
        <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="nome-emergencia">Nome do contato</Label>
            <Input type="text" id="nome-emergencia" placeholder="Digite o nome do contato de emergência" />
        </div>

        <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="telefone-emergencia">Telefone do contato</Label>
            <Input type="tel" id="telefone-emergencia" placeholder="Número de telefone do contato de emergência" />
        </div>

        <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="relacao">Relação do contato com o colaborador</Label>
            <Input type="text" id="relacao" placeholder="O que o contato é do colaborador?" />
        </div>


         <div className="flex flex-wrap items-center gap-2 md:flex-row">
            <Button>Button</Button>
         </div>
         <div className="flex flex-wrap items-center gap-2 md:flex-row">
            <Button>Button</Button>
         </div>
        


    </>
  )

};
export default Form;