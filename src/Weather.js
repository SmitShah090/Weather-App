import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  weather: {
    paddingBottom: "30px",
  },
  city: {
    paddingBottom: "30px",
  },
  icon: {
    paddingBottom: "30px",
  },
  img: {
    width: "70px",
    height: "70px",
  },
  details: {
    mx: "auto",
    direction: "row",
    justifyContent: "center",
    marginTop: "40px",
    textAlign: "center",
    
    marginBottom: "20px",
    borderRadius: "20px",
  },
  carddetails: {
    backgroundColor: '#e5c3db', 
    opacity:'0.7' , 
    color: '#2259d7', 
    borderRadius: '30px'
  }
});

const Weather = (props) => {
  const classes = useStyles();
  const {
    city,
    img,
    temp,
    Country,
    Humidity,
    Pressure,
    MaxTemp,
    MinTemp,
    SunRise,
    SunSet,
    Description,
  } = props;

  let sunrisestamp = `${SunRise}`;
  let sunsetstamp = `${SunSet}`;
  let dater = new Date(sunrisestamp * 1000);
  let dates = new Date(sunsetstamp * 1000);
  let hrsr = dater.getHours();
  let hrss = dates.getHours();
  let minr = dater.getMinutes();
  let mins = dates.getMinutes();
  let secr = dater.getSeconds();
  let secs = dates.getSeconds();
  let sunrisetime = `${hrsr}:${minr}:${secr}`;
  let sunsettime = `${hrss}:${mins}:${secs}`;

  return (
    <Grid container className={classes.details}>
      <Grid xs={10} sm={6} lg={4} md={4} item>
        <Card className={classes.carddetails}>
          <CardContent>
            <Grid container>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={12} className={classes.icon}>
                    {img ? (
                      <img
                        src={img}
                        alt="weather icon"
                        className={classes.img}
                      />
                    ) : null}
                    {Description ? (
                      <Typography> {Description} </Typography>
                    ) : null}
                  </Grid>
                  <Grid item xs={12} className={classes.city}>
                    {city ? (
                      <Typography>
                        {city},{Country}
                      </Typography>
                    ) : null}

                    {temp ? (
                      <Typography>
                        {`${Math.floor(temp - 273.15)}° C`}
                      </Typography>
                    ) : null}
                  </Grid>
                </Grid>
                <Grid container className={classes.weather}>
                  <Grid xs={4} item>
                    {MaxTemp ? (
                      <Typography>{`${Math.floor(
                        MaxTemp - 273.15
                      )}° C`}</Typography>
                    ) : null}

                    <Typography>high</Typography>
                  </Grid>
                  <Grid xs={4} item>
                    <Typography> {Humidity} </Typography>
                    <Typography>Humidity</Typography>
                  </Grid>
                  <Grid xs={4} item>
                    {sunrisetime ? (
                      <Typography>{`${sunrisetime} AM`}</Typography>
                    ) : null}

                    <Typography>SunRise</Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid xs={4} item>
                    {MinTemp ? (
                      <Typography>{`${Math.floor(
                        MinTemp - 273.15
                      )}° C`}</Typography>
                    ) : null}

                    <Typography>low</Typography>
                  </Grid>
                  <Grid xs={4} item>
                    <Typography>{Pressure}</Typography>
                    <Typography>Pressure</Typography>
                  </Grid>
                  <Grid xs={4} item>
                    {sunsettime ? (
                      <Typography>{sunsettime} PM</Typography>
                    ) : null}

                    <Typography>Sunset</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Weather;
