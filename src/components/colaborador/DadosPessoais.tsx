import Image from 'next/image'

export default function DadosPessoais() {
  return (
    <div className="rounded-2xl border border-principal-blue">
      <div className="bg-principal-blue rounded-t-2xl px-4 py-3 flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          <Image
            src="/professora.jpg"
            alt="Foto"
            width={50}
            height={50}
            className="rounded-full w-12 h-12 object-cover"
          />
          <span className="font-bold">Lilian dos Santos</span>
        </div>
        <Image src="/edit.png" alt="Editar" width={20} height={20} />
      </div>

      <div className="text-sm text-black px-4 py-3 space-y-2">
        <p>CPF: 123.456.789-00</p>
        <p>Idade: 31</p>
        <p>Data de nascimento: 06/12/1994</p>
        <p>Tel. Contato: (84) 9 9999-9999</p>
      </div>

      <div className="border-t border-principal-blue px-4 py-3 text-sm space-y-1">
        <p className="font-bold text-black">Contato de Emergência</p>
        <p>Nome: Kamila</p>
        <p>Vínculo: Irmã</p>
        <p>Tel. Emergência: (84) 8 8888-8888</p>
      </div>
    </div>
  )
}
