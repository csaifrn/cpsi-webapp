import NavBar from "@/components/idoso/navegacao/Navbar";
import { usuario_cpsi } from "@/types/usuario";
import { CardHome, BotaoHome, CardBotaoHome } from "@/components/home";
import { ArrowLeft } from "lucide-react";



const Home = () => {
  return (
    <>
      <NavBar usuario={usuario_cpsi} />

      <CardHome>

        <h2 className="flex justify-start mt-8 ml-4 cursor-pointer"><ArrowLeft className="mr-2"/> Voltar</h2>
        <h2 className="text-center text-[#5F6DD7] text-xl m-2">Qual tipo de cadastro<br/> deseja realizar?</h2>
        <CardBotaoHome>
          <BotaoHome imagem="/idosos.svg" texto="Idosos" bg="bg-yellow-200" />
          <BotaoHome imagem="/user.svg" texto="Professores" bg="bg-red-400" />

        </CardBotaoHome>
      </CardHome>
    </>
  );
};

export default Home;
