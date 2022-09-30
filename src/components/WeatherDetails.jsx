import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import img from "../assets/images/cloud.jpeg";
import WeatherConditions from "./WeatherConditions";
import classes from "../styles/WeatherDetails.module.css";

const WeatherDetails = () => {
  const [regionInput, setRegionInput] = useState("");
  return (
    <div className={classes.details__wrapper}>
      <section className={classes.container}>
        <div className={classes.aside__wrapper}>
          <aside className={classes.aside}>
            <div className={classes.form__wrapper}>
              <p>
                <FiSearch style={{ fontSize: "1.5rem", fontWeight: "900" }} />
              </p>
              <form>
                <input type="text" placeholder="Search regions..." />
              </form>
            </div>
            <div className={classes.text__center}>
              <h3 className={classes.title}>
                Nairobi, <span>KE</span>
              </h3>
              <div className={classes.image__wrapper}>
                <img src={img} alt="clouds-icon" />
              </div>
              <div className={classes.temp__count}>
                <h1>
                  20
                  <sup>
                    <span>
                      o<sub>C</sub>
                    </span>
                  </sup>
                </h1>
              </div>
              <div className={classes.day__display}>
                <p>
                  Monday, <span>16:00</span>
                </p>
              </div>
              <h3 className={classes.condition}>Mostly clouds</h3>
            </div>
          </aside>
        </div>
        <WeatherConditions />
      </section>
    </div>
  );
};

export default WeatherDetails;
