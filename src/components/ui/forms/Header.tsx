import Image from "next/image"

export default function Header() {
  return (
    <div className="bg-principal-blue text-principal-blue-foreground p-4 flex justify-between items-center">
      <span className="bg-white/30 w-10 h-10 flex items-center justify-center rounded-lg">
        <Image src="/pessoa.png" alt="casa" width={20} height={20} />
      </span>
      <span className="bg-white/30 w-10 h-10 flex items-center justify-center rounded-lg">
        <Image src="/menu.png" alt="menu" width={20} height={20} />
      </span>
    </div>
  )
}
