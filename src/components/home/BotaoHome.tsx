import { Card } from "@/components/ui/card";

interface BotaoHomeProps {
  imagem: string;
  texto: string;
  bg: string;
  imageSize?: string;
}

const BotaoHome = ({ imagem, texto, bg, imageSize = "w-12" }: BotaoHomeProps) => {
  return (
    <Card className={`${bg} m-4 p-4`}>
      <div className="flex justify-stretch items-center">
        <img src={imagem} className={`mr-5 ${imageSize}`} />
        <p className="text-2xl">{texto}</p>
      </div>
    </Card>
  );
};

export default BotaoHome;
