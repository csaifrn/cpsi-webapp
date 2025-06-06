import Image from "next/image";
import {SquareUser, Menu, Search, ChevronDown, ArrowRight} from 'lucide-react';
import { Button } from "@/components/ui/button"

export default function Home() {
  const Cabecalho = () => {
  return (
    <>
      <header className="bg-indigo-500 text-white h-20">
        <ol className="flex flex-row justify-between  ">
          <li><a href="#"><SquareUser className=" h-10 w-10 mt-5 ml-5"/></a></li>
          <li><a href="#"><Menu className=" h-10 w-10 mt-5 mr-5"/></a></li>
        </ol>
      </header>
      <main className="text-indigo-500">
          <body>
              <h1 className="m-12 text-2xl text-center">Selecione as atividades que <br/> deseja fazer parte</h1>
              <div className="flex gap-2 mt-4 px-4">
              <div className="flex items-center text-black border border-black rounded-3xl px-2 w-full">
                <Search className="w-4 h-4" />
                <input
                  type="text"
                  placeholder="Buscar turma"
                  className="ml-2 w-full outline-none bg-transparent py-1"
                />
              </div>
              <button className="flex items-center border-black gap-1 border px-2 rounded-md text-sm text-gray-600">
                Filtros <ChevronDown className="w-4 h-4" />
              </button>
          </div>
          <div className="flex justify-end m-10">
            <Button className="bg-indigo-500 text-white w-35 h-15 rounded-full  h-12"> Avançar < ArrowRight/></Button>

              
          </div>

        </body>
      </main>

    </>
  )
};


return <Cabecalho />;
}

