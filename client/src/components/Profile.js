import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Header from "./Header";
import Copyright from "./CopyRights";
import {
  Avatar,
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  textField: {
    width: "100%",
    margin: theme.spacing(3, 1.5, 3),
  },
  label: {
    fontSize: "16px",
    margin: theme.spacing(2, 1.5, 0),
    padding: theme.spacing(2, 0, 0),
  },
  noOfLeaves: {
    margin: theme.spacing(1, 1.5, 0),
  },
  sick: {
    margin: theme.spacing(2, 2, 0),
  },
  head1: {
    fontSize: "16px",
    margin: theme.spacing(2, 2, 0),
  },
  head2: {
    fontSize: "14px",
    margin: theme.spacing(4, 3, 0),
  },
  gridAppointment: {
    margin: theme.spacing(3, 0, 0),
  },
  label1: {
    width: "40%",
  },
  from: {
    margin: theme.spacing(2, 3, 2),
  },
  to: {
    margin: theme.spacing(2, 3, 2),
  },
  avatar: {
    width: "200px",
    height: "200px",
    margin: theme.spacing(4, 0, 2),
  },
  profilePhoto: {
    backgroundColor: "#eceff1",
    margin: theme.spacing(0, 0, 5),
    borderRadius: "10px",
    paddingBottom: "5px",
  },
  button: {
    margin: theme.spacing(2, 2, 1),
  },
}));

export default function Profile() {
  const defaultProps = {
    bgcolor: "background.paper",
    style: {
      height: "auto",
      paddingTop: "4px",
      paddingBottom: "4px",
      marginTop: "0px",
      backgroundColor: "#eceff1",
      marginLeft: "0px",
      paddingLeft: "10px",
    },
  };
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [state, setState] = React.useState({
    traveling: true,
    subsistence: false,
  });
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { traveling, subsistence } = state;
  const error = [traveling, subsistence].filter((v) => v).length !== 2;

  return (
    <React.Fragment>
      <CssBaseline />

      <Header />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <React.Fragment>
            <React.Fragment>
              <Grid className={classes.profilePhoto}>
                <Grid>
                  <div className={classes.buttons}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      Edit Profile
                    </Button>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    className={classes.avatar}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Typography variant="h6">Dr.M.H.M.Himaz</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Typography>Senior Lecturer</Typography>
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs={3} sm={4}>
                  Full Name
                </Grid>
                <Grid item xs={7} sm={8} border="1px">
                  <Box borderRadius="borderRadius" {...defaultProps} fullWidth>
                    Mohammed Hilmy Mohammed Himaz
                  </Box>
                </Grid>

                <Grid item xs={3} sm={4}>
                  Employee ID
                </Grid>
                <Grid item xs={7} sm={8} border="1px">
                  <Box borderRadius="borderRadius" {...defaultProps} fullWidth>
                    emp-102
                  </Box>
                </Grid>

                <Grid item xs={3} sm={4}>
                  Employee Type
                </Grid>
                <Grid item xs={7} sm={8} border="1px">
                  <Box borderRadius="borderRadius" {...defaultProps} fullWidth>
                    Dean
                  </Box>
                </Grid>

                <Grid item xs={3} sm={4}>
                  Faculty
                </Grid>
                <Grid item xs={7} sm={8} border="1px">
                  <Box borderRadius="borderRadius" {...defaultProps} fullWidth>
                    Faculty Of Science
                  </Box>
                </Grid>

                <Grid item xs={3} sm={4}>
                  E-Mail
                </Grid>
                <Grid item xs={7} sm={8} border="1px">
                  <Box borderRadius="borderRadius" {...defaultProps} fullWidth>
                    himazmhmd@gmail.com
                  </Box>
                </Grid>

                <Grid item xs={3} sm={4}>
                  Phone Number
                </Grid>
                <Grid item xs={7} sm={8} border="1px">
                  <Box borderRadius="borderRadius" {...defaultProps} fullWidth>
                    0777123123
                  </Box>
                </Grid>

                <Grid item xs={3} sm={4}>
                  Address
                </Grid>
                <Grid item xs={7} sm={8} border="1px">
                  <Box borderRadius="borderRadius" {...defaultProps} fullWidth>
                    Kokkuvil West , Kokkuvil
                  </Box>
                </Grid>

                <Grid item xs={3} sm={4}>
                  Gender
                </Grid>
                <Grid item xs={7} sm={8} border="1px">
                  <Box borderRadius="borderRadius" {...defaultProps} fullWidth>
                    Male
                  </Box>
                </Grid>

                <Grid item xs={3} sm={4}>
                  Date Of Birth
                </Grid>
                <Grid item xs={7} sm={8} border="1px">
                  <Box borderRadius="borderRadius" {...defaultProps} fullWidth>
                    12/12/2012
                  </Box>
                </Grid>
              </Grid>
            </React.Fragment>
            <React.Fragment></React.Fragment>
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
