import { create } from 'zustand';

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface CounterStore {
  count: number;
  title: string;
  posts: Post[];
  currentPage: number;
  itemsPerPage: number;
  increment: (value: number) => void;
  decrement: (value: number) => void;
  getPosts: () => Promise<void>;
  clearStore: () => void;
  multiply: (value: number) => void;
  nextPage: () => void;
  prevPage: () => void;
}

export const useStore = create<CounterStore>((set, get) => ({
  count: 10,
  title: 'Counter',
  posts: [],
  currentPage: 1,
  itemsPerPage: 10,
  increment: (value: number) =>
    set((state) => ({
      count: state.count + value,
    })),

  decrement: (value: number) =>
    set((state) => ({
      count: state.count - value,
    })),

  getPosts: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    console.log(posts);
    set((state) => ({
      ...state,
      posts,
    }));
  },

  clearStore: () => {
    set({}, true);
  },

  multiply: (value: number) => {
    const { count } = get();
    set({ count: count * value });
  },

  nextPage: () => set((state) => ({ currentPage: state.currentPage + 1 })),

  prevPage: () => set((state) => ({ currentPage: state.currentPage - 1 })),
}));
