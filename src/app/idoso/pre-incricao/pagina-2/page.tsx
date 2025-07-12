import { ArrowRight } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import { Header } from '@/components/idoso/pre-inscricao/head';
import { Pesquisar } from '@/components/idoso/pre-inscricao/pesquisa';
import { List } from '@/components/idoso/pre-inscricao/lista_atividade';
import { Migalhas } from '@/components/idoso/pre-inscricao/migalhas_de_pao';
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center font-mono">
        <section className="text-principal-blue">
          <h1 className="my-6 text-2xl text-center">
            Selecione as atividades que <br /> o idoso deseja fazer parte
          </h1>
          <Migalhas currentStep={3} />

          <Pesquisar />
          <List/>
          <div className="flex justify-between max-w-90 ml-5"> 
            <div className="mt-10">
                <Button className="bg-principal-blue text-white w-25 rounded-full h-7 flex justify-start">
                    <ArrowLeft />Voltar
                </Button>
            </div>
            <div className="mt-10">
                <Button className="bg-principal-blue text-white w-25 rounded-full h-7 flex justify-end">
                    Avançar <ArrowRight />
                </Button>
            </div>
          </div>
         
          
        </section>
      </div>
    </>
  );
}