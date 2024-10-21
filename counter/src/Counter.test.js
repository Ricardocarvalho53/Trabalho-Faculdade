import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

// Agrupando os testes para o componente Counter
describe('Componente Counter', () => {
  test('deve aumentar o contador ao clicar no botão de incrementar', () => {
    // Renderiza o componente Counter
    render(<Counter />);

    // Verifica se o contador inicia em 0
    const counterValue = screen.getByText('0');
    expect(counterValue).toBeInTheDocument();

    // Simula o clique no botão de incrementar
    const incrementButton = screen.getByRole('button', { name: /incrementar/i });
    fireEvent.click(incrementButton);

    // Confirma que o contador foi incrementado para 1
    const updatedCounterValue = screen.getByText('1');
    expect(updatedCounterValue).toBeInTheDocument();
  });

  test('deve diminuir o contador ao clicar no botão de decrementar', () => {
    render(<Counter />);

    // Verifica se o contador inicia em 0
    const counterValue = screen.getByText('0');
    expect(counterValue).toBeInTheDocument();

    // Simula o clique no botão de decrementar
    const decrementButton = screen.getByRole('button', { name: /decrementar/i });
    fireEvent.click(decrementButton);

    // Confirma que o contador foi decrementado para -1
    const updatedCounterValue = screen.getByText('-1');
    expect(updatedCounterValue).toBeInTheDocument();
  });
});
