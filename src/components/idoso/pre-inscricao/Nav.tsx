import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

interface NavProps {
  onBack?: () => void;
  onNext?: () => void;
}

const NavPreinscricao = ({ onBack, onNext }: NavProps) => {
    return (
            <div className="mt-5 max-w-full mx-auto flex justify-between">
                    {onBack && <Button className="flex justify-center items-center text-xs bg-principal-blue rounded-full w-25 h-6" onClick={() => onBack()}><ArrowLeft/> Voltar</Button>}
                    {!onBack && onNext && <div></div>}
                    {onNext && <Button className="flex justify-center items-center text-xs bg-principal-blue rounded-full w-25 h-6" onClick={() => onNext()}><ArrowRight/> Avançar</Button>}                
            </div>
    )
};

export default NavPreinscricao;