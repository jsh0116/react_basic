import React, { useState } from 'react';
import Products from './Products';
import { useQueryClient } from '@tanstack/react-query'
const MainProducts = (): JSX.Element => {
  const [showLeftProducts, setShowLeftProducts] = useState<boolean>(true);
  const [showRightProducts, setShowRightProducts] = useState<boolean>(true);
  const client = useQueryClient();
  return (
    <main className='container'>
      <div>
        {showLeftProducts && <Products />}
        <button onClick={() => setShowLeftProducts((show) => !show)}>
          Toggle
        </button>
      </div>
      <div>
        {showRightProducts && <Products />}
        <button onClick={() => setShowRightProducts((show) => !show)}>
          Toggle
        </button>
      </div>
      <button
        onClick={() => client.invalidateQueries(['products', false])}
      >
        info update!
      </button>
    </main>
  );
}

export default MainProducts;