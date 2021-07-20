import React from 'react';

import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Fallout 3', 'Watch Dogs', 'Papers, Please'],
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

const MostPlayedChart = () => {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default MostPlayedChart;
