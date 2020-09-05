import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentDetail from "../CommentDetail/CommentDetail";

const Comment = (props) => {
  const { postId } = useParams({});
  const [comment, setComment] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((res) => res.json())
      .then((data) => setComment(data));
  }, []);
  
  return (
    <div>
      {comment.map((comment) => (
        <CommentDetail comment={comment}></CommentDetail>
      ))}
    </div>
  );
};

export default Comment;
