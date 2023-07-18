import { useStore } from '../store/counterStore';

function Pagination() {
  const { currentPage, itemsPerPage, posts, nextPage, prevPage } = useStore(
    (state) => ({
      currentPage: state.currentPage,
      itemsPerPage: state.itemsPerPage,
      posts: state.posts,
      nextPage: state.nextPage,
      prevPage: state.prevPage,
    })
  );

  const totalPages = Math.ceil(posts.length / itemsPerPage);

  return (
    <div className='flex justify-around'>
      <button onClick={prevPage} disabled={currentPage === 1}>
       Previous
      </button>
      <span>
         Página {currentPage} de {totalPages} 
      </span>
      <button onClick={nextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
