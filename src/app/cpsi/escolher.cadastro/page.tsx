import NavBar from "@/components/idoso/navegacao/Navbar";
import { usuario_cpsi } from "@/types/usuario";
import { CardHome } from "@/components/home";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';

const Form = () => {
  return (
    <>
        <NavBar usuario={usuario_cpsi} />
        <CardHome>
            <div className="flex mt-4">
                <ArrowLeft className="mr-5"/>
                <p className="!font-extrabold whitespace-nowrap cursor-pointer">Voltar</p>
            </div>
            <h2 className="m-4 mt-5 text-[#5F6DD7] text-xl text-center">Qual tipo de cadastro deseja realizar?</h2>
            <div className="p-1 border-1 border-gray rounded-xl h-[75vh]">
                <Card className='relative flex flex-row items-center justify-left m-4 p-4 bg-[#FCE392] border-2 border-[#C8B576]'>
                    <img src='/idosos.svg' className=' w-[50px] !h-[50px] min-w-[50px] min-h-[50px] flex-shrink-0' />
                    <h2 className="text-2xl !font-extrabold whitespace-nowrap">Idosos</h2>
                </Card>
                <Card className='relative flex flex-row items-center justify-left m-4 p-4 bg-[#79D590] border-2 border-[#64B779]'>
                    <img src='/pessoa.svg' className=' w-[50px] !h-[50px] min-w-[50px] min-h-[50px] flex-shrink-0' />
                    <h2 className="text-2xl !font-extrabold whitespace-nowrap">Idosos</h2>
                </Card>
            </div>
        </CardHome>
    </>
  )

};
export default Form;