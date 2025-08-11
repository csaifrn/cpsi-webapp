import { Card } from "@/components/ui/card";
import { Upload, Eye, Camera, CheckCircle, AlertTriangle } from "lucide-react";

type Status = "ok" | "erro";

export interface Documento {
  nome: string;
  status: Status;
}

export function DocumentoCard({ nome, status }: Documento) {
  return (
    <Card className="p-0 gap-0 shadow-none rounded-none w-full border-0 border-b-2 border-gray-300 h-auto mt-3 m-1">
      <span className="text-lg text-indigo-400 whitespace-pre-line">{nome}</span>
      <div className="flex items-center justify-between p-0 gap-10">
        {status === "ok" ? (
          <CheckCircle className="w-6 h-6 text-green-500" />
        ) : (
          <AlertTriangle className="w-6 h-6 text-red-500" />
        )}
        <span className="text-xs text-gray-500">10/30mb</span>
        <div className="flex justify-end gap-3 border-2 border-indigo-400 p-3 rounded-t-xl border-b-0">
          <Upload className="w-6 h-6 text-indigo-400" />
          <Camera className="w-6 h-6 text-indigo-400" />
          <Eye className={`w-6 h-6 ${status === "ok" ? "text-indigo-400" : "text-gray-400"}`}/>
        </div>
      </div>
    </Card>
  );
}
