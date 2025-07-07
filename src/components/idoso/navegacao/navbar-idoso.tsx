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

const NavBarIdoso = () => {
    return (
        <nav className="max-w-md mx-auto align-items-right bg-amber-600 p-2 display-flex">
            <Avatar className="w-13 h-13 border-2 border-white rounded-full overflow-hidden">
                <AvatarImage src="/idosa.jpg" alt="Foto do idoso" className="object-cover w-full h-full"/>
                <AvatarFallback>ERRO</AvatarFallback>
            </Avatar>
            <h2>Nome do Idoso</h2>
        </nav>
    )
}
const NavBarIdosoV2 = () => {
    return (
        <nav className="max-w-md mx-auto align-items-right bg-amber-600">
            <NavigationMenu >
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    )
}
export default NavBarIdoso;