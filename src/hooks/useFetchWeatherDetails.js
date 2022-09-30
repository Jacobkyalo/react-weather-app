import { useEffect, useReducer } from "react";

// reducer function
const weatherReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: false };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, error: false, data: action.payload };
    case "FETCH_FAILED":
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
    data: [],
  });

  useEffect(() => {
    const fetchWeatherData = async () => {
      dispatch({ type: "FETCH_START" });
      try {
        const result = await fetch(url);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAILED" });
      }
    };

    fetchWeatherData();
  }, [url]);

  return state;
};

export default useFetchWeatherDetails;
