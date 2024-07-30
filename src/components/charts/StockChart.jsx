// src/components/StockChart.js
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

ChartJS.register(LineElement, CategoryScale, LinearScale, Tooltip, Legend);
const API_KEY = 'BATS40EGPSXCHJYZ'; // Replace with your API key
const BASE_URL = 'https://www.alphavantage.co/query';

 const fetchStockData = async (symbol) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: 'TIME_SERIES_DAILY', // Example function for daily stock prices
        symbol: symbol,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    throw error;
  }
};

const StockChart = ({ symbol }) => {
  const [chartData, setChartData] = useState(null);
 

  useEffect(() => {
    const getStockData = async () => {
      try {
        const data = await fetchStockData(symbol);
        const timeSeries = data['Time Series (Daily)'];
        const labels = Object.keys(timeSeries).reverse(); // Dates
        const values = labels.map(date => timeSeries[date]['4. close']).reverse(); // Closing prices

        setChartData({
          labels: labels,
          datasets: [
            {
              label: `${symbol} Stock Price`,
              data: values,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    getStockData();
  }, [symbol]);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return <Line data={chartData} />;
};

export default StockChart;
