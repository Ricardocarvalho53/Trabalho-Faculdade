"use client"; // Habilita recursos interativos no componente, necessário para Next.js com React Server Components

import { useState } from 'react';

// Função que calcula a soma de dois números
function calcularSoma(num1, num2) {
  return num1 + num2;
}

// Componente principal que renderiza o formulário e exibe a soma
export default function Soma() {
  // Estados para armazenar os valores dos números e o resultado da soma
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [soma, setSoma] = useState(null); // Estado para armazenar o resultado da soma

  // Função executada ao submeter o formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    // Converte os valores para números
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    // Verifica se ambos os valores são números válidos
    if (!isNaN(number1) && !isNaN(number2)) {
      setSoma(calcularSoma(number1, number2)); // Calcula e atualiza o estado 'soma'
    } else {
      setSoma('Por favor, insira números válidos'); // Mensagem de erro para valores inválidos
    }
  };

  return (
    // Layout centralizado na tela usando Tailwind CSS
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Somador</h1>

        {/* Formulário para entrada dos números */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            {/* Campo de entrada para o primeiro número */}
            <label htmlFor="num1" className="block text-sm font-medium text-gray-700">Número 1:</label>
            <input
              id="num1"
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              className="mt-1 block w-full border-2 border-customBorder rounded-lg bg-white p-2"
            />
          </div>
          <div>
            {/* Campo de entrada para o segundo número */}
            <label htmlFor="num2" className="block text-sm font-medium text-gray-700">Número 2:</label>
            <input
              id="num2"
              type="number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              className="mt-1 block w-full border-2 border-customBorder rounded-lg bg-white p-2"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-customBackground text-black font-semibold rounded-lg hover:bg-opacity-80"
          >
            Calcular
          </button>
        </form>
        {/* Exibe o resultado da soma, se disponível */}
        {soma !== null && (
          <div className="mt-4 text-center">
            <h2 className="text-xl font-semibold">Soma: {soma}</h2>
          </div>
        )}
      </div>
    </div>
  );
}
