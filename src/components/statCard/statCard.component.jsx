
const StatCard = ({ number, label }) => (
  <div className="text-center p-4 text-white">
    <p className="text-3xl font-bold">{number}</p>
    <p className="text-sm text-gray-400">{label}</p>
  </div>
);

export default StatCard;
