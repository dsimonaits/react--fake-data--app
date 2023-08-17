import React, { useState, useEffect } from "react";
import "../../styles/App.css";
import PostList from "./components/UI/PostList/PostList";
import PostForm from "../Posts/components/PostForm";
import PostFilter from "./components/UI/PostFilter/PostFilter";
import MyModal from "../Posts/components/UI/MyModal/MyModal";
import MyButton from "../Posts/components/UI/button/MyButton";
import { usePosts } from "../Posts/hooks/usePost";
import PostsService from "../Posts/API/PostsService";
import Loader from "../Posts/components/UI/loader/loader";
import useFetching from "../Posts/hooks/useFetching";
import { getPageCount } from "../Posts/utils/pages";
import Pagination from "../Posts/components/UI/pagination/Pagination";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isLoading, postsError] = useFetching(async () => {
    const response = await PostsService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const sortedAndOnSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div>
      <MyButton onClick={() => setModal(true)}>Create Post</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <PostFilter filter={filter} setFilter={setFilter} />
      {postsError && <h3>An error has occurred: ${postsError}</h3>}
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndOnSearchedPosts}
          title="Posts list"
        />
      )}
      <Pagination totalPages={totalPages} page={page} changePage={setPage} />
    </div>
  );
}

export default Posts;
