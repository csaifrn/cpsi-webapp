import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { use } from "react";
import { Button } from "@/components/ui/button";

const Nav = () => {
    return (
            <div className="flex gap-30 mt-4 justify-center">
                    <Button className="justify-center items-center text-xs bg-principal-blue rounded-full w-25 h-6"><ArrowLeft/> Voltar</Button>  
                    <Button className="justify-center items-center text-xs bg-principal-blue rounded-full w-25 h-6 flex justify-center items-center">Avançar <ArrowRight/></Button>                 
            </div>
    )
};

export default Nav;