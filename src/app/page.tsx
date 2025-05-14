    import { Poppins, ZCOOL_KuaiLe } from "next/font/google";
import "./globals.css";
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
                    <img 
                        src="/menu-sanduiche.svg"
                        alt="botão de Menu "
                    />
                </figure>
            </header>
            <main className="bg-white w-full h-full ">
                <h1 className="text-blue-500 text-xl flex justify-center text-center font-medium py-9">
                    Seja bem-vindo<br></br>Faça login ou cadastre-se 
                </h1>
                <form className="flex align-center justify-center flex-col">
                    <div className="flex justify-center items-center flex-col">
                        <div className="mb-5">
                            <span className="text-blue-500 self-start">CPF</span>  
                            <div className="flex flex-row border-b-1 border-gray-200 w-75 gap-x-6 px-2">
                                <figure className="flex justify-center items-center"><img className="" height="18px" width="18px" src="/Vector.svg"/></figure>
                                <input
                                    type="text"
                                    placeholder="Digite seu CPF"
                                    className="w-70 h-8 text-gray-800 text-xs"
                                />
                            </div>
                        </div>
                        <div>
                            <span className="text-blue-500 self-start">Senha</span>
                            <div className="flex flex-row border-b-1 border-gray-200 w-75 gap-5.5 px-2">
                                <figure className="flex justify-center items-center"><img className="" height="23px" width="23px" src="/lock_FILL0_wght400_GRAD0_opsz48 1.svg"/></figure>
                                <input
                                    type="password"
                                    placeholder="Digite sua senha"
                                    className="w-70 h-8 text-gray-800 text-xs flex justify-center"
                                />
                            </div>
                        </div>
                        <a href="" className="text-xs text-gray-400 mt-1 self-end mr-6">Esqueceu a senha?</a>
                        <button className="w-75 h-10 text-sm text-white bg-blue-500 rounded-4xl mt-5 ">Login</button>
                    </div>
                </form>
                <div className="flex justify-center items-center flex-col mt-10">
                    <p className="text-gray-400 text-xs text-center ">Ou faça login também com</p>
                    <button className="mt-2 w-42 h-8 rounded-4xl border-3 border-gray-300 flex justify-center items-center"><img width="60px" height="60px" src="/logos_google.svg" alt="botão do google"/></button>    
                </div>
                <p className="text-gray-400 mt-15 text-center text-xs">se não possuir uma conta <br/>Cadastre-se <b className="text-black"><a href="">aqui</a></b></p>
            </main>
        </div>
    )
};

export default LoginModal ;

