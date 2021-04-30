import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Copyright from "./CopyRights";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
} from "@material-ui/core";
import Header from "./Header";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
      width: 800,
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
    width: "80%",
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
    margin: theme.spacing(2, 0, 0),
  },
  to: {
    margin: theme.spacing(2, 0, 0),
  },
  cardContent1: {
    height: "60px",
    backgroundColor: "#455a64",
  },
  card: {
    margin: theme.spacing(0, 0, 6),
  },
  heading: {
    textAlign: "center",
  },
}));

export default function Leave(props) {
  const classes = useStyles();
  const { match } = props;
  const [values, setValues] = useState({
    dateFrom: new Date(),
    apointmentDate: new Date(),
    dateTo: new Date(),
    reason: "",
    namOfActor: "",
    actorEmail: "",
    isHODApproved: false,
    isDeanApproved: false,
    isARApproved: false,
  });

  useEffect(() => {
    axios
      .get(`/user/${match.params.id}`)
      .then(({ data }) => setValues(data.user));
  }, []);
  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      dateFrom,
      apointmentDate,
      dateTo,
      reason,
      nameOfActor,
      actorEmail,
      isHODApproved,
      isDeanApproved,
      isARApproved,
    } = values;
    axios
      .post(`/leaves/${match.params.id}`, {
        dateFrom,
        apointmentDate,
        dateTo,
        reason,
        nameOfActor,
        actorEmail,
        isHODApproved: false,
        isDeanApproved: false,
        isARApproved: false,
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Container className={classes.gridHeading}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent1}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h1"
                  className={classes.heading}
                >
                  Leave Application
                </Typography>
              </CardContent>
            </Card>
          </Container>
          <React.Fragment>
            <React.Fragment>
              <form
                className={classes.form}
                method="post"
                onSubmit={handleSubmit}
                noValidate
              >
                <Grid container spacing={3}>
                  <Grid item xs={2} sm={2}>
                    Full Name
                  </Grid>
                  <Grid item xs={8} sm={10} border="1px">
                    <Grid item xs={8} sm={10}>
                      <TextField
                        xs={12}
                        name="fullName"
                        id="fullName"
                        type="text"
                        value={values.fullName}
                        fullWidth
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={2} sm={2}>
                    Designation
                  </Grid>
                  <Grid item xs={8} sm={10} border="1px">
                    <Grid item xs={8} sm={10}>
                      <TextField
                        xs={12}
                        name="type"
                        id="type"
                        type="text"
                        value={values.type}
                        fullWidth
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                  <Grid className={classes.gridAppointment}>
                    <label className={classes.label}>
                      Date Of First Appointment / முதல் நியமன திகதி
                    </label>
                  </Grid>

                  <Grid xs={12}>
                    <TextField
                      id="apointmentDate"
                      type="date"
                      name="apointmentDate"
                      defaultValue="2017-05-24"
                      value={values.apointmentDate}
                      className={classes.textField}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={classes.head1}
                  >
                    Leaves Already Taken / ஏற்கனவெ எடுக்கப்பட்ட லீவுகள்
                  </Typography>
                  <Grid className={classes.label1}>
                    <Typography fullWidth className={classes.head2}>
                      Sick / சுகயீனம்
                    </Typography>
                  </Grid>

                  <Grid item xs={3} sm={3}>
                    <TextField
                      required
                      id="noOfSickLeavesLast"
                      name="noOfSickLeavesLast"
                      label=" Last Year"
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={3} sm={3}>
                    <TextField
                      required
                      id="noOfSickLeavesThis"
                      name="noOfSickLeavesThis"
                      label="This Year"
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid className={classes.label1}>
                    <Typography fullWidth className={classes.head2}>
                      Vacation / விடுமுறை
                    </Typography>
                  </Grid>

                  <Grid item xs={3} sm={3}>
                    <TextField
                      required
                      id="noOfVacationLast"
                      name="noOfVacationLast"
                      label=" Last Year"
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={3} sm={3}>
                    <TextField
                      required
                      id="noOfVacationThis"
                      name="noOfVacationThis"
                      label="This Year"
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid className={classes.label1}>
                    <Typography fullWidth className={classes.head2}>
                      Casual / தற்காலிகம்
                    </Typography>
                  </Grid>

                  <Grid item xs={3} sm={3}>
                    <TextField
                      required
                      id="noOfCasualLeavesLast"
                      name="noOfCasualLeavesLast"
                      label=" Last Year"
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={3} sm={3}>
                    <TextField
                      required
                      id="noOfCasualLeavesThis"
                      name="noOfCasualLeavesThis"
                      label="This Year"
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid className={classes.label1}>
                    <Typography fullWidth className={classes.head2}>
                      Half Pay / அரை நாள்
                    </Typography>
                  </Grid>

                  <Grid item xs={3} sm={3}>
                    <TextField
                      required
                      id="noOfHalfPayLeavesLast"
                      name="noOfHalfPayLeavesLast"
                      label=" Last Year"
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={3} sm={3}>
                    <TextField
                      required
                      id="noOfHalfPayLeavesThis"
                      name="noOfHalfPayLeavesThis"
                      label="This Year"
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid className={classes.label1}>
                    <Typography fullWidth className={classes.head2}>
                      No Pay / சம்பளமற்ற
                    </Typography>
                  </Grid>

                  <Grid item xs={3} sm={3}>
                    <TextField
                      required
                      id="noOfNoPayLeavesLast"
                      name="noOfNoPayLeavesLast"
                      label=" Last Year"
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={3} sm={3}>
                    <TextField
                      required
                      id="noOfNoPayLeavesThis"
                      name="noOfNoPayLeavesThis"
                      label="This Year"
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>

                  <Typography
                    variant="h6"
                    gutterBottom
                    className={classes.head1}
                  >
                    Number of days applied for leave / லீவு விண்ணப்பிக்கப்பட்ட
                    நாட்கள்
                  </Typography>
                  <Grid item xs={3} sm={3} className={classes.from}>
                    From / இருந்து
                  </Grid>
                  <Grid
                    item
                    xs={7}
                    sm={8}
                    border="1px"
                    className={classes.from}
                  >
                    <TextField
                      xs={12}
                      name="dateFrom"
                      id="dateFrom"
                      type="date"
                      value={values.dateFrom}
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item xs={3} sm={3} className={classes.to}>
                    To / வரை
                  </Grid>
                  <Grid item xs={7} sm={8} border="1px" className={classes.to}>
                    <TextField
                      xs={12}
                      name="dateTo"
                      id="dateTo"
                      type="date"
                      value={values.dateTo}
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      id="reason"
                      name="reason"
                      label="Reason / காரணம் "
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>

                  <Typography
                    variant="h6"
                    gutterBottom
                    className={classes.head1}
                  >
                    Acting Arrangement for work of Applicant / பதில் கடமை
                    ஒழுங்குகள்
                  </Typography>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="nameOfActor"
                      name="nameOfActor"
                      label=" Name "
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="actorEmail"
                      type="email"
                      name="actorEmail"
                      label="Email Of the Substitute"
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <div className={classes.buttons}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    type="submit"
                  >
                    Apply
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
