import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function BotaoAvancar() {
  return (
    <div className="flex justify-end pt-4">
      <Button className="font-mono bg-principal-blue text-white hover:bg-primaria-blue flex gap-2 px-6 rounded-full text-lg">
        
        <Image src="/setavoltar.png" alt="Seta" width={14} height={14} /> Voltar
      </Button>
    </div>
  )
}
