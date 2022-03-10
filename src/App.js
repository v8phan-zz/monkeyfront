import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cookies from "js-cookie";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

export const LoginContext = React.createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  //const [user_id, setuser_id] = useState("");
  useEffect(() => {
    if (Cookies.get("userId")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const theme = createTheme({});

  console.log("Theme", theme);

  return (
    <LoginContext.Provider value={isLoggedIn}>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route
            path="/login"
            element={
              <Login
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                //setuser_id={setuser_id}
              />
            }
          />
            <Route path="/home" element={<Home />} />

          <Route path="/" element={<Home />} />
        </Routes>
        </ThemeProvider>

      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
