import { useMutation, useQueryClient } from 'react-query';
import { createProduct } from '../api/productsAPI';
import { Product } from '../interfaces/product.interface';

function ProductForm() {
  const queryClient = useQueryClient();

  const addProductMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      //datos actualizados en el servidor y en la cache y muestra los datos actualizados
      queryClient.invalidateQueries('products');
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const product: Product = {
      id: parseInt(formData.get('id') as string),
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      price: parseFloat(formData.get('price') as string),
      inStock: true,
    };
    addProductMutation.mutate({
      ...product,
      inStock: true,
    });
  };

  return (
    <>
      <h1 className='mt-10 text-3xl text-center font-semibold'>Add Product</h1>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col bg-zinc-900 rounded-md p-4 w-2/5 mt-5 m-auto gap-y-2'
      >
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          name='name'
          id='name'
          className='bg-zinc-800 rounded-md p-2'
          placeholder='Write a name for the product'
          autoFocus
        />

        <label htmlFor='description'>Description</label>
        <textarea
          name='description'
          id='description'
          rows={3}
          className='bg-zinc-800 rounded-md p-2'
          placeholder='Write a description'
        />

        <label htmlFor='price'>Price</label>
        <input
          type='text'
          name='price'
          id='price'
          className='bg-zinc-800 rounded-md p-2'
          placeholder='Write a price'
        />

        <button className='bg-zinc-700 rounded-md p-2 text-white hover:bg-blue-800 transition'>
          Add Product
        </button>
      </form>
    </>
  );
}

export default ProductForm;
