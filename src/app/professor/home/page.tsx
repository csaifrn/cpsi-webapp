import NavBar from "@/components/idoso/navegacao/Navbar";
import { usuario_cpsi } from "@/types/usuario";
import { Button } from "@/components/ui/button";
import { ClipboardPenLine } from 'lucide-react';
import { CardHome } from "@/components/home";
import { Pesquisar } from "@/components/idoso/pre-inscricao/pesquisa";
import { Card } from "@/components/ui/card";

const Form = () => {
  return (
    <>
        <NavBar usuario={usuario_cpsi} />
        <CardHome>
        <div className="m-4 mt-7">
          <Pesquisar />
        </div>

          <Card className='relative flex flex-row items-center justify-between m-4 p-2 bg-[#9497FF] border-2 border-[#7F8CF0]'>
            <Button className="rounded-xl !w-12 !h-13 !p-1 bg-black/15 hover:bg-black/25">
              <ClipboardPenLine className="text-black !w-10 !h-10" />
            </Button>
            <div className="flex justify-stretch items-center">
              <img src='/danca-preenchido.svg' className=' w-[50px] !h-[50px] min-w-[50px] min-h-[50px] flex-shrink-0' />
            </div>
            <div className="flex items-end justify-end flex-col text-right">
              <h2 className="text-xl !font-extrabold whitespace-nowrap">Turma 1</h2>
              <p className="text-sm whitespace-nowrap">Dança</p>
              <p className="text-xs whitespace-nowrap">12:35 - 14:00</p>
            </div>
          </Card>

          <Card className='relative flex flex-row items-center justify-between m-4 p-2 bg-[#F07F86] border-2 border-[#CD6C72]'>
            <Button className="rounded-xl !w-12 !h-13 !p-1 bg-black/15 hover:bg-black/25">
              <ClipboardPenLine className="text-black !w-10 !h-10" />
            </Button>
            <div className="flex justify-stretch items-center">
              <img src='/hidroginastica.svg' className='!w-[50px] !h-[50px] min-w-[50px] min-h-[50px] flex-shrink-0' />
            </div>
            <div className="flex items-end justify-end flex-col text-right">
              <h2 className="text-xl !font-extrabold whitespace-nowrap">Turma 1</h2>
              <p className="text-sm whitespace-nowrap">Hidroginástica</p>
              <p className="text-xs whitespace-nowrap">12:35 - 14:00</p>
            </div>
          </Card>

          <Card className='relative flex flex-row items-center justify-between m-4 p-2 bg-[#FCE392] border-2 border-[#F0D67F]'>
            <Button className="rounded-xl !w-12 !h-13 !p-1 bg-black/15 hover:bg-black/25">
              <ClipboardPenLine className="text-black !w-10 !h-10" />
            </Button>
            <div className="flex justify-stretch items-center">
              <img src='/musculacao.svg' className='!w-[50px] !h-[50px] min-w-[50px] min-h-[50px] flex-shrink-0' />
            </div>
            <div className="flex items-end justify-end flex-col text-right">
              <h2 className="text-xl !font-extrabold whitespace-nowrap">Turma 1</h2>
              <p className="text-sm whitespace-nowrap">Musculação</p>
              <p className="text-xs whitespace-nowrap">12:35 - 14:00</p>
            </div>
          </Card>

          <Card className='relative flex flex-row items-center justify-between m-4 p-2 bg-[#79D590] border-2 border-[#64B779]'>
            <Button className="rounded-xl !w-12 !h-13 !p-1 bg-black/15 hover:bg-black/25">
              <ClipboardPenLine className="text-black !w-10 !h-10" />
            </Button>
            <div className="flex justify-stretch items-center">
              <img src='/const.corporal.svg' className='!w-[50px] !h-[50px] min-w-[50px] min-h-[50px] flex-shrink-0' />
            </div>
            <div className="flex items-end justify-end flex-col text-right">
              <h2 className="text-xl !font-extrabold whitespace-nowrap">Turma 1</h2>
              <p className="text-sm whitespace-nowrap">Const. Corporal</p>
              <p className="text-xs whitespace-nowrap">12:35 - 14:00</p>
            </div>
          </Card>
        </CardHome>
    </>
  )

};
export default Form;