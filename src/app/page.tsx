import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const Documentacao = () => {
  return (
    <div className="bg-white h-screen">
        <section className="flex flex-col items-center border-2 w-80 border-blue-400 rounded-lg m-4">
            <h3 className="text-white text-sm font-bold self-start border-b-2 border-blue-400 p-3 pl-4 w-full bg-blue-500 rounded-t-lg">Documentação</h3>
            <div className="flex flex-col justify-center items-center w-full">
                <Table>
                <TableBody className=" border-blue-400">
                    <TableRow className=" border-blue-400 border-b-2">
                        <TableCell><figure className="border-blue-400 p-2"><img height="20px" width="20px" src="/Check.svg"/></figure></TableCell>
                        <TableCell className="font-bold text-xs border-blue-400 border-l-2">FOTO 3x4</TableCell>
                    </TableRow>
                    <TableRow className="border-b-2 border-blue-400">
                        <TableCell><figure className="border-blue-400 p-2"><img height="20px" width="20px" src="/Check.svg"/></figure></TableCell>
                        <TableCell className="font-bold text-xs border-blue-400 border-l-2">CÓPIA DO RG(FRENTE)</TableCell>
                    </TableRow>
                    <TableRow className="border-b-2 border-blue-400">
                        <TableCell><figure className="border-blue-400 p-2 "><img height="20px" width="20px" src="/Check.svg"/></figure></TableCell>
                        <TableCell className="font-bold text-xs border-blue-400 border-l-2">CÓPIA DO RG (VERSO)</TableCell>
                    </TableRow>
                    <TableRow className="border-b-2 border-blue-400">
                        <TableCell><figure className="border-blue-400 p-2"><img height="20px" width="20px" src="/Check.svg"/></figure></TableCell>
                        <TableCell className="font-bold text-xs border-blue-400 border-l-2">COMPROVANTE DE RESIDÊNCIA</TableCell>
                    </TableRow>
                    <TableRow className="border-b-2 border-blue-400">
                        <TableCell><figure className="border-blue-400 p-2"><img height="20px" width="20px" src="/Check.svg"/></figure></TableCell>
                        <TableCell className="font-bold text-xs border-blue-400 border-l-2">PASSAPORTE VACINAL</TableCell>
                    </TableRow>
                    <TableRow className="border-b-2 border-blue-400">
                        <TableCell><figure className="border-blue-400 p-2 "><img height="20px" width="20px" src="/Check.svg"/></figure></TableCell>
                        <TableCell className="font-bold text-xs border-blue-400 border-l-2">ATESTADO CARDIOLOGISTA</TableCell>
                    </TableRow>
                    <TableRow className="border-b-2 border-blue-400">
                        <TableCell><figure className="border-blue-400 p-2"><img height="20px" width="20px" src="/Check.svg"/></figure></TableCell>
                        <TableCell className="font-bold text-xs border-blue-400 border-l-2">ATESTADO DERMATOLOGISTA</TableCell>
                    </TableRow>
                </TableBody>
                </Table>
            </div>
        </section>
        <section className="flex flex-col items-center border-2 w-80 border-blue-400 rounded-lg m-4">
            <h3 className="text-black text-sm font-bold self-start border-b-2 border-blue-400 p-3 pl-4 w-full">Documentação</h3>
            <div className="flex flex-col justify-center items-center mt-4 mb-4">
                 <div className="flex row-auto">
                    <figure className="border-blue-400 border-t-2 border-l-2 p-3"><img height="20px" width="20px" src="/Check.svg"/></figure>
                    <p className="text-black font-bold text-xs w-60 flex items-center border-blue-400 border-t-2 border-l-2 border-r-2 p-3">FOTO 3x4</p>
                </div>
                <div className="flex row-auto">
                    <figure className="border-blue-400 border-t-2 border-l-2 p-3"><img height="20px" width="20px" src="/Check.svg"/></figure>
                    <p className="text-black font-bold text-xs w-60 flex items-center border-blue-400 border-t-2 border-l-2 border-r-2 p-3">CÓPIA DO RG (FRENTE)</p>
                </div>
                 <div className="flex row-auto">
                    <figure className="border-blue-400 border-t-2 border-l-2 p-3"><img height="20px" width="20px" src="/Check.svg"/></figure>
                    <p className="text-black font-bold text-xs w-60 flex items-center border-blue-400 border-t-2 border-l-2 border-r-2 p-3">CÓPIA DO RG (VERSO)</p>
                </div>
                <div className="flex row-auto">
                    <figure className="border-blue-400 border-t-2 border-l-2 p-3"><img height="20px" width="20px" src="/Check.svg"/></figure>
                    <p className="text-black font-bold text-xs w-60 flex items-center border-blue-400 border-t-2 border-l-2 border-r-2 p-2.5">COMPROVANTE DE RESIDÊNCIA</p>
                </div>
                 <div className="flex row-auto">
                    <figure className="border-blue-400 border-t-2 border-l-2 p-3"><img height="20px" width="20px" src="/Check.svg"/></figure>
                    <p className="text-black font-bold text-xs w-60 flex items-center border-blue-400 border-t-2 border-l-2 border-r-2 p-2.5">PASSAPORTE VACINAL</p>
                </div>
                <div className="flex row-auto">
                    <figure className="border-blue-400 border-t-2 border-l-2 p-3"><img height="20px" width="20px" src="/Check.svg"/></figure>
                    <p className="text-black font-bold text-xs w-60 flex items-center border-blue-400 border-t-2 border-l-2 border-r-2 p-2.5">ATESTADO CARDIOLOGISTA</p>
                </div>
                 <div className="flex row-auto">
                    <figure className="border-blue-400 border-t-2 border-l-2 border-b-2 p-3"><img height="20px" width="20px" src="/Check.svg"/></figure>
                    <p className="text-black font-bold text-xs w-60 flex items-center border-blue-400 border-2 p-2.5">ATESTADO DERMATOLOGISTA</p>
                </div>
            </div>
        </section>
    </div>
  );
}
const Page = () => {
    return (
        <>
            <Documentacao />
        </>
    );
}
export default Page;