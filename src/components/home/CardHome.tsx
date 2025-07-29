import { ReactNode } from "react";

interface CardHomeProps {
    children: ReactNode;
}

const CardHome = ({ children }: CardHomeProps) => {
    return (
      <div className="flex flex-col items-center justify-center max-w-md mx-auto px-5 sm:px-0 font-courier-prime">
        <section className="w-full">{children}</section>
      </div>
    );
}

export default CardHome;