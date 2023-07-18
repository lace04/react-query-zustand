import { useMutation, useQueryClient } from 'react-query';
import { deleteProduct, updateProduct } from '../api/productsAPI';
import { Product } from '../interfaces/product.interface';
import { ProductCard } from './ProductCard';

interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  const queryClient = useQueryClient();

  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });

  const updateProductMutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });

  return (
    <>
      <div className='text-4xl text-center font-bold mb-10 mt-5'>Products List</div>
      <div className='grid grid-cols-3 m-auto gap-x-4 gap-y-2'>
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={(id) => deleteProductMutation.mutate(id)}
            onUpdate={(product) => updateProductMutation.mutate(product)}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
