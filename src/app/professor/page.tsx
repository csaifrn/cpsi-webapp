import NavBar from "@/components/idoso/navegacao/Navbar";
import { usuario_cpsi } from "@/types/usuario";
import { MigalhasPreinscricao} from "@/components/idoso/pre-inscricao";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MoveLeft } from 'lucide-react';
import { MoveRight } from 'lucide-react';
import { CardHome } from '@/components/home'


const Form = () => {
  return (
    <>
        <NavBar usuario={usuario_cpsi} />
        <CardHome>
            <h1 className="my-6 text-xl text-center text-indigo-400">Cadastre os dados do <br/> colaborador</h1>
            <MigalhasPreinscricao currentStep={1} />

            <div className="w-full max-w-sm items-center gap-3 m-5">
                <Label htmlFor="cpf" className="text-indigo-400 text-base">CPF</Label>
                <Input type="text" id="cpf" className="text-sm rounded-none w-full p-2 border-0 border-b-1 border-gray-300 focus:border-blue-500 focus:outline-none" placeholder="Digite o CPF do professor" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-3 m-5 mt-10">
                <Label htmlFor="nome" className="text-indigo-400 text-base">Nome</Label>
                <Input type="text" id="nome" className=" text-sm rounded-none w-full p-2 border-0 border-b-1 border-gray-300 focus:border-blue-500 focus:outline-none" placeholder="Digite o nome do professor" />
            </div>
            <div className=" flex justify-between w-full max-w-sm mt-10">
                <div className="grid w-45 items-center gap-3 m-5 ">
                    <Label htmlFor="nascimento" className="text-indigo-400 text-base">Data de nascimento</Label>
                    <Input type="text" id="nascimento" className="text-sm rounded-none w-full p-2 border-0 border-b-1 border-gray-300 focus:border-blue-500 focus:outline-none" placeholder="DIA / MES / ANO" />
                </div>

                <div className=" grid w-40 items-center gap-3 m-5 mr-0">
                    <Label htmlFor="idade" className="text-indigo-400 text-base">Idade</Label>
                    <Input type="number" id="idade" className="text-sm rounded-none w-full p-2 border-0 border-b-1 border-gray-300 focus:border-blue-500 focus:outline-none" placeholder="Gerado"/>
                </div>
            </div>
            <h2 className="mt-10 font-semibold text-indigo-400 m-5 text-xl">Telefone para contato</h2>
            <div className="grid w-full max-w-sm items-center gap-3 m-5 mt-10">
                <Label htmlFor="nome-contato" className="text-indigo-400 text-base">Nome do contato</Label>
                <Input type="text" id="nome-contato" className="text-sm rounded-none w-full p-2 border-0 border-b-1 border-gray-300 focus:border-blue-500 focus:outline-none"  placeholder="DIgite o nome do contato de emergência" />
            </div>

            <h2 className="mt-10 font-semibold text-indigo-400 m-5 text-xl">Contato de emergência</h2>
            <div className="grid w-full max-w-sm items-center gap-3 m-5 mt-10">
                <Label htmlFor="nome-emergencia" className="text-indigo-400 text-base">Nome do contato</Label>
                <Input type="text" id="nome-emergencia" className="text-sm rounded-none w-full p-2 border-0 border-b-1 border-gray-300 focus:border-blue-500 focus:outline-none" placeholder="Digite o nome do contato de emergência" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-3 not-last: m-5 mt-10">
                <Label htmlFor="telefone-emergencia" className="text-indigo-400 text-base">Telefone do contato</Label>
                <Input type="tel" id="telefone-emergencia" className=" text-sm rounded-none w-full p-2 border-0 border-b-1 border-gray-300 focus:border-blue-500 focus:outline-none" placeholder="Número de telefone do contato de emergência" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-3 m-5 mt-10">
                <Label htmlFor="relacao" className="text-indigo-400 text-base">Relação do contato com o colaborador</Label>
                <Input type="text" id="relacao" className="text-sm rounded-none w-full p-2 border-0 border-b-1 border-gray-300 focus:border-blue-500 focus:outline-none" placeholder="O que o contato é do colaborador?" />
            </div>

            <div className="flex justify-between m-5 mt-10">
                <div>
                    <Button className="bg-indigo-400 rounded-3xl h-8 text-xs"> <MoveLeft /> Voltar</Button>
                </div>
                <div>
                    <Button className="bg-indigo-400 rounded-xl h-8 text-xs">Avançar <MoveRight/></Button>
                </div>
            </div>
        </CardHome>
           
        


    </>
  )

};
export default Form;