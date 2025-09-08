export default function WeatherCard({ temp, condition, icon }) {
  return (
    <div className="text-center text-white">
      <img src={icon} alt={condition} className="mx-auto w-24 h-24" />
      <h2 className="text-5xl font-bold">{temp}°C</h2>
      <p className="text-lg capitalize">{condition}</p>
    </div>
  );
}