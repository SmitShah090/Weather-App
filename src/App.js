import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./Weather";
import { Button, makeStyles, TextField } from "@material-ui/core";
import SendRoundedIcon from "@material-ui/icons/SendRounded";

const Api_Key = "429736441cf3572838aa10530929f7cd";

const useStyle = makeStyles({
  app: {
    mx: "auto",
    direction: "row",
    justifyItems: "center",
    marginTop: "130px",
    textAlign: "center",
  },
});

function App() {
  const [value, setValue] = useState("");
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");
  const [temp, setTemp] = useState("");
  const [img, setImg] = useState("");
  const [disc, setDisc] = useState("");
  const [country, setCountry] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");

  const classes = useStyle();

  const citySelect = (e) => {
    e.preventDefault();
    setCity(search);
  };

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},&appid=${Api_Key}`
      )
      .then((res) => {
        console.log(res.data);
        setValue(res.data);
        setTemp(res.data.main);
        setImg(
          `http://openweathermap.org/img/wn/${res.data.weather[0].icon}.png`
        );
        setDisc(res.data.weather[0].description);
        setCountry(res.data.sys.country);
        setSunrise(res.data.sys.sunrise);
        setSunset(res.data.sys.sunset);
      });
  }, [city]);

  return (
    <div className={classes.app}>
      <div>
        <div style={{fontFamily : 'Stalinist One', fontSize: '30px', paddingBottom: '10px', color: '#1f4fa4' }}>Weather app 1.0</div>
        <form onSubmit={citySelect}>
          <TextField
            id="standard-basic"
            label='City name'
            autoComplete="off"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={classes.input}
            color='action'
            margin='dense'
            size='medium'
          />
          <Button type="submit" style={{ marginTop: "15px", opacity: 1 }}>
            {" "}
            <SendRoundedIcon color='primary' />{" "}
          </Button>
        </form>
        <Weather
          city={value.name}
          img={img}
          temp={temp.temp}
          MaxTemp={temp.temp_max}
          MinTemp={temp.temp_min}
          Country={country}
          Humidity={temp.humidity}
          Pressure={temp.pressure}
          SunSet={sunset}
          SunRise={sunrise}
          Description={disc}
        />
      </div>
    </div>
  );
}

export default App;
