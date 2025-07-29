import { Card } from "@/components/ui/card";

interface BotaoHomeProps {
  imagem: string;
  texto: string;
  bg: string;
  imageSize?: string;
}

const BotaoHome = ({ imagem, texto, bg, imageSize = "w-12" }: BotaoHomeProps) => {
  return (
    <Card className={`${bg} w-90 m-5 gap-4`}>
      <div className="flex justify-stretch items-center">
        <img src={imagem} className={`${imageSize} ml-5 mr-8`} />
        <p className="text-2xl">{texto}</p>
      </div>
    </Card>
  );
};

export default BotaoHome;
