import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { use } from "react";
import { Button } from "@/components/ui/button";

const Nav = () => {
    return (
            <div className="flex gap-34 mt-4 justify-center">
                    <Button className="bg-principal-blue rounded-full w-25"><ArrowLeft/> Voltar</Button>  
                    <Button className="bg-principal-blue rounded-full w-25">Avançar <ArrowRight/></Button>                 
            </div>

    )
};

export default Nav;