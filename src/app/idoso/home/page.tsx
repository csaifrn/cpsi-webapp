'use client';
import React from "react";
import NavBar from "@/components/idoso/navegacao/Navbar";
import { usuario_idoso } from "@/types/usuario";
import Horario from "@/components/idoso/home/HorarioDia";
import { CardHome, CardBotaoHome, BotaoHome } from "@/components/home";
import { Button } from "@/components/ui/button";
import { Album } from "lucide-react";
import { ClipboardPenLine } from 'lucide-react';

const HomeIdosoPage = () => {
    return (
      <>
        <NavBar usuario={usuario_idoso} />
        <CardHome>
          <CardBotaoHome>
            <BotaoHome
              imagem="/album.png"
              texto="Meus Horários"
              bg="bg-primaria-red"
            />
            
            <BotaoHome
              imagem="/clipboard-signature.png"
              texto="Pré-inscrição"
              bg="bg-primaria-blue"
            />
          </CardBotaoHome>
          <Horario />
        </CardHome>
      </>
    );
};
export default HomeIdosoPage;