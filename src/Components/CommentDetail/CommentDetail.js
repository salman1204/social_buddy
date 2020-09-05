import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const CommentDetail = (props) => {
  const { name, email, body } = props.comment;

  const useStyles = makeStyles({
    root: {
      // maxWidth: 345,
      display: 'flex',
      border: '1px solid lightgray',
      margin: '10px',
      borderRadius: '10px',
    },
    media: {
      height: 'auto',
    },
  });

  

  const classes = useStyles();



  return (
      
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <h6>Name: {name} </h6> 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           <p>{body}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
 
  );
};

export default CommentDetail;

