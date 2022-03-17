import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";

import Blogbox from "./Blogbox";
import Posts from "./Posts";
import Comment from "./Comment";

const useStyles = makeStyles({
  paper: {
    padding: 20,
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      {Posts.map((post) => {
        return (
          <Container>
            <Paper className={classes.paper}>
          <Grid container direction='row'>
            <Grid item xs={12} sm={6}>
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
          </Paper>
          </Container>
        );
      })}
    </div>
  );
};

export default Home;
