import { ReactNode } from "react";

interface CardPreinscricaoProps {
    children: ReactNode;
}

const CardPreinscricao = ({ children }: CardPreinscricaoProps) => {
    return (
        <div className="flex flex-col items-center justify-center max-w-md mx-auto px-2">
            <section className="text-principal-blue w-full">
                {children}
            </section>
        </div>
    );
}

export default CardPreinscricao;
