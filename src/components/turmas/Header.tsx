import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-principal-blue flex items-center justify-between py-4 px-5">
      <figure>
        <Button className="bg-white/10 p-2 w-12 h-12 rounded-xl hover:bg-white/10 cursor-pointer">
          <Image src="/casa.png" alt="Ícone de casa" width={24} height={24} />
        </Button>
      </figure>
      <figure>
        <Button className="bg-white/10 p-2 w-12 h-12 rounded-xl hover:bg-white/10 cursor-pointer">
          <Image src="/menu.png" alt="Ícone de menu" width={24} height={24} />
        </Button>
      </figure>
    </header>
  );
}
