import React from "react";
import { CardDocumentacao } from "@/components/idoso";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/idoso/navegacao/Navbar";
import { usuario_cpsi } from "@/types/usuario";
import { Ellipsis } from 'lucide-react';

export default function page() {
	return (
		<section className=" bg-white">
			<NavBar usuario={usuario_cpsi} />
            <div className="m-5 mt-0">                
                <div className="py-4 max-w-md mx-auto text-gray-900 font-courier-prime">
                    <div className="flex items-center text-lg font-semibold">
                        <Button variant="ghost" size="icon" className="mr-2 p-0 h-auto w-auto">
                            <Image src="/seta.png" alt="voltar" width={20} height={20} />
                        </Button>
                        <span>Dados Pessoais</span>
                    </div>
                </div>

                <Card className="max-w-md mx-auto w-full bg-white shadow-lg mb-8 font-courier-prime text-lg border border-principal-blue rounded-md p-0">
                    <CardHeader className="bg-principal-blue text-white p-8 flex items-center justify-between gap-3 rounded-t-sm">
                        <div className="flex items-center gap-3">
                            <Avatar className="w-16 h-16 border-2 border-white rounded-full">
                            <AvatarImage src="/idosa.jpg" alt="Foto do idoso" />
                            <AvatarFallback>AC</AvatarFallback>
                            </Avatar>
                            <span className="font-bold text-lg font-courier-prime">
                            Liliana de Souza Silva
                            </span>
                        </div>
                        <span className="cursor-pointer relative -top-6">
                            <Ellipsis />
                        </span>
                    </CardHeader>

                    <CardContent className="space-y-1 text-lg text-gray-900 font-courier-prime">
                        <p>CPF: 123.456.789-00</p>
                        <p>Idade: 61</p>
                        <p>Data de nascimento: 06/12/1960</p>
                        <p>Tel. Contato: (84) 9 9999-9999</p>
                    </CardContent>

                    <CardFooter className="border-t border-principal-blue px-7 py-6 text-lg text-gray-900 flex flex-col items-start">
                        <p className="font-bold mb-1 font-courier-prime">Contato de Emergência</p>
                        <p>Nome: Kamila</p>
                        <p>Vínculo: Filha</p>
                        <p>Tel. Emergência: (84) 8 8888-8888</p>
                    </CardFooter>
                </Card>
                <CardDocumentacao />
            </div>
		</section>
	);
}