import React from "react";
import { makeStyles } from "@mui/styles";

import Paper from "@mui/material/Paper";

const useStyles = makeStyles({
  image: {
    maxHeight: 300,
    maxWidth: 300,
  },
  paper: {
    padding: 20,
  },
});

const Blogbox = (props) => {
  const classes = useStyles();
  const { name, text, image, alt } = props;
  return (
    //console.log(text),
    <div>
      <Paper className={classes.paper}>
        <h1>{name}</h1>
        {image && <img src={image} alt={alt} className={classes.image} />}
        <h2>{text}</h2>
      </Paper>
    </div>
  );
};

export default Blogbox;
