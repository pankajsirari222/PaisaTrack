import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const BarGraph = () => {
  const [filter, setFilter] = useState('week'); // State variable to track the selected filter

  // Dummy data for the entire year
  const dummyData = [
    { month: 'Jan', income: 5000, expense: 3000 },
    { month: 'Feb', income: 6000, expense: 4000 },
    { month: 'Mar', income: 5500, expense: 3500 },
    { month: 'Apr', income: 7000, expense: 4500 },
    { month: 'May', income: 4500, expense: 2000 },
    { month: 'Jun', income: 5500, expense: 3800 },
    { month: 'Jul', income: 6500, expense: 4200 },
    { month: 'Aug', income: 5000, expense: 3000 },
    { month: 'Sep', income: 6000, expense: 4000 },
    { month: 'Oct', income: 5500, expense: 3500 },
    { month: 'Nov', income: 7000, expense: 4500 },
    { month: 'Dec', income: 4500, expense: 2000 },
  ];

  // Filter the data based on the selected filter option
  const filterData = () => {
    if (filter === 'week') {
      return dummyData.slice(-7);
    } else if (filter === 'month') {
      return dummyData.slice(-30);
    } else if (filter === 'year') {
      return dummyData;
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="w-full h-3/4 p-2">
      <div className="my-4">
        <select
          value={filter}
          onChange={handleFilterChange}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="week">Past Week</option>
          <option value="month">Past Month</option>
          <option value="year">Past Year</option>
        </select>
      </div>
      <ResponsiveContainer>
        <BarChart data={filterData()}>
          <CartesianGrid strokeDasharray="3 3" stroke="#FFF" />
          <XAxis dataKey="month" stroke="#FFF" />
          <YAxis stroke="#FFF" />
          <Tooltip />
          <Bar dataKey="income" fill="#82ca9d" barSize={20} />
          <Bar dataKey="expense" fill="#ff0000" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph;
