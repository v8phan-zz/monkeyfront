import React, { useState, useEffect, useContext } from "react";
import Button from "@mui/material/Button";

import axios from "axios";

const DisplayComments = () => {

  const [comments, setComments] = useState([])

  useEffect(() => {
    axios
      .get("/api/comment")
      .then((res) => {
        console.log("DisplayComments14: ", res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return <p>View Comments</p>;
};

export default DisplayComments;
