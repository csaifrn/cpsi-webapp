import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import NavbarMenuIdoso from "./NavbarMenuIdoso";
import NavbarMenuCPSI from "./NavbarMenuCPSI";
import React from "react";

enum UsuarioEnum {
    cpsi,
    idoso,
    responsavel
}
const usuario = {
    tipo: UsuarioEnum.idoso,
    apelido: 'Minora',
    avatar: {url: "/idosa.jpg"},
}
const usuario0 = {
    tipo: UsuarioEnum.cpsi,
    apelido: 'CPSI',
    avatar: {url: "/perfil-transparente.svg"},
}

const NavBar = (props) => {
    // const [usuario] = useContext(UsuarioContexto);
    if (props.hidden) {
        return null;
    }

    let menu = null;
    if (usuario.tipo === UsuarioEnum.idoso) {
        menu = <NavbarMenuIdoso />
    } else if (usuario.tipo === UsuarioEnum.cpsi) {
        menu = <NavbarMenuCPSI />
    }

    

    return (
        <nav className="max-w-md mx-auto align-items-right bg-principal-blue-foreground p-2 flex justify-between">
            <div className="flex items-center gap-2">
                <Avatar className="w-13 h-13 border-2 border-white rounded-full overflow-hidden">
                    <AvatarImage src={usuario.avatar.url} alt="Foto do avatar" className="object-cover w-full h-full"/>
                    <AvatarFallback>ERRO</AvatarFallback>
                </Avatar>
                <h2 className="text-white">{usuario.apelido}</h2>
            </div>
            <div className="flex items-center gap-2">
                {menu}
            </div>
        </nav>
    )
}

export default NavBar;