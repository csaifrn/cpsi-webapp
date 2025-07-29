import NavBar from "@/components/idoso/navegacao/Navbar";
import { usuario_cpsi } from "@/types/usuario";
import { Pesquisar } from "@/components/idoso/pre-inscricao/pesquisa";
import { CardHome, BotaoHome } from "@/components/home";

const Home = () => {
  return (
    <>
      <NavBar usuario={usuario_cpsi} />

      <CardHome>
        <div className="m-5 mt-7">
          <Pesquisar />
        </div>

        <div className="m-5 items-center border border-gray-400 rounded-md max-w-full">
          <BotaoHome
            imagem="/idosos.png"
            texto="Idosos"
            bg="bg-yellow-200"
            imageSize="w-16"
          />
          <BotaoHome imagem="/album.png" texto="Turmas" bg="bg-red-400" />
          <BotaoHome
            imagem="/clipboard-signature.png"
            texto="Pré-inscrição"
            bg="bg-indigo-400"
          />
          <BotaoHome
            imagem="/clipboard-check.png"
            texto="Inscrição"
            bg="bg-red-400"
          />
          <BotaoHome
            imagem="/user-plus.png"
            texto="Cadastro"
            bg="bg-emerald-400"
          />
        </div>
      </CardHome>
    </>
  );
};

export default Home;
