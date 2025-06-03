import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const AtividadesShad = () => {
  return (
    <Card className="max-w-md mx-auto w-full mt-8 bg-white shadow-lg mb-8 font-courier-prime text-lg border border-indigo-500 rounded-md">
      <CardHeader className="pb-0">
        <CardTitle className="font-extrabold border-b border-indigo-500 p-3 pl-7.5 uppercase text-center text-lg">
          Atividades
        </CardTitle>
      </CardHeader>
      <CardContent>
        <nav className="flex gap-4 py-4 pl-7.5">
          <Button variant="ghost" className="border-b-4 border-indigo-500 font-extrabold rounded-none px-4 py-2 text-indigo-600">
            Extensão
          </Button>
          <Button variant="ghost" className="px-4 py-2">
            Ensino
          </Button>
        </nav>
        <div>
          <table className="uppercase border border-indigo-500 rounded-md w-full text-center">
            <thead>
              <tr className="border border-indigo-500 divide-x divide-indigo-500">
                <th className="font-normal p-3 px-4">Atividade</th>
                <th className="font-normal p-3">Turma</th>
                <th className="font-normal p-3">Professor</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border border-indigo-500 divide-x divide-indigo-500">
                <td>Dança</td>
                <td>
                  Terça-feira<br />
                  7:00-7:45<br />
                  Sala 1
                </td>
                <td>Null</td>
              </tr>
              <tr className="border border-indigo-500 divide-x divide-indigo-500">
                <td>Coral</td>
                <td>
                  TERÇA-FEIRA<br />
                  7:45-8:00<br />
                  SALA 3
                </td>
                <td>Null</td>
              </tr>
              <tr className="border border-indigo-500 divide-x divide-indigo-500">
                <td>Musculação</td>
                <td>
                  QUARTA-FEIRA<br />
                  7:00-7:45<br />
                  SALA 1
                </td>
                <td>Null</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}

export default AtividadesShad;