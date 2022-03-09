import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@mui/styles";

import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import Cookies from "js-cookie";

//import Posts from "./Posts";
//import Cookies from "js-cookie";
import { LoginContext } from "../App";

const useStyles = makeStyles({
  wholeComments: {
  },
  commentsDisplay: {
    overflowY: 'scroll',
  },
});

const Comment = (props) => {
  const classes = useStyles();

  const { blog_id } = props;
  const isLoggedIn = useContext(LoginContext);
  const user_id = Cookies.get("userId");

  //for submitting comments
  const [comment, setComment] = useState("");
  //for creating array to display
  const [comments, setComments] = useState([]);

  const getComments = () => {
    //console.log('getComments')
    axios
    .get("/api/comment", { params: { blog_id } })
    .then((res) => {
      setComments(res.data.RESULT);
      console.log(res.data.RESULT, blog_id);
    })
    .catch((err) => console.log(err));
  };

  useEffect(() => {
    getComments();
  }, []);

  const handleClick = () => {
    console.log({ comment, user_id });
    axios
      .post("/api/comment", { comment, blog_id, user_id })
      .then((res) => {
        console.log(res);
      })
      .then(() => setComment(""))
      .then(getComments())
      .catch((err) => console.log(err));
  };
  //console.log(props);
  //check if user is logged in to display comment form
  if (isLoggedIn) {
    return (
      <Paper className={classes.wholeComments}>
        <p className={classes.commentsDisplay}> 
          {comments.map(({ comment, user_id }) => (
            <p>
              {user_id}: {comment}
            </p>
          ))}
        </p>
        <div>Comment on {blog_id}</div>
        <TextField
          label="comment"
          placeholder="Comment here"
          value={comment}
          onInput={(e) => setComment(e.target.value)}
        ></TextField>
        <Button
          variant="contained"
          type="submit"
          color="primary"
          onClick={handleClick}
        >
          Submit
        </Button>
      </Paper>
    );
  } else {
    return (
      <Paper className={classes.commentsDisplay}>
        <div>
          {comments.map(({ comment, user_id }) => (
            <p>
              {user_id}: {comment}
            </p>
          ))}
        </div>
        <div>Log in to comment on {blog_id}</div>;
      </Paper>
    );
  }
};

export default Comment;
