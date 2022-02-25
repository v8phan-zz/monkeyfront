import React, { useState, useEffect, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import Cookies from "js-cookie";

//import Posts from "./Posts";
//import Cookies from "js-cookie";
import { LoginContext } from "../App";

const Comment = (props) => {
  const { blog_id } = props;
  const isLoggedIn = useContext(LoginContext);
  const user_id = Cookies.get("userId");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const getComments = () => {
    axios
    .get("/api/comment", { params: { blog_id } })
    .then((res) => {
      setComments(res.data.RESULT);
      console.log(res.data.RESULT, blog_id);
    })
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    getComments();
  },);

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
      <div>
        <div>
          {comments.map(({ comment, user_id }) => (
            <p>
              {user_id}: {comment}
            </p>
          ))}
        </div>
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
      </div>
    );
  } else {
    return (
      <div>
        <div>
          {comments.map(({ comment, user_id }) => (
            <p>
              {user_id}: {comment}
            </p>
          ))}
        </div>
        <div>Log in to comment on {blog_id}</div>;
      </div>
    );
  }
};

export default Comment;
