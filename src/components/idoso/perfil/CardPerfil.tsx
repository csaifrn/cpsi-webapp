import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const DadosPessoais = () => {
  return (
    <section className="min-h-screen bg-white">
      <div className="bg-indigo-500 text-white p-4 flex justify-between items-center">
        
        <span className="bg-white/30 w-10 h-10 flex items-center justify-center rounded-lg">
          <a><Image src="/casa.png" alt="casa" width={20} height={20} /></a>
        </span>
        
        <span className="bg-white/30 w-10 h-10 flex items-center justify-center rounded-lg">
          <Image src="/menu.png" alt="menu" width={20} height={20} />
        </span>
      </div>

      <div className="p-4 max-w-md mx-auto text-gray-900 font-courier-prime">
        <div className="flex items-center text-lg font-semibold mb-4">
          <Button variant="ghost" size="icon" className="mr-2 p-0 h-auto w-auto">
            <Image src="/seta.png" alt="voltar" width={20} height={20} />
          </Button>
          <span>Dados Pessoais</span>
        </div>

        <Card className="border border-purple-500 rounded-lg shadow-md overflow-hidden">
          <CardHeader className="bg-indigo-500 text-white p-8 flex items-center gap-3">
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

          <CardFooter className="border-t border-purple-500 px-7 py-6 text-lg text-gray-900 flex flex-col items-start">
            <p className="font-bold mb-1 font-courier-prime">Contato de Emergência</p>
            <p>Nome: Kamila</p>
            <p>Vínculo: Filha</p>
            <p>Tel. Emergência: (84) 8 8888-8888</p>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
export default DadosPessoais;