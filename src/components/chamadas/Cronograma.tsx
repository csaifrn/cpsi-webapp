import { SquarePen } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Cronograma = () => {
  return (
    <div className="mb-5 border border-indigo-500 rounded-xl ml-5 mr-5">
      <div className="flex justify-between bg-indigo-500 rounded-t-xl p-4">  
        <h2 className="text-white text-xl font-semibold">Cronograma</h2>
        <SquarePen className="text-white h-8 w-8"/>
      </div>
      <Table className="ml-3 mr-3 w-full table-fixed">
        <TableHeader>
          <TableRow>
            <TableHead className="text-left w-[140px]">Horário</TableHead>
            <TableHead className="text-right pr-10">Dia e Local</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-b">
            <TableCell className="text-left text-sm align-top pt-4">12:35 – 14:00</TableCell>
            <TableCell className="text-right align-top pr-15">
              <div>Terça</div>
              <div className="text-sm">SALA 1</div>
            </TableCell>
          </TableRow>
          <TableRow className="border-b">
            <TableCell className="text-left align-top pt-4 text-sm">12:35 – 14:00</TableCell>
            <TableCell className="text-right align-top pr-15">
              <div>Quinta</div>
              <div className="text-sm">SALA 1</div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
};
export default Cronograma;