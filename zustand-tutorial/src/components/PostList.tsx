import { Posts } from '../interfaces/Post.interfaces';
import { useStore } from '../store/counterStore';
import PostCard from './PostCard';

function PostList({ posts }: Posts) {
  const { currentPage, itemsPerPage } = useStore((state) => ({
    currentPage: state.currentPage,
    itemsPerPage: state.itemsPerPage,
  }));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const postsToShow = posts.slice(startIndex, endIndex);

  return (
    <>
      <div className='text-4xl text-center font-bold mb-10 mt-5'>Posts</div>
      <div className='grid grid-cols-3 m-auto gap-x-4 gap-y-2'>
        {postsToShow.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default PostList;
