import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

import Blogbox from "./Blogbox";
import Posts from "./Posts";
import Comment from "./Comment";

const useStyles = makeStyles({
  container: {
    backgroundColor: "white",
  },
  blogbox: {
    paddingLeft: 10,
  }
});

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {Posts.map((post) => {
        return (
          <Grid container>
            <Grid item xs={12} sm={6} className={classes.blogbox}>
              <Blogbox
                name={post.name}
                text={post.text}
                image={post.image}
                alt={post.alt}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Comment blog_id={post.id} />
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
};

export default Home;
