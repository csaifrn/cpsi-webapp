import NavBar from "@/components/idoso/navegacao/Navbar";
import { usuario_cpsi } from "@/types/usuario";
import { Pesquisar } from '@/components/idoso/pre-inscricao/pesquisa';
import PainelCard from "@/components/home/card";

const Home = () => {
  return (
    <>
      <NavBar usuario={usuario_cpsi} />

      <div className="m-5 mt-7">
        <Pesquisar />
      </div>

      <div className="m-5 items-center border border-gray-400 rounded-md max-w-full">
        <PainelCard imagem="/idosos.png" texto="Idosos" bg="bg-yellow-200" imageSize="w-16" />
        <PainelCard imagem="/album.png" texto="Turmas" bg="bg-red-400" />
        <PainelCard imagem="/clipboard-signature.png" texto="Pré-inscrição" bg="bg-indigo-400" />
        <PainelCard imagem="/clipboard-check.png" texto="Inscrição" bg="bg-red-400" />
        <PainelCard imagem="/user-plus.png" texto="Cadastro" bg="bg-emerald-400" />
      </div>
    </>
  );
};

export default Home;
