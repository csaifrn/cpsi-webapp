
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ChevronDown } from "lucide-react";

export function Pesquisar() {
  return (
    <div className="ml-8 mr-5 flex items-center border border-indigo-400 rounded-full overflow-hidden w-full max-w-75">
      <div className="pl-4 pr-2">
        <Search className="text-black h-5 w-5" />
      </div>
      <Input
        type="search"
        placeholder="Buscar turma"
        className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm text-black"
      />
      <div className="w-px h-6 bg-gray-400 mx-2" />
      <Button
        variant="ghost"
        className="text-stone-700 font-mono text-sm px-4 hover:bg-transparent focus-visible:ring-0"
      >
        Filtros
        <ChevronDown className="ml-1 h-4 w-4" />
      </Button>
    </div>
  );
}

