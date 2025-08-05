'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Menu, User } from "lucide-react";
import { CardHome } from "@/components/home";
import Header from "@/components/Header";

export default function HomeConfirmarInscricao() {
  return (
    <>
      <Header/>
      <CardHome>
        <div className="text-center font-medium text-base mt-2 mb-4">
            De que turma deseja <br /> visualizar as inscrições?
        </div>
            <div>
            <Input
                type="text"
                name="search"
                id="search"
                autoComplete="off"
                aria-label="Buscar por turma"
                placeholder="Buscar por turma"
                className="mb-4 rounded-full"
            />
            </div>
      <section className="">

      <div className="flex items-center gap-2 mb-4">
        <Label className="font-bold">Extensão</Label>
        <span className="font-bold underline">Ensino</span>
        <Button className="ml-auto bg-primaria-blue text-white px-4 py-1 rounded">Filtro</Button>
      </div>
      
        <Card className="flex items-center gap-3 p-3 rounded-lg shadow bg-primaria-red">
          <img src="/musculacao.svg" alt="Musculação" className="w-10 h-10" />
          <div>
            <div className="font-bold text-lg">Turma 1 <span className="font-normal">Musculação</span></div>
            <div className="text-xs">Prof. Julio</div>
            <div className="text-xs">12:35 - 14:00</div>
          </div>
        </Card>
        <Card className="flex items-center gap-3 p-3 rounded-lg shadow bg-primaria-blue">
          <img src="/hidroginastica.svg" alt="Hidroginástica" className="w-10 h-10" />
          <div>
            <div className="font-bold text-lg">Turma 1 <span className="font-normal">Hidroginástica</span></div>
            <div className="text-xs">Prof. Julio</div>
            <div className="text-xs">12:35 - 14:00</div>
          </div>
        </Card>
        <Card className="flex items-center gap-3 p-3 rounded-lg shadow bg-primaria-yellow">
          <img src="/danca.svg" alt="Dança" className="w-10 h-10" />
          <div>
            <div className="font-bold text-lg">Turma 1 <span className="font-normal">Dança</span></div>
            <div className="text-xs">Prof. Julio</div>
            <div className="text-xs">12:35 - 14:00</div>
          </div>
        </Card>
        <Card className="flex items-center gap-3 p-3 rounded-lg shadow bg-primaria-green">
          <img src="/corporal.svg" alt="Const. Corporal" className="w-10 h-10" />
          <div>
            <div className="font-bold text-lg">Turma 1 <span className="font-normal">Const. Corporal</span></div>
            <div className="text-xs">Prof. Julio</div>
            <div className="text-xs">12:35 - 14:00</div>
          </div>
        </Card>
        <Card className="flex items-center gap-3 p-3 rounded-lg shadow bg-primaria-yellow">
          <img src="/canto.svg" alt="Canto" className="w-10 h-10" />
          <div>
            <div className="font-bold text-lg">Turma 1 <span className="font-normal">Canto</span></div>
            <div className="text-xs">Prof. Julio</div>
            <div className="text-xs">12:35 - 14:00</div>
          </div>
        </Card>
        <Card className="flex items-center gap-3 p-3 rounded-lg shadow bg-primaria-blue">
          <img src="/ballet.svg" alt="Ballet" className="w-10 h-10" />
          <div>
            <div className="font-bold text-lg">Turma 1 <span className="font-normal">Ballet</span></div>
            <div className="text-xs">Prof. Julio</div>
            <div className="text-xs">12:35 - 14:00</div>
          </div>
        </Card>
        <Card className="flex items-center gap-3 p-3 rounded-lg shadow bg-primaria-yellow">
          <img src="/desenho.svg" alt="Desenho" className="w-10 h-10" />
          <div>
            <div className="font-bold text-lg">Turma 1 <span className="font-normal">Desenho</span></div>
            <div className="text-xs">Prof. Julio</div>
            <div className="text-xs">12:35 - 14:00</div>
          </div>
        </Card>
      </section>
      </CardHome>
    </>
  );
}