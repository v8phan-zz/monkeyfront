import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cookies from "js-cookie";

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

  return (
    <LoginContext.Provider value={isLoggedIn}>
      <BrowserRouter>
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
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
