import RepoCard from './RepoCard';
import { Repository } from '../hooks/types';
import { useFetchRepositories } from '../hooks/useRepos';
import { useFavoritesStore } from '../store/RepoStore';

function RepoList() {
  //
  const { favoriteReposIds } = useFavoritesStore();

  const { data, isError, error, isLoading } = useFetchRepositories('lace04');

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {(error as Error)?.message}</div>;
  }
  return (
    <>
      <h1 className='text-3xl text-center font-bold m-4'>Repositories</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
        {data?.map((repository: Repository) => (
          <RepoCard
            repository={repository}
            key={repository.id}
            isFavorite={favoriteReposIds.includes(repository.id)}
          />
        ))}
      </div>
    </>
  );
}

export default RepoList;
