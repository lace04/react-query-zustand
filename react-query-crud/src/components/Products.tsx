import { useQuery } from 'react-query';
import { getProducts } from '../api/productsAPI';
import { Product } from '../interfaces/product.interface';
import { ProductList } from './ProductList';

function Products() {
  const {
    isLoading,
    isError,
    data: products,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    select: (products: Product[]) =>
      products.sort((a: Product, b: Product) => b.id - a.id),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Error: {(error as Error).message}</div>;
  }

  return (
    <div className='w-2/3 m-auto'>
      <ProductList products={products ?? []} />
    </div>
  );
}

export default Products;
