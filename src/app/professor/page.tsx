import NavBar from "@/components/idoso/navegacao/Navbar";
import { usuario_cpsi } from "@/types/usuario";
import { MigalhasPreinscricao} from "@/components/idoso/pre-inscricao";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MoveLeft } from 'lucide-react';
import { MoveRight } from 'lucide-react';


const Form = () => {
  return (
    <>
        <NavBar usuario={usuario_cpsi} />
        <h1 className="my-6 text-xl text-center text-indigo-400">Cadastre os dados do <br/> colaborador</h1>
        <MigalhasPreinscricao currentStep={1} />

        <div className="w-full max-w-sm items-center gap-3 m-5">
            <Label htmlFor="cpf" className="text-indigo-400 text-base">CPF</Label>
            <Input type="text" id="cpf" className=" border-0 border-b border-gray-300 text-sm placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400" placeholder="Digite o CPF do professor" />
        </div>

        <div className="grid w-full max-w-sm items-center gap-3 m-5">
            <Label htmlFor="nome" className="text-indigo-400 text-base">Nome</Label>
            <Input type="text" id="nome" className=" border-0 border-b border-gray-300 text-sm placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400" placeholder="Digite o nome do professor" />
        </div>
        <div className="flex justify-between w-full max-w-sm">
            <div className="grid  w-40 items-center gap-3 m-5">
                <Label htmlFor="nascimento" className="text-indigo-400 text-base">Data de nascimento</Label>
                <Input type="date" id="nascimento" className=" border-0 border-b border-gray-300 text-sm placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400" placeholder="DIA / MES / ANO" />
            </div>

            <div className="grid w-40 items-center gap-3 m-5">
                <Label htmlFor="idade" className="text-indigo-400 text-base">Idade</Label>
                <Input type="number" id="idade" className=" border-0 border-b border-gray-300 text-sm placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400" placeholder="Idade" disabled />
            </div>
        </div>
        <h2 className="mt-4 font-semibold text-indigo-400 m-5 text-xl">Telefone para contato</h2>
        <div className="grid w-full max-w-sm items-center gap-3 m-5">
            <Label htmlFor="nome-contato" className="text-indigo-400 text-base">Nome do contato</Label>
            <Input type="text" id="nome-contato" className=" border-0 border-b border-gray-300 text-sm placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400"  placeholder="DIgite o nome do contato de emergência" />
        </div>

        <h2 className="mt-4 font-semibold text-indigo-400 m-5 text-xl">Contato de emergência</h2>
        <div className="grid w-full max-w-sm items-center gap-3 m-5">
            <Label htmlFor="nome-emergencia" className="text-indigo-400 text-base">Nome do contato</Label>
            <Input type="text" id="nome-emergencia" className=" border-0 border-b border-gray-300 text-sm placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400" placeholder="Digite o nome do contato de emergência" />
        </div>

        <div className="grid w-full max-w-sm items-center gap-3 not-last: m-5">
            <Label htmlFor="telefone-emergencia" className="text-indigo-400 text-base">Telefone do contato</Label>
            <Input type="tel" id="telefone-emergencia" className=" border-0 border-b border-gray-300 text-sm placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400" placeholder="Número de telefone do contato de emergência" />
        </div>

        <div className="grid w-full max-w-sm items-center gap-3 m-5">
            <Label htmlFor="relacao" className="text-indigo-400 text-base">Relação do contato com o colaborador</Label>
            <Input type="text" id="relacao" className=" border-0 border-b border-gray-300 text-sm placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400" placeholder="O que o contato é do colaborador?" />
        </div>

        <div className="flex justify-between m-5">
             <div className=" gap-2 md:flex-row">
                <Button className="bg-indigo-400"><MoveLeft /> Voltar</Button>
            </div>
            <div className="gap-2 md:flex-row">
                <Button className="bg-indigo-400">Avançar <MoveRight/></Button>
            </div>
        </div>
           
        


    </>
  )

};
export default Form;