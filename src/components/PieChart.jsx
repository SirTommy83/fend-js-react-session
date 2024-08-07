import { Pie, PieChart as RechartPieChart, Legend } from "recharts";

export function PieChart({ data }) {
  const fills = [
    "#3BF59A",
    "#3BD4F5",
    "#3BF5D9",
    "#3BF55B",
    "#3B99F5",
    "#3B99F5",
  ];
  const total = data.reduce((acc, d) => {
    return acc + d.value;
  }, 0);
  return (
    <div className="block ml-auto mr-auto">
      <RechartPieChart width={400} height={400}>
        <Pie
          data={data.map((entry, idx) => ({
            ...entry,
            value: Math.round((entry.value / total) * 100),
            fill: fills[idx % fills.length],
          }))}
          dataKey="value"
          nameKey="label"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
        />
        <Legend
          verticalAlign="bottom"
          height={36}
          formatter={(label, _, idx) =>
            `${label}: ${Math.round((data[idx].value / total) * 100)}%`
          }
        />
      </RechartPieChart>
    </div>
  );
}
