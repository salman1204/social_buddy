import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";


const Post = (props) => {
  const { title, id } = props.post;

  const history = useHistory();

  const handleClick = (postId) => {
    const url = `/post/${postId}`;
    history.push(url);
  };

  const postStyle = {
    border: "1px solid purple",
    margin: "20px",
    padding: "20px",
    borderRadius: "20px",
  };
  return (
    <div style={postStyle}>
      <h4>Post Title: {title}</h4>
      <Button variant="contained" color="primary" onClick={() => handleClick(id)}> Show Post </Button>
    </div>
  );
};

export default Post;
