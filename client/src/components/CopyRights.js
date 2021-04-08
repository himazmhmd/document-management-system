import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="http://www.jfn.ac.lk/">
        University Of Jaffna
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
