import React, { useEffect, useState } from 'react';
import { Product } from '../model/Product';

const Products = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [checked, setChecked] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  const handleChange = () => {
    setChecked((prev) => !prev);
  }

  /**
   * fetch로 받아온 데이터로 state update할 때 re-render
   * re-render할때마다 fetch 안하도록 useEffect로 컴포넌트 마운트 시 한번만 수행하도록 수정
   */
  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((e) => setError('error!'))
      .finally(() => setLoading(false))


    return () => {
      console.log('clear');
    }
  }, [checked]);

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