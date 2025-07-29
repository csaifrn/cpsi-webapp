'use client';
import React from "react";
import { Album } from "lucide-react";
import { ClipboardPenLine } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CardIdosoPerfilAtividades, CardDadosPessoais, CardDocumentacao } from "@/components/idoso";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/idoso/navegacao/Navbar";
import { usuario_idoso } from "@/types/usuario";
import Horario from "@/components/idoso/home/HorarioDia";
import IdosoHomeMat from "@/components/idoso/home/Home";

const HomeIdosoPage = () => {
    return (
      <section>
			  <NavBar usuario={usuario_idoso} />
        <IdosoHomeMat />
        <Horario />
      </section>
    );
};
export default HomeIdosoPage;