import React from "react";
import wind from "../assets/images/wind.png";
import pressure from "../assets/images/pressure.png";
import humidity from "../assets/images/humidity.png";
import visibility from "../assets/images/visibility.png";
import sun from "../assets/images/sun1.png";
import classes from "../styles/WeatherConditions.module.css";
import { covertTime } from "../utils/converts";

const WeatherConditions = ({ data }) => {
  return (
    <>
      <div className={classes.weather__conditions}>
        <aside>
          <header className={classes.header__top}>
            <h2>Today's Highlights</h2>
            <div className={classes.converters__toggle}>
              <p>
                o<sub>C</sub>
              </p>
              <p>
                o<sub>F</sub>
              </p>
            </div>
          </header>
          <section className={classes.weather__conditions__wrapper}>
            <div className={classes.box}>
              <h4>Wind status</h4>
              <div className={classes.details}>
                <img src={wind} alt="wind-icon" />
                {data.wind ? (
                  <p>
                    {data.wind.speed} <sub>km/h</sub>
                  </p>
                ) : null}
              </div>
            </div>
            <div className={classes.box}>
              <h4>Pressure</h4>
              <div className={classes.details}>
                <img src={pressure} alt="pressure-icon" />
                <p>60%</p>
              </div>
            </div>
            <div className={classes.box}>
              <h4>Humidity</h4>
              <div className={classes.details}>
                <img src={humidity} alt="humidity-icon" />
                {data.main ? <p>{data.main.humidity} %</p> : null}
              </div>
            </div>
            <div className={classes.box}>
              <h4>Visibilty</h4>
              <div className={classes.details}>
                <img src={visibility} alt="visibility-icon" />
                {data.visibility ? (
                  <p>
                    {data.visibility.toFixed(1) / 1000}
                    <sub> km</sub>
                  </p>
                ) : null}
              </div>
            </div>
            <div className={classes.box}>
              <h4>Sunrise</h4>
              <div className={classes.details}>
                <img src={sun} alt="sunrise-icon" />
                {data.sys && (
                  <p className={classes.sun__details}>
                    {covertTime(data.sys.sunrise, data.timezone)}
                  </p>
                )}
              </div>
            </div>
            <div className={classes.box}>
              <h4>Sunset</h4>
              <div className={classes.details}>
                <img src={sun} alt="sunset-icon" />
                {data.sys && (
                  <p className={classes.sun__details}>
                    {covertTime(data.sys.sunset, data.timezone)}
                  </p>
                )}
              </div>
            </div>
          </section>
        </aside>
      </div>
    </>
  );
};

export default WeatherConditions;
