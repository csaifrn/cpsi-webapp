import React from "react";

const DadosPessoais = () => {
  return (
    <section className="min-h-screen bg-white">
      <div className="bg-indigo-500 text-white p-4 flex justify-between items-center">

        <span className="bg-white/30 w-10 h-10 flex items-center justify-center rounded-lg">
            <img src="/casa.png" alt="casa" className="w-5 h-5" />
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

export default DadosPessoais;
