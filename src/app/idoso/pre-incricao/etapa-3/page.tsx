"use client";

import { Header } from "@/components"
import React, { use } from "react";
import Nav from "@/components/idoso/pre-inscricao/page3/Nav";
import Forms from "@/components/idoso/pre-inscricao/page3/Forms";
import {
    useFormField,
    Form,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
    FormField,
} from "@/components/ui/form";
import { Car } from "lucide-react";
import { Card } from "@/components/idoso/pre-inscricao/card_atividade";
import CardPreinscricao from "@/components/idoso/pre-inscricao/CardPreinscricao";
import NavPreinscricao from "@/components/idoso/pre-inscricao/page3/Nav";


export default function Paginapre() {
    return (
        <>
            <Header />
            <CardPreinscricao>
                <Forms />
                <NavPreinscricao onBack={() => {console.log("Voltar")}} onNext={() => {console.log("Avançar")}} />
            </CardPreinscricao>
        </>
    );
}