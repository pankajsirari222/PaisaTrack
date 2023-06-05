import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineChartComponent = () => {
  const data = [
    { month: 'Jan', marketTrend: 5000, portfolioValue: 3000 },
    { month: 'Feb', marketTrend: 6000, portfolioValue: 4000 },
    { month: 'Mar', marketTrend: 5500, portfolioValue: 3500 },
    { month: 'Apr', marketTrend: 7000, portfolioValue: 4500 },
    { month: 'May', marketTrend: 4500, portfolioValue: 2000 },
    { month: 'Jun', marketTrend: 5500, portfolioValue: 3800 },
    { month: 'Jul', marketTrend: 6500, portfolioValue: 4200 },
    // Add more data points as needed
  ];

  return (
    <div className='w-full h-3/4 p-2'>

    <ResponsiveContainer>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#FFF" />
        <XAxis dataKey="month" stroke="#FFF" />
        <YAxis stroke="#FFF" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="marketTrend" stroke="#8884d8" strokeWidth={2} name="Market Trend" />
        <Line type="monotone" dataKey="portfolioValue" stroke="#82ca9d" strokeWidth={2} name="Portfolio Value" />
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
