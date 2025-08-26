'use client'

import React from "react";
import Navbar from "@/components/idoso/navegacao/Navbar";
import { DocumentosImg } from "@/components/cpsi/cadastro/DocumentosImg";
import { UsuarioEnum } from "@/types/usuario";
import Nav from "@/components/idoso/pre-inscricao/Nav";
import { useRouter } from 'next/navigation'; 
import MigalhasPreinscricao from "@/components/idoso/pre-inscricao/MigalhasPreinscricao";

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

      <main className="flex-1 items-center justify-center mx-auto">
        <h1 className="text-center text-principal-blue font-mono mt-4 mb-4">
          Adicione fotos dos documentos solicitados em cada campo
        </h1>

        <MigalhasPreinscricao />

        <DocumentosImg />

        <Nav
          onBack={() => router.back()}
          onNext={() => router.push("/idoso/cadastro")}
        />
      </main>
    </div>
  );
}
