import { useWeather } from "../hooks/UseWeather.jsx";
import WeatherCard from "../components/WeatherCard.jsx";
import ForecastCard from "../components/ForecastCard.jsx";
import HighlightCard from "../components/HighlightCard.jsx";

export default function Home() {
  const { current, daily, loading, error } = useWeather();

  if (loading) return <p className="text-center text-white">Cargando...</p>;
  if (error) return <p className="text-center text-red-500">Error al cargar datos</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row">
      <div className="w-full md:w-1/3 p-6 flex flex-col items-center justify-center">
        <WeatherCard
          temp={Math.round(current.temp)}
          condition={current.weather[0].description}
          icon={`/assets/icons/${current.weather[0].icon}.png`}
        />
        <p className="mt-2 text-lg">Posadas</p>
      </div>
      <div className="w-full md:w-2/3 p-6">
        {/* Pronóstico Próximos Días */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {daily.slice(0, 5).map((day, idx) => (
            <ForecastCard
              key={idx}
              day={new Date(day.dt * 1000).toLocaleDateString("es-ES", { weekday: "short" })}
              tempMax={Math.round(day.temp.max)}
              tempMin={Math.round(day.temp.min)}
              icon={`/assets/icons/${day.weather[0].icon}.png`}
            />
          ))}
        </div>
        <h2 className="text-xl font-semibold mb-4">Today's Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <HighlightCard title="Wind Status" value={current.wind_speed} unit=" m/s" />
          <HighlightCard title="Humidity" value={current.humidity} unit="%" />
          <HighlightCard title="Visibility" value={current.visibility / 1000} unit=" km" />
          <HighlightCard title="Air Pressure" value={current.pressure} unit=" mb" />
        </div>
      </div>
    </div>
  );
}