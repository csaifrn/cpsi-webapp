import { ArrowLeft, ArrowRight } from "lucide-react";
import { Label } from "@/components/ui/label";
import React, { use } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Forms = () => {
    return (
        <div className="font-courier-prime w-95 max-w-md mx-auto flex flex-col justify-center ">
            <h3 className="flex mt-4  align-middle justify-center text-center text-principal-blue text-lg">Cadastre um idoso inserindo <br></br> os dados solicitados</h3>
            <div className="flex gap-1 mt-4 justify-center align-middle">
                <div className="border-2 bg-principal-blue border-principal-blue w-2.5 h-2.5 rounded-full"></div>
                <div className="border-2 border-principal-blue w-2.5 h-2.5 rounded-full"></div>
                <div className="border-2 border-principal-blue w-2.5 h-2.5 rounded-full"></div>
            </div>
            <div className="flex flex-col mt-4 gap-1 ">
                <Label className="text-principal-blue text-left">CPF</Label>
                <Input type="text" placeholder="Digite o CPF do idoso" className="flex  pl-0  w-full h-8 text-gray-800 text-base border-b-2 border-t-white border-r-white border-l-white border-b-gray-300 text-shadow-none rounded-0xl" />
            </div>
            <div className="flex flex-col mt-2 gap-1 ">
                <Label className="text-principal-blue text-left">Nome</Label>
                <Input type="text" placeholder="Digite o Nome do idoso" className="flex  pl-0 w-full h-8 text-gray-800 text-base border-b-2 border-t-white border-r-white border-l-white border-b-gray-300 text-shadow-none rounded-0xl" />
            </div>
            <div className="flex flex-row   mt-2 gap-4 ">
                <div className="flex flex-col gap-1 flex-1">
                    <Label className="text-principal-blue text-left">Data de nascimento</Label>   
                    <Input type="text" placeholder="Dia / Mes / Ano" className="flex  pl-0 w-full h-8 text-gray-800 text-base border-b-2 border-t-white border-r-white border-l-white border-b-gray-300 text-shadow-none rounded-0xl" />
                </div>
                <div className="flex flex-col gap-1 w-28">
                    <Label className="text-principal-blue text-left">Idade</Label>
                    <Input type="text" placeholder="Gerado" className="flex  pl-0 w-full h-8 text-gray-800 text-base border-b-2 border-t-white border-r-white border-l-white border-b-gray-300 text-shadow-none mt-1 rounded-0xl" />
                </div>
            </div>
            <h3 className="flex mt-5 mb-5 text-principal-blue text-lg">Contato de Emergência</h3>
            <div className="flex flex-col gap-1 w-80">
                <Label className="text-principal-blue text-left">Nome do contato</Label>  
                <Input type="text" placeholder="Digite o Nome do contato de emergência" className="flex  pl-0 w-full h-8 text-gray-800 text-base border-b-2 border-t-white border-r-white border-l-white border-b-gray-300 text-shadow-none rounded-0xl" />
            </div>
            <div className="flex flex-col gap-1 mt-2 w-80">
                <Label className="text-principal-blue text-left">Telefone do contato</Label>
                <Input type="text" placeholder="Número do telefone do contato de emergência" className="flex  pl-0 w-full h-8 text-gray-800 text-base border-b-2 border-t-white border-r-white border-l-white border-b-gray-300 text-shadow-none rounded-0xl" />
            </div>
        </div>
    );
}

export default Forms;
