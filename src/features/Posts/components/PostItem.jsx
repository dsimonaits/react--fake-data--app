import React from "react";
import MyButton from "../../../components/UI/button/MyButton";
import { useNavigate, useLocation } from "react-router";

const PostItem = (props) => {
  const newPath = useNavigate();
  const location = useLocation();
  return (
    <div>
      <div
        onClick={() => newPath(`${location.pathname}/${props.number}`)}
        style={{ cursor: "pointer" }}
      >
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <p>{props.post.body}</p>
      </div>
      <div>
        <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
