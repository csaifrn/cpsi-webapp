"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import DadosPessoais from "@/components/idoso/perfil/CardPerfil"


const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <DadosPessoais />
        </div>
    );
}

export default Home; 
