import Image from "next/image";

export default function Home() {
    const Cabecalho = () => {
    return (
      <>
        <header className="bg-indigo-500 text-white">
          <ol className="nav">
            <li><a href="#">Contato</a></li>
            <li><a href="#">Menu</a></li>
          </ol>
        </header>

        <main className="text-indigo-500">
          <h1 className="m-12 text-center">Cadastre-se</h1>
          <form className="formulario">
            <div className="m-12">
              <label htmlFor="cpf">CPF</label><br />
              <input className="text-neutral-500" type="text" id="cpf" placeholder="Digite seu CPF" required />
            </div>
            <div className="m-12">
              <label htmlFor="senha">Senha</label><br />
              <input className="text-neutral-500" type="password" id="senha" placeholder="Digite sua senha" required />
            </div>
            <button className="bg-indigo-500 text-white w-80 rounded-2xl h-12" type="submit" >CADASTRAR-SE</button>
          </form> 
        </main>

        <footer className="mt-20 mb-20 text-center">
          <p>Se já possuir uma conta <br /> faça login  <span className="text-gray-700 font-bold">aqui</span></p>
        </footer>
      </>
    );
  };

  return <Cabecalho />;
}