import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Copyright from "./CopyRights";
import { Grid, TextField } from "@material-ui/core";

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
    margin: theme.spacing(2, 3, 2),
  },
  to: {
    margin: theme.spacing(2, 3, 2),
  },
}));

export default function Leave() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <React.Fragment>
            <React.Fragment>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="name"
                    name="name"
                    label="Full Name / முழுப்பெயர் "
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="designation"
                    name="designation"
                    label="Designation / பதவி "
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid className={classes.gridAppointment}>
                  <label className={classes.label}>
                    Date Of First Appointment / முதல் நியமன திகதி
                  </label>
                </Grid>

                <Grid xs={12}>
                  <TextField
                    id="date"
                    type="date"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                  />
                </Grid>
                <Typography variant="h6" gutterBottom className={classes.head1}>
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
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={3} sm={3}>
                  <TextField
                    required
                    id="noOfSickLeavesThis"
                    name="noOfSickLeavesThis"
                    label="This Year"
                    fullWidth
                    autoComplete="family-name"
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
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={3} sm={3}>
                  <TextField
                    required
                    id="noOfVacationThis"
                    name="noOfVacationThis"
                    label="This Year"
                    fullWidth
                    autoComplete="family-name"
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
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={3} sm={3}>
                  <TextField
                    required
                    id="noOfCasualLeavesThis"
                    name="noOfCasualLeavesThis"
                    label="This Year"
                    fullWidth
                    autoComplete="family-name"
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
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={3} sm={3}>
                  <TextField
                    required
                    id="noOfHalfPayLeavesThis"
                    name="noOfHalfPayLeavesThis"
                    label="This Year"
                    fullWidth
                    autoComplete="family-name"
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
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={3} sm={3}>
                  <TextField
                    required
                    id="noOfNoPayLeavesThis"
                    name="noOfNoPayLeavesThis"
                    label="This Year"
                    fullWidth
                    autoComplete="family-name"
                  />
                </Grid>

                <Typography variant="h6" gutterBottom className={classes.head1}>
                  Number of days applied for leave / லீவு விண்ணப்பிக்கப்பட்ட
                  நாட்கள்
                </Typography>
                <TextField
                  xs={12}
                  id="dateFrom"
                  type="date"
                  defaultValue="2017-05-24"
                  label="From / இருந்து "
                  className={classes.from}
                />
                <TextField
                  xs={12}
                  id="dateTo"
                  type="date"
                  defaultValue="2017-05-24"
                  label="To / வரை "
                  className={classes.to}
                />

                <Grid item xs={12}>
                  <TextField
                    id="reason"
                    name="reason"
                    label="Reason / காரணம் "
                    fullWidth
                    autoComplete="reason"
                  />
                </Grid>

                <Typography variant="h6" gutterBottom className={classes.head1}>
                  Acting Arrangement for work of Applicant / பதில் கடமை
                  ஒழுங்குகள்
                </Typography>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="NamOfActor"
                    name="NamOfActor"
                    label=" Name "
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="email"
                    type="email"
                    name="email"
                    label="Email Of the Substitute"
                    fullWidth
                    autoComplete="family-name"
                  />
                </Grid>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <div className={classes.buttons}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  Apply
                </Button>
              </div>
            </React.Fragment>
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
