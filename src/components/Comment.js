import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import Cookies from "js-cookie";
import Divider from "@mui/material/Divider";

//import Posts from "./Posts";
//import Cookies from "js-cookie";
import { LoginContext } from "../App";

const useStyles = makeStyles((theme) => ({
  wholeComments: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    marginLeft: 10,
    marginTop: 10,
    marginRight: 5,
    padding: 12,
  },
  commentsDisplay: {
    overflowY: "scroll",
    borderRadius: 2,
    flex: "1 1 auto",
    backgroundColor: "white",
    height: 0,
    [theme.breakpoints.down("md")]: {
      height: 100,
    },
  },
}));

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
      <div className={classes.wholeComments}>
        <div className={classes.commentsDisplay}>
          {comments.map(({ comment, user_id }) => (
            <div>
              <p>
                {user_id}: {comment}
              </p>
              <Divider />
            </div>
          ))}
        </div>
          {/* <div>Comment on {blog_id}</div> */}
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
      <div className={classes.wholeComments}>
        <div className={classes.commentsDisplay}>
          <div>
            {comments.map(({ comment, user_id }) => (
              <div>
                <p>
                  {user_id}: {comment}
                </p>
                <Divider />
              </div>
            ))}
          </div>
        </div>
        <h4>Login to comment on blog {blog_id}</h4>
        <Divider />
      </div>
    );
  }
};

export default Comment;
