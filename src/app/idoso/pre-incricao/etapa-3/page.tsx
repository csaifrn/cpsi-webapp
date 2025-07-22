"use client";

import NavBar from "@/components/idoso/navegacao/Navbar";
import { usuario_cpsi } from "@/types/usuario";
import React, { use } from "react";
import Forms from "@/components/idoso/pre-inscricao/page3/Forms";

import { CardPreinscricao, CardHeaderPreinscricao, NavPreinscricao, MigalhasPreinscricao } from "@/components/idoso/pre-inscricao";



export default function Paginapre() {
    return (
        <>
            <NavBar usuario={usuario_cpsi} />
            <CardPreinscricao>
                <CardHeaderPreinscricao title="Cadastre um idoso inserindo os dados solicitados" />
                <MigalhasPreinscricao currentStep={3} />
                <Forms />
                <NavPreinscricao onBack={() => {console.log("Voltar")}} onNext={() => {console.log("Avançar")}} />
            </CardPreinscricao>
        </>
    );
}