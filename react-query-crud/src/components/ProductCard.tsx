import { Product } from '../interfaces/product.interface';

interface ProductCardProps {
  product: Product;
  onDelete: (id: number) => void;
  onUpdate: (product: Product) => void;
}

export const ProductCard = ({
  product,
  onDelete,
  onUpdate,
}: ProductCardProps) => {
  return (
    <div className='bg-zinc-700 rounded-md p-2' key={product.id}>
      <h2 className='text-xl font-semibold text-center'>{product.name}</h2>
      <p className='text-lg'>{product.description}</p>
      <p className='text-green-200'>$ {product.price}</p>
      <div className='flex justify-between'>
        <button
          className='bg-red-500 rounded-md p-1 text-white'
          onClick={() => onDelete(product.id)}
        >
          Delete
        </button>
        <div className=''>
          <input
            type='checkbox'
            checked={product.inStock}
            id={product.id.toString()}
            onChange={(e) =>
              onUpdate({
                ...product,
                inStock: e.target.checked,
              })
            }
          />
          <label className='ml-2' htmlFor={product.id.toString()}>
            inStock
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
