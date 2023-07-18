import { QueryFunctionContext, useQuery } from '@tanstack/react-query';
import { api } from '../api/github';
import { Repository } from './types';

//Esta es una función que hace una llamada a la API para obtener los repositorios de un usuario
async function fetchRepos(ctx: QueryFunctionContext) {
  const [_, githubUser] = ctx.queryKey;
  const { data } = await api.get<Repository[]>(`/users/${githubUser}/repos`);
  return data;
}

//Esto es un hook que se puede usar en cualquier componente
export function useFetchRepositories(githubUser: string) {
  return useQuery(['repos', githubUser], fetchRepos);
}
