import Image from "next/image";

interface Props {
  nome: string;
  onClose: () => void;
}

export default function PopupImg({ nome, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-opacity-30 z-50 flex items-center justify-center">
      <div className="bg-white w-[90%] max-w-xs rounded-xl p-4 relative mx-auto">

        <div className="flex justify-end items-center gap-2 mb-2">
          <Image
            src="/inserir.svg"
            alt="upload"
            width={22}
            height={22}
            className="cursor-pointer"
          />
          <Image
            src="/camera.svg"
            alt="camera"
            width={22}
            height={22}
            className="cursor-pointer"
          />
          <button
            onClick={onClose}
            className="text-xl font-bold ml-2"
          >
            ×
          </button>
        </div>

        <div className="bg-gray-300 text-center text-black font-mono py-20 mt-2 rounded-md">
          imagem<br />do<br />documento
        </div>
      </div>
    </div>
  );
}
