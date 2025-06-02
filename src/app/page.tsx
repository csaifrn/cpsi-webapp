import Image from "next/image";
import {SquareUser, Menu, User, LockKeyhole} from 'lucide-react';
import { Button } from "@/components/ui/button"

export default function Home() {
    const Cabecalho = () => {
    return (
      <>
        <header className="bg-indigo-500 text-white h-20">
          <ol className="flex flex-row justify-around gap-80">
            <li><a href="#"><SquareUser className=" h-10 w-10 mt-5"/></a></li>
            <li><a href="#"><Menu className=" h-10 w-10 mt-5"/></a></li>
          </ol>
        </header>

        <main className="text-indigo-500">
          <h1 className="m-12 text-2xl text-center">CADASTRAR-SE</h1>
          <form className="formulario">
            <div className="m-12">
              <label htmlFor="cpf">CPF</label><br />
              <div className="flex flex-row mt-3 gap-3">
                <User className="text-neutral-400"/>
                <input className="text-neutral-500" type="text" id="cpf" placeholder="Digite seu CPF" required />
              </div>
            </div>
            <div className="m-12">
              <label htmlFor="senha">Senha</label><br />
              <div className="flex flex-row mt-3">
                <LockKeyhole className="text-neutral-400"/>
                <input className="text-neutral-500" type="password" id="senha" placeholder="Digite sua senha" required />
              </div>   
            </div>
            <div className="flex justify-center">
              <Button className="bg-indigo-500 text-white w-100 rounded-3xl h-12">CADASTRE-SE</Button>
            </div>
          </form> 
          
        </main>

        <footer className="mt-20 mb-20 text-center">
          <p>Se já possuir uma conta <br /> faça login  <span className="text-gray-700 font-bold">aqui</span></p>
        </footer>
      </>
    );
  };

  return <Cabecalho />;
}