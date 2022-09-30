import React from "react";
import wind from "../assets/images/wind.png";
import pressure from "../assets/images/pressure.png";
import humidity from "../assets/images/humidity.png";
import visibility from "../assets/images/visibility.png";
import sun from "../assets/images/sun1.png";
import classes from "../styles/WeatherConditions.module.css";

const WeatherConditions = () => {
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
                <p>
                  7.70 <sub>km/h</sub>
                </p>
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
                <p>12%</p>
              </div>
            </div>
            <div className={classes.box}>
              <h4>Visibilty</h4>
              <div className={classes.details}>
                <img src={visibility} alt="visibility-icon" />
                <p>
                  5.2 <sub>km</sub>
                </p>
              </div>
            </div>
            <div className={classes.box}>
              <h4>Sunrise</h4>
              <div className={classes.details}>
                <img src={sun} alt="sunrise-icon" />
                <p className={classes.sun__details}>6.30 A.M</p>
              </div>
            </div>
            <div className={classes.box}>
              <h4>Sunset</h4>
              <div className={classes.details}>
                <img src={sun} alt="sunset-icon" />
                <p className={classes.sun__details}>7.00 A.M</p>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </>
  );
};

export default WeatherConditions;
