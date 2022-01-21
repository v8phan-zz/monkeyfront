import { React, useState } from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";

const useStyles = makeStyles({
  paper: {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  },
  avatar: {
    backgroundColor: "green",
  },
  button: {
    margin: "8px 0px",
  },
  signupbutton: {
    size: "small",
    margin: "8px 0px",
  },
  textfield: {
    margin: "6px 0px",
  },
});

const Login = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleClick = () => {
    console.log({ email, password });
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => 
        res.text()
        //setIsLoggedIn(true);
      ) 
      // convert to plain text
      .then((text) => console.log(text)) // then log it out
      // .then((res) => res.json())
      // .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const handleSignUpClick = () => {
    console.log({ email, password });
    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        setIsLoggedIn(true);
        res.json();
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  if (isLoggedIn) {
    return (
      <Button
        variant="contained"
        type="submit"
        color="secondary"
        className={classes.signupbutton}
        onClick={() => setIsLoggedIn(false)}
      >
        SIGN OUT
      </Button>
    );
  } else {
    return (
      <Grid>
        <Paper elevation={10} className={classes.paper}>
          <Grid align="center">
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <h2>SIGN IN</h2>
          </Grid>
          <TextField
            label="email"
            placeholder="Enter email"
            className={classes.textfield}
            fullWidth
            required
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          ></TextField>
          <TextField
            label="password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          ></TextField>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            className={classes.button}
            fullWidth
            onClick={handleClick}
          >
            SIGN IN
          </Button>
          <Typography>
            Need to create an account?
            <Button
              variant="contained"
              type="submit"
              color="secondary"
              className={classes.signupbutton}
              onClick={handleSignUpClick}
            >
              SIGN UP
            </Button>
          </Typography>
          <h1>
            email: {email}, password: {password}
          </h1>
        </Paper>
      </Grid>
    );
  }
  // return (
  //   <Button
  //     variant="contained"
  //     type="submit"
  //     color="secondary"
  //     className={classes.signupbutton}
  //     onClick={setIsLoggedIn(false)}
  //   >
  //     SIGN OUT
  //   </Button>
  // );
};

export default Login;
