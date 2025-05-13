import { Poppins } from "next/font/google";
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
                    <div className="flex justify-center flex-col gap-1.5">
                        <span className="text-blue-500">Cpf</span>  
                        <div className="flex flex-row border-b-3 border-gray-200 w-70 gap-x-6">
                            <figure><img src="@/app/Vector.png"/></figure>
                            <input
                                type="text"
                                placeholder="Digite seu cpf"
                                className="w-70 h-8 text-gray-800"
                            />
                        </div>
                        <span className="text-blue-500">Senha</span>
                        <div className="flex flex-row border-b-3 border-gray-200 w-70 gap-x-6">
                            <figure><img src="@/app/lock_FILL0_wght400_GRAD0_opsz48 1.png"/></figure>
                            <input
                                type="password"
                                placeholder="Digite sua senha"
                                className="w-70 h-8 text-gray-800"
                            />
                        </div>

                        <button className="w-75 h-10 text-white bg-blue-500 rounded-4xl">Cadastra-se</button>
                    </div>
                </form>
                <p className="text-gray-400">se já possuir uma conta faça login <b className="text-black">aqui</b></p>
            </main>
        </div>
    )
};

export default LoginModal ;