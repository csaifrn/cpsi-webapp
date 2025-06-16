import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/head';
import { Pesquisar } from '@/components/pesquisa';
import { List } from '@/components/lista_atividade';
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen font-mono">
        <main className="text-principal-blue">
          <h1 className="m-12 text-lg text-center">
            Selecione as atividades que <br /> o idoso deseja fazer parte
          </h1>

          <Pesquisar />
          <List/>

          <div className="flex justify-end m-10">
            <Button className="bg-principal-blue text-white w-35 rounded-full h-8">
              Avançar <ArrowRight />
            </Button>
          </div>
        </main>
      </div>
    </>
  );
}
