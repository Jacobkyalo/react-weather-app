import { useEffect, useReducer } from "react";
import {
  FETCH_INIT,
  FETCH_SUCCESS,
  FETCH_FAILED,
} from "../utils/fetch-reducers";
import axios from "axios";

// reducer function
const weatherReducer = (state, action) => {
  switch (action.type) {
    case FETCH_INIT:
      return { ...state, loading: true, error: false };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case FETCH_FAILED:
      return { ...state, loading: false, error: true };

    default:
      throw new Error("Something went wrong");
  }
};

//custom fetch hook
const useFetchWeatherDetails = (url) => {
  //useReducer init
  const [state, dispatch] = useReducer(weatherReducer, {
    loading: false,
    error: false,
    data: {},
  });

  useEffect(() => {
    const fetchWeatherData = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const res = await axios.get(url);
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAILED" });
      }
    };

    fetchWeatherData();
  }, [url]);

  return { state };
};

export default useFetchWeatherDetails;
