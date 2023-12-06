import React, { useEffect, useState } from "react";
import Weather from "../components/weather";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState("");
  const [state, setState] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (state !== "") {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${state}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
			);
			console.log(response);
          if (response.ok) {
            const data = await response.json();
            setApiData(data);
          } else {
            throw new Error('Network response was not ok.');
          }
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      }
    };
    fetchData();
  }, [state]);

  const inputHandler = (event) => {
    setGetState(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setState(getState);
    navigate("/city");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          onChange={inputHandler}
          value={getState}
          placeholder="search city"
        />
        <button type="submit">Search</button>
      </form>
      {typeof apiData.main !== "undefined" ? (
        <div>
          <Weather weatherData={apiData} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}