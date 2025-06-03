import { Poppins, ZCOOL_KuaiLe } from "next/font/google";
import "./globals.css";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import React from "react";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


const LoginModal = () => {
    return (
        <div className="h-screen">
            <header className="bg-blue-500 flex itens-center align-center justify-between py-4 px-5 ">
                <h2>
                    <img src="/perfil-transparente.svg"/>
                </h2>
                <figure>
                    <Button className="bg-transparent border-0">
                        <img
                            src="/menu-sanduiche.svg"
                            alt="botão de Menu "
                        />
                    </Button>
                </figure>
            </header>
            <main className="bg-white w-full h-full ">
                <h1 className="text-blue-500 text-xl flex justify-center text-center font-medium py-9">
                    Seja bem-vindo<br></br>Faça login ou cadastre-se 
                </h1>
                <form className="flex align-center justify-center flex-col">
                    <div className="flex justify-center items-center flex-col">
                        <div className="mb-5">
                            <Label className="text-blue-500 self-start">CPF</Label>
                            
                            <div className="flex flex-row border-b-1 border-gray-200 w-75 gap-x-6 px-2">
                                <figure className="flex justify-center items-center"><img className="" height="18px" width="18px" src="/Vector.svg"/></figure>
                                <Input
                                    type="text"
                                    placeholder="Digite seu CPF"
                                    className="w-75 h-8 text-gray-800 text-xs border-0 text-shadow-none rounded-0xl"
                                />
                            </div>
                        </div>
                        <div>
                            <Label className="text-blue-500 self-start">Senha</Label>
                            <div className="flex flex-row border-b-1 border-gray-200 w-75 gap-5.5 px-2">
                                <figure className="flex justify-center items-center"><img className="" height="23px" width="23px" src="/lock_FILL0_wght400_GRAD0_opsz48 1.svg"/></figure>
                                <Input
                                    type="password"
                                    placeholder="Digite sua senha"
                                    className="w-70 h-8 text-gray-800 text-xs flex justify-center border-0 text-shadow-none rounded-0xl"
                                />
                            </div>
                        </div>
                        <a href="" className="text-xs text-gray-400 mt-1 ml-45">Esqueceu a senha?</a>
                        <Button className="w-75 h-10 text-sm text-white bg-blue-500 rounded-4xl mt-5 ">login</Button>
                    </div>
                </form>
                <div className="flex justify-center items-center flex-col mt-10">
                    <p className="text-gray-400 text-xs text-center ">Ou faça login também com</p>
                    <Button className="mt-2 w-42 h-8 rounded-4xl border-3 bg-background-white border-gray-300 flex justify-center items-center"><img width="60px" height="60px" src="/logos_google.svg" alt="botão do google"/></Button>
                </div>
                <p className="text-gray-400 mt-15 text-center text-xs">se não possuir uma conta <br/>Cadastre-se <b className="text-black"><a href="">aqui</a></b></p>
            </main>
        </div>
    )
};

export default LoginModal ;
