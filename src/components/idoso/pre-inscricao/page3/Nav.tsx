import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { use } from "react";
import { Button } from "@/components/ui/button";

const Nav = () => {
    return (
            <div className="flex gap-31 mt-4 justify-center">
                    <Button className="bg-principal-blue rounded-full w-25 h-7"><ArrowLeft/> Voltar</Button>  
                    <Button className="bg-principal-blue rounded-full w-25 h-7 flex justify-center items-center">Avançar <ArrowRight/></Button>                 
            </div>
    )
};

export default Nav;