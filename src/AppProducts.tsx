import React, { useState } from 'react';
import Products from './components/Products';

const AppProducts = (): JSX.Element => {
  const [showProducts, setShowProducts] = useState<boolean>(true);
  return (
    <div>
      {showProducts && <Products />}
      <button onClick={() => setShowProducts((show) => !show)}>Toggle</button>
    </div>
  );
};

export default AppProducts;