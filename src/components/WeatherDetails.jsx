import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import img from "../assets/images/cloud.jpeg";
import WeatherConditions from "./WeatherConditions";
import classes from "../styles/WeatherDetails.module.css";
import useFetchWeatherDetails from "../hooks/useFetchWeatherDetails";
import { unixToLocalTime, covertTemp } from "../utils/converts";

const WeatherDetails = () => {
  const [regionInput, setRegionInput] = useState("");

  const { state } = useFetchWeatherDetails(
    `https://api.openweathermap.org/data/2.5/weather?q=nairobi&appid=${process.env.REACT_APP_API_ID}`
  );
  const data = state.data;

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
                <input
                  type="text"
                  value={regionInput}
                  onChange={(e) => setRegionInput(e.currentTarget.value)}
                  placeholder="Search regions..."
                />
              </form>
            </div>
            <div className={classes.text__center}>
              {data.name ? (
                <h3 className={classes.title}>
                  {data.name},{" "}
                  {data.sys ? <span>{data.sys.country}</span> : null}
                </h3>
              ) : null}

              <div className={classes.image__wrapper}>
                {data.weather ? (
                  <img
                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                    alt="clouds-icon"
                  />
                ) : null}
              </div>
              <div className={classes.temp__count}>
                {data.main ? (
                  <h1>
                    {covertTemp(data.main.temp)}
                    <sup>
                      <span>
                        o<sub>C</sub>
                      </span>
                    </sup>
                  </h1>
                ) : null}
              </div>
              <div className={classes.day__display}>
                {data.dt && (
                  <p>
                    {data.dt},{" "}
                    {data.timezone && (
                      <span>{unixToLocalTime(data.dt, data.timezone)}</span>
                    )}
                  </p>
                )}
              </div>
              {data.weather ? (
                <h3 className={classes.condition}>
                  {data.weather[0].description}
                </h3>
              ) : null}
            </div>
          </aside>
        </div>
        <WeatherConditions data={data} />
      </section>
    </div>
  );
};
export default WeatherDetails;
