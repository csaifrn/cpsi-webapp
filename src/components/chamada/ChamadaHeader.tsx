import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, ChevronDown } from "lucide-react";

const ChamadaHeader = () => (
  <div>
    <p className="text-medium">Data: </p>
    <div className="flex justify-between gap-2 mt-4 mb-4">
      <div className="relative w-40">
        <Input
          type="text"
          defaultValue="2025-07-28"
          className="rounded-xl border border-gray-300 text-start"
        />
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-700" />
      </div>
      <p className="text-green-500 text-sm flex gap-2 pt-1">
        <CheckCircle className="h-4 w-4" /> Chamada cadastrada
      </p>
    </div>
    <Button className="bg-indigo-400 mb-4">Editar chamada</Button>
  </div>
);

export default ChamadaHeader;
