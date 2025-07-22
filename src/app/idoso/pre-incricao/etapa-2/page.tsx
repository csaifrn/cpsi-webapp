'use client';

import NavBar from "@/components/idoso/navegacao/Navbar";
import { usuario_cpsi } from "@/types/usuario";
import { Pesquisar } from '@/components/idoso/pre-inscricao/pesquisa';
import { List } from '@/components/idoso/pre-inscricao/lista_atividade';
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardPreinscricao, CardHeaderPreinscricao, NavPreinscricao, MigalhasPreinscricao } from "@/components/idoso/pre-inscricao";


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
      <NavBar usuario={usuario_cpsi} />
      <CardPreinscricao>
          <CardHeaderPreinscricao title="Selecione as atividades que o idoso irá fazer parte" />
          <MigalhasPreinscricao currentStep={2} />

          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(aoEnviar)}>
              <Pesquisar />
              <List />

              {errors.atividades && (
                <span className="text-red-500 block mt-2">{errors.atividades.message}</span>
              )}
            </form>
          </FormProvider>
          <NavPreinscricao onBack={() => {console.log("Voltar")}} onNext={() => {console.log("Avançar")}} />
      </CardPreinscricao>
    </>
  );
}
