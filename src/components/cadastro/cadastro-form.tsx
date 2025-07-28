"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CadastreSchema = z.object({
  cpf: z
    .string()
    .min(11, "CPF deve ter 11 dígitos")
    .max(11, "CPF deve ter 11 dígitos"),
  senha: z.string().min(6, "Senha deve ter pelo menos 6 caracteres").max(100),
});

type CadastreFormData = z.infer<typeof CadastreSchema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CadastreFormData>({
    resolver: zodResolver(CadastreSchema),
  });

  function onSubmit(data: CadastreFormData) {
    console.log(data);
	//Visualização dos dados do formulário no console
  }

  return (
    <div className="text-principal-blue flex flex-col items-center font-poppins">
      <h1 className="m-12 text-2xl text-center font-courier-prime uppercase">
        Cadastre-se
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label htmlFor="cpf" className="text-base p-0 m-0">
            CPF
          </Label>
          <br />
          <div className="flex flex-row mb-2 gap-0 border-b border-gray-400">
            <User className="text-neutral-400 w-6 h-6 mt-1.5" />
            <Input
              className="text-neutral-500 border-0"
              type="text"
              id="cpf"
              {...register("cpf")}
              placeholder="Digite seu CPF"
            />
          </div>
          {errors.cpf && (
            <p className="text-red-500 text-sm mt-1">{errors.cpf.message}</p>
          )}
        </div>
        <div className="mb-5">
          <Label htmlFor="senha" className="text-base">
            Senha
          </Label>
          <br />
          <div className="flex flex-row mb-2 gap-0 border-b border-gray-400">
            <LockKeyhole className="text-neutral-400 w-6 h-6 mt-1.5" />
            <Input
              className="text-neutral-500 border-0"
              type="password"
              id="senha"
              {...register("senha")}
              placeholder="Digite sua senha"
            />
          </div>
          {errors.senha && (
            <p className="text-red-500 text-sm mt-1">{errors.senha.message}</p>
          )}
        </div>
        <Button
          type="submit"
          className="bg-principal-blue focus:ring-0 text-white w-90 rounded-3xl h-12 mt-15"
        >
          CADASTRE-SE
        </Button>
      </form>
    </div>
  );
};

export default Form;
