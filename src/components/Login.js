import { React, useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import axios from "axios";
import Cookies from "js-cookie";

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

const Login = (props) => {
  //console.log(props);
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let userId = "";

  const handleClick = () => {
    console.log({ email, password });
    axios
      .post("/api/login", { email, password })
      .then((res) => {
        //console.log(res.data.user_id);
        userId = res.data.user_id;
        console.log("user id:", (typeof userId), userId);
        props.setIsLoggedIn(true);
        //props.setuser_id(userId);
        Cookies.set("userId", userId, { expires: 1 });
      })
      .catch((err) => console.log(err));
  };
  const handleSignUpClick = () => {
    console.log({ email, password });
    axios
      .post("/api/signup", { email, password })
      .then((res) => props.setIsLoggedIn(true))
      .catch((err) => console.log(err));
  };
  if (props.isLoggedIn) {
    return (
      <Grid>
        <Paper elevation={10} className={classes.paper}>
          <Grid align="center">
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <h2>{email}</h2>
            <Button
              variant="contained"
              type="submit"
              color="secondary"
              className={classes.signupbutton}
              onClick={() => {
                props.setIsLoggedIn(false);
                Cookies.remove("userId");
              }}
            >
              SIGN OUT
            </Button>
          </Grid>
        </Paper>
      </Grid>
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
          {/* <h1>
            email: {email}, password: {password}
          </h1> */}
        </Paper>
      </Grid>
    );
  }
};

export default Login;
