import { useEffect, useState } from "react";
import { Product } from "../model/Product";

type Hook = (salesOnly: boolean) => [
  loading: boolean,
  error: string | undefined,
  products: Product[]
];

const useProducts: Hook = (salesOnly: boolean) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [products, setProducts] = useState<Product[]>([]);

  /**
   * fetch로 받아온 데이터로 state update할 때 re-render
   * re-render할때마다 fetch 안하도록 useEffect로 컴포넌트 마운트 시 한번만 수행하도록 수정
   */
  useEffect(() => {
    setLoading(true);
    setError(undefined);
    const fetchSalesData = async () => {
      try {
        const response = await fetch(`data/${salesOnly ? 'sale_' : ''}products.json`);
        const data = await response.json();
        setProducts(data);
      } catch (e) {
        console.error(e);
        setError('error!');
      } finally {
        setLoading(false);
      }
    }
    fetchSalesData();
    return () => {
      console.log('clear');
    }
  }, [salesOnly]);

  return [loading, error, products];
};

export default useProducts;