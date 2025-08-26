'use client'

import React from "react";
import Navbar from "@/components/idoso/navegacao/Navbar";
import { DocumentosImg } from "@/components/cpsi/cadastro/DocumentosImg";
import { UsuarioEnum } from "@/types/usuario";
import Nav from "@/components/idoso/pre-inscricao/Nav";
import { useRouter } from 'next/navigation'; 

const usuario = {
  tipo: UsuarioEnum.idoso,
  apelido: "Dona Maria",
  avatar: {
    url: "/perfil.png",
  },
};

export default function DocumentosPage() {
    const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar usuario={usuario} />

      <main className="flex-1 px-4 pt-4 pb-28 max-w-xs mx-auto font-courier-prime">
        <h1 className="text-center text-principal-blue font-mono mb-4">
          Adicione fotos dos documentos solicitados em cada campo
        </h1>

        <div className="flex justify-center mb-4">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-principal-blue"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>

        <DocumentosImg />

        <Nav
          onBack={() => router.back()}
          onNext={() => router.push("/idoso/cadastro")} 
        />
      </main>
    </div>
  );
}
