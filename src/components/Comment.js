import React, { useState, useEffect, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

//import Posts from "./Posts";
//import Cookies from "js-cookie";
import { LoginContext } from "../App";

const Comment = (props) => {
  const { blog_id } = props;
  const isLoggedIn = useContext(LoginContext);
  const user_id = useContext(LoginContext);
  const [comment, setComment] = useState("");
  const handleClick = () => {
    console.log( { comment, user_id });
    axios.post('/api/comment', {comment, blog_id, user_id })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => console.log(err));
  }
  console.log(props);
  //check if user is logged in to display comment form
  if (isLoggedIn) {
    return (
      <div>
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
        >Submit</Button>
      </div>
    );
  } else {
    return <div>Log in to comment on {blog_id}</div>;
  }
};

export default Comment;
