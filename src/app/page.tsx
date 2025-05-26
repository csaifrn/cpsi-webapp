import React from "react";

const DadosPessoais = () => {
  return (
    <section className="min-h-screen bg-white">
      <div className="bg-indigo-500 text-white p-4 flex justify-between items-center">

        <span className="bg-white/30 w-10 h-10 flex items-center justify-center rounded-lg">
            <a>
                <img src="/casa.png" alt="casa" className="w-5 h-5" />
            </a>
        </span>
        <span className="bg-white/30 w-10 h-10 flex items-center justify-center rounded-lg">
            <img src="/menu.png" alt="casa" className="w-5 h-5" />
        </span>
      </div>

      <div className="p-4 max-w-md mx-auto text-gray-900 font-courier-prime">
        <div className="flex items-center text-lg font-semibold mb-4">
          <button aria-label="Voltar" className="mr-2"> <img src="/seta.png" alt="" /></button>
          <span>Dados Pessoais</span>
        </div>

        <div className="border border-purple-500 rounded-lg overflow-hidden shadow-md">
          <div className="bg-indigo-500 text-white p-8 flex items-center gap-4">
            <img src="/idosa.jpg" alt="Foto do idoso"className="w-16 h-16 rounded-full border-2 border-white"/>
            <span className="font-bold text-lg font-courier-prime"> Adeilda Conceição Gomes da Silva</span>
          </div>

          <div className="p-7 space-y-1 text-lg text-gray-900 font-courier-prime">
            <p>CPF: 123.456.789-00</p>
            <p>Idade: 61</p>
            <p>Data de nascimento: 06/12/1960</p>
            <p>Tel. Contato: (84) 9 9999-9999</p>
          </div>

          <div className="border-t border-purple-500 px-7 py-6 text-lg text-gray-900">
            <p className="font-bold text-gray-900 mb-1 font-courier-prime">Contato de Emergência</p>
            <p>Nome: Kamila</p>
            <p>Vínculo: Filha</p>
            <p>Tel. Emergência: (84) 8 8888-8888</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Atividades = () => {
  return (
    <section className=" text-gray-900 font-courier-prime h-screen flex flex-col max-w-md items-center">
        <h2 className=" font-bold text-lg">Atividades</h2>
        <nav className="justify-items-start bg-green-500"> 
            <button>Extensão</button>
            <button>Ensino</button>
        </nav>
        <div >
            <table className="uppercase w-20 border border-indigo-500 rounded-md">
              <tr className="border border-indigo-500 divide-x divide-indigo-500">
                  <td>Atividade</td>
                  <td>Turma</td>
                  <td>Professor</td>
              </tr>
              <tr className="border border-indigo-500 divide-x divide-indigo-500">
                  <td>Dança</td>
                  <td>Terça-feira<br></br>
                  7:00-7:45<br></br>
                  Sala 1
                  </td>
                  <td>Null</td>
              </tr>
              <tr className="border border-indigo-500 divide-x divide-indigo-500">
                <td>Coral</td>
                <td>TERÇA-FEIRA<br></br>
                7:45-8:00<br></br>
                SALA 3</td>
                <td>Null</td>
              </tr>
              <tr className="border border-indigo-500 divide-x divide-indigo-500">
                <td>Musculação</td>
                <td>QUARTA-FEIRA<br></br>
                7:00-7:45<br></br>
                SALA 1</td>
                <td>Null</td>
              </tr>
            </table>
        </div>
    </section>
  );
}

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <DadosPessoais />
            <Atividades />
        </div>
    );
}

export default Home; 
