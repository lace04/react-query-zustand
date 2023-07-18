import { useEffect } from 'react';
import { useStore } from './store/counterStore';
import { shallow } from 'zustand/shallow';
import PostList from './components/PostList';
import Pagination from './components/Pagination';

function App() {
  // const count = useStore((state) => state.count);

  const { count, title, posts } = useStore(
    (state) => ({
      count: state.count,
      title: state.title,
      posts: state.posts,
    }),
    shallow
  );

  const { increment, getPosts, clearStore, multiply } = useStore();

  const decrement = useStore((state) => state.decrement);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <h1 className='text-2xl'>{title}</h1>
      <div className='flex gap-x-4'>
        <button
          onClick={() => {
            decrement(10);
          }}
        >
          -
        </button>
        <h1>Counter: {count}</h1>
        <button
          onClick={() => {
            increment(10);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            multiply(3);
          }}
        >
          *
        </button>
      </div>
      <hr />
      <div>
        <PostList posts={posts ?? []} />
      </div>{' '}
      <hr />
      <Pagination />
      <hr />
      <button
        onClick={() => {
          clearStore();
        }}
      >
        Clear
      </button>
    </>
  );
}

export default App;
