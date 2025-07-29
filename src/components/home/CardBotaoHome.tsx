import { ReactNode } from "react";

interface CardBotaoHomeProps {
  children: ReactNode;
}

const CardBotaoHome = ({ children }: CardBotaoHomeProps) => {
  return (
    <div className="m-4 items-center border border-gray-400 rounded-md">
        {children}
    </div>
  );
};

export default CardBotaoHome;
