import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import NavbarMenuIdoso from "./NavbarMenuIdoso";
import NavbarMenuCPSI from "./NavbarMenuCPSI";
import React from "react";
import { UsuarioType, UsuarioEnum } from "@/types/usuario";



interface NavBarProps {
    usuario: UsuarioType;
    hidden?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ usuario, hidden }) => {
    // const [usuario] = useContext(UsuarioContexto);
    if (hidden) {
        return null;
    }

    let menu = null;
    if (usuario.tipo === UsuarioEnum.idoso) {
        menu = <NavbarMenuIdoso />
    } else if (usuario.tipo === UsuarioEnum.cpsi) {
        menu = <NavbarMenuCPSI />
    }

    

    return (
        <nav className="w-full mx-auto align-items-right bg-principal-blue-foreground p-2 flex justify-between">
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