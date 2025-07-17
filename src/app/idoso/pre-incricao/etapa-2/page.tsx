'use client';

import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Header } from '@/components/idoso/pre-inscricao/head';
import { Pesquisar } from '@/components/idoso/pre-inscricao/pesquisa';
import { List } from '@/components/idoso/pre-inscricao/lista_atividade';
import { Migalhas } from '@/components/idoso/pre-inscricao/migalhas_de_pao';
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  atividades: z.array(z.string()).min(1, "Selecione pelo menos uma atividade"),
});

type FormData = z.infer<typeof schema>;

export default function Home() {
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { atividades: [] },
  });

  const { handleSubmit, formState: { errors } } = methods;

  const aoEnviar = (dados: FormData) => {
    console.log("Atividades selecionadas:", dados.atividades);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center font-mono">
        <section className="text-principal-blue">
          <h1 className="my-6 text-2xl text-center">
            Selecione as atividades que <br /> o idoso deseja fazer parte
          </h1>
          <Migalhas currentStep={2} />

          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(aoEnviar)}>
              <Pesquisar />
              <List />

              {errors.atividades && (
                <span className="text-red-500 ml-5 block mt-2">{errors.atividades.message}</span>
              )}

              <div className="flex justify-between max-w-90 ml-5 mb-5 mt-10">
                <Button
                  type="button"
                  onClick={() => window.history.back()}
                  className="bg-principal-blue text-white w-25 rounded-full h-7 flex justify-start"
                >
                  <ArrowLeft /> Voltar
                </Button>
                <Button
                  type="submit"
                  className="bg-principal-blue text-white w-25 rounded-full h-7 flex justify-end"
                >
                  Avançar <ArrowRight />
                </Button>
              </div>
            </form>
          </FormProvider>
        </section>
      </div>
    </>
  );
}
