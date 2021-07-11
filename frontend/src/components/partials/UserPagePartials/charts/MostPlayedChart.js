import React from 'react';

import { Bar } from 'react-chartjs-2';

const data = {
  labels: [
    'Totalwar Warhammer 2',
    'Fallout 3',
    'Papers, Please',
    'Stardew Valley',
  ],
  datasets: [
    {
      label: 'Total Hours',
      data: [315, 150, 30, 90],
      backgroundColor: 'rgba(54, 162, 235, 0.4)',
      borderColor: 'rgba(54, 162, 235, 1)',
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
