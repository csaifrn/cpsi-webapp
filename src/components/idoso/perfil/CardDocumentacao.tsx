import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
const CardDocumentacao = () => {
    return (
        <Card className="max-w-md mx-auto w-full mt-8 gap-0 bg-white shadow-lg mb-8 font-courier-prime text-lg border border-principal-blue rounded-md p-0">
            <CardHeader className="bg-principal-blue rounded-t-sm">
                <CardTitle className="font-extrabold text-white border-b border-principal-blue py-3 text-start text-lg pt-5">
                    Documentação
                </CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-0">
                <Table>
                    <TableBody className=" border-principal-blue">
                        <TableRow className=" border-principal-blue border-b-2">
                            <TableCell><figure className="border-principal-blue p-1 flex items-center justify-center"><img height="20px" width="20px" src="/Check.svg" /></figure></TableCell>
                            <TableCell className="font-bold text-xs border-principal-blue border-l-2">FOTO 3x4</TableCell>
                        </TableRow>
                        <TableRow className="border-b-2 border-principal-blue">
                            <TableCell><figure className="border-principal-blue p-1 flex items-center justify-center"><img height="20px" width="20px" src="/Check.svg" /></figure></TableCell>
                            <TableCell className="font-bold text-xs border-principal-blue border-l-2">CÓPIA DO RG(FRENTE)</TableCell>
                        </TableRow>
                        <TableRow className="border-b-2 border-principal-blue">
                            <TableCell><figure className="border-principal-blue p-1 flex items-center justify-center"><img height="20px" width="20px" src="/Check.svg" /></figure></TableCell>
                            <TableCell className="font-bold text-xs border-principal-blue border-l-2">CÓPIA DO RG (VERSO)</TableCell>
                        </TableRow>
                        <TableRow className="border-b-2 border-principal-blue">
                            <TableCell><figure className="border-principal-blue p-1 flex items-center justify-center"><img height="20px" width="20px" src="/Check.svg" /></figure></TableCell>
                            <TableCell className="font-bold text-xs border-principal-blue border-l-2">COMPROVANTE DE RESIDÊNCIA</TableCell>
                        </TableRow>
                        <TableRow className="border-b-2 border-principal-blue">
                            <TableCell><figure className="border-principal-blue p-1 flex items-center justify-center"><img height="20px" width="20px" src="/Check.svg" /></figure></TableCell>
                            <TableCell className="font-bold text-xs border-principal-blue border-l-2">PASSAPORTE VACINAL</TableCell>
                        </TableRow>
                        <TableRow className="border-b-2 border-principal-blue">
                            <TableCell><figure className="border-principal-blue p-1 flex items-center justify-center"><img height="20px" width="20px" src="/Check.svg" /></figure></TableCell>
                            <TableCell className="font-bold text-xs border-principal-blue border-l-2">ATESTADO CARDIOLOGISTA</TableCell>
                        </TableRow>
                        <TableRow className="border-b-2 border-principal-blue">
                            <TableCell><figure className="border-principal-blue p-1 flex items-center justify-center"><img height="20px" width="20px" src="/Check.svg" /></figure></TableCell>
                            <TableCell className="font-bold text-xs border-principal-blue border-l-2">ATESTADO DERMATOLOGISTA</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}


export default CardDocumentacao;