const LoginModal = () => {
    return (
        <>
            <body>
                <header className="bg-blue-500">
                    <h2>
                        <img src="@/imagens/person_filled_FILL0_wght400_GRAD0_opsz48 1.png"/>
                    </h2>
                    <figure>
                        <img 
                            src="@/imagens/menu-sanduiche.png"
                            alt="botão de Menu"
                            width={100}
                            height={100}
                        />
                    </figure>
                </header>
                <main className="bg-white w-full h-full">
                    <h1 className="text-blue-500 text-2xl flex justify-center">Cadastra-se</h1>
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
            </body>
        </>
    )
};

export default LoginModal ;