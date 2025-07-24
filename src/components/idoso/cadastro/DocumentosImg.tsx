import Image from "next/image";
import { useState } from "react";
import PopupImg from "./PopupImg";

const documentos = [
  { nome: "Documento com foto", status: "ok" },
  { nome: "RG", status: "ok" },
  { nome: "CPF", status: "erro" },
  { nome: "Atestado médico", status: "neutro" },
  { nome: "Cardíaco", status: "ok" },
  { nome: "Dermatológico", status: "ok" },
  { nome: "Passaporte Vacinal", status: "erro" },
];

export function DocumentosImg() {
  const [imagemSelecionada, setImagemSelecionada] = useState<string | null>(null);

  const abrirPopup = (nome: string) => setImagemSelecionada(nome);
  const fecharPopup = () => setImagemSelecionada(null);

  const renderStatusIcon = (status: string) => {
    if (status === "ok") {
      return <Image src="/Check.svg" alt="ok" width={18} height={18} />;
    }
    if (status === "erro") {
      return <Image src="/Atrasado.svg" alt="erro" width={18} height={18} />;
    }
    return <Image src="/Check.svg" alt="neutro" width={18} height={18} />; 
  };

  return (
    <div className="space-y-3">
      {documentos.map((doc, i) => (
        <div
          key={i}
          className="flex justify-between items-center border-b border-gray-300 pb-1"
        >
          <div className="flex gap-2 items-center">
            {renderStatusIcon(doc.status)}
            <span className="text-[15px] font-mono text-principal-blue">
              {doc.nome}
            </span>
          </div>

          <div className="flex gap-2 items-center">
            <span className="text-xs font-mono">10/30mb</span>
            <div className="flex items-center gap-1 border border-principal-blue rounded-md px-2 py-1">
              <Image
                src="/inserir.svg"
                alt="upload"
                width={18}
                height={18}
                className="cursor-pointer"
              />
              <Image
                src="/camera.svg"
                alt="camera"
                width={18}
                height={18}
                className="cursor-pointer"
              />
              <Image
                src="/olho.svg"
                alt="olho"
                width={18}
                height={18}
                className="cursor-pointer"
                onClick={() => abrirPopup(doc.nome)}
              />
            </div>
          </div>
        </div>
      ))}

      {imagemSelecionada && (
        <PopupImg onClose={fecharPopup} nome={imagemSelecionada} />
      )}
    </div>
  );
}
