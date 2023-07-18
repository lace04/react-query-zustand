import { Post } from '../store/counterStore';

function PostCard({ post }: { post: Post }) {
  return (
    <div key={post.id} className='bg-zinc-800 p-4 rounded-md shadow-md hover:bg-zinc-700'>
      <h1 className='text-2xl font-bold text-center'>{post.title}</h1>
      <p className='text-justify mt-4'>{post.body}</p>
    </div>
  );
}

export default PostCard;
