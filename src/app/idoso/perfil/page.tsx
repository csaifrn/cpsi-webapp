import React from "react";
import { CardIdosoPerfilAtividades, CardDadosPessoais, CardDocumentacao, NavBarIdoso } from "@/components/idoso";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";


export default function page() {
	return (
		<section className="min-h-screen bg-white">
			<NavBarIdoso />
			<div className="py-4 max-w-md mx-auto text-gray-900 font-courier-prime">
				<div className="flex items-center text-lg font-semibold">
					<Button variant="ghost" size="icon" className="mr-2 p-0 h-auto w-auto">
						<Image src="/seta.png" alt="voltar" width={20} height={20} />
					</Button>
					<span>Dados Pessoais</span>
				</div>
			</div>

			<CardDadosPessoais />
			<CardIdosoPerfilAtividades />
			<CardDocumentacao />
		</section>
	);
}