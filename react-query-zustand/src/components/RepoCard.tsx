import { Repository } from '../hooks/types';
import { useFavoritesStore } from '../store/RepoStore';

import { AiFillLike } from 'react-icons/ai';
import { AiFillDislike } from 'react-icons/ai';

type RepoCardProps = {
  repository: Repository;
  isFavorite: boolean;
};

function RepoCard({ repository, isFavorite }: RepoCardProps) {
  const addFavoriteRepo = useFavoritesStore((state) => state.addFavoriteRepo);
  const removeFavoriteRepo = useFavoritesStore(
    (state) => state.removeFavoriteRepo
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavoriteRepo(repository.id);
    } else {
      addFavoriteRepo(repository.id);
    }
  };

  //mostrar en consola el arreglo de favoritos
  // console.log(useFavoritesStore.getState().favoriteReposIds);

  return (
    <div className='bg-zinc-800 hover:bg-zinc-700 p-4 rounded-md flex justify-between'>
      <h2 className='text-lg truncate'>{repository.name.toUpperCase()}</h2>
      <button
        className={`${
          isFavorite
            ? 'bg-blue-500 hover:bg-blue-800 transition duration-700'
            : 'bg-zinc-500 hover:bg-zinc-300 hover:text-black transition duration-700'
        } text-white font-bold py-1 px-2 rounded`}
        onClick={toggleFavorite}
      >
        {isFavorite ? <AiFillLike /> : <AiFillDislike />}
      </button>
    </div>
  );
}

export default RepoCard;
