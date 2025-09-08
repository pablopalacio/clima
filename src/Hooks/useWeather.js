import { useState, useEffect } from "react";
import api from "../api.js";

export function useWeather(lat = -27.3621, lon = -55.9009) {
  const [current, setCurrent] = useState(null);
  const [daily, setDaily] = useState([]);
  const [hourly, setHourly] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;

  useEffect(() => {
    async function fetchWeather() {
      try {
        setLoading(true);

        const res = await api.get(
          `/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=${API_KEY}`
        );

        setCurrent(res.data.current);
        setDaily(res.data.daily);
        setHourly(res.data.hourly);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [lat, lon]);

  return { current, daily, hourly, loading, error };
}