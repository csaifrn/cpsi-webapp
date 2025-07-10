import { Header } from "@/components"
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Label } from "@/components/ui/label";
import React, { use } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {  
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField, 
} from "@/components/ui/form";


export default function Paginapre() {
    return (
        <div>
            <Header />
            <h3 className="flex mt-4 justify-center text-center text-principal-blue text-lg">Cadastre um idoso inserindo os dados solicitados</h3>
            <div className="flex gap-1 justify-center mt-4">
                <div className="border-2 bg-principal-blue border-principal-blue w-3 h-3 rounded-full"></div>
                <div className="border-2 border-principal-blue w-3 h-3 rounded-full"></div>
                <div className="border-2 border-principal-blue w-3 h-3 rounded-full"></div>
            </div>
            <div className="flex flex-col justify-center items-center mt-4 gap-1">
                <Label className="text-principal-blue mr-74">CPF</Label>
                <Input type="text" placeholder="Digite o CPF do idoso" className="flex justify-center items-center w-80 h-8 text-gray-800 text-xs border-b-2 border-t-white border-r-white border-l-white border-b-gray-300 text-shadow-none rounded-0xl" />
            </div>
            <div className="flex flex-col justify-center items-center mt-2 gap-1">
                <Label className="text-principal-blue mr-70">Nome</Label>
                <Input type="text" placeholder="Digite o Nome do idoso" className="flex justify-center w-80 h-8 text-gray-800 text-xs border-b-2 border-b-2 border-t-white border-r-white border-l-white border-b-gray-300 text-shadow-none rounded-0xl" />
            </div>
            <div className="flex flex-row justify-center items-center mt-2 gap-1">
                <div className="flex flex-col justify-center items-center gap-1">
                    <Label className="text-principal-blue mr-19">Data de nascimento</Label>   
                    <Input type="text" placeholder="Dia / Mes / Ano" className="flex justify-center w-50 h-8 text-gray-800 text-xs border-b-2 border-b-2 border-t-white border-r-white border-l-white border-b-gray-300 text-shadow-none rounded-0xl" />
                </div>
                <div>
                    <Label className="text-principal-blue">Idade</Label>
                    <Input type="text" placeholder="Gerado" className="flex justify-center w-28 h-8 text-gray-800 text-xs border-b-2 border-b-2 border-t-white border-r-white border-l-white border-b-gray-300 text-shadow-none mt-1 rounded-0xl" />
                </div>
            </div>
            <h3 className="flex mt-5 mr-32 mb-5 justify-center text-principal-blue text-lg ">Contato de Emergência</h3>
            <div className="flex flex-col justify-center items-center gap-1">
                <Label className="text-principal-blue mr-52">Nome do contato</Label>  
                <Input type="text" placeholder="Digite o Nome do contato de emergência" className="flex justify-center w-80 h-8 text-gray-800 text-xs border-b-2 border-b-2 border-t-white border-r-white border-l-white border-b-gray-300 text-shadow-none rounded-0xl" />
            </div>
            <div className="flex flex-col justify-center items-center gap-1 mt-2">
                <Label className="text-principal-blue mr-48">Telefone do contato</Label>
                <Input type="text" placeholder="Número do telefone do contato de emergência" className="flex justify-center w-80 h-8 text-gray-800 text-xs border-b-2 border-t-white border-r-white border-l-white border-b-gray-300 text-shadow-none rounded-0xl" />
            </div>
            <div className="flex gap-34 mt-4 justify-center">
                    <Button className="bg-principal-blue rounded-full w-25"><ArrowLeft/> Voltar</Button>  
                    <Button className="bg-principal-blue rounded-full w-25">Avançar <ArrowRight/></Button>                 
            </div>
        </div>
    );
}