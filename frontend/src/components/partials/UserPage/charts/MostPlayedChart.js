import React from 'react';

import { Bar } from 'react-chartjs-2';

const MostPlayedChart = ({ mostPlayed }) => {
  let data = {};
  if (mostPlayed) {
    data = {
      labels: mostPlayed.longestPlayed.map((item) => item.name),
      datasets: [
        {
          label: 'Total Hours',
          data: mostPlayed.longestPlayed.map((item) => item.num_hours_played),
          backgroundColor: 'rgba(54, 162, 235, 0.4)',
          borderColor: 'rgba(54, 162, 235, 1)',
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
