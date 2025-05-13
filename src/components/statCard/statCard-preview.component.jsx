
import StatCard from "./statCard.component";

const StatusStats = () => {
  const stats = [
    { number: '500+', label: "Client Served" },
    { number: '95%', label: "Satisfied Clients" },
    { number: '24/7', label: "Support Available" },
    { number: '50+', label: "Countries Reached" },
  ];

  return (
    // Handles Displaying of the StatCard
    <section className="bg-zinc-900 py-12">
      <div className="max-w-6xl 2xl:max-w-[1450px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <StatCard key={index} number={stat.number} label={stat.label} />
        ))}
      </div>
    </section>
  );
};

export default StatusStats;
