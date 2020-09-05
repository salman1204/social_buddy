import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
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

  const useStyles = makeStyles({
    root: {
      border: "1px solid lightgray",
      margin: "10px",
      borderRadius: "10px",
    },
  });

  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <h6>Title: {post.title}</h6>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <p>{post.body}</p>
              <Link to={`/`}>
                <Button variant="contained" color="primary">
                  Back Home
                </Button>
              </Link>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <h1>Comments</h1>
      <Comment postId={postId}></Comment>
    </div>
  );
};

export default PostDetail;
