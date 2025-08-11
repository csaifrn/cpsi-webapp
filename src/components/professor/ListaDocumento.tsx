import { DocumentoCard, Documento } from "./DocumentoCard";

interface ListaDocumentosProps {
  titulo?: string;
  documentos: Documento[];
}

export function ListaDocumentos({ titulo, documentos }: ListaDocumentosProps) {
  return (
    <div className="flex flex-col gap-2">
      {titulo && <h2 className="mt-6 mb-2 text-lg text-indigo-400">{titulo}</h2>}
      {documentos.map((doc, idx) => (
        <DocumentoCard key={idx} {...doc} />
      ))}
    </div>
  );
}
