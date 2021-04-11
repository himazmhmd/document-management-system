import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import CopyRight from "./CopyRights";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0, 2),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    float: "left",
  },
  cardContent: {
    flexGrow: 1,
    backgroundColor: "#b2ebf2",
  },
  cardContent1: {
    flexGrow: 1,
    backgroundColor: "#b2ebf2",
    height: "190px",
    width: "100%",
    borderRadius: "10px",
  },
  grid1: {
    size: "small",
    width: "auto%",
    float: "left",
    margin: theme.spacing(3, 3, 4),
  },
  grid: {
    size: "small",
    width: "20%",
    float: "left",
    margin: theme.spacing(3, 3, 4),
  },
  buttons: {
    margin: theme.spacing(12, 0, 0), // You might not need this now
    position: "bottom",
    float: "right",
  },
  button: {
    float: "right",
  },
}));

export default function Album() {
  const classes = useStyles();

  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Header />

        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}></div>
          <Container className={classes.cardGrid}>
            {/* End hero unit */}
            <Grid>
              <Grid item xs={12} sm={6} md={12}>
                <container>
                  <Grid>
                    <Typography gutterBottom variant="h5" component="h1">
                      Leave Forms
                    </Typography>
                  </Grid>
                  <Grid className={classes.grid}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent1}>
                        <Typography gutterBottom variant="h5" component="h1">
                          Casual Leave
                        </Typography>
                        <Button
                          size="small"
                          color="secondary"
                          className={classes.button}
                        >
                          Academic Staff
                        </Button>
                        <Button
                          size="small"
                          color="secondary"
                          className={classes.button}
                        >
                          Non-Academic Staff
                        </Button>
                        <Button
                          size="small"
                          color="secondary"
                          className={classes.button}
                        >
                          Academic Support
                        </Button>
                        <Button
                          size="small"
                          color="secondary"
                          className={classes.button}
                        >
                          On-Contract Staff
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid className={classes.grid1}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent1}>
                        <Typography gutterBottom variant="h5" component="h1">
                          Duty Leave
                        </Typography>
                        <Button
                          size="small"
                          color="secondary"
                          className={classes.buttons}
                        >
                          Apply
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid className={classes.grid1}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent1}>
                        <Typography gutterBottom variant="h5" component="h1">
                          Vacation Leave
                        </Typography>
                        <Button
                          size="small"
                          color="secondary"
                          className={classes.buttons}
                        >
                          Apply
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid className={classes.grid1}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent1}>
                        <Typography gutterBottom variant="h5" component="h1">
                          Study Leave
                        </Typography>
                        <Button
                          size="small"
                          color="secondary"
                          className={classes.buttons}
                        >
                          Apply
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid className={classes.grid1}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent1}>
                        <Typography gutterBottom variant="h5" component="h1">
                          Sabbaticle Leave
                        </Typography>
                        <Button
                          size="small"
                          color="secondary"
                          className={classes.buttons}
                        >
                          Apply
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                </container>
                <container>
                  <Grid>
                    <Typography gutterBottom variant="h5" component="h1">
                      Other Forms
                    </Typography>
                  </Grid>
                </container>

                <container>
                  <Grid className={classes.grid1}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent1}>
                        <Typography gutterBottom variant="h5" component="h1">
                          Travel Claiming
                        </Typography>
                        <Button
                          size="small"
                          color="secondary"
                          className={classes.buttons}
                        >
                          Apply
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                </container>
                <container>
                  <Grid className={classes.grid1}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent1}>
                        <Typography gutterBottom variant="h5" component="h1">
                          Vehicle Booking
                        </Typography>
                        <Button
                          size="small"
                          color="secondary"
                          className={classes.buttons}
                        >
                          Apply
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                </container>
                <container>
                  <Grid className={classes.grid1}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent1}>
                        <Typography gutterBottom variant="h5" component="h1">
                          Guest House Booking
                        </Typography>
                        <Button
                          size="small"
                          color="secondary"
                          className={classes.buttons}
                        >
                          Apply
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                </container>
                <container>
                  <Grid className={classes.grid1}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent1}>
                        <Typography gutterBottom variant="h5" component="h1">
                          Staff Apprisal
                        </Typography>
                        <Button
                          size="small"
                          color="secondary"
                          className={classes.buttons}
                        >
                          Apply
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                </container>
              </Grid>
            </Grid>
          </Container>
        </main>
      </React.Fragment>
    </>
  );
}
