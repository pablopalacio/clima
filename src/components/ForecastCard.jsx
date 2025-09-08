export default function ForecastCard({ day, tempMax, tempMin, icon }) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-xl text-center">
      <p className="capitalize">{day}</p>
      <img src={icon} alt={day} className="mx-auto w-12 h-12" />
      <p>{tempMax}°C / {tempMin}°C</p>
    </div>
  );
}