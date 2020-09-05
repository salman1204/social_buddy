import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";



const Post = (props) => {
  const { title, id } = props.post;

  const history = useHistory();

  const handleClick = (postId) => {
    const url = `/post/${postId}`;
    history.push(url);
  };

  const useStyles = makeStyles({
    root: {
      display: 'flex',
      border: '1px solid lightgray',
      margin: '10px',
      borderRadius: '10px',
    },
  });
 
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <h6>Post ID: {id}</h6>
            <h6>Title: {title}</h6> 
            <Button variant="contained" color="primary" onClick={() => handleClick(id)}> Show Post </Button>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Post;

