import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = () => {
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/chart-data');
        setChartData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching chart data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Prepare the data for the chart
  const data = {
    labels: chartData.map(item => new Date(item.createdAt).toLocaleDateString()),
    datasets: [
      {
        label: 'Energy Consumption (kWh)',
        data: chartData.map(item => item.total_kwh), 
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      }
    ]
  };

  return (
    <div>
      {isLoading ? <div>Loading...</div> : <Line data={data} />}
    </div>
  );
};

export default Chart;
