import NavBar from "@/components/idoso/navegacao/Navbar";
import { usuario_cpsi } from "@/types/usuario";
import { CardHome, BotaoHome, CardBotaoHome } from "@/components/home";
import { ArrowLeft } from "lucide-react";

const Home = () => {
  return (
    <>
      <NavBar usuario={usuario_cpsi} />

      <CardHome>
        <h2 className="flex justify-start mt-8 ml-2 cursor-pointer font-bold ">
          <ArrowLeft className="mr-2" /> Voltar
        </h2>
        <h2 className="text-center text-[#5F6DD7] text-xl m-2">
          Qual tipo de cadastro
          <br /> deseja realizar?
        </h2>
        <CardBotaoHome>
          <div className="[&_img]:!w-16">
            <BotaoHome imagem="/idosos.svg" texto="Idosos" bg="bg-yellow-200" />
          </div>
          <div className="[&_img]:!h-13 [&_img]:!mr-8 [&_img]:!mx-2">
            <BotaoHome imagem="/user.svg" texto="Professores" bg="bg-red-400" />
          </div>
        </CardBotaoHome>
      </CardHome>
    </>
  );
};

export default Home;
