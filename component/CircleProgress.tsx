import { PieChart, Pie, Cell } from "recharts";

export default function CircleProgress({
  value,
  color,
}: {
  value: number;
  color: string;
}) {
  const circleData = [
    { name: "progress", value },
    { name: "remaining", value: 100 - value },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center">
      <PieChart width={100} height={100}>
        <Pie
          data={circleData}
          innerRadius={35}
          outerRadius={45}
          paddingAngle={0}
          dataKey="value"
        >
          <Cell key="progress" fill={color} />
          <Cell key="remaining" fill="#e5e7eb" /> {/* gray background */}
        </Pie>
      </PieChart>
      {/* Centered Percentage */}
      <p className="absolute text-sm font-semibold">{value}%</p>
    </div>
  );
}
