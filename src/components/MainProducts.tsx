import React, { useState } from 'react';
import Products from './Products';

const MainProducts = (): JSX.Element => {
  const [showLeftProducts, setShowLeftProducts] = useState<boolean>(true);
  const [showRightProducts, setShowRightProducts] = useState<boolean>(true);

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
    </main>
  );
}

export default MainProducts;