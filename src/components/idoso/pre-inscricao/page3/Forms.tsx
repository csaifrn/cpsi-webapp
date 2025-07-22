import { ArrowLeft, ArrowRight } from "lucide-react";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import React, { use } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const schema = z.object({
    cpf: z.string().min(1, "CPF é obrigatório"),
    nome: z.string().min(1, "Nome é obrigatório"),
    dataNascimento: z.string().min(10, "Data de nascimento é obrigatória"),
    contatoEmergenciaNome: z.string().min(1, "Nome do contato de emergência é obrigatório"),
    contatoEmergenciaTelefone: z.string().min(1, "Telefone do contato de emergência é obrigatório"),

});

type FormData = z.infer<typeof schema>;



function Forms() {
    const{
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            cpf: "",
            nome: "",
            dataNascimento: "",
            contatoEmergenciaNome: "",
            contatoEmergenciaTelefone: "",
        },
    });
    
    const onSubmit = (data: FormData) => {
        console.log("data:" , data);

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center">
            <div className="font-courier-prime max-w-md mx-auto flex flex-col justify-center ">
                
                <div className="flex flex-col mt-4 gap-1 ">
                    <Label className="text-principal-blue text-left">CPF</Label>
                    <Input type="text" {...register("cpf")} placeholder="Digite o CPF do idoso" className="flex pl-1 w-full h-8 text-gray-800 text-xs border-b-2 border-t-white border-r-white border-l-white border-b-gray-300 text-shadow-none rounded-0xl" /> 
                    {errors.cpf && <span className="text-red-500 text-xs">{errors.cpf.message}</span>}
                </div>
                <div className="flex flex-col mt-2 gap-1 ">
                    <Label className="text-principal-blue text-left">Nome</Label>
                    <Input type="text" {...register("nome")} placeholder="Digite o Nome do idoso" className="flex pl-1  w-full h-8 text-gray-800 text-xs border-b-2 border-t-white border-r-white border-l-white border-b-gray-300 text-shadow-none rounded-0xl" />
                    {errors.nome && <span className="text-red-500 text-xs">{errors.nome.message}</span>}
                </div>
                <div className="flex flex-row   mt-2 gap-4 ">
                    <div className="flex flex-col gap-1 flex-1">
                        <Label className="text-principal-blue text-left">Data de nascimento</Label>   
                        <Input type="text" {...register("dataNascimento")}  placeholder="Dia / Mes / Ano" className="flex pl-1  w-full h-8 text-gray-800 text-xs border-b-2 border-t-white border-r-white border-l-white border-b-gray-300 text-shadow-none rounded-0xl" />
                        {errors.dataNascimento && <span className="text-red-500 text-xs">{errors.dataNascimento.message}</span>}
                    </div>
                    <div className="flex flex-col gap-1 w-28">
                        <Label className="text-principal-blue text-left">Idade</Label>
                        <Input type="text" placeholder="Gerado" className="flex pl-1 w-full h-8 text-gray-500 text-xs border-b-2 border-t-white border-r-white border-l-white border-b-gray-300 text-shadow-none rounded-0xl" />
                    </div>
                </div>
                <h3 className="flex mt-5 mb-5 text-principal-blue text-lg">Contato de Emergência</h3>
                <div className="flex flex-col gap-1">
                    <Label className="text-principal-blue text-left">Nome do contato</Label>  
                    <Input type="text" {...register("contatoEmergenciaNome")} placeholder="Digite o Nome do contato de emergência" className="flex pl-0.5 w-full h-8 text-gray-800 text-xs border-b-2 border-t-white border-r-white border-l-white border-b-gray-300 text-shadow-none rounded-0xl" />
                    {errors.contatoEmergenciaNome && <span className="text-red-500 text-xs">{errors.contatoEmergenciaNome.message}</span>}                
                </div>
                <div className="flex flex-col gap-1 mt-2">
                    <Label className="text-principal-blue text-left">Telefone do contato</Label>
                    <Input type="text" {...register("contatoEmergenciaTelefone")} placeholder="Número do telefone do contato de emergência" className="flex pl-0.5 w-full h-8 text-gray-800 text-xs border-b-2 border-t-white border-r-white border-l-white border-b-gray-300 text-shadow-none rounded-0xl" />
                    {errors.contatoEmergenciaTelefone && <span className="text-red-500 text-xs">{errors.contatoEmergenciaTelefone.message}</span>}
                </div>
            </div>
            <button type="submit">ooo</button>
        </form>
    );
}

export default Forms;
