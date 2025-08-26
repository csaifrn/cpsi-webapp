import { ReactNode } from "react";

interface CardPreinscricaoProps {
    children: ReactNode;
}

const CardPreinscricao = ({ children }: CardPreinscricaoProps) => {
    return (
      <div className="flex flex-col items-center justify-center max-w-md mx-auto px-4 sm:px-0 font-courier-prime">
        <section className="text-principal-blue w-full">{children}</section>
      </div>
    );
}

export default CardPreinscricao;
