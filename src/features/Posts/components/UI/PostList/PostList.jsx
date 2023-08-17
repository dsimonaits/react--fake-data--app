import React from "react";
import PostItem from "../../PostItem";
import cl from "./PosList.module.css";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "10px" }}>
        There is no posts yet!
      </h2>
    );
  }

  return (
    <div className={cl.postList__wrapper}>
      <h2 className={cl.postList__title}>{title}</h2>
      <ul className={cl.postList__list}>
        {posts.map((post) => (
          <PostItem
            key={post.id}
            remove={remove}
            number={post.id}
            post={post}
          />
        ))}
      </ul>
    </div>
  );
};

export default PostList;
