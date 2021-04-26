import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Copyright from "./CopyRights";
import { Checkbox, FormControlLabel, Grid, TextField } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

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
}));

export default function TravelClaim() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [state, setState] = React.useState({
    traveling: true,
    subsistence: false,
  });
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { traveling, subsistence } = state;

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
                <Grid item xs={12}>
                  <TextField
                    required
                    id="department"
                    name="department"
                    label="Department / Division "
                    fullWidth
                    autoComplete="department"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="purpose"
                    name="purpose"
                    label="Purpose for the Leave"
                    fullWidth
                    autoComplete="purpose"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="placeToVisit"
                    name="placeToVisit"
                    label="Place To Visit"
                    fullWidth
                    autoComplete="placeToVisit"
                  />
                </Grid>
                <Grid className={classes.label1}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={classes.head1}
                  >
                    Period of Duty Leave
                  </Typography>
                </Grid>
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
                <Grid className={classes.label1}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={classes.head1}
                  >
                    State the request with
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={traveling}
                        onChange={handleChange}
                        name="traveling"
                      />
                    }
                    label="Traveling"
                  />
                </Grid>
                <Grid item xs={6} sm={3}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={subsistence}
                        onChange={handleChange}
                        name="subsistence"
                      />
                    }
                    label="Subsistence"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="rs"
                    name="rs"
                    label="Reimbursement of Registration Fee / Course Fee(RS) "
                    fullWidth
                    autoComplete="rs"
                  />
                  <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload
                  </Button>
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
