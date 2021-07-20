import React from 'react';
import { Bar } from 'react-chartjs-2';

const MostPlayedChart = ({ backlog }) => {
  let data = {};

  if (backlog) {
    const d = new Date(backlog.longestInBacklog[0]);
    console.log(d);
    const oneDay = 1000 * 60 * 60 * 24;
    console.log(
      backlog.longestInBacklog.map(
        (item) => (Date.UTC(item.created_on) - Date.now()) / oneDay
      )
    );
    data = {
      labels: backlog.longestInBacklog.map((item) => item.name),
      datasets: [
        {
          label: 'Days in Backlog',
          data: [47, 61, 23],
          backgroundColor: 'rgba(68, 76, 178, 0.4)',
          borderColor: 'rgba(68, 76, 178, 1)',
          borderWidth: 3,
        },
      ],
    };
  }

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default MostPlayedChart;
