import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles({
  container: {
      display: 'inline-block',

  },
  paper: {
    padding: 45,
    margin: "20px auto",
},
});

const About = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
        <Grid item>
      <div className={classes.paper}>Website created by Viet Phan with Node Express, React, and SQL</div>
      <a className={classes.paper} href="https://github.com/v8phan">Visit my Github profile</a>
      </Grid>
    </Grid>
  );
};

export default About;
