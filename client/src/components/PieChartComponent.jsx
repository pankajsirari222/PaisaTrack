import React from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const PieChartComponent = () => {
  const data = [
    { name: 'Stocks', value: 5000 },
    { name: 'Bonds', value: 3000 },
    { name: 'Real Estate', value: 2000 },
    { name: 'Cash', value: 1000 },
  ];

  // Array of colors corresponding to each data item
  const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff0000'];

  return (
    
    <ResponsiveContainer>
      <PieChart>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
