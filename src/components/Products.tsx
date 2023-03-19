import React, { useState } from 'react';
import useProducts from '../hooks/useProducts';
import { Product } from '../model/Product';

const Products = () => {
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts(checked);
  const handleChange = () => {
    setChecked((prev) => !prev);
  }

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  return (
    <>
      <input id='checkbox' type='checkbox' value={String(checked)} onChange={handleChange} />
      <ul>
        {products.map((product: Product) => {
          return (
            <li key={product.id}>
              <article>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </article>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Products;