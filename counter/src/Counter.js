import React from 'react';
import { useState } from 'react';

export default function Counter() {
   // Define o estado 'count' com valor inicial 0
  const [count, setCount] = useState(0);

  return (
    <div className='count'>
      <h2>{count}</h2>

      {/* Botão para incrementar o valor de 'count' em 1 */}
      <button className='button' onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
      {/* Botão para decrementar o valor de 'count' em 1 */}
      <button className='button' onClick={() => setCount(count - 1)}>
        Decrementar
      </button>
    </div>
  );
}

