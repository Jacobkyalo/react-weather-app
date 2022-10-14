import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import WeatherConditions from "./WeatherConditions";
import classes from "../styles/WeatherDetails.module.css";
import useFetchWeatherDetails from "../hooks/useFetchWeatherDetails";
import { covertTime, covertTemp, getDayOfWeek } from "../utils/converts";
import { ClipLoader } from "react-spinners";

const WeatherDetails = () => {
  const [regionInput, setRegionInput] = useState("Nairobi");
  const [url, setUrl] = useState(
    `https://api.openweathermap.org/data/2.5/weather?q=${regionInput}&appid=${process.env.REACT_APP_API_ID}&lang=en`
  );

  //using custom hook
  const { state } = useFetchWeatherDetails(url);
  //custom hook states
  const data = state.data;
  const loading = state.loading;
  const error = state.error;

  //function to handle search
  const handleSearch = (e) => {
    e.preventDefault();

    //handle empty input
    if (!regionInput) {
      return;
    }
    setUrl(
      `https://api.openweathermap.org/data/2.5/weather?q=${regionInput}&&appid=${process.env.REACT_APP_API_ID}&lang=en`
    );
    setRegionInput("");
  };

  return (
    <div className={classes.details__wrapper}>
      {error ? (
        <div className={classes.error__loading}>
          404 Page Not Found 😞 reload the page 🥰{" "}
        </div>
      ) : (
        <section className={classes.container}>
          {loading ? (
            <div className={classes.error__loading}>
              <ClipLoader
                color="#fff"
                loading={loading}
                size={80}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          ) : (
            <>
              <div className={classes.aside__wrapper}>
                <aside className={classes.aside}>
                  <div className={classes.form__wrapper}>
                    <p>
                      <FiSearch
                        style={{ fontSize: "1.5rem", fontWeight: "900" }}
                      />
                    </p>
                    <form onSubmit={handleSearch}>
                      <input
                        type="text"
                        value={regionInput}
                        onChange={(e) => setRegionInput(e.target.value)}
                        placeholder="Search regions..."
                      />
                    </form>
                  </div>

                  <div className={classes.text__center}>
                    {data.name && (
                      <h3 className={classes.title}>
                        {data.name},{" "}
                        {data.sys ? <span>{data.sys.country}</span> : null}
                      </h3>
                    )}

                    <div className={classes.image__wrapper}>
                      {data.weather && (
                        <img
                          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                          alt="clouds-icon"
                        />
                      )}
                    </div>
                    <div className={classes.temp__count}>
                      {data.main && (
                        <h1>
                          {covertTemp(data.main.temp.toFixed())}
                          <sup>
                            <span>
                              o<sub>C</sub>
                            </span>
                          </sup>
                        </h1>
                      )}
                    </div>
                    <div className={classes.day__display}>
                      {data.dt && (
                        <p>
                          {getDayOfWeek(data.dt)},
                          {data.timezone && (
                            <span> {covertTime(data.dt, data.timezone)}</span>
                          )}
                        </p>
                      )}
                    </div>
                    {data.weather && (
                      <h3 className={classes.condition}>
                        {data.weather[0].description}
                      </h3>
                    )}
                  </div>
                </aside>
              </div>
              <WeatherConditions data={data} />
            </>
          )}
        </section>
      )}
    </div>
  );
};
export default WeatherDetails;
