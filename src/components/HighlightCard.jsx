export default function HighlightCard({ title, value, unit }) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl flex flex-col items-center">
      <h3 className="text-lg">{title}</h3>
      <p className="text-3xl font-bold">
        {value}{unit}
      </p>
    </div>
  );
}