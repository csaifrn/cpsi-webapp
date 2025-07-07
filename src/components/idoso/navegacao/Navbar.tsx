import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import NavbarMenuIdoso from "./NavbarMenuIdoso";
import NavbarMenuCPSI from "./NavbarMenuCPSI";

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
        <nav className="max-w-md mx-auto align-items-right bg-amber-600 p-2 display-flex">
            <div>
                <Avatar className="w-13 h-13 border-2 border-white rounded-full overflow-hidden">
                    <AvatarImage src={usuario.avatar.url} alt="Foto do idoso" className="object-cover w-full h-full"/>
                    <AvatarFallback>ERRO</AvatarFallback>
                </Avatar>
                <h2>{usuario.apelido}</h2>
            </div>
            <div>
                {menu}
            </div>
        </nav>
    )
}

export default NavBar;