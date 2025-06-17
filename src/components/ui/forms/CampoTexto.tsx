import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface CampoTextoProps {
  label: string
  placeholder: string
  size?: "sm" | "lg"
}

export default function CampoTexto({ label, placeholder, size = "lg" }: CampoTextoProps) {
  const textSize = size === "sm" ? "text-sm" : "text-lg"
  return (
    <div>
      <Label className={`text-principal-blue ${textSize}`}>{label}</Label>
      <Input
        className={`font-mono border-0 border-b border-border rounded-none px-0 ${textSize}`}
        placeholder={placeholder}
      />
    </div>
  )
}
