import React from "react";
import '../../App.css'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import BarData from "../../Data/BarChartData";

const CustomLegend = ({ payload }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {payload.map((entry, index) => (
        <div key={`legend-${index}`} style={{ marginRight: '10px', display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: entry.color,
              borderRadius: '50%',
              marginRight: '5px',
            }}
          />
          <span>{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

export default function SprintsBarChart() {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={BarData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 200]} ticks={[0, 50, 100, 150, 200]} label={{ value: 'Storypoint (sp) ', angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend content={<CustomLegend />} />
          <Bar dataKey="sp_forecast" stackId="a" fill="#F0F0F0" radius={[10, 10, 0, 0]} barSize={20} />
          <Bar dataKey="sp_planned" stackId="a" fill="#D3D3D3" barSize={20} />
          <Bar dataKey="sp_added" stackId="a" fill="#808080" radius={[10, 10, 0, 0]} barSize={20} />
          <Bar dataKey="sp_completed" fill="#404040" radius={[10, 10, 0, 0]} barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}