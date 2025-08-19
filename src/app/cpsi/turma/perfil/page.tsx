import NavBar from "@/components/idoso/navegacao/Navbar";
import { usuario_cpsi } from "@/types/usuario";
import { CardHome } from "@/components/home";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SquarePen } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ChevronDown } from "lucide-react";

export default function Page() {
  return (
    <>
      <NavBar usuario={usuario_cpsi} />
      <CardHome>
        <div className="flex ">
          <Link
            href="/cpsi/turma/perfil"
            className="flex items-center gap-1 my-5 justify-center "
          >
            <ArrowLeft />
            <h3 className="font-bold">Voltar</h3>
          </Link>
        </div>
        <section className="border border-primaria-blue rounded-xl mb-5">
          <div className="flex items-center justify-between bg-primaria-blue rounded-t-xl text-white px-5 py-5">
            <div>
              <h2 className="font-bold text-2xl">Dança</h2>
              <h3 className=" text-xl">Turma 1</h3>
            </div>
            <Link href="/cpsi/turma/perfil/editar">
              <SquarePen />
            </Link>
          </div>
          <div className="px-5 my-3">
            <h4 className="font-bold text-sm mb-2">Professor(a)</h4>
            <div className="flex items-center gap-3">
              <Avatar className="w-16 h-16 border-2 border-primaria-blue rounded-full">
                <AvatarImage
                  src="/professor.png"
                  width={55}
                  height={55}
                  alt="Foto do professor"
                />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <h3 className="text-lg">Liliana dos Santos</h3>
            </div>
          </div>
        </section>
        <section className="border border-primaria-blue rounded-xl mb-5">
          <div className="flex items-center justify-between text-white bg-primaria-blue rounded-t-xl px-5 py-3">
            <h2 className="font-bold">Cronograma</h2>
            <Link
              href="/cpsi/turma/perfil/editar"
              className="text-primaria-blue underline"
            >
              <SquarePen className="text-white" />
            </Link>
          </div>
          <div className="px-2">
            <table className="w-full text-center mb-3">
              <thead>
                <tr className="border-b border-gray-400">
                  <th className="text-left pb-2 pt-2 px-3">Horário</th>
                  <th className="pb-2 pt-2 px-3">Dia e Local</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-400">
                  <td className="text-left px-3">09:00 - 10:30</td>
                  <td className="px-3">
                    Segunda
                    <br />
                    Sala 1
                  </td>
                </tr>
                <tr>
                  <td className="text-left px-3">07:00 - 08:30</td>
                  <td className="px-3">
                    Quinta
                    <br />
                    SALA 1
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="border border-primaria-blue rounded-xl mb-5">
          <div className="flex items-center justify-between text-white bg-primaria-blue rounded-t-xl px-5 py-3">
            <h2 className="font-bold">Participantes</h2>
            <Link
              href="/cpsi/turma/perfil/editar"
              className="text-primaria-blue underline"
            >
              <SquarePen className="text-white" />
            </Link>
          </div>
          <div className="px-5 my-3 mt-4">
            <div className=" flex items-center border border-primaria-blue rounded-full overflow-hidden w-full max-w-full ">
              <div className="pl-4 pr-2">
                <Search className="text-black h-5 w-5" />
              </div>
              <Input
                type="search"
                placeholder="Buscar turma"
                className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm text-black"
              />
              <div className="w-px h-6 bg-gray-400" />
              <Button
                variant="ghost"
                className="text-stone-700 text-sm hover:bg-transparent focus-visible:ring-0"
              >
                Filtros
                <ChevronDown className="m-0 p-0 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="mx-5 my-3 border border-gray-400 py-4 px-2 rounded-lg">
            <div className="flex items-center gap-3">
              <Avatar className="w-16 h-16 border-2 border-primaria-blue rounded-full">
                <AvatarImage src="/idosa.jpg" alt="Foto do idoso" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="">Adeilda Conceição Gomes da Silva</h2>
                <h3>123.456.789-00</h3>
              </div>
            </div>
          </div>
        </section>
      </CardHome>
    </>
  );
}
