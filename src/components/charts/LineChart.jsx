// LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        
        data: data.values,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
         
        },
      },
      y: {
        title: {
          display: true,
        
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      },
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
