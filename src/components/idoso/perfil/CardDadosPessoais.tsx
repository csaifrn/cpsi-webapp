import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const CardDadosPessoais = () => {
  return (
    <Card className="max-w-md mx-auto w-full bg-white shadow-lg mb-8 font-courier-prime text-lg border border-principal-blue rounded-md p-0">
      <CardHeader className="bg-principal-blue text-white p-8 flex items-center gap-3 rounded-t-sm">
        <Avatar className="w-16 h-16 border-2 border-white rounded-full">
          <AvatarImage src="/idosa.jpg" alt="Foto do idoso" />
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
        <span className="font-bold text-lg font-courier-prime">
          Adeilda Conceição Gomes da Silva
        </span>
      </CardHeader>

      <CardContent className="space-y-1 text-lg text-gray-900 font-courier-prime">
        <p>CPF: 123.456.789-00</p>
        <p>Idade: 61</p>
        <p>Data de nascimento: 06/12/1960</p>
        <p>Tel. Contato: (84) 9 9999-9999</p>
      </CardContent>

      <CardFooter className="border-t border-principal-blue px-7 py-6 text-lg text-gray-900 flex flex-col items-start">
        <p className="font-bold mb-1 font-courier-prime">Contato de Emergência</p>
        <p>Nome: Kamila</p>
        <p>Vínculo: Filha</p>
        <p>Tel. Emergência: (84) 8 8888-8888</p>
      </CardFooter>
    </Card>
  )
}
export default CardDadosPessoais;