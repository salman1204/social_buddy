import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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

  const commentStyle= {
    display: 'flex',
    color: 'red',
  }
  return (
  
      <div>     
        <h3>
          <b>Title:</b> {post.title}
        </h3>
        <h4>
          <b>Status:</b> {post.body}
        </h4>
        <Link to={`/`}><Button variant="contained" color="primary">Back Home</Button></Link> 
        <Comment postId={postId} style={commentStyle}></Comment>
      </div>
   
  );
};

export default PostDetail;
