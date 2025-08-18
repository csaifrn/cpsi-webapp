'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Menu, User, Search } from "lucide-react";
import { CardHome } from "@/components/home";
import Header from "@/components/Header";

export default function HomeConfirmarInscricao() {
  return (
    <div className="flex flex-col font-courier-prime">
      <Header/>
        <div className="flex flex-col items-center mt-6 mb-4">
          <div className="text-center font-medium text-base mb-4">
              De que turma deseja <br /> visualizar as inscrições?
          </div>
              <div className="pl-3 flex justify-start items-center w-80 bg-white border-2 focus:border-none text-gray-800 text-sm rounded-full">
              <Search className=""/>
              <Input
                  type="text"
                  name="search"
                  id="search"
                  autoComplete="off"
                  aria-label="Buscar por turma"
                  placeholder="Buscar por turma"
                  className="border-none rounded-r-full w-85"
                  />
              </div>

        </div>
      <CardHome>
      <section className="border-2 rounded-lg p-4 w-80 flex flex-col bg-white">

      <div className="flex items-center gap-2 mb-9">
        <Label className="p-2">Extensão</Label>
        <Label className="font-bol p-2 border-b-2 border-principal-blue">Ensino</Label>
        <Button className="ml-auto bg-primaria-blue w-28 h-7 text-white px-4 py-1 rounded-lg">Filtro</Button>
      </div>
      <div className="gap-4">
        <Card className="flex items-center flex-row gap-4 p-3 rounded-lg shadow bg-primaria-red border-2 border-second-red-2 mb-2 w-71 h-27 font-courier-prime">
          <img src="/imagens/turmas/icones/musculacao_preenchido.svg" alt="Desenho" className="w-18 h-18" />
          <div>
            <h2 className="font-bold text-2xl">Turma 1</h2>
            <p className="text-xs font-bold">Musculação</p>
            <div className="flex flex-row gap-2.5">
              <p className="text-xs font-bold">Prof. Julio</p>
              <p className="text-xs">12:35 - 14:00</p>
            </div>
          </div>
        </Card>
        <Card className="flex items-center flex-row gap-4 p-3 rounded-lg shadow bg-primaria-yellow mb-2 w-71 h-27">
          <img src="/imagens/turmas/icones/musculacao_preenchido.svg" alt="Desenho" className="w-18 h-18" />
          <div>
            <h2 className="font-bold text-2xl">Turma 1</h2>
            <p className="text-xs font-bold">Hidroginástica</p>
            <div className="flex flex-row gap-3">
              <p className="text-xs font-bold">Prof. Julio</p>
              <p className="text-xs">12:35 - 14:00</p>
            </div>
          </div>
        </Card>
        <Card className="flex items-center flex-row gap-4 p-3 rounded-lg shadow bg-primaria-blue mb-2 w-71 h-27">
          <img src="/imagens/turmas/icones/musculacao_preenchido.svg" alt="Desenho" className="w-18 h-18" />
          <div>
            <h2 className="font-bold text-2xl">Turma 1</h2>
            <p className="text-xs font-bold">Dança</p>
            <div className="flex flex-row gap-3">
              <p className="text-xs font-bold">Prof. Julio</p>
              <p className="text-xs">12:35 - 14:00</p>
            </div>
          </div>
        </Card>
        <Card className="flex items-center flex-row gap-4 p-3 rounded-lg shadow bg-primaria-green mb-2 w-71 h-27">
          <img src="/imagens/turmas/icones/musculacao_preenchido.svg" alt="Desenho" className="w-18 h-18" />
          <div>
            <h2 className="font-bold text-2xl">Turma 1</h2>
            <p className="text-xs font-bold">Const. Corporal</p>
            <div className="flex flex-row gap-3">
              <p className="text-xs font-bold">Prof. Julio</p>
              <p className="text-xs">12:35 - 14:00</p>
            </div>
          </div>
        </Card>
        <Card className="flex items-center flex-row gap-4 p-3 rounded-lg shadow bg-primaria-yellow mb-2 w-71 h-27">
          <img src="/imagens/turmas/icones/musculacao_preenchido.svg" alt="Desenho" className="w-18 h-18" />
          <div>
            <h2 className="font-bold text-2xl">Turma 1</h2>
            <p className="text-xs font-bold">Canto</p>
            <div className="flex flex-row gap-3">
              <p className="text-xs font-bold">Prof. Julio</p>
              <p className="text-xs">12:35 - 14:00</p>
            </div>
          </div>
        </Card>
        <Card className="flex items-center flex-row gap-4 p-3 rounded-lg shadow bg-primaria-blue mb-2 w-71 h-27">
          <img src="/imagens/turmas/icones/musculacao_preenchido.svg" alt="Desenho" className="w-18 h-18" />
          <div>
            <h2 className="font-bold text-2xl">Turma 1</h2>
            <p className="text-xs font-bold">Ballet</p>
            <div className="flex flex-row gap-3">
              <p className="text-xs font-bold">Prof. Julio</p>
              <p className="text-xs">12:35 - 14:00</p>
            </div>
          </div>
        </Card>
        <Card className="flex items-center flex-row gap-4 p-3 rounded-lg shadow bg-primaria-yellow mb-2 w-71 h-27">
          <img src="/imagens/turmas/icones/musculacao_preenchido.svg" alt="Desenho" className="w-18 h-18" />
          <div>
            <h2 className="font-bold text-2xl">Turma 1</h2>
            <p className="text-xs font-bold">Desenho</p>
            <div className="flex flex-row gap-3">
              <p className="text-xs font-bold">Prof. Julio</p>
              <p className="text-xs">12:35 - 14:00</p>
            </div>
          </div>
        </Card>
      </div>
      </section>
      </CardHome>
    </div>
  );
}