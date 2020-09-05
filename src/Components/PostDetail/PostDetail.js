import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Comment from "../Comment/Comment";

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div>
      <div>
        <h1>Detail of Posts {postId}</h1>
        <Button variant="contained" color="primary">Back Home</Button>
        <p>
          <b>Status:</b> {post.body}
        </p>
        <Comment postId={postId}></Comment>
      </div>
    </div>
  );
};

export default PostDetail;
