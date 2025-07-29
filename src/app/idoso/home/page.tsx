'use client';
import React from "react";
import NavBar from "@/components/idoso/navegacao/Navbar";
import { usuario_idoso } from "@/types/usuario";
import Horario from "@/components/idoso/home/HorarioDia";
import IdosoHomeMat from "@/components/idoso/home/Home";
import { CardHome } from "@/components/home";

const HomeIdosoPage = () => {
    return (
      <>
			  <NavBar usuario={usuario_idoso} />
        <CardHome>
          <IdosoHomeMat />
          <Horario />
        </CardHome>
      </>
    );
};
export default HomeIdosoPage;