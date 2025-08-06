import Image from 'next/image'

const documentos = [
  'Documento com foto',
  'CÓPIA DO RG (FRENTE)',
  'CÓPIA DO RG (VERSO)',
  'CPF',
  'PASSAPORTE VACINAL',
  'ATESTADO CARDIOLOGISTA',
  'ATESTADO DERMATOLOGISTA',
  'DIPLOMA/CERTIFICADO DE FORMAÇÃO',
  'DECLARAÇÃO DE VOLUNTARIADO',
  'TERMO DE RESPONSABILIDADE E CONDUTA',
  'COMPROVANTE DE RESIDÊNCIA',
]

export default function Documentacao() {
  return (
    <div className="rounded-2xl border border-principal-blue overflow-hidden mb-6">
      <div className="bg-principal-blue px-6 py-3 flex items-center justify-between text-white font-bold">
        <span>Documentação</span>
        <Image src="/edit.png" alt="Editar" width={20} height={20} />
      </div>

    <ul className="text-sm text-black">
        {documentos.map((doc, index) => (
            <li
            key={index}
            className="flex border-t border-principal-blue min-h-[44px]"
            >
            <div className="relative flex items-center justify-center w-10">
                <Image src="/check.svg" alt="check" width={16} height={16} />
                <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-principal-blue" />
            </div>

            <div className="flex-1 px-4 py-3 flex items-center">
                <span>{doc}</span>
            </div>
            </li>
        ))}
    </ul>
    </div>
  )
}
