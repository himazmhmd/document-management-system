import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Header from "./Header";
import Copyright from "./CopyRights";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import { Avatar, Box, Grid, IconButton, TextField } from "@material-ui/core";
import axios from "axios";

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

    margin: theme.spacing(2, 2, 1),
    float: "left",
    width: "50px",
    height: "auto",
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
}));

export default function EditProfile(props) {
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
  const { match } = props;
  const [values, setValues] = useState({
    faculty: "",
    type: "",
    email: "",
    dateOfBirth: new Date(),
    address: "",
    gender: "",
    phoneNo: "",
  });
  useEffect(() => {
    axios
      .get(`/user/${match.params.id}`)
      .then(({ data }) => setValues(data.user));
  }, []);

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/user/${match.params.id}`, values)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <Header />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <React.Fragment>
            <React.Fragment>
              <form
                className={classes.form}
                method="put"
                onSubmit={handleSubmit}
                noValidate
              >
                <Grid className={classes.profilePhoto}>
                  <Grid>
                    <Button
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      <KeyboardBackspaceIcon />
                    </Button>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    style={{ position: "relative" }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      className={classes.avatar}
                    />
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                      style={{
                        position: "absolute",
                        bottom: "25px",
                        right: "32%",
                        backgroundColor: "#eceff1",
                      }}
                    >
                      <PhotoCameraIcon />
                    </IconButton>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Typography variant="h6">
                      {values.firstName} {values.lastName}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={3}>
                  <Grid item xs={3} sm={4}>
                    Full Name
                  </Grid>
                  <Grid item xs={7} sm={8} border="1px">
                    <Box
                      borderRadius="borderRadius"
                      {...defaultProps}
                      fullWidth
                    >
                      {values.fullName}
                    </Box>
                  </Grid>

                  <Grid item xs={3} sm={4}>
                    Employee ID
                  </Grid>
                  <Grid item xs={7} sm={8} border="1px">
                    <Box
                      borderRadius="borderRadius"
                      {...defaultProps}
                      fullWidth
                    >
                      {values.empId}
                    </Box>
                  </Grid>

                  <Grid item xs={3} sm={4}>
                    Employee Type
                  </Grid>
                  <Grid item xs={7} sm={8} border="1px">
                    <Box
                      borderRadius="borderRadius"
                      {...defaultProps}
                      fullWidth
                    >
                      <TextField
                        required
                        fullWidth
                        name="type"
                        value={values.type}
                        type="text"
                        id="type"
                        size="small"
                        onChange={handleChange}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={3} sm={4}>
                    Faculty
                  </Grid>
                  <Grid item xs={7} sm={8} border="1px">
                    <Box
                      borderRadius="borderRadius"
                      {...defaultProps}
                      fullWidth
                    >
                      <TextField
                        required
                        fullWidth
                        name="faculty"
                        value={values.faculty}
                        type="text"
                        id="faculty"
                        size="small"
                        onChange={handleChange}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={3} sm={4}>
                    E-Mail
                  </Grid>
                  <Grid item xs={7} sm={8} border="1px">
                    <Box
                      borderRadius="borderRadius"
                      {...defaultProps}
                      fullWidth
                    >
                      <TextField
                        required
                        fullWidth
                        name="email"
                        value={values.email}
                        type="email"
                        id="email"
                        size="small"
                        onChange={handleChange}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={3} sm={4}>
                    Phone Number
                  </Grid>
                  <Grid item xs={7} sm={8} border="1px">
                    <Box
                      borderRadius="borderRadius"
                      {...defaultProps}
                      fullWidth
                    >
                      <TextField
                        required
                        fullWidth
                        name="phoneNo"
                        type="text"
                        id="phoneNo"
                        size="small"
                        onChange={handleChange}
                        value={values.phoneNo}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={3} sm={4}>
                    Address
                  </Grid>
                  <Grid item xs={7} sm={8} border="1px">
                    <Box
                      borderRadius="borderRadius"
                      {...defaultProps}
                      fullWidth
                    >
                      <TextField
                        required
                        fullWidth
                        name="address"
                        type="text"
                        id="address"
                        size="small"
                        value={values.address}
                        onChange={handleChange}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={3} sm={4}>
                    Gender
                  </Grid>
                  <Grid item xs={7} sm={8} border="1px">
                    <Box
                      borderRadius="borderRadius"
                      {...defaultProps}
                      fullWidth
                    >
                      <TextField
                        required
                        fullWidth
                        name="gender"
                        value={values.gender}
                        type="text"
                        id="gender"
                        size="small"
                        onChange={handleChange}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={3} sm={4}>
                    Date Of Birth
                  </Grid>
                  <Grid item xs={7} sm={8} border="1px">
                    <Box
                      borderRadius="borderRadius"
                      {...defaultProps}
                      fullWidth
                    >
                      <TextField
                        xs={12}
                        name="dateOfBirth"
                        id="dateOfBirth"
                        type="date"
                        value={values.dateOfBirth}
                        fullWidth
                        onChange={handleChange}
                      />
                    </Box>
                  </Grid>
                </Grid>
                <div className={classes.buttons}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </React.Fragment>
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
