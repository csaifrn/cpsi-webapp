import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const CardDocumentacao = () => {
  return (
    <div className="bg-white h-screen">
        <section className="flex flex-col items-center border-2 w-80 border-principal-blue rounded-lg m-4">
            <h3 className="text-white text-sm font-bold self-start border-b-2 border-principal-blue p-3 pl-4 w-full bg-principal-blue rounded-t">Documentação</h3>
            <div className="flex flex-col justify-center items-center w-full">
                <Table>
                <TableBody className=" border-principal-blue">
                    <TableRow className=" border-principal-blue border-b-2">
                        <TableCell><figure className="border-principal-blue p-1 flex items-center justify-center"><img height="20px" width="20px" src="/Check.svg"/></figure></TableCell>
                        <TableCell className="font-bold text-xs border-principal-blue border-l-2">FOTO 3x4</TableCell>
                    </TableRow>
                    <TableRow className="border-b-2 border-principal-blue">
                        <TableCell><figure className="border-principal-blue p-1 flex items-center justify-center"><img height="20px" width="20px" src="/Check.svg"/></figure></TableCell>
                        <TableCell className="font-bold text-xs border-principal-blue border-l-2">CÓPIA DO RG(FRENTE)</TableCell>
                    </TableRow>
                    <TableRow className="border-b-2 border-principal-blue">
                        <TableCell><figure className="border-principal-blue p-1 flex items-center justify-center"><img height="20px" width="20px" src="/Check.svg"/></figure></TableCell>
                        <TableCell className="font-bold text-xs border-principal-blue border-l-2">CÓPIA DO RG (VERSO)</TableCell>
                    </TableRow>
                    <TableRow className="border-b-2 border-principal-blue">
                        <TableCell><figure className="border-principal-blue p-1 flex items-center justify-center"><img height="20px" width="20px" src="/Check.svg"/></figure></TableCell>
                        <TableCell className="font-bold text-xs border-principal-blue border-l-2">COMPROVANTE DE RESIDÊNCIA</TableCell>
                    </TableRow>
                    <TableRow className="border-b-2 border-principal-blue">
                        <TableCell><figure className="border-principal-blue p-1 flex items-center justify-center"><img height="20px" width="20px" src="/Check.svg"/></figure></TableCell>
                        <TableCell className="font-bold text-xs border-principal-blue border-l-2">PASSAPORTE VACINAL</TableCell>
                    </TableRow>
                    <TableRow className="border-b-2 border-principal-blue">
                        <TableCell><figure className="border-principal-blue p-1 flex items-center justify-center"><img height="20px" width="20px" src="/Check.svg"/></figure></TableCell>
                        <TableCell className="font-bold text-xs border-principal-blue border-l-2">ATESTADO CARDIOLOGISTA</TableCell>
                    </TableRow>
                    <TableRow className="border-b-2 border-principal-blue">
                        <TableCell><figure className="border-principal-blue p-1 flex items-center justify-center"><img height="20px" width="20px" src="/Check.svg"/></figure></TableCell>
                        <TableCell className="font-bold text-xs border-principal-blue border-l-2">ATESTADO DERMATOLOGISTA</TableCell>
                    </TableRow>
                </TableBody>
                </Table>
            </div>
        </section>
    </div>
  );
}

export default CardDocumentacao;