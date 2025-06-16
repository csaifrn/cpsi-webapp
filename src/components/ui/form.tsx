import { User, LockKeyhole } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Form() {
  return (
    <div>
        <main className='text-indigo-500 flex flex-col items-center justify-center min-h-screen'>
            <h1 className="m-12 text-2xl text-center">CADASTRAR-SE</h1>
            <form className="formulario">
                <Label htmlFor="cpf" className='text-lg'>CPF</Label><br/>
                <div className="flex flex-row m-3 mb-5 mt-0 ml-0 gap-3 border-b border-gray-400 py-2">
                    <User className="text-neutral-400 w-8 h-8"/>
                    <Input className="text-neutral-500" type="cpf" id="cpf" placeholder="Digite seu CPF" />
                </div>
                <Label htmlFor="email" className='text-lg'>Email</Label><br/>
                <div className="flex flex-row m-3 mt-0 mb-5 ml-0 gap-3 border-b border-gray-400 py-2">
                    <LockKeyhole className="text-neutral-400 w-8 h-8"/>
                    <Input className="text-neutral-500" type="password" id="senha" placeholder="Digite sua senha"/>
                </div>
                <Button className="bg-indigo-500 text-white w-90 rounded-3xl h-12 mt-20">CADASTRE-SE</Button>
            </form>
        </main>
    </div>
  )
}
