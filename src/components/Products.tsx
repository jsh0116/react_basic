import React, { useState } from 'react';
import useProducts from '../hooks/useProducts';
import { Product } from '../model/Product';
import { useQuery } from '@tanstack/react-query';

const Products = (): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(false);
  const { isLoading, error, data: products } = useQuery(['products', checked], async () => {
    const fetchData = async () => {
      const response = await fetch(`data/${checked ? 'sale_' : ''}products.json`);
      const data = await response.json();
      return data;
    }
    console.log('fetching...');
    return fetchData();
  });
  // const [loading, error, products] = useProducts(checked);
  const handleChange = () => {
    setChecked((prev) => !prev);
  }

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  return (
    <>
      <label>
        <input id='checkbox' type='checkbox' value={String(checked)} onChange={handleChange} />
        Show Only 🔥 Sale
      </label>
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