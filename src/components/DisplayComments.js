// import React, { useState, useEffect, useContext } from "react";
// import { makeStyles } from "@mui/styles";

// import Paper from "@mui/material/Paper";
// import Button from "@mui/material/Button";

// import axios from "axios";

// const DisplayComments = (props) => {
//   const { blog_id } = props;

//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     axios
//       .get("/api/comment", {params: {blog_id}} )
//       .then((res) => {
//         setComments(res.data.RESULT);
//         console.log(res.data.RESULT, blog_id);
//       })
//       .catch((err) => console.log(err));
//   }, [blog_id]);

//   return (
//   <div>{comments.map(({comment, user_id}) => (
//     <p>{user_id}: {comment}</p>
//   ))}</div>
//   );
// };

// export default DisplayComments;
