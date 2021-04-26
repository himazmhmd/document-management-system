import React from "react";
import Paper from "../../node_modules/@material-ui/core/Paper";
import { makeStyles } from "../../node_modules/@material-ui/core/styles";
import Grid from "../../node_modules/@material-ui/core/Grid";
import Avatar from "../../node_modules/@material-ui/core/Avatar";
import Typography from "../../node_modules/@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 800,
    margin: `${theme.spacing(4)}px auto`,
    padding: theme.spacing(5),
    //backgroundcolor: "gray"
  },
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

export default function Notification() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography noWrap>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
